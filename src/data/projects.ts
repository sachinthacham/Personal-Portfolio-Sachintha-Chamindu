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
    id: "rgb-fusion-engine",
    githubUrl: "https://github.com/sachinthacham/RGB-Based-Fusion-Engine",
    title: "RGB Based Fusion Engine",
    description:
      "An adaptive image fusion engine that combines EDSR and SRGAN super-resolution outputs to produce sharper, more detailed Sentinel-2 satellite imagery of coastal regions.",
    longDescription:
      "The RGB Based Fusion Engine improves low-resolution Sentinel-2 satellite imagery for coastal and shoreline analysis. Sentinel-2 scenes are split into patches and upscaled 4x (64×64 to 256×256) with two super-resolution models: EDSR, which preserves structure and accurate colour, and SRGAN, which recovers realistic high-frequency texture. Rather than choosing one model, the engine fuses both adaptively, pixel by pixel. It builds a water mask from HSV channel analysis, draws a buffer zone along the shoreline, and uses local texture variance to split land into textured and smooth regions. Each region then takes the best pixels from EDSR or SRGAN with its own fusion weights. A sensitivity analysis tests combinations of buffer size, texture threshold, and fusion weights, and keeps the combination with the lowest MAE and RMSE.",
    keyFeatures: [
      "4x super-resolution of Sentinel-2 patches using both EDSR and SRGAN models",
      "HSV channel analysis to generate an accurate water/land mask",
      "Region classification into shoreline buffer, textured land, and smooth land",
      "Local texture variance analysis to guide region-specific pixel selection",
      "Adaptive pixel-level RGB fusion that combines EDSR structure with SRGAN detail",
      "Sensitivity analysis and parameter optimisation evaluated with MAE and RMSE",
    ],
    galleryImages: [
      "/projects/rgb-fusion/01-enhancement-results.png",
      "/projects/rgb-fusion/02-adaptive-fusion-pipeline.png",
      "/projects/rgb-fusion/03-hsv-water-mask.png",
      "/projects/rgb-fusion/04-region-classification-fusion.png",
    ],
    showGallery: true,
    image: "/projects/cover-images/rgb-fusion-engine.png",
    tags: ["Python", "EDSR", "SRGAN", "Sentinel-2", "Computer Vision"],
    featured: false,
    category: "ML/AI",
    year: "2026",
  },
  {
    id: "supportiq-ai-customer-support",
    githubUrl: "https://github.com/sachinthacham/AI-Powered-Customer-Support",
    title: "SupportIQ - AI-Powered Customer Support",
    description:
      "An AI help-desk that triages support tickets, escalates uncertain cases to humans, and answers policy questions from the company knowledge base with cited sources.",
    longDescription:
      "SupportIQ is a full-stack help-desk application that shows how AI fits into a production-oriented system. Agents manage tickets in a Next.js web app backed by an ASP.NET Core API built with Clean Architecture and CQRS (MediatR). With one click, the AI layer classifies a ticket's category, priority, and sentiment, writes a summary and tags, and drafts a reply, all returned as strictly validated JSON. Tickets are escalated to a human automatically when the AI's confidence is low. Policy questions are answered with RAG over uploaded documents stored in Qdrant, citing the exact passages used and answering \"I don't know\" rather than guessing. The AI provider can be switched (Google Gemini or OpenAI) through configuration alone. The system uses JWT auth with httpOnly session cookies and Polly for resilience, is covered by xUnit and Testcontainers tests, and runs with one Docker Compose command.",
    keyFeatures: [
      "One-click AI triage: category, priority, sentiment, summary, tags, and a draft reply as validated structured JSON",
      "Automatic human escalation when AI confidence falls below 70%, with the reason shown",
      "RAG-powered Ask AI grounded in the knowledge base, with numbered citations and relevance scores",
      "Knowledge base ingestion: policy documents are chunked, embedded, and indexed in the Qdrant vector DB",
      "Provider-agnostic AI layer (Gemini or OpenAI) behind clean interfaces, with Polly retry and circuit breaker",
      "ASP.NET Core + EF Core + SQL Server backend, JWT auth, Serilog, health checks, and 55 automated tests",
    ],
    galleryImages: [
      "/projects/customer-support/login.png",
      "/projects/customer-support/tickets.png",
      "/projects/customer-support/knowledge-base.png",
      "/projects/customer-support/ask-ai.png",
    ],
    showGallery: true,
    image: "/projects/cover-images/supportiq.png",
    tags: ["ASP.NET Core", "Next.js", "SQL Server", "Qdrant", "RAG", "Docker"],
    featured: false,
    category: "ML/AI",
    year: "2026",
  },
  {
    id: "recruitpro-recruitment-platform",
    githubUrl: "https://github.com/sachinthacham/RecruitPro-Job-Recruitment-Platform",
    title: "RecruitPro - Job Recruitment Platform",
    description:
      "A multi-tenant recruitment platform covering the full hiring pipeline, from job posting and applications to interviews and offers.",
    longDescription:
      "RecruitPro is a full-stack, multi-tenant recruitment platform. Candidates search and apply for jobs, recruiters run the whole hiring pipeline, and platform admins oversee every tenant. I built the frontend with Angular 19 (standalone components, signals, lazy-loaded routes) and the backend with NestJS 11 and Prisma on PostgreSQL, using Redis for refresh-token rotation. The platform enforces role-based access across five roles, row-level tenant isolation, and hardened API conventions. It ships with Docker, a GitHub Actions CI/CD pipeline, and Azure App Service hosting.",
    keyFeatures: [
      "Public job board with keyword, location, remote-policy, employment-type, and experience filters",
      "Applicant pipeline from applied to hired/rejected, with notes and status history",
      "Interview scheduling with interviewer assignment, feedback ratings, and hire recommendations",
      "Offer management, recruiting analytics, and subscription plans with job-posting limits",
      "JWT + Redis refresh-token rotation, five-role RBAC, and row-level multi-tenant isolation",
      "Platform admin console with user management, company overview, and filterable audit logs",
    ],
    galleryImages: [
      "/projects/recruitpro/Screenshot%202026-09-21%20180035.png",
      "/projects/recruitpro/Screenshot%202026-09-21%20180057.png",
      "/projects/recruitpro/Screenshot%202026-09-21%20180155.png",
      "/projects/recruitpro/Screenshot%202026-09-21%20180213.png",
      "/projects/recruitpro/Screenshot%202026-09-21%20180235.png",
      "/projects/recruitpro/Screenshot%202026-09-21%20180310.png",
      "/projects/recruitpro/Screenshot%202026-09-21%20180431.png",
      "/projects/recruitpro/Screenshot%202026-09-21%20180457.png",
      "/projects/recruitpro/Screenshot%202026-09-21%20180538.png",
    ],
    showGallery: true,
    image: "/projects/cover-images/recruitpro.png",
    tags: ["Angular", "NestJS", "PostgreSQL", "Prisma", "Redis", "Docker"],
    featured: false,
    category: "SaaS",
    year: "2026",
  },
  {
    id: "swiftship-package-delivery",
    githubUrl: "https://github.com/sachinthacham/SwiftShip-package-delivery",
    title: "SwiftShip - Package Delivery System",
    description:
      "A microservices-based courier platform with customer, courier, and dispatcher portals, live shipment tracking, and nearest-driver auto-assignment.",
    longDescription:
      "SwiftShip is a full-stack package delivery platform built on a .NET 8 microservices backend and an Angular 19 frontend. Five independent services (Identity, Package, Shipment, Tracking, and Driver) sit behind a YARP API Gateway. Each service has its own SQL Server database and Clean Architecture layers. Services communicate over gRPC for package validation, internal REST for nearest-driver lookup, and RabbitMQ with a transactional outbox for tracking events. SignalR pushes live status updates to the frontend. The app has separate portals for customers, couriers, and admins/dispatchers, covering the full flow from shipment creation and payment to dispatch, proof of delivery, and analytics.",
    keyFeatures: [
      "Five .NET 8 microservices behind a YARP API Gateway, each with its own SQL Server database",
      "gRPC, internal REST, and RabbitMQ with a transactional outbox for reliable cross-service events",
      "Public tracking lookup and live shipment timelines via SignalR, with route maps using Leaflet",
      "Dispatch board with manual driver assignment and nearest-available-driver auto-assign",
      "Customer portal for shipments, invoices, Stripe checkout, saved addresses, and ratings",
      "Courier portal with delivery attempts, proof of delivery, and an admin analytics dashboard",
    ],
    galleryImages: [
      "/projects/package-delivery/01-landing.png",
      "/projects/package-delivery/02-public-tracking.png",
      "/projects/package-delivery/03-login.png",
      "/projects/package-delivery/10-customer-dashboard.png",
      "/projects/package-delivery/11-customer-shipments.png",
      "/projects/package-delivery/12-customer-shipment-detail.png",
      "/projects/package-delivery/13-customer-create-shipment.png",
      "/projects/package-delivery/14-customer-invoices.png",
      "/projects/package-delivery/15-customer-addresses.png",
      "/projects/package-delivery/20-courier-dashboard.png",
      "/projects/package-delivery/21-courier-deliveries.png",
      "/projects/package-delivery/22-courier-delivery-detail.png",
      "/projects/package-delivery/23-courier-route-map.png",
      "/projects/package-delivery/30-admin-dashboard.png",
      "/projects/package-delivery/31-admin-dispatch-board.png",
      "/projects/package-delivery/32-admin-shipments.png",
      "/projects/package-delivery/33-admin-shipment-detail.png",
      "/projects/package-delivery/34-admin-couriers.png",
      "/projects/package-delivery/35-admin-customers.png",
      "/projects/package-delivery/36-admin-analytics.png",
    ],
    showGallery: true,
    image: "/projects/cover-images/swiftship.png",
    tags: ["ASP.NET Core", "Microservices", "Angular", "SQL Server", "RabbitMQ", "gRPC"],
    featured: false,
    category: "Logistics",
    year: "2026",
  },
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
