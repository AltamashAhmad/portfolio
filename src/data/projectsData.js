export const projects = [
  {
    title: "Rate Limiter for API Services",
    description: "Developed a scalable RESTful API using Node.js and Express.js to process social media data and deliver analytics insights.",
    type: "backend",
    tech: ["Node.js", "Express.js", "Redis", "Natural", "JWT", "RESTful API"],
    startDate: "2023-11-01",
    endDate: "2023-12-15",
    image: "/projectImage/ratelimiter.png",
    links: {
      github: "https://github.com/AltamashAhmad/Rate_Limiter_for_API_Service",
      live: null
    },
    highlights: [
      "Designed a high-speed data storage system with Redis to efficiently store user submissions, hashtags, and sentiment",
      "Implemented tier-based rate limiting in Redis (free/premium/standard) to control API usage and prevent abuse", 
      "Developed an error-handling system with Winston logging, reducing debugging time by 30%",
      "Applied Low-Level Design (LLD) principles for modular and scalable system architecture"
    ]
  },
  {
    title: "Property Listing System",
    description: "Full-stack real estate platform with advanced search, favorites, recommendations, and Redis caching. Features JWT authentication, MongoDB integration, and comprehensive API documentation.",
    type: "fullstack", 
    tech: ["TypeScript", "Node.js", "MongoDB", "Redis", "JWT", "Express.js"],
    startDate: "2024-01-01",
    endDate: "2024-03-15",
    image: "/projectImage/property.png",
    links: {
      github: "https://github.com/AltamashAhmad/Property-Listing-System",
      live: null
    },
    highlights: [
      "Built property search with 15+ filter options and pagination",
      "Implemented favorites & recommendation system between users",
      "Added Redis caching reducing response times by 60%",
      "Comprehensive REST API with detailed documentation"
    ]
  },
  {
    title: "AI-Powered Peer Mock Interview Platform",
    description: "Built a full-stack mock interview platform simulating DSA, System Design, and LLD interviews with LLMs like Ollama/OpenAI.",
    type: "fullstack",
    tech: ["React", "Firebase", "Ollama", "OpenAI", "Anthropic", "Node.js"],
    startDate: "2024-06-01", 
    endDate: "2024-08-30",
    image: "/projectImage/Ai.png",
    links: {
      github: "https://github.com/AltamashAhmad/AI-CHAT-APP",
      live: null
    },
    highlights: [
      "Built React frontend with Firebase Auth and protected routes for secure user sessions and dashboard access",
      "Designed modular LLM backend using factory pattern for easy integration of LLMs (OpenAI, Ollama, Anthropic)",
      "Created responsive chat interface with markdown rendering, code highlighting, and real-time message sync"
    ]
  },
  {
    title: "Ekai Slack Bot Integration",
    description: "Built an intelligent Slack bot using OpenAI's LLMs to automate HR queries and improve internal communications.",
    type: "backend",
    tech: ["Node.js", "Slack API", "OpenAI API", "Express.js"],
    startDate: "2024-04-01", 
    endDate: "2024-05-30",
    image: "/projectImage/ekai.png",
    links: {
      github: "https://github.com/AltamashAhmad/ekai-slack-bot",
      live: null
    },
    highlights: [
      "Integrated Slack Events API for real-time messaging and event listening",
      "Utilized OpenAI LLMs to parse context and generate human-like responses",
      "Deployed highly available Node.js server to handle incoming webhooks"
    ]
  },
  {
    title: "Drone Survey Management System",
    description: "Developed a management dashboard to handle drone telemetry, map data, and survey analytics for hardware operations.",
    type: "fullstack",
    tech: ["JavaScript", "Node.js", "Express.js", "MongoDB", "React"],
    startDate: "2023-08-01", 
    endDate: "2023-10-30",
    image: "/projectImage/drone.png",
    links: {
      github: "https://github.com/AltamashAhmad/Drone-Survey-Management-System",
      live: null
    },
    highlights: [
      "Designed dashboard UI for viewing and managing drone flight logs",
      "Created RESTful endpoints to ingest and process survey telemetry data",
      "Implemented real-time status tracking for hardware devices"
    ]
  },
  {
    title: "Role-Based Access Control (RBAC) UI",
    description: "Engineered a robust frontend interface for managing enterprise user permissions, roles, and security policies.",
    type: "frontend",
    tech: ["React", "JavaScript", "Tailwind CSS", "Context API"],
    startDate: "2023-05-01", 
    endDate: "2023-07-30",
    image: "/projectImage/rbac.png",
    links: {
      github: "https://github.com/AltamashAhmad/Role-Based-Access-Control-RBAC-UI",
      live: null
    },
    highlights: [
      "Built dynamic access grids to visualize and assign complex user permissions",
      "Implemented secure route guarding based on authenticated user roles",
      "Designed reusable state machine hooks to manage UI security states"
    ]
  }
];

export const filters = [
  { label: 'All', value: 'all' },
  { label: 'Frontend', value: 'frontend' },
  { label: 'Backend', value: 'backend' },
  { label: 'Full Stack', value: 'fullstack' }
];
