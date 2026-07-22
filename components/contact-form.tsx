"use client";

import { FormEvent, useState } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type FormCopy = {
  name: string;
  company: string;
  country: string;
  buyerType: string;
  phone: string;
  email: string;
  volume: string;
  carton: string;
  startDate: string;
  message: string;
  select: string;
  buyerOptions: readonly string[];
  cartonOptions: readonly string[];
  send: string;
  sending: string;
  success: string;
  error: string;
  privacy: string;
  website: string;
};

export default function ContactForm({ copy }: { copy: FormCopy }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form));

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("Request failed");
      form.reset();
      setStatus("success");
      window.gtag?.("event", "generate_lead", { form_name: "wholesale_banana_enquiry" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[18px] bg-white p-5 shadow-[0_24px_70px_rgba(23,26,43,.08)] sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={copy.name} name="name" autoComplete="name" required />
        <Field label={copy.company} name="company" autoComplete="organization" required />
        <Field label={copy.country} name="country" autoComplete="country-name" required />
        <SelectField label={copy.buyerType} name="buyerType" placeholder={copy.select} options={copy.buyerOptions} />
        <Field label={copy.phone} name="phone" type="tel" autoComplete="tel" required />
        <Field label={copy.email} name="email" type="email" autoComplete="email" required />
        <Field label={copy.volume} name="volume" required />
        <SelectField label={copy.carton} name="carton" placeholder={copy.select} options={copy.cartonOptions} />
        <Field label={copy.startDate} name="startDate" type="date" />
      </div>

      <label className="field-label mt-5">
        {copy.message}
        <textarea name="message" rows={5} maxLength={3000} className="field resize-none" />
      </label>

      <label className="sr-only" aria-hidden="true">
        {copy.website}
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button disabled={status === "sending"} className="button disabled:cursor-not-allowed disabled:opacity-60">
          {status === "sending" ? copy.sending : copy.send}
        </button>
        {status === "success" && <p role="status" className="text-sm font-medium text-[#2f3188]">{copy.success}</p>}
        {status === "error" && <p role="alert" className="max-w-md text-sm font-medium text-red-700">{copy.error}</p>}
      </div>
      <p className="mt-4 text-xs leading-5 text-[#8b8d94]">{copy.privacy}</p>
    </form>
  );
}

function Field({ label, name, type = "text", autoComplete, required = false }: { label: string; name: string; type?: string; autoComplete?: string; required?: boolean }) {
  return <label className="field-label">
    {label}
    <input name={name} type={type} autoComplete={autoComplete} required={required} maxLength={300} className="field" />
  </label>;
}

function SelectField({ label, name, placeholder, options }: { label: string; name: string; placeholder: string; options: readonly string[] }) {
  return <label className="field-label">
    {label}
    <select name={name} required defaultValue="" className="field">
      <option value="" disabled>{placeholder}</option>
      {options.map((option) => <option key={option} value={option}>{option}</option>)}
    </select>
  </label>;
}
