import type { Metadata } from "next";
import { Mail, Phone, MessageSquare, CalendarClock, ShieldCheck } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Book a Growth Consultation",
  description:
    "Book a free growth consultation with Cheerup Digital. We'll map your funnel, find the leaks and show you where your next 50 consultations can come from.",
};

const points = [
  {
    icon: MessageSquare,
    title: "Funnel teardown",
    body: "We review your current acquisition journey and pinpoint exactly where consultations are leaking.",
  },
  {
    icon: CalendarClock,
    title: "A 90-day growth plan",
    body: "Walk away with a clear, prioritised roadmap — whether or not we work together.",
  },
  {
    icon: ShieldCheck,
    title: "No-pressure, ever",
    body: "This is a strategy call, not a sales pitch. We only partner with clinics we can genuinely grow.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Let's grow together"
        title="Book your growth"
        accent="consultation."
        subtitle="Tell us about your clinic. We'll come prepared with a clear view of where your next wave of consultations can come from."
      />

      <section className="relative pb-28">
        <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Reveal>
              <h2 className="font-display text-2xl font-semibold tracking-tight">
                What happens on the call
              </h2>
            </Reveal>
            <div className="mt-8 space-y-6">
              {points.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.1}>
                  <div className="flex gap-4">
                    <div className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl border border-line bg-white/[0.03] text-gold">
                      <p.icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold tracking-tight">
                        {p.title}
                      </h3>
                      <p className="mt-1 text-[15px] leading-relaxed text-muted">
                        {p.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-line bg-white/[0.02] p-6">
                  <p className="text-sm text-muted">Prefer email?</p>
                  <a
                    href="mailto:info@cheerupdigital.com"
                    className="mt-1 inline-flex items-center gap-2 font-display text-base font-semibold tracking-tight text-gold"
                  >
                    <Mail className="h-4 w-4" /> info@cheerupdigital.com
                  </a>
                </div>
                <div className="rounded-2xl border border-line bg-white/[0.02] p-6">
                  <p className="text-sm text-muted">Prefer to call?</p>
                  <a
                    href="tel:+918015566509"
                    className="mt-1 inline-flex items-center gap-2 font-display text-base font-semibold tracking-tight text-gold"
                  >
                    <Phone className="h-4 w-4" /> +91 80155 66509
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
