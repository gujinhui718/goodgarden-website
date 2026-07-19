import { NextResponse } from "next/server";

type ContactPayload = {
  name?: unknown;
  company?: unknown;
  email?: unknown;
  interest?: unknown;
  message?: unknown;
};

const asText = (value: unknown) => (typeof value === "string" ? value.trim() : "");

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const name = asText(body.name);
  const email = asText(body.email);
  const interest = asText(body.interest);
  const company = asText(body.company);
  const message = asText(body.message);

  if (!name || !email || !interest || !message || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ error: "Please complete the required fields." }, { status: 400 });
  }
  if ([name, email, company, interest, message].some((value) => value.length > 3000)) {
    return NextResponse.json({ error: "Input too long." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_TO_EMAIL;
  if (apiKey && recipient) {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "GOOD GARDEN FOOD <onboarding@resend.dev>",
        to: [recipient],
        reply_to: email,
        subject: `New website enquiry: ${interest}`,
        text: `Name: ${name}\nCompany: ${company || "—"}\nEmail: ${email}\nInterest: ${interest}\n\n${message}`,
      }),
    });
    if (!response.ok) {
      return NextResponse.json({ error: "Unable to deliver message." }, { status: 502 });
    }
  } else {
    console.info("Contact form received", {
      name,
      email,
      interest,
      company,
      messageLength: message.length,
    });
  }

  return NextResponse.json({ ok: true });
}
