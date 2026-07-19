"use client";

import { FormEvent, useState } from "react";

type FormCopy = { name: string; company: string; email: string; interest: string; message: string; select: string; options: readonly string[]; send: string; sending: string; success: string; error: string };

export default function ContactForm({ copy }: { copy: FormCopy }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form));
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      if (!response.ok) throw new Error("Request failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] bg-white p-6 shadow-[0_28px_80px_rgba(0,0,0,.16)] sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={copy.name} name="name" required />
        <Field label={copy.company} name="company" />
        <Field label={copy.email} name="email" type="email" required />
        <label className="field-label">{copy.interest}<select name="interest" required defaultValue="" className="field"><option value="" disabled>{copy.select}</option>{copy.options.map((option) => <option key={option} value={option}>{option}</option>)}</select></label>
      </div>
      <label className="field-label mt-5">{copy.message}<textarea name="message" rows={5} required className="field resize-none" /></label>
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button disabled={status === "sending"} className="button disabled:cursor-not-allowed disabled:opacity-60">{status === "sending" ? copy.sending : copy.send}</button>
        {status === "success" && <p role="status" className="text-sm font-medium text-[#2f3188]">{copy.success}</p>}
        {status === "error" && <p role="alert" className="text-sm font-medium text-red-700">{copy.error}</p>}
      </div>
    </form>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return <label className="field-label">{label}<input name={name} type={type} required={required} className="field" /></label>;
}
