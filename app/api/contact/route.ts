import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "info@cheerupdigital.com";
// Until your domain is verified in Resend, use "onboarding@resend.dev".
// After verifying cheerupdigital.com, set CONTACT_FROM_EMAIL to e.g. "Cheerup Digital <leads@cheerupdigital.com>".
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || "Cheerup Digital <onboarding@resend.dev>";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRe = /^[+\d][\d\s()-]{6,}$/;

type Body = {
  name?: string;
  clinic?: string;
  email?: string;
  phone?: string;
  website?: string;
  budget?: string;
  challenges?: string;
  message?: string;
};

function esc(s = "") {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(req: Request) {
  let data: Body;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const name = (data.name || "").trim();
  const clinic = (data.clinic || "").trim();
  const email = (data.email || "").trim();
  const phone = (data.phone || "").trim();
  const website = (data.website || "").trim();
  const budget = (data.budget || "").trim();
  const challenges = (data.challenges || "").trim();
  const message = (data.message || "").trim();

  // Server-side validation (mirrors the form)
  if (!name || !clinic || !message) {
    return NextResponse.json({ ok: false, error: "Please fill in the required fields." }, { status: 400 });
  }
  if (!emailRe.test(email)) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email." }, { status: 400 });
  }
  if (!phoneRe.test(phone)) {
    return NextResponse.json({ ok: false, error: "Please enter a valid phone number." }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json(
      { ok: false, error: "Email is not configured yet. Please try again later." },
      { status: 500 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const rows: [string, string][] = [
    ["Name", name],
    ["Clinic", clinic],
    ["Email", email],
    ["Phone", phone],
    ["Website", website || "—"],
    ["Monthly budget", budget || "—"],
    ["Current challenges", challenges || "—"],
  ];

  const html = `
    <div style="font-family:Inter,Arial,sans-serif;max-width:560px;margin:0 auto;color:#111">
      <h2 style="margin:0 0 4px">New consultation request</h2>
      <p style="margin:0 0 20px;color:#666">From the Cheerup Digital website</p>
      <table style="width:100%;border-collapse:collapse">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="padding:8px 12px;border:1px solid #eee;background:#fafafa;font-weight:600;width:170px">${k}</td><td style="padding:8px 12px;border:1px solid #eee">${esc(v)}</td></tr>`
          )
          .join("")}
      </table>
      <h3 style="margin:24px 0 6px">Message</h3>
      <p style="white-space:pre-wrap;line-height:1.6">${esc(message)}</p>
    </div>`;

  const text = [
    "New consultation request — Cheerup Digital",
    ...rows.map(([k, v]) => `${k}: ${v}`),
    "",
    `Message:\n${message}`,
  ].join("\n");

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New lead: ${name} — ${clinic}`,
      html,
      text,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ ok: false, error: "Could not send. Please try again." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ ok: false, error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
