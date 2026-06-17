import Button from "@/components/ui/Button";
import Aurora from "@/components/ui/Aurora";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 text-center">
      <Aurora intensity="subtle" />
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
      <div className="relative z-10">
        <h1 className="font-display text-[clamp(5rem,18vw,12rem)] font-bold leading-none text-gradient-gold">
          404
        </h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-muted">
          This page wandered off the growth map. Let&apos;s get you back to
          something that converts.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/" variant="gold">
            Back home
          </Button>
        </div>
      </div>
    </section>
  );
}
