// Centralized content for Tech Edge. Fill these fields from 'TECH EDGE Company Profile 2.pdf'.

export const company = {
  brand: {
    name: "TECH EDGE",
    tagline: "Digital Transformation Leaders", // TODO: Replace with exact tagline from PDF
  },
  hero: {
    title: "TECH EDGE",
    highlight: "EDGE", // the part to gradient-highlight
    subtitle:
      "Technology that transforms businesses, empowers people, and shapes the future.", // TODO: Replace with exact copy from PDF
    ctas: [
      { label: "Get started", to: "contact" },
      { label: "Learn more", to: "about" },
    ],
    stats: [
      { value: "2M+", label: "Projects" },
      { value: "100K+", label: "Deployments" },
      { value: "82%", label: "Success rate" },
    ], // TODO: Update figures from PDF if different
  },
  about: {
    badge: "ABOUT US",
    heading: "WHO WE ARE",
    body:
      "A global team of certified technologists, cloud architects, and cybersecurity experts driving digital transformation for enterprises worldwide.", // TODO: Replace from PDF
    pillars: [
      {
        key: "multicloud",
        title: "Multi-Cloud Excellence",
        body:
          "Expert management across AWS, Azure, and GCP platforms with seamless DevOps integration. We architect, deploy, and optimize cloud infrastructure at scale.",
        chips: ["AWS", "AZURE", "GCP"],
      },
      {
        key: "ai",
        title: "AI & Automation",
        body: "Intelligent solutions powered by machine learning.",
      },
      {
        key: "security",
        title: "Enterprise Security",
        body: "Comprehensive cybersecurity frameworks.",
      },
      {
        key: "innovation",
        title: "Innovation Focus",
        body: "Modernizing legacy systems into cloud-native architectures.",
      },
      {
        key: "datascience",
        title: "Data Science Excellence",
        body:
          "Leveraging advanced analytics, machine learning, and big data technologies to extract actionable insights and drive informed decision-making.",
        chips: ["AWS", "AZURE", "GCP"],
      },
      {
        key: "cta",
        title: "Ready to Transform?",
        body: "Partner with us to turn technology into your competitive edge.",
        cta: { label: "START YOUR JOURNEY", to: "contact" },
      },
    ],
  },
  services: [
    {
      icon: "Lightbulb",
      title: "Digital Transformation",
      subtitle: "& Consulting",
      description:
        "Business-aligned roadmaps, process automation, and compliance solutions that drive meaningful change.",
      image: "/Assets/services/DigitalTransformation.jpg",
      gradient: "from-purple-600 to-pink-600",
    },
    {
      icon: "Cloud",
      title: "Cloud & Infrastructure",
      subtitle: "Solutions",
      description:
        "Multi-cloud management, DevOps excellence, and infrastructure automation for scalable operations.",
      image: "/Assets/services/Cloud-bg.jpg",
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      icon: "Brain",
      title: "Data Intelligence",
      subtitle: "& AI",
      description:
        "Predictive analytics, data governance, and AI-powered IT operations that unlock insights.",
      image: "/Assets/services/DataIntelligence.jpg",
      gradient: "from-indigo-600 to-purple-600",
    },
    {
      icon: "Shield",
      title: "Cybersecurity",
      subtitle: "& Compliance",
      description:
        "Comprehensive threat monitoring, VAPT services, and regulatory automation for secure enterprises.",
      image: "/Assets/services/Cybersecurity.jpg",
      gradient: "from-green-600 to-emerald-600",
    },
    {
      icon: "Code",
      title: "Application Modernization",
      subtitle: "& Integration",
      description:
        "Cloud-native migration, API-first integration, and real-time data pipelines for modern applications.",
      image: "/Assets/services/ApplicationModernization.jpg",
      gradient: "from-orange-600 to-red-600",
    },
    {
      icon: "Settings",
      title: "Managed Services",
      subtitle: "& Support",
      description:
        "Flexible delivery models (onshore, offshore, hybrid) with PMO-driven governance and 24/7 support.",
      image: "/Assets/services/ManagedServices.jpg",
      gradient: "from-teal-600 to-blue-600",
    },
  ],
  values: [
    { key: "innovation", icon: "Zap", title: "Innovation", description: "Driving change through smart, future-ready solutions that push boundaries." },
    { key: "integrity", icon: "Heart", title: "Integrity", description: "Building trust with transparent, secure, and reliable services every day." },
    { key: "excellence", icon: "Award", title: "Excellence", description: "Delivering measurable outcomes with certified expertise and proven methods." },
    { key: "collaboration", icon: "Users", title: "Collaboration", description: "Partnering with clients for shared success and long-term growth." },
    { key: "agility", icon: "Gauge", title: "Agility", description: "Adapting quickly to evolving business needs and market dynamics." },
  ],
  mission: {
    badge: "OUR MISSION",
    heading: "EMPOWERING GROWTH",
    body:
      "To empower enterprises with innovative, secure, and scalable technology solutions that bridge business strategy and IT excellence.",
    points: [
      "Modernize operations with cloud, AI, and automation.",
      "Enable smarter decisions with data-driven intelligence and predictive insights.",
      "Enhance experiences for customers, employees, and stakeholders alike.",
      "Strengthen resilience through robust cybersecurity and compliance frameworks.",
    ],
  },
  vision: {
    badge: "OUR VISION",
    heading: "LEADING THE FUTURE",
    body:
      "To be the global partner of choice for enterprises navigating digital transformation and shaping tomorrow's innovations.",
    points: [
      { icon: "Sparkles", title: "Innovation Leads the Way", description: "We harness cutting-edge technologies like AI, cloud, and automation to create smarter, faster, and more resilient enterprises." },
      { icon: "Lock", title: "Trust Builds Growth", description: "We enable organizations to thrive with secure, compliant, and transparent digital ecosystems that foster long-term confidence." },
      { icon: "TrendingUp", title: "Enterprises Shape the Future", description: "We empower businesses worldwide to not only adapt to change but to lead it—driving sustainable impact for industries, people, and communities." },
    ],
    quote: "Together, we don't just navigate change—we define it.",
  },
  contact: {
    email: "info@techedge.com", // TODO: confirm from PDF
    phone: "+91 73974 82029", // Updated to match WhatsApp contact
    whatsapp: "+917397482029", // For WhatsApp chat launcher
    website: "https://www.techedge.com", // TODO: confirm domain from PDF
    address: "Riyadh, Saudi Arabia", // TODO: if the PDF lists HQ
  },
  socials: [
    { key: "LinkedIn", url: "#" },
    { key: "Twitter", url: "#" },
    { key: "GitHub", url: "#" },
    { key: "Facebook", url: "#" },
  ],
};
