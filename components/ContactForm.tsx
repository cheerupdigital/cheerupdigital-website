"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";

type Fields = {
  name: string;
  clinic: string;
  email: string;
  phone: string;
  website: string;
  budget: string;
  challenges: string;
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const initial: Fields = {
  name: "",
  clinic: "",
  email: "",
  phone: "",
  website: "",
  budget: "",
  challenges: "",
  message: "",
};

const budgets = [
  "Under ₹1L / month",
  "₹1L – ₹3L / month",
  "₹3L – ₹7L / month",
  "₹7L – ₹15L / month",
  "₹15L+ / month",
];

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRe = /^[+\d][\d\s()-]{6,}$/;

function validate(values: Fields): Errors {
  const e: Errors = {};
  if (!values.name.trim()) e.name = "Please enter your name.";
  if (!values.clinic.trim()) e.clinic = "Please enter your clinic name.";
  if (!values.email.trim()) e.email = "Please enter your email.";
  else if (!emailRe.test(values.email)) e.email = "Enter a valid email address.";
  if (!values.phone.trim()) e.phone = "Please enter a phone number.";
  else if (!phoneRe.test(values.phone)) e.phone = "Enter a valid phone number.";
  if (values.website && !/\./.test(values.website))
    e.website = "Enter a valid website URL.";
  if (!values.budget) e.budget = "Please select a budget range.";
  if (!values.message.trim()) e.message = "Tell us a little about your goals.";
  return e;
}

function Field({
  label,
  name,
  value,
  error,
  onChange,
  type = "text",
  textarea = false,
  optional = false,
  placeholder,
}: {
  label: string;
  name: keyof Fields;
  value: string;
  error?: string;
  onChange: (n: keyof Fields, v: string) => void;
  type?: string;
  textarea?: boolean;
  optional?: boolean;
  placeholder?: string;
}) {
  const base =
    "w-full rounded-xl border bg-white/[0.03] px-4 py-3.5 text-[15px] text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-gold/50 focus:bg-white/[0.05]";
  const border = error ? "border-red-400/60" : "border-line";

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-medium text-ink/80">
        {label}
        {optional && <span className="ml-1 text-muted">(optional)</span>}
      </label>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          rows={4}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(name, e.target.value)}
          className={`${base} ${border} resize-none`}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(name, e.target.value)}
          className={`${base} ${border}`}
        />
      )}
      {error && <span className="text-xs text-red-400">{error}</span>}
    </div>
  );
}

export default function ContactForm() {
  const [values, setValues] = useState<Fields>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const onChange = (name: keyof Fields, v: string) => {
    setValues((prev) => ({ ...prev, [name]: v }));
    setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const found = validate(values);
    if (Object.keys(found).length) {
      setErrors(found);
      return;
    }
    // In production this would POST to an API route / CRM.
    setSent(true);
  };

  return (
    <div className="glass p-6 md:p-9">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center py-12 text-center"
          >
            <div className="grid h-16 w-16 place-items-center rounded-full bg-gold-gradient text-night shadow-gold">
              <Check className="h-7 w-7" strokeWidth={3} />
            </div>
            <h3 className="mt-6 font-display text-3xl font-semibold tracking-tight">
              Request received.
            </h3>
            <p className="mt-3 max-w-md text-muted">
              Thanks, {values.name.split(" ")[0] || "there"}. A growth strategist
              will reach out within one business day to schedule your
              consultation.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-5"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Your name" name="name" value={values.name} error={errors.name} onChange={onChange} placeholder="Dr. Jane Doe" />
              <Field label="Clinic name" name="clinic" value={values.clinic} error={errors.clinic} onChange={onChange} placeholder="Lumière Skin Clinic" />
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Email" name="email" type="email" value={values.email} error={errors.email} onChange={onChange} placeholder="you@clinic.com" />
              <Field label="Phone" name="phone" type="tel" value={values.phone} error={errors.phone} onChange={onChange} placeholder="+91 98765 43210" />
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Website" name="website" value={values.website} error={errors.website} onChange={onChange} optional placeholder="clinic.com" />
              <div className="flex flex-col gap-2">
                <label htmlFor="budget" className="text-sm font-medium text-ink/80">
                  Monthly marketing budget
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={values.budget}
                  onChange={(e) => onChange("budget", e.target.value)}
                  className={`w-full rounded-xl border bg-white/[0.03] px-4 py-3.5 text-[15px] outline-none transition-colors focus:border-gold/50 focus:bg-white/[0.05] ${
                    errors.budget ? "border-red-400/60" : "border-line"
                  } ${values.budget ? "text-ink" : "text-muted/60"}`}
                >
                  <option value="" disabled className="bg-surface">
                    Select a range
                  </option>
                  {budgets.map((b) => (
                    <option key={b} value={b} className="bg-surface text-ink">
                      {b}
                    </option>
                  ))}
                </select>
                {errors.budget && (
                  <span className="text-xs text-red-400">{errors.budget}</span>
                )}
              </div>
            </div>
            <Field label="Current challenges" name="challenges" value={values.challenges} error={errors.challenges} onChange={onChange} optional placeholder="e.g. inconsistent leads, low consult-to-treatment rate" />
            <Field label="Tell us about your goals" name="message" value={values.message} error={errors.message} onChange={onChange} textarea placeholder="Where do you want your clinic to be 12 months from now?" />

            <button
              type="submit"
              data-cursor
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-gold-gradient px-7 py-4 text-sm font-semibold text-night shadow-gold transition-all duration-300 hover:brightness-110 md:w-auto"
            >
              Request my consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <p className="text-xs text-muted">
              We respond within one business day. Your details stay private.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
