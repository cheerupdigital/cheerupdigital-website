"use client";

import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import Marquee from "./Marquee";
import Button from "./ui/Button";
import { nav } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden border-t border-line bg-surface-2">
      <div className="pointer-events-none absolute inset-0 bg-radial-faint" />

      <div className="relative border-b border-line py-10">
        <Marquee
          items={[
            "LET'S GROW TOGETHER",
            "MORE CONSULTATIONS",
            "STRONGER DOCTOR BRANDS",
            "PREDICTABLE GROWTH",
          ].map((t) => (
            <span
              key={t}
              className="font-display text-3xl font-semibold tracking-tight text-ink/15 md:text-5xl"
            >
              {t}
            </span>
          ))}
        />
      </div>

      <div className="container-x relative py-20">
        <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <h3 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
              Ready to grow your{" "}
              <span className="text-gradient-gold">clinic?</span>
            </h3>
            <p className="mt-6 max-w-md text-muted">
              We partner with a limited number of clinics each quarter so every
              account gets obsessive attention. Let&apos;s see if we&apos;re a
              fit.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="gold">
                Book Growth Consultation
              </Button>
            </div>
          </div>

          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Navigate
            </p>
            <ul className="space-y-3">
              {nav.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-muted transition-colors hover:text-ink"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Connect
            </p>
            <ul className="space-y-3 text-muted">
              <li>
                <a
                  href="mailto:info@cheerupdigital.com"
                  className="inline-flex items-center gap-2 transition-colors hover:text-ink"
                >
                  <Mail className="h-4 w-4 text-gold" />
                  info@cheerupdigital.com
                </a>
              </li>
              <li className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gold" />
                Saket, New Delhi
              </li>
              {["Instagram", "LinkedIn", "YouTube"].map((s) => (
                <li key={s}>
                  <a href="#" className="transition-colors hover:text-ink">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 text-sm text-muted md:flex-row md:items-center">
          <p>© {year} Cheerup Digital. Let&apos;s grow together.</p>
          <p>Growth partner for skin · hair · aesthetic clinics</p>
        </div>
      </div>
    </footer>
  );
}
