/**
 * POST /api/contact — receives the Anfrage form data and sends an email via Resend.
 *
 * Server route (prerender = false) — requires an adapter (see astro.config.mjs).
 * Settings are read from environment variables (.env), see .env.example:
 *   RESEND_API_KEY            — Resend API key
 *   CONTACT_FORM_TO_EMAIL     — client's email that receives the requests
 *   CONTACT_FORM_FROM_EMAIL   — sender email (a verified domain in Resend)
 *
 * This endpoint is host-agnostic: it does not depend on Netlify/Vercel Forms.
 */
import type { APIRoute } from "astro";
import { Resend } from "resend";

// This route must run on the server, not be prerendered to a static file.
export const prerender = false;

const SUBJECT = "Neue Anfrage über die Website";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Required field keys (must be non-empty). */
const REQUIRED_FIELDS = [
  "Vorname",
  "Nachname",
  "Email",
  "Anreise",
  "Abreise",
  "Erwachsene",
] as const;

/** Escape user input before placing it into the HTML email. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Small helper to return a JSON response. */
function json(body: Record<string, unknown>, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export const POST: APIRoute = async ({ request }) => {
  // 1. Read configuration from environment.
  const apiKey = import.meta.env.RESEND_API_KEY;
  const toEmail = import.meta.env.CONTACT_FORM_TO_EMAIL;
  const fromEmail = import.meta.env.CONTACT_FORM_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    console.error("Contact form is not configured. Check RESEND_API_KEY, CONTACT_FORM_TO_EMAIL, CONTACT_FORM_FROM_EMAIL.");
    return json({ ok: false, error: "server_not_configured" }, 500);
  }

  // 2. Parse the submitted form data.
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return json({ ok: false, error: "invalid_request" }, 400);
  }

  const get = (key: string) => (form.get(key) ?? "").toString().trim();

  const fields = {
    Vorname: get("Vorname"),
    Nachname: get("Nachname"),
    Email: get("Email"),
    Telefon: get("Telefon"),
    Anreise: get("Anreise"),
    Abreise: get("Abreise"),
    Erwachsene: get("Erwachsene"),
    Kinder: get("Kinder"),
    Nachricht: get("Nachricht"),
  };

  // 3. Validate required fields.
  const missing = REQUIRED_FIELDS.filter((key) => !fields[key]);
  if (missing.length > 0) {
    return json({ ok: false, error: "missing_fields", fields: missing }, 400);
  }

  // 4. Validate email format.
  if (!EMAIL_RE.test(fields.Email)) {
    return json({ ok: false, error: "invalid_email" }, 400);
  }

  // 5. Validate the Datenschutz (privacy) checkbox is checked.
  const datenschutz = form.get("Datenschutz");
  if (!datenschutz) {
    return json({ ok: false, error: "datenschutz_required" }, 400);
  }

  // 6. Build the German HTML email with all submitted data.
  const rows: Array<[string, string]> = [
    ["Vorname", fields.Vorname],
    ["Nachname", fields.Nachname],
    ["Email", fields.Email],
    ["Telefon", fields.Telefon || "—"],
    ["Anreise", fields.Anreise],
    ["Abreise", fields.Abreise],
    ["Anzahl Erwachsene", fields.Erwachsene],
    ["Anzahl Kinder", fields.Kinder || "0"],
    ["Nachricht", fields.Nachricht || "—"],
  ];

  const html = `
    <h2>${SUBJECT}</h2>
    <table style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px;">
      ${rows
        .map(
          ([label, value]) => `
        <tr>
          <td style="padding:6px 12px;border:1px solid #e0e0e0;font-weight:bold;background:#f7f7f7;">${escapeHtml(label)}</td>
          <td style="padding:6px 12px;border:1px solid #e0e0e0;">${escapeHtml(value).replace(/\n/g, "<br>")}</td>
        </tr>`,
        )
        .join("")}
    </table>
  `;

  // 7. Send the email via Resend.
  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: SUBJECT,
      html,
      replyTo: fields.Email, // so the client can reply directly to the guest
    });

    if (error) {
      console.error("Resend error:", error);
      return json({ ok: false, error: "send_failed" }, 502);
    }
  } catch (err) {
    console.error("Unexpected error sending email:", err);
    return json({ ok: false, error: "send_failed" }, 502);
  }

  // 8. Success.
  return json({ ok: true }, 200);
};

/** Reject any non-POST method. */
export const ALL: APIRoute = () =>
  json({ ok: false, error: "method_not_allowed" }, 405);
