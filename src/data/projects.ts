export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Star Project' | 'Featured' | 'Deployed' | 'Completed';
  badge: string;
  period: string;
  problem: string;
  solution: string;
  technologies: string[];
  features: string[];
  github: string | null;
  demo: string | null;
  featured: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: "pos-system",
    title: "Retail POS System",
    subtitle: "Enterprise Point-of-Sale & Live Inventory Desk",
    category: "Star Project",
    badge: "⭐ Star Project",
    period: "Apr 2026 – Present",
    problem: "Traditional retail billing software struggles with rapid concurrent checkouts, inventory synchronization errors, and dynamic pricing updates during high traffic.",
    solution: "Engineered a high-performance POS system providing instantaneous billing, real-time stock deductions, flexible promotions logic, and audit-ready financial summaries.",
    technologies: ["Java", "Spring Boot", "Hibernate", "JPA", "MySQL", "JavaScript", "HTML5", "CSS3", "REST APIs"],
    features: [
      "Role-Based Access Control (RBAC) Authentication",
      "Fast Live Checkout & Billing Desk",
      "Real-Time Stock Inventory Reconciliation",
      "Dynamic Product Discounts & Sales Audits"
    ],
    github: "https://github.com/himanshuXDebug/Retail-POS-System.git",
    demo: "https://pos-retail-demo.vercel.app/",
    featured: true
  },
  {
    id: "node-editor",
    title: "Node-based Visual Editor",
    subtitle: "Interactive Workflow & Custom Node Builder Engine",
    category: "Star Project",
    badge: "⭐ Star Project",
    period: "Jun 2025 – Sep 2025",
    problem: "Building workflows in code is slow to iterate and hard to debug visually.",
    solution: "A modular node editor where users connect custom nodes and pass data using a global variable store.",
    technologies: ["React.js", "React Flow", "Tailwind CSS", "Zustand", "Python", "FastAPI", "Vercel", "Railway"],
    features: [
      "Custom nodes for workflow building",
      "Global variable store for cross-node data flow",
      "Dynamic data passing with live previews",
      "Deploy-ready setup (frontend + backend)"
    ],
    github: "https://github.com/himanshuXDebug/Node-Editor.git",
    demo: "https://frontend-node-visual-editor.vercel.app/",
    featured: true
  },
  {
    id: "cold-email",
    title: "Cold Email Generator",
    subtitle: "AI-Powered Outreach Assistant",
    category: "Featured",
    badge: "⭐ Featured",
    period: "Mar 2025 – May 2025",
    problem: "Cold outreach takes time and consistency is hard to maintain.",
    solution: "An AI-powered generator that turns structured inputs into personalized cold emails.",
    technologies: ["React.js", "Next.js", "Tailwind CSS", "Drizzle ORM", "PostgreSQL", "Vercel"],
    features: [
      "Structured inputs to guide generation",
      "Saved templates and user data storage",
      "Database integration via Drizzle ORM",
      "Fast iteration-friendly UI"
    ],
    github: "https://github.com/ColdEmail/Cold-Email",
    demo: "https://cold-email-eta.vercel.app/",
    featured: true
  },
  {
    id: "mock-interview",
    title: "Smart AI Mock Interview App",
    subtitle: "Interactive Interview Simulator with Feedback",
    category: "Deployed",
    badge: "AI Application",
    period: "Jan 2025 – Mar 2025",
    problem: "Interview practice without feedback makes it hard to improve.",
    solution: "A mock interview platform that provides AI feedback and supports content via an owner-only blog.",
    technologies: ["React.js", "Next.js", "Tailwind CSS", "Gemini AI", "Clerk", "shadcn/ui", "PostgreSQL", "Vercel"],
    features: [
      "AI-driven feedback for better performance",
      "Owner-only blog posting with edit controls",
      "Engagement: like, comment, delete",
      "Auth + production-ready flows"
    ],
    github: "https://github.com/himanshuXDebug/Smart-Mock-Interview.git",
    demo: "https://smart-mock-interview.vercel.app/",
    featured: false
  },
  {
    id: "waste-ai",
    title: "AI-Driven Waste Classification System",
    subtitle: "Computer Vision Model for Eco Sorting",
    category: "Completed",
    badge: "AI / Vision",
    period: "Oct 2024 – Dec 2024",
    problem: "Waste sorting is error-prone and depends on user awareness.",
    solution: "An image-based classifier that categorizes waste types and improves through feedback over time.",
    technologies: ["Python", "HTML", "CSS", "JavaScript", "SQLite"],
    features: [
      "Image analysis + waste categorization",
      "Simple UI for testing predictions",
      "Feedback mechanism to improve accuracy",
      "Lightweight storage using SQLite"
    ],
    github: "https://github.com/himanshuXDebug/Waste-Classification.git",
    demo: null,
    featured: false
  },
  {
    id: "expense-tracker",
    title: "Personal Expense Tracker",
    subtitle: "Lightweight Spending Manager",
    category: "Deployed",
    badge: "Web Utility",
    period: "2024",
    problem: "Personal spending is hard to track without quick logging and summaries.",
    solution: "A lightweight tracker to add/edit expenses and view category totals.",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Add/edit/delete entries",
      "Category grouping",
      "Simple totals/summary view",
      "Responsive UI"
    ],
    github: "https://github.com/himanshuXDebug/Expense-Tracker",
    demo: "https://expense-tracker-himanshuxdebugs-projects.vercel.app/",
    featured: false
  },
  {
    id: "ecommerce",
    title: "E-Commerce Website",
    subtitle: "Full-Stack Storefront & Product Browsing Platform",
    category: "Completed",
    badge: "Full Stack",
    period: "2024",
    problem: "Small sellers need a simple storefront to list products and take orders.",
    solution: "A basic e-commerce app with product listing and core shopping flow.",
    technologies: ["HTML", "CSS", "JavaScript", "MySQL", "PHP"],
    features: [
      "Product listing pages",
      "Cart flow (basic)",
      "Inventory/product management (basic)",
      "Full-stack implementation"
    ],
    github: null,
    demo: null,
    featured: false
  }
];