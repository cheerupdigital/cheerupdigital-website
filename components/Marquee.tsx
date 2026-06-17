"use client";

import { ReactNode } from "react";

export default function Marquee({
  items,
  reverse = false,
  className = "",
  separator = "✦",
}: {
  items: ReactNode[];
  reverse?: boolean;
  className?: string;
  separator?: string;
}) {
  const row = (
    <div className="flex shrink-0 items-center gap-10 pr-10">
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-10">
          <span>{item}</span>
          <span className="text-gold/50">{separator}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className={`flex w-full overflow-hidden ${className}`}>
      <div
        className={`flex w-max ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {row}
        {row}
      </div>
    </div>
  );
}
