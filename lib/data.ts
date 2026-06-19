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
    accent: "#E2C160",
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
    accent: "#2C49F0",
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
    accent: "#E2C160",
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
  "Delhi Market",
  "Patient Acquisition",
  "Automation",
  "AI",
];

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  featured: boolean;
  content: BlogBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "delhi-aesthetic-clinics-revenue-struggle",
    title: "Why Delhi's Aesthetic Clinics Are Booming — Yet Struggling to Grow Revenue",
    excerpt:
      "Delhi runs 150,000+ aesthetic procedures a year and commands India's highest treatment ticket. So why do so many clinics feel stuck? The revenue paradox, explained.",
    category: "Delhi Market",
    author: "Aarav Shah",
    date: "2026-06-15",
    readTime: "9 min read",
    image: "/blog/delhi-revenue.svg",
    featured: true,
    content: [
      { type: "p", text: "Walk through Greater Kailash, Saket or Khan Market and you'll pass a new skin, hair or aesthetic clinic every few hundred metres. Business looks like it's booming — and on paper, it is. Yet behind the polished reception desks, a surprising number of Delhi clinic owners will quietly tell you the same thing: revenue isn't growing the way the demand suggests it should." },
      { type: "h2", text: "A market that's genuinely exploding" },
      { type: "p", text: "The numbers are not the problem. India's medical aesthetics market was valued at roughly USD 650 million to USD 1.8 billion in 2024–25 depending on the report, and is forecast to grow at a CAGR of 8–10% for the rest of the decade. Delhi NCR sits right at the centre of that growth." },
      { type: "list", items: [
        "Clinics in Delhi reported over 150,000 aesthetic procedures in 2023, with around 40% involving energy-based devices like lasers.",
        "The average skin-rejuvenation ticket in Delhi NCR is about ₹44,000 — roughly 20% higher than other Indian metros.",
        "Delhi NCR, Mumbai, Bengaluru, Hyderabad, Chennai and Pune together drive 65–70% of national revenue.",
        "The number of aesthetic clinics in India grew from ~2,800 in 2018 to nearly 4,500 in 2023.",
      ]},
      { type: "p", text: "Demand is rising, ticket sizes are high, and patients are more willing than ever to pay for skin, hair and aesthetic treatments. So where does the growth actually leak away?" },
      { type: "h2", text: "The paradox: more demand, more clinics, capped growth" },
      { type: "p", text: "That same growth has pulled in competition. Delhi NCR is now one of the most saturated aesthetic markets in the country, and the cost of winning a patient has climbed sharply." },
      { type: "list", items: [
        "Cost per booked consultation for injectable services has risen to roughly $180–$320 in major metros, up from $120–$210 just three years ago.",
        "Instagram's organic reach has collapsed compared to a few years ago — the same content reaches a fraction of the audience.",
        "Google Ads competition between clinics has pushed click costs up across high-intent treatment keywords.",
        "The old walk-in-and-referral model simply doesn't scale past a certain point.",
      ]},
      { type: "p", text: "The result is a clinic that's busier than ever but watching margins thin out — spending more to attract each patient while the front desk struggles to convert and retain them." },
      { type: "h2", text: "It's not a marketing problem. It's a growth-systems problem." },
      { type: "p", text: "Most Delhi clinics we meet don't lack demand or even leads. What they lack is a system that reliably turns attention into booked consultations, consultations into treatments, and one treatment into a lifetime of return visits. Demand is the easy part in 2026. Capturing it predictably is the hard part." },
      { type: "quote", text: "Most clinics don't have a marketing problem. They have a growth problem." },
      { type: "p", text: "That's the gap Cheerup Digital exists to close — a measurable Attract → Convert → Scale system built specifically for skin, hair and aesthetic clinics, so growth stops being a gamble and starts being a process. In the next two articles we'll break down exactly where the leaks happen and how to fix them." },
    ],
  },
  {
    slug: "delhi-clinic-leaky-funnel-speed-to-lead",
    title: "The Leaky Funnel: How Delhi Clinics Lose Patients After the Click",
    excerpt:
      "Most Delhi clinics don't have a lead problem — they have a follow-up problem. Speed-to-lead, no-shows, and the automation that quietly recovers lost revenue.",
    category: "Delhi Market",
    author: "Meera Iyer",
    date: "2026-06-11",
    readTime: "8 min read",
    image: "/blog/delhi-funnel.svg",
    featured: false,
    content: [
      { type: "p", text: "Ask a Delhi clinic owner where they lose money and most will point at ad spend. But when we audit the funnel, the biggest leak is almost never at the top. It's everything that happens after a patient raises their hand." },
      { type: "h2", text: "The real leak isn't leads — it's follow-up" },
      { type: "p", text: "Speed-to-lead is the single biggest factor in whether an enquiry becomes a booking. The data is brutal: responding within 5 minutes can lift conversion by up to 100x compared with a 30-minute delay, and 78% of patients book with the first clinic that responds." },
      { type: "p", text: "Yet most clinics reply in hours, not minutes — a front desk juggling walk-ins, calls and Instagram DMs simply can't respond instantly. By the time they call back, the patient has already booked with the clinic down the road." },
      { type: "list", items: [
        "Most aesthetic leads need 5–8 touchpoints before they book — a single follow-up call isn't enough.",
        "Enquiries arrive across WhatsApp, Instagram, Google and the website, but rarely land in one place.",
        "Without tracking, no one knows which leads were followed up and which quietly went cold.",
      ]},
      { type: "h2", text: "No-shows and the retention gap" },
      { type: "p", text: "The leak continues even after booking. Industry retention rates average just ~50%, and no-shows silently erode a packed calendar. That matters more than most owners realise:" },
      { type: "list", items: [
        "A 5% increase in retention can lift profits by 25–95%.",
        "30–40% of aesthetic clinic revenue comes from follow-up visits, not first bookings.",
        "Automated SMS and WhatsApp reminders measurably cut no-shows.",
      ]},
      { type: "h2", text: "The fix: a system that responds the moment a patient does" },
      { type: "p", text: "This is exactly what Growth Automation solves. The goal is simple — no enquiry waits, no lead is forgotten, and every patient is gently nurtured until they book and return." },
      { type: "list", items: [
        "Instant WhatsApp auto-response the second an enquiry arrives, day or night.",
        "A single CRM pipeline so every lead — from every channel — is tracked to outcome.",
        "Automated multi-touch nurture sequences that deliver those 5–8 touchpoints for you.",
        "AI lead qualification so your team spends its time only on patients ready to book.",
      ]},
      { type: "quote", text: "Speed-to-lead decides who books. In a market as competitive as Delhi, minutes are the margin." },
      { type: "p", text: "Plug the funnel before you pour more money into the top of it. For most Delhi clinics, fixing follow-up and retention recovers more revenue than any increase in ad budget ever could." },
    ],
  },
  {
    slug: "delhi-aesthetic-growth-system-2026",
    title: "Building a Predictable Growth System for Your Delhi Clinic in 2026",
    excerpt:
      "A practical, data-backed playbook for Delhi skin, hair and aesthetic clinics: attract high-intent patients, convert with zero-leak follow-up, and scale with AI.",
    category: "Delhi Market",
    author: "Diya Nair",
    date: "2026-06-08",
    readTime: "10 min read",
    image: "/blog/delhi-growth.svg",
    featured: false,
    content: [
      { type: "p", text: "We've covered why Delhi clinics struggle to grow revenue despite booming demand, and where the funnel leaks. This is the playbook — the system we deploy to turn an unpredictable calendar into a reliable, compounding pipeline. It runs on three stages: Attract, Convert, Scale." },
      { type: "h2", text: "1. Attract — get in front of high-intent patients" },
      { type: "p", text: "In a high-ticket market like Delhi NCR, the goal isn't more clicks — it's the right clicks. We build acquisition around treatment intent, so spend goes toward patients actively searching for what you offer." },
      { type: "list", items: [
        "Google Ads targeting high-intent treatment and condition searches.",
        "Meta campaigns built around clear offers, not generic brand posts.",
        "SEO and treatment-page content to own organic demand over time.",
        "Conversion-first landing pages for each core treatment.",
      ]},
      { type: "h2", text: "2. Convert — let nothing leak" },
      { type: "p", text: "Attraction is wasted without conversion. This stage is where most Delhi clinics recover the most revenue, because it fixes the follow-up gap that silently kills bookings." },
      { type: "list", items: [
        "Instant WhatsApp response and a single CRM pipeline for every channel.",
        "Automated nurture delivering the 5–8 touchpoints leads need before booking.",
        "Reminder flows to cut no-shows and protect a full calendar.",
        "AI lead scoring so the team focuses on patients ready to book.",
      ]},
      { type: "h2", text: "3. Scale — compound what works" },
      { type: "p", text: "Once acquisition and conversion are predictable, scale comes from authority and retention — the highest-margin growth a clinic can have." },
      { type: "list", items: [
        "Doctor personal branding so patients arrive already trusting your clinicians.",
        "Video and YouTube content that pre-sells consultations.",
        "Retention and recall programmes — remember, 30–40% of revenue is follow-up.",
        "AI reporting that ties every rupee of spend to consultations and treatments.",
      ]},
      { type: "h2", text: "The numbers to actually track" },
      { type: "p", text: "A growth system is only as good as its scoreboard. These are the metrics we put on a live dashboard for every Delhi clinic we partner with:" },
      { type: "list", items: [
        "Cost per booked consultation (not cost per click).",
        "Speed-to-lead — median response time to a new enquiry.",
        "Consultation-to-treatment conversion rate.",
        "Patient retention and repeat-visit revenue.",
        "Return on ad spend, tracked to treatments booked.",
      ]},
      { type: "quote", text: "Demand is the easy part in Delhi. A system that captures it predictably is the unfair advantage." },
      { type: "p", text: "This is precisely the system Cheerup Digital builds and runs for skin, hair and aesthetic clinics. If your clinic is busy but your growth feels capped, the opportunity isn't a bigger budget — it's a better system. Let's map yours." },
    ],
  },
  {
    slug: "predictable-patient-acquisition",
    title: "How to build a predictable patient acquisition system",
    excerpt:
      "Most clinics buy leads. The ones that win build systems. Here's the exact framework we use to turn ad spend into booked consultations.",
    category: "Patient Acquisition",
    author: "Aarav Shah",
    date: "2026-05-28",
    readTime: "8 min read",
    image: "/blog/acquisition.svg",
    featured: false,
    content: [
      { type: "p", text: "There's a meaningful difference between buying leads and building a patient acquisition system. Leads run out the moment you pause spend. A system compounds — every campaign, page and follow-up makes the next patient cheaper to win." },
      { type: "h2", text: "Start with treatment economics, not clicks" },
      { type: "p", text: "Every campaign should optimise to booked consultations and lifetime value, never impressions or vanity clicks. When you know what a treatment is truly worth, you know exactly what you can afford to spend to win it." },
      { type: "h2", text: "The four pillars of a durable system" },
      { type: "list", items: [
        "Intent-led traffic from Google and Meta.",
        "Conversion-first landing pages for each treatment.",
        "Instant follow-up via WhatsApp and CRM.",
        "Live reporting that ties spend to revenue.",
      ]},
      { type: "quote", text: "A predictable pipeline is built, not bought." },
      { type: "p", text: "Get these four working together and patient acquisition stops being a monthly gamble and becomes a measurable, scalable process." },
    ],
  },
  {
    slug: "ai-lead-qualification",
    title: "AI lead qualification for high-ticket treatments",
    excerpt:
      "Not every enquiry deserves the same effort. How AI scoring focuses your team on patients ready to book.",
    category: "AI",
    author: "Meera Iyer",
    date: "2026-04-16",
    readTime: "7 min read",
    image: "/blog/ai-leads.svg",
    featured: false,
    content: [
      { type: "p", text: "High-ticket treatments attract a wide range of enquiries — from ready-to-book patients to casual browsers. Treating them all the same wastes your team's most valuable resource: time." },
      { type: "h2", text: "What AI scoring actually does" },
      { type: "p", text: "AI lead qualification reads intent signals — the treatment asked about, urgency, budget cues, responsiveness — and scores each enquiry so your team engages the hottest leads first, within minutes." },
      { type: "list", items: [
        "Route high-intent leads to a human instantly.",
        "Nurture lower-intent leads automatically until they're ready.",
        "Surface why a lead converted — or didn't.",
      ]},
      { type: "quote", text: "Spend your team's time on patients ready to book, not on sorting the inbox." },
      { type: "p", text: "The result is higher conversion without adding headcount — the team simply stops wasting effort on enquiries that were never going to book." },
    ],
  },
  {
    slug: "retention-flywheel",
    title: "The patient retention flywheel most clinics ignore",
    excerpt:
      "Acquisition is expensive. Retention compounds. Here's how to build a loyalty loop that scales revenue quietly.",
    category: "Patient Acquisition",
    author: "Diya Nair",
    date: "2026-03-12",
    readTime: "6 min read",
    image: "/blog/retention.svg",
    featured: false,
    content: [
      { type: "p", text: "Acquisition gets all the attention, but retention is where margins live. With 30–40% of aesthetic revenue coming from follow-up visits, the patients you already have are your most profitable growth channel." },
      { type: "h2", text: "Why retention beats acquisition" },
      { type: "p", text: "A 5% lift in retention can raise profits by 25–95%, yet industry retention averages only around 50%. The clinics that win treat the post-treatment journey as deliberately as the first booking." },
      { type: "list", items: [
        "Automated recall and reminder flows for repeat treatments.",
        "Personalised aftercare that builds trust and results.",
        "Loyalty and membership models that reward return visits.",
      ]},
      { type: "quote", text: "Acquisition fills the clinic once. Retention fills it for years." },
      { type: "p", text: "Build the flywheel and every new patient becomes worth far more than their first appointment." },
    ],
  },
];
