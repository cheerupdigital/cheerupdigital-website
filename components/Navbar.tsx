"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Magnetic from "./ui/Magnetic";
import { nav } from "@/lib/data";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[80] transition-all duration-500 ${
          scrolled
            ? "border-b border-line bg-base/70 py-3 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent py-5"
        }`}
      >
        <nav className="container-x flex items-center justify-between">
          <Magnetic strength={0.2}>
            <Link href="/" data-cursor className="flex items-center" aria-label="Cheerup Digital — home">
              <Image
                src="/cheerup-logo-v2.png"
                alt="Cheerup Digital"
                width={1740}
                height={431}
                priority
                className="h-9 w-auto md:h-10"
              />
            </Link>
          </Magnetic>

          <div className="hidden items-center gap-8 lg:flex">
            {nav.map((l) => {
              const active =
                l.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className="group relative text-sm font-medium"
                >
                  <span className={active ? "text-ink" : "text-muted transition-colors group-hover:text-ink"}>
                    {l.label}
                  </span>
                  <span
                    className={`absolute -bottom-1.5 left-0 h-px bg-gold transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:block">
            <Magnetic strength={0.25}>
              <Link
                href="/contact"
                data-cursor
                className="group inline-flex items-center gap-2 rounded-full bg-gold-gradient px-5 py-2.5 text-sm font-semibold text-night shadow-gold transition-all duration-300 hover:brightness-110"
              >
                Book Consultation
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Magnetic>
          </div>

          <button
            onClick={() => setOpen((o) => !o)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
            aria-label="Toggle menu"
            data-cursor
          >
            <span
              className={`h-[2px] w-6 bg-ink transition-all ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[2px] w-6 bg-ink transition-all ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-[2px] w-6 bg-ink transition-all ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[79] flex flex-col justify-center gap-1 bg-surface px-8 lg:hidden"
          >
            <div className="pointer-events-none absolute inset-0 bg-radial-faint" />
            {nav.map((l, i) => (
              <motion.div
                key={l.href}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 + i * 0.06 }}
              >
                <Link
                  href={l.href}
                  className="block py-2 font-display text-4xl font-semibold tracking-tight text-ink"
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="mt-8"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-6 py-3.5 font-semibold text-night"
              >
                Book Consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
