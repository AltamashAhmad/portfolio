export const education = [
  {
    degree: "B.Tech, Electrical Engineering",
    institution: "Jamia Millia Islamia (NewDelhi), India",
    year: "2020-2024",
    score: "8.71/10.0 CGPA",
  }
];

export const experience = [
  {
    role: "Full Stack Software Developer",
    company: "Zylo",
    startDate: new Date(2025, 8, 1), // September 2025
    endDate: null, // Present
    points: [
      "Co-architected ERP using NestJS and PostgreSQL (Prisma) with Resource, Catalog, Scheduling, Orders, and Audit modules",
      "Engineered a consecutive-window scheduling algorithm with PostgreSQL pessimistic locking and 15-minute TTL soft reservations to prevent race conditions across concurrent bookings",
      "Integrated external Aldar APIs for real-time synchronization of installation and order status within the ERP ecosystem",
      "Implemented an 8-state Order State Machine (DRAFT → CONFIRMED → COMPLETED) with backend-enforced transitions, price snapshots frozen at payment confirmation, and an immutable AuditLog for every status change",
      "Architected and launched zylosmart.com from scratch using Next.js 14 and Tailwind CSS, delivering 15+ pages across 10 smart home solution categories with full production deployment (DNS, SSL, CDN)"
    ],
    technologies: ["NestJS", "PostgreSQL", "Prisma", "Next.js", "Tailwind CSS", "REST APIs", "State Machine"]
  },
  {
    role: "Full Stack Software Developer",
    company: "Ekai",
    startDate: new Date(2024, 5, 1), // June 2024
    endDate: new Date(2025, 7, 1), // August 2025
    points: [
      "Built Ekai, a Slack LLM bot integrating OpenAI API for contextual chat, document-based training, user-level privacy controls",
      "Built backend/frontend with Node and Block Kit Builder for file upload and user actions, enabling smooth interaction",
      "Added privacy control, letting users train Ekai for personal or team use, improving data privacy and collaboration",
      "Formatted AI responses into Slack markdown for clean display of code, links, and text, improving message clarity and UX",
      "Implemented OAuth + JWT authentication, encrypted storage, and CI/CD pipelines with GitHub Actions + AWS",
      "Integrated Drive & Calendar APIs for folder training, auto-ingestion, and meeting-based access with Slack notifications"
    ],
    technologies: ["Node.js", "OpenAI API", "Slack API", "JWT", "OAuth", "AWS", "GitHub Actions", "CI/CD"]
  },
  {
    role: "Software Developer Intern",
    company: "Quvor",
    startDate: new Date(2023, 6, 1), // July 2023
    endDate: new Date(2024, 2, 1), // March 2024
    points: [
      "Developed an e-commerce platform for ShoppingEventVIP (shoppingeventvip.be/en) using React Router v7 and Mantine UI",
      "Engineered high-converting landing pages with Directus CMS integration, featuring dynamic hero sections, testimonial carousels, partner brand showcases, and tiered pricing plans",
      "Built 40+ reusable Mantine-first components and optimized frontend performance, reducing page load times by 60%",
      "Implemented Redis caching layer, cutting API response times by 40% and scaling to support 10,000+ concurrent users",
      "Implemented (i18n) with multilingual routing (EN/FR/NL) and CMS-based translated content for global reach"
    ],
    technologies: ["React Router v7", "Mantine UI", "Directus CMS", "Redis", "i18n"]
  },
  {
    role: "Software Developer Intern",
    company: "Kalvium",
    startDate: new Date(2022, 11, 1), // December 2022
    endDate: new Date(2023, 2, 1), // March 2023
    points: [
      "Developed LiveBook, an interactive learning platform integrating theory, videos, and assessments for student engagement",
      "Built RESTful APIs for content management and integrated YouTube API for in-app video streaming",
      "Created comprehensive Postman test suites improving system reliability and developer onboarding efficiency"
    ],
    technologies: ["React.js", "Node.js", "YouTube API", "RESTful APIs", "Postman"]
  },
];
