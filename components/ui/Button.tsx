"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import Magnetic from "./Magnetic";

type Variant = "gold" | "outline" | "ghost";

const styles: Record<Variant, string> = {
  gold: "bg-gold-gradient text-night font-semibold shadow-gold hover:brightness-110",
  outline:
    "bg-transparent text-ink border border-line hover:border-gold/50 hover:bg-white/[0.04]",
  ghost: "bg-white/[0.04] text-ink border border-line hover:bg-white/[0.08]",
};

export default function Button({
  children,
  href,
  onClick,
  variant = "gold",
  className = "",
  type = "button",
  icon = true,
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
  icon?: boolean;
}) {
  const cls = `group relative inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-sm tracking-tight transition-all duration-300 ${styles[variant]} ${className}`;

  const inner = (
    <span className="relative z-10 flex items-center gap-2.5">
      {children}
      {icon && (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          strokeWidth={2.25}
        />
      )}
    </span>
  );

  if (href) {
    return (
      <Magnetic strength={0.3}>
        <Link href={href} className={cls} data-cursor>
          {inner}
        </Link>
      </Magnetic>
    );
  }

  return (
    <Magnetic strength={0.3}>
      <button type={type} onClick={onClick} className={cls} data-cursor>
        {inner}
      </button>
    </Magnetic>
  );
}
