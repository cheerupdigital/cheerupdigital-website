import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const SITE_URL = "https://cheerup.digital";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Cheerup Digital — Growth Partner for Skin, Hair & Aesthetic Clinics",
    template: "%s — Cheerup Digital",
  },
  description:
    "Cheerup Digital is the growth partner for skin, hair and aesthetic clinics. We generate more consultations, build doctor authority and create predictable patient acquisition systems.",
  keywords: [
    "clinic growth consultancy",
    "aesthetic clinic marketing",
    "skin clinic patient acquisition",
    "hair clinic lead generation",
    "doctor personal branding",
    "AI growth systems for clinics",
    "medical marketing partner",
  ],
  authors: [{ name: "Cheerup Digital" }],
  creator: "Cheerup Digital",
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Cheerup Digital — Growth Partner for Aesthetic Clinics",
    description:
      "More consultations. Stronger doctor brands. Predictable patient acquisition systems for skin, hair and aesthetic clinics.",
    siteName: "Cheerup Digital",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cheerup Digital — Growth Partner for Aesthetic Clinics",
    description:
      "Predictable patient acquisition systems for skin, hair and aesthetic clinics.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="bg-base text-ink antialiased">
        <div className="noise" aria-hidden />
        <SmoothScroll>
          <CustomCursor />
          <Navbar />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
