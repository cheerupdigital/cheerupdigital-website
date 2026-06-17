import type { Metadata } from "next";
import {
  Search,
  Megaphone,
  LineChart,
  LayoutTemplate,
  Mic,
  Youtube,
  BadgeCheck,
  Share2,
  Database,
  MessageCircle,
  Bot,
  Route,
  Video,
  Camera,
  Palette,
  Sparkles,
  Check,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/ui/Reveal";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Patient acquisition, authority building, growth automation and creative production — the full-stack growth services Cheerup Digital delivers for skin, hair and aesthetic clinics.",
};

const groups = [
  {
    id: "patient-acquisition",
    eyebrow: "01 — Acquisition",
    title: "Patient Acquisition",
    description:
      "A reliable, measurable flow of high-intent consultations. We engineer every campaign around treatment economics and optimise to booked consultations, not vanity clicks.",
    items: [
      { icon: Search, title: "Google Ads", body: "Capture high-intent search demand the moment patients are looking." },
      { icon: Megaphone, title: "Meta Ads", body: "Offer-driven campaigns that turn scroll into booked consultations." },
      { icon: LineChart, title: "SEO", body: "Own treatment and condition searches with compounding organic visibility." },
      { icon: LayoutTemplate, title: "Landing Pages", body: "Conversion-first pages engineered to turn clicks into enquiries." },
    ],
  },
  {
    id: "authority-building",
    eyebrow: "02 — Authority",
    title: "Authority Building",
    description:
      "Patients choose clinicians they trust. We make your doctors recognised authorities, so patients arrive pre-sold and ready to book premium treatments.",
    items: [
      { icon: BadgeCheck, title: "Doctor Branding", body: "Position your clinicians as the obvious, trusted choice." },
      { icon: Mic, title: "Podcast Production", body: "Long-form authority content that builds deep trust at scale." },
      { icon: Share2, title: "Social Media", body: "A feed that educates, reassures and converts followers to patients." },
      { icon: Youtube, title: "YouTube Growth", body: "Evergreen video that ranks, educates and pre-sells consultations." },
    ],
  },
  {
    id: "automation",
    eyebrow: "03 — Automation",
    title: "Growth Automation",
    description:
      "Speed-to-lead decides who books. Our CRM, WhatsApp and AI workflows respond in seconds, nurture automatically and give you one source of truth.",
    items: [
      { icon: Database, title: "CRM", body: "A single pipeline from enquiry to treatment, fully tracked." },
      { icon: MessageCircle, title: "WhatsApp Automation", body: "Instant, personalised follow-up that recovers fading leads." },
      { icon: Bot, title: "AI Chatbots", body: "24/7 agents that answer questions and capture consultations." },
      { icon: Route, title: "Lead Routing", body: "Score and route every enquiry to the right place, instantly." },
    ],
  },
  {
    id: "creative",
    eyebrow: "04 — Creative",
    title: "Creative Production",
    description:
      "Look as premium as your results. Cinematic video, refined photography and design systems that justify premium pricing and earn instant trust.",
    items: [
      { icon: Video, title: "Video Production", body: "Cinematic clinic and treatment films that build desire." },
      { icon: Camera, title: "Photography", body: "Editorial-grade imagery that elevates your brand." },
      { icon: Palette, title: "Design", body: "Cohesive brand systems across every touchpoint." },
      { icon: Sparkles, title: "Brand Systems", body: "Identity, tone and guidelines that scale with you." },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Everything your clinic needs"
        accent="to grow predictably."
        subtitle="Four connected capabilities that move a patient from first impression to loyal advocate — delivered by specialists who only work with clinics."
      />

      {groups.map((group, gi) => (
        <section
          key={group.id}
          id={group.id}
          className={`relative scroll-mt-24 py-20 md:py-24 ${
            gi % 2 === 1 ? "border-y border-line bg-surface/40" : ""
          }`}
        >
          <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-gold">
                  {group.eyebrow}
                </span>
                <h2 className="mt-4 font-display text-h2 font-semibold tracking-tight text-gradient-soft">
                  {group.title}
                </h2>
                <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
                  {group.description}
                </p>
              </div>
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-2">
              {group.items.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.08} direction="up">
                  <div className="card card-hover group h-full p-7">
                    <div className="grid h-12 w-12 place-items-center rounded-xl border border-line bg-white/[0.03] text-gold transition-colors group-hover:border-gold/40">
                      <item.icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <h3 className="mt-5 flex items-center gap-2 font-display text-lg font-semibold tracking-tight">
                      <Check className="h-4 w-4 text-gold" strokeWidth={3} />
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted">
                      {item.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CTA />
    </>
  );
}
