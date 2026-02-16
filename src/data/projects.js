export const projects = [
  {
    id: "smart-interview-simulator",
    title: "SMART INTERVIEW SIMULATOR – AI-POWERED INTERVIEW ENGINE",
    shortDescription: "A full-stack interview simulation platform designed to replicate real-world technical interview environments. Built with a modular backend architecture and role-based access control, the system enables structured interview workflows, AI-driven evaluation, performance analytics, and admin-level reporting.",
    description: "The platform integrates intelligent feedback generation, dynamic question management, and scalable session handling to simulate production-grade interview infrastructure rather than static practice tools.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "JWT Authentication", "AI Integration"],
    industry: "Enterprise SaaS",
    phase: "Deployed",
    role: "Lead Architect",
    problem: "Technical interview prep platforms lack realism. Most tools are static practice systems without role-based control, structured workflows, or intelligent feedback pipelines. There is no simulation of admin-controlled sessions, AI-based evaluation, or scalable interview tracking.",
    approach: "The platform is built on a modular Node.js backend with structured routing and middleware-based access control. Interview sessions are dynamically generated and stored with relational mapping between users, sessions, and evaluation reports. AI-generated insights are processed post-submission and persisted for admin review and structured report delivery.",
    decisions: "Instead of tightly coupling evaluation logic with session handling, the evaluation pipeline was modularized to allow future expansion into automated scoring models and performance benchmarking.",
    challenges: "Handling dynamic session state synchronization between student and admin dashboards required careful state persistence and conditional rendering logic to avoid stale UI states.",
    features: [
      "Role-based authentication & protected routes",
      "Structured session lifecycle management",
      "AI-driven feedback generation pipeline",
      "Admin-controlled interview scheduling",
      "Dynamic analytics & performance visualization",
      "Scalable REST API architecture"
    ],
    productionUrl: "https://frontend-delta-plum-87.vercel.app/login",
    sourceUrl: "https://github.com/maniktyagi04/Smart_Interview_Simulator"
  },
  {
    id: "expense-analytics-system",
    title: "FULL-STACK EXPENSE ANALYTICS & FINANCIAL TRACKING SYSTEM",
    shortDescription: "A full-stack financial tracking application built with secure authentication and RESTful APIs for transaction management. The system provides real-time expense categorization, monthly analytics dashboards, and structured data visualization to help users monitor spending patterns and optimize financial decisions.",
    description: "Designed with modular architecture and optimized state management to ensure performance, scalability, and clean separation of concerns.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "JWT Authentication", "AI Integration"],
    industry: "FinTech / Personal Finance",
    phase: "Deployed",
    role: "Full-Stack Developer",
    problem: "Users need a secure and scalable way to track expenses while gaining meaningful insights from their spending data. The goal was to build a system that combines transaction management with real-time financial analytics.",
    approach: "Built with a modular full-stack architecture using JWT-based authentication and REST APIs for secure transaction handling. Backend aggregation logic computes category-wise and monthly analytics, while the React dashboard renders optimized, data-driven visualizations.",
    features: [
      "Secure user authentication",
      "Transaction CRUD with categorization",
      "Monthly & category-wise analytics",
      "Real-time dashboard visualization"
    ],
    challenges: "Ensuring efficient financial aggregation without redundant queries required optimized database indexing and backend-level computation. State management was structured carefully to prevent unnecessary UI re-renders and maintain performance.",
    productionUrl: "https://expense-tracker-frontend-one-gules.vercel.app/signup",
    sourceUrl: "https://github.com/maniktyagi04/Expense-Tracker"
  }
];
