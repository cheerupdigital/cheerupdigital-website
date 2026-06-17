/**
 * Central content source for Cheerup Digital.
 * Keeping copy + structured data here keeps pages declarative and easy to extend.
 */

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const stats = [
  { value: 8, suffix: "+", label: "Years experience" },
  { value: 500, suffix: "+", label: "Campaigns managed" },
  { value: 240, suffix: "K+", label: "Leads generated" },
  { value: 40, prefix: "₹", suffix: "Cr+", label: "Revenue influenced" },
];

export const problems = [
  {
    title: "Empty consultation calendars",
    body: "Marketing spend goes out, but qualified consultations don't reliably come back in. Growth feels like a gamble, not a system.",
  },
  {
    title: "Leads that never convert",
    body: "Forms get filled, calls get missed, follow-ups slip. Without tracking and automation, hard-won leads quietly leak away.",
  },
  {
    title: "An invisible doctor brand",
    body: "Patients choose clinics they trust. When the doctor has no visible authority online, every consult starts from zero.",
  },
  {
    title: "No predictable pipeline",
    body: "Revenue swings month to month. There's no clear line of sight from spend to consultations to treatments booked.",
  },
  {
    title: "Generalist agencies",
    body: "Vendors who've never run a clinic apply e-commerce playbooks to healthcare — and wonder why the funnel breaks.",
  },
  {
    title: "Manual, time-draining ops",
    body: "Front desk drowning in DMs and forms. Growth stalls because the team can't scale conversations by hand.",
  },
];

export const framework = [
  {
    step: "01",
    name: "Attract",
    summary:
      "Put your clinic in front of high-intent patients actively searching for the treatments you offer.",
    items: ["Google Ads", "Meta Ads", "SEO", "Content Marketing"],
  },
  {
    step: "02",
    name: "Convert",
    summary:
      "Turn attention into booked consultations with frictionless journeys and zero-leak follow-up.",
    items: ["Landing Pages", "CRM", "WhatsApp Automation", "Lead Tracking"],
  },
  {
    step: "03",
    name: "Scale",
    summary:
      "Compound growth by building doctor authority, retaining patients and automating with AI.",
    items: ["Personal Branding", "Video Marketing", "Patient Retention", "AI Systems"],
  },
];

export const serviceCategories = [
  {
    id: "patient-acquisition",
    title: "Patient Acquisition",
    tagline: "A reliable flow of high-intent consultations",
    description:
      "Performance campaigns engineered around treatment economics — optimised to booked consultations and lifetime value, never vanity clicks.",
    items: ["Google Ads", "Meta Ads", "SEO", "Landing Pages"],
  },
  {
    id: "authority-building",
    title: "Authority Building",
    tagline: "Make your doctors the obvious choice",
    description:
      "We turn clinicians into recognised authorities so patients arrive pre-sold, trusting, and ready to book premium treatments.",
    items: ["Doctor Branding", "Podcast Production", "Social Media", "YouTube Growth"],
  },
  {
    id: "growth-automation",
    title: "Growth Automation",
    tagline: "Never let a lead slip through the cracks",
    description:
      "CRM, WhatsApp and AI workflows that respond in seconds, nurture automatically and give you a single source of truth.",
    items: ["CRM", "WhatsApp Automation", "AI Chatbots", "Lead Routing"],
  },
  {
    id: "creative-production",
    title: "Creative Production",
    tagline: "Look as premium as your results",
    description:
      "Cinematic video, refined photography and design systems that justify premium pricing and earn instant trust.",
    items: ["Video Production", "Photography", "Design", "Brand Systems"],
  },
];

export const aiEngine = [
  {
    title: "AI Lead Qualification",
    body: "Score and route every enquiry by intent so your team spends time only on patients ready to book.",
  },
  {
    title: "AI Chatbots",
    body: "24/7 conversational agents that answer treatment questions and capture consultations while you sleep.",
  },
  {
    title: "AI Content Systems",
    body: "Always-on engines that turn one expert insight into weeks of SEO, social and email content.",
  },
  {
    title: "AI Reporting",
    body: "Live dashboards that translate spend into consultations, revenue and ROAS in plain English.",
  },
  {
    title: "AI Workflow Automation",
    body: "Connected systems that move leads, trigger follow-ups and update your CRM with zero manual work.",
  },
  {
    title: "AI Call Analysis",
    body: "Every consultation call transcribed and scored to reveal exactly why patients convert — or don't.",
  },
];

export const caseStudies = [
  {
    slug: "lumiere-skin",
    client: "Lumière Skin Clinic",
    category: "Skin · Aesthetics",
    location: "Mumbai, IN",
    headline: "From a quiet calendar to a 3-week consultation waitlist",
    challenge:
      "A premium skin clinic with world-class outcomes but inconsistent enquiries and a front desk overwhelmed by unqualified leads.",
    strategy:
      "Rebuilt the acquisition funnel around treatment intent, launched conversion-first landing pages and deployed WhatsApp + CRM automation for instant follow-up.",
    execution: [
      "Restructured Google & Meta campaigns around high-value treatments",
      "Shipped 9 conversion-optimised treatment landing pages",
      "Deployed WhatsApp + CRM automation for sub-60-second follow-up",
      "Built a live dashboard tracking spend → consultation → treatment",
    ],
    metrics: [
      { value: 412, suffix: "%", label: "Consultation growth" },
      { value: 3.8, suffix: "x", label: "Return on ad spend", decimals: 1 },
      { value: 61, suffix: "%", label: "Lower cost per lead" },
    ],
    accent: "#D4AF37",
  },
  {
    slug: "revive-hair",
    client: "Revive Hair Restoration",
    category: "Hair · Transplant",
    location: "Bengaluru, IN",
    headline: "₹9.4Cr in tracked treatment revenue in 12 months",
    challenge:
      "High treatment value but a long consideration cycle meant leads went cold before booking high-ticket procedures.",
    strategy:
      "Built doctor authority through video and YouTube, layered AI lead qualification, and engineered a nurture system that warmed leads to consultation.",
    execution: [
      "Produced a 24-video YouTube authority series with the lead surgeon",
      "Implemented AI lead scoring to prioritise high-intent enquiries",
      "Built a multi-touch nurture sequence across email and WhatsApp",
      "Introduced AI call analysis to lift consult-to-treatment rate",
    ],
    metrics: [
      { value: 9.4, prefix: "₹", suffix: "Cr", label: "Revenue tracked", decimals: 1 },
      { value: 2.4, suffix: "x", label: "Consultation-to-treatment", decimals: 1 },
      { value: 58, suffix: "%", label: "Lower cost per lead" },
    ],
    accent: "#E6C868",
  },
  {
    slug: "serene-aesthetics",
    client: "Serene Aesthetics",
    category: "Aesthetics · Injectables",
    location: "Delhi NCR, IN",
    headline: "#1 ranking for 40+ treatment terms and a sold-out launch",
    challenge:
      "A new injectables vertical with strong margins but zero search visibility and no predictable patient pipeline.",
    strategy:
      "Programmatic treatment-page SEO, an AI content engine and a paid-social offer system that filled the launch calendar in 60 days.",
    execution: [
      "Launched 40+ programmatic treatment & condition landing pages",
      "Built an AI content engine producing weekly SEO and social assets",
      "Designed a limited-launch offer system across paid social",
      "Wired a CRM pipeline with automated booking reminders",
    ],
    metrics: [
      { value: 40, suffix: "+", label: "Page-1 keywords" },
      { value: 287, suffix: "%", label: "Organic traffic" },
      { value: 100, suffix: "%", label: "Launch sell-out" },
    ],
    accent: "#D4AF37",
  },
];

export const services = serviceCategories; // alias for legacy imports

export const testimonials = [
  {
    quote:
      "Cheerup understood our category in a way no generalist agency ever did. Consultations doubled in a single quarter and the pipeline finally feels predictable.",
    name: "Dr. Amara Singh",
    role: "Founder, Lumière Skin Clinic",
  },
  {
    quote:
      "They speak both medicine and growth. The automation alone recovered leads we used to lose every single day.",
    name: "Rohan Mehta",
    role: "Director, Revive Hair Restoration",
  },
  {
    quote:
      "Our doctors are now recognised authorities online. Patients arrive already trusting us — the consult is half-sold before it begins.",
    name: "Dr. Neha Kapoor",
    role: "Medical Director, Serene Aesthetics",
  },
];

export const partners = [
  "Lumière",
  "Revive",
  "Serene",
  "Aurelia",
  "Velvet Skin",
  "Derma Co.",
  "Glow Lab",
  "Pure Aesthetics",
];

export const values = [
  {
    title: "Healthcare-first",
    body: "We only partner with skin, hair and aesthetic clinics. That focus is your unfair advantage.",
  },
  {
    title: "Systems over tactics",
    body: "We build predictable acquisition machines, not one-off campaigns that fade when budgets pause.",
  },
  {
    title: "Outcomes, not optics",
    body: "Success is measured in consultations, treatments and revenue — never vanity impressions.",
  },
  {
    title: "Radically transparent",
    body: "Live dashboards and plain-English reporting. You always know exactly what your spend is doing.",
  },
];

export const timeline = [
  {
    year: "2017",
    title: "The first clinic",
    body: "Cheerup begins as a one-doctor growth experiment — proving that healthcare needs partners, not vendors.",
  },
  {
    year: "2019",
    title: "The growth framework",
    body: "Attract → Convert → Scale is codified after running it across dozens of skin and hair clinics.",
  },
  {
    year: "2022",
    title: "Automation at the core",
    body: "CRM, WhatsApp and lead-tracking systems become standard, ending the era of leaked leads.",
  },
  {
    year: "2024",
    title: "The AI growth engine",
    body: "AI qualification, chatbots and reporting turn clinic growth into a measurable, scalable science.",
  },
];

export const team = [
  { name: "Aarav Shah", role: "Founder & Growth Lead", initials: "AS" },
  { name: "Diya Nair", role: "Head of Performance", initials: "DN" },
  { name: "Kabir Rao", role: "Creative Director", initials: "KR" },
  { name: "Meera Iyer", role: "Head of Automation & AI", initials: "MI" },
];

export const blogCategories = [
  "All",
  "Patient Acquisition",
  "Authority",
  "Automation",
  "AI",
];

export const blogPosts = [
  {
    slug: "predictable-patient-acquisition",
    title: "How to build a predictable patient acquisition system",
    excerpt:
      "Most clinics buy leads. The ones that win build systems. Here's the exact framework we use to turn ad spend into booked consultations.",
    category: "Patient Acquisition",
    date: "2026-05-28",
    readTime: "8 min read",
    featured: true,
  },
  {
    slug: "doctor-authority-2026",
    title: "The doctor authority playbook for 2026",
    excerpt:
      "Patients choose clinicians they trust before they ever book. Here's how to make your doctors the obvious choice online.",
    category: "Authority",
    date: "2026-05-14",
    readTime: "6 min read",
    featured: false,
  },
  {
    slug: "whatsapp-automation-clinics",
    title: "WhatsApp automation that recovers lost clinic leads",
    excerpt:
      "Speed-to-lead decides who books. We break down the automation stack that responds in seconds, not hours.",
    category: "Automation",
    date: "2026-04-30",
    readTime: "5 min read",
    featured: false,
  },
  {
    slug: "ai-lead-qualification",
    title: "AI lead qualification for high-ticket treatments",
    excerpt:
      "Not every enquiry deserves the same effort. How AI scoring focuses your team on patients ready to book.",
    category: "AI",
    date: "2026-04-16",
    readTime: "7 min read",
    featured: false,
  },
  {
    slug: "landing-pages-that-convert",
    title: "Anatomy of a clinic landing page that converts at 14%",
    excerpt:
      "We've shipped hundreds of treatment landing pages. These are the conversion principles that consistently win.",
    category: "Patient Acquisition",
    date: "2026-03-29",
    readTime: "9 min read",
    featured: false,
  },
  {
    slug: "retention-flywheel",
    title: "The patient retention flywheel most clinics ignore",
    excerpt:
      "Acquisition is expensive. Retention compounds. Here's how to build a loyalty loop that scales revenue quietly.",
    category: "Authority",
    date: "2026-03-12",
    readTime: "6 min read",
    featured: false,
  },
];
