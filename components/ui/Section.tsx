import { ReactNode } from "react";

export default function Section({
  children,
  id,
  className = "",
  full = false,
}: {
  children: ReactNode;
  id?: string;
  className?: string;
  full?: boolean;
}) {
  return (
    <section
      id={id}
      className={`relative py-20 md:py-28 lg:py-36 ${className}`}
    >
      <div className={full ? "w-full" : "container-x"}>{children}</div>
    </section>
  );
}
