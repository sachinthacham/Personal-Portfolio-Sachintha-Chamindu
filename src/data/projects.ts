export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  keyFeatures?: string[];
  image: string;
  galleryImages?: string[];
  showGallery?: boolean;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: string;
  year: string;
}

export const projects: Project[] = [
  {
    id: "movietick-booking-app",
    title: "MovieTick - Movie Ticket Booking App",
    description:
      "A movie ticket reservation and booking platform with integrated showtime and transaction management.",
    longDescription:
      "MovieTick is a full-stack movie ticket booking system created to support show scheduling, seat booking workflows, and ticket transaction management. I developed backend services with ASP.NET and MSSQL, and built the user-facing booking flow with Next.js. Docker was used to standardize deployment and environment setup across development and hosting environments.",
    keyFeatures: [
      "Showtime-aware booking workflow for selecting and confirming tickets",
      "ASP.NET API layer with MSSQL-backed booking and transaction records",
      "Next.js frontend for seat selection and reservation user flows",
      "Dockerized setup for consistent build and deployment behavior",
      "Structured data flow to support scalable booking operations",
    ],
    galleryImages: [
      "/projects/movie-booking/Screenshot%202026-04-24%20093434.png",
      "/projects/movie-booking/Screenshot%202026-04-24%20093458.png",
      "/projects/movie-booking/Screenshot%202026-04-24%20093530.png",
      "/projects/movie-booking/Screenshot%202026-04-24%20093828.png",
      "/projects/movie-booking/Screenshot%202026-04-24%20093849.png",
      "/projects/movie-booking/Screenshot%202026-04-24%20094119.png",
      "/projects/movie-booking/Screenshot%202026-04-24%20094708.png",
      "/projects/movie-booking/Screenshot%202026-04-24%20101624.png",
      "/projects/movie-booking/Screenshot%202026-04-24%20101642.png",
      "/projects/movie-booking/Screenshot%202026-04-24%20101825.png",
    ],
    showGallery: true,
    image: "/projects/cover-images/movieticket.png",
    tags: ["ASP.NET", "MSSQL", "Next.js", "Docker"],
    featured: true,
    category: "SaaS",
    year: "2024",
  },
  {
    id: "workcentral-workspace-management",
    title: "WorkCentral - Workspace Management System",
    description:
      "A collaborative platform for managing workspaces, teams, and operational workflows in a centralized system.",
    longDescription:
      "WorkCentral is a full-stack workspace management system built to streamline team collaboration and day-to-day operational workflows. I developed the platform using NestJS for backend services and Next.js for the frontend, with MongoDB as the primary data store and Docker for containerized deployment. The system focuses on centralized workspace administration, reliable API-driven communication, and a responsive UI that supports practical team coordination.",
    keyFeatures: [
      "Centralized workspace and team management with role-oriented access patterns",
      "NestJS REST APIs integrated with MongoDB for workspace operations",
      "Next.js dashboard interface for streamlined task and workspace visibility",
      "Dockerized deployment workflow for consistent local and server environments",
      "Scalable modular architecture for adding future workspace modules",
    ],
    galleryImages: [
      "/projects/work-space/Screenshot%202026-04-22%20174551.png",
      "/projects/work-space/Screenshot%202026-04-22%20174616.png",
      "/projects/work-space/Screenshot%202026-04-22%20174640.png",
      "/projects/work-space/Screenshot%202026-04-22%20174710.png",
      "/projects/work-space/Screenshot%202026-04-22%20174800.png",
      "/projects/work-space/Screenshot%202026-04-22%20174826.png",
      "/projects/work-space/Screenshot%202026-04-22%20174857.png",
      "/projects/work-space/Screenshot%202026-04-22%20175027.png",
      "/projects/work-space/Screenshot%202026-04-22%20175108.png",
    ],
    showGallery: true,
    image: "/projects/cover-images/work-central.png",
    tags: ["NestJS", "Next.js", "MongoDB", "Docker"],
    featured: true,
    category: "Productivity",
    year: "2024",
  },
  {
    id: "realestate-pro",
    title: "RealEstate Pro",
    description:
      "A real estate platform for listing, browsing, and managing property data with a modern responsive user experience.",
    longDescription:
      "RealEstate Pro is a property listing and management platform designed to simplify discovery and administration of real estate data. I built backend services with Node.js and Express, and implemented a responsive Next.js frontend styled with Tailwind CSS. MongoDB powers the listing and user data layer, enabling flexible modeling for properties, filters, and interaction flows.",
    keyFeatures: [
      "Property listing and browsing workflows with responsive Next.js pages",
      "Express-based backend APIs for listing management and data retrieval",
      "MongoDB data models for properties, metadata, and user interactions",
      "Search and filter friendly structure for practical property discovery",
      "Tailwind CSS interface focused on clarity and mobile responsiveness",
    ],
    galleryImages: [
      "/projects/real-estate/Screenshot%202026-04-22%20113735.png",
      "/projects/real-estate/Screenshot%202026-04-22%20113944.png",
      "/projects/real-estate/Screenshot%202026-04-22%20114219.png",
      "/projects/real-estate/Screenshot%202026-04-22%20114324.png",
      "/projects/real-estate/Screenshot%202026-04-22%20114414.png",
      "/projects/real-estate/Screenshot%202026-04-22%20114444.png",
      "/projects/real-estate/Screenshot%202026-04-22%20114529.png",
      "/projects/real-estate/Screenshot%202026-04-22%20114644.png",
    ],
    showGallery: true,
    image: "/projects/cover-images/real-estate.png",
    tags: ["Node.js", "Express", "Next.js", "MongoDB", "Tailwind CSS"],
    featured: true,
    category: "E-Commerce",
    year: "2024",
  },
  {
    id: "quickserve-food-order-api",
    title: "QuickServe - Food Order API",
    description:
      "A backend API for handling food ordering workflows, including menu management, order lifecycle, and customer request processing.",
    longDescription:
      "Built a robust food ordering API using ASP.NET and Microsoft SQL Server with a clean service-oriented structure. The system supports order creation, status tracking, and core restaurant operations in a scalable backend setup.",
    keyFeatures: [
      "RESTful ASP.NET endpoints for menu, order, and customer workflows",
      "Order lifecycle handling from placement to completion",
      "MSSQL-backed data model for transactional reliability",
      "Validation and structured error handling for API stability",
      "Modular backend structure ready for integration with web and mobile clients",
    ],
    image: "/projects/cover-images/quickserve.png",
    tags: ["ASP.NET", "MSSQL"],
    featured: false,
    category: "Backend",
    year: "2024",
  },

  {
    id: "employee-management-clipess",
    title: "Employee Management System for Clipess",
    description:
      "An enterprise employee management solution for handling staff records, workflows, and operational tasks.",
    longDescription:
      "Clipess Employee Management System was our 2nd-year group project, built to digitize core HR and operational workflows in one platform. The system was implemented with ASP.NET and MSSQL, deployed on Azure, and paired with a React + Tailwind CSS frontend for a practical and responsive user experience. We delivered dedicated modules for inventory, leave management, attendance tracking, and task management.",
    keyFeatures: [
      "Inventory module for tracking internal assets and usage records",
      "Leave management workflow with request, review, and approval flow",
      "Attendance module for maintaining employee presence records",
      "Task manager module for assigning and monitoring team tasks",
      "Azure-hosted ASP.NET + MSSQL backend with React/Tailwind frontend",
    ],
    image: "/projects/cover-images/clipess company project.png",
    tags: ["ASP.NET", "MSSQL", "Azure", "React", "Tailwind CSS"],
    featured: false,
    category: "SaaS",
    year: "2024",
  },
  {
    id: "learngate-lms",
    title: "Learngate - Learning Management System",
    description:
      "A learning management system for course delivery, student engagement, and learning activity management.",
    longDescription:
      "Built the backend and core modules of a learning platform using ASP.NET and MSSQL, with foundations for course publishing, enrollment, and learner progress tracking.",
    keyFeatures: [
      "Course and module management flows for structured learning delivery",
      "Enrollment and learner record handling in MSSQL",
      "ASP.NET backend services for content and user management",
      "Progress tracking foundation for monitoring learner completion",
      "Extensible LMS architecture for quizzes, assignments, and assessments",
    ],
    galleryImages: [
      "/projects/learn-gate/1.png",
      "/projects/learn-gate/2.png",
      "/projects/learn-gate/3.png",
      "/projects/learn-gate/4.png",
      "/projects/learn-gate/5.png",
    ],
    showGallery: true,
    image: "/projects/cover-images/learngate.png",
    tags: ["ASP.NET", "MSSQL"],
    featured: false,
    category: "SaaS",
    year: "2022",
  },
  {
    id: "car-price-predictor",
    title: "Car Price Predictor",
    description:
      "A machine learning project for predicting used car prices using feature-based regression analysis.",
    longDescription:
      "Built a predictive modeling workflow in Google Colab using XGBoost, and used SHAP for model explainability to understand the influence of key features on predicted car values.",
    keyFeatures: [
      "XGBoost regression model for used-car price prediction",
      "Feature preprocessing and model evaluation in Google Colab",
      "SHAP-based explainability to interpret feature impact",
      "Data-driven baseline for comparative model experiments",
      "Practical ML workflow from training to inference analysis",
    ],
    image: "/projects/cover-images/carprice-predictor.png",
    tags: ["XGBoost", "SHAP", "Google Colab"],
    featured: false,
    category: "ML/AI",
    year: "2024",
  },
];

export const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
