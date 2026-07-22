import { NextResponse } from "next/server";

type ContactPayload = {
  name?: unknown;
  company?: unknown;
  country?: unknown;
  buyerType?: unknown;
  phone?: unknown;
  email?: unknown;
  volume?: unknown;
  carton?: unknown;
  startDate?: unknown;
  message?: unknown;
  website?: unknown;
};

const asText = (value: unknown) => (typeof value === "string" ? value.trim() : "");

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  if (asText(body.website)) {
    return NextResponse.json({ ok: true });
  }

  const fields = {
    name: asText(body.name),
    company: asText(body.company),
    country: asText(body.country),
    buyerType: asText(body.buyerType),
    phone: asText(body.phone),
    email: asText(body.email),
    volume: asText(body.volume),
    carton: asText(body.carton),
    startDate: asText(body.startDate),
    message: asText(body.message),
  };

  const required = [fields.name, fields.company, fields.country, fields.buyerType, fields.phone, fields.email, fields.volume, fields.carton];
  if (required.some((value) => !value) || !/^\S+@\S+\.\S+$/.test(fields.email)) {
    return NextResponse.json({ error: "Please complete the required fields." }, { status: 400 });
  }
  if (Object.values(fields).some((value) => value.length > 3000)) {
    return NextResponse.json({ error: "Input too long." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_TO_EMAIL;
  const sender = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !recipient || !sender) {
    return NextResponse.json({ error: "Contact delivery is not configured." }, { status: 503 });
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `GOOD GARDEN Website <${sender}>`,
      to: [recipient],
      reply_to: fields.email,
      subject: `Wholesale banana enquiry — ${fields.company} — ${fields.country}`,
      text: [
        `Name: ${fields.name}`,
        `Company: ${fields.company}`,
        `Country / destination: ${fields.country}`,
        `Buyer type: ${fields.buyerType}`,
        `Phone / WhatsApp: ${fields.phone}`,
        `Email: ${fields.email}`,
        `Expected monthly volume: ${fields.volume}`,
        `Carton preference: ${fields.carton}`,
        `Preferred start date: ${fields.startDate || "Not specified"}`,
        "",
        fields.message || "No additional requirements provided.",
      ].join("\n"),
    }),
  });

  if (!response.ok) {
    return NextResponse.json({ error: "Unable to deliver message." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
