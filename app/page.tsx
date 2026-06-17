import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Problem from "@/components/sections/Problem";
import Framework from "@/components/sections/Framework";
import Services from "@/components/sections/Services";
import AIEngine from "@/components/sections/AIEngine";
import CaseStudyPreview from "@/components/sections/CaseStudyPreview";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Problem />
      <Framework />
      <Services />
      <AIEngine />
      <CaseStudyPreview />
      <Testimonials />
      <CTA />
    </>
  );
}
