export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  articleUrl?: string;
  tags: string[];
  publishedAt: string;
  readTime: string;
  featured: boolean;
  category: string;
}

export const blogs: Blog[] = [
  {
    id: "building-resilient-distributed-systems-dotnet",
    title: "Building Resilient Distributed Systems in .NET",
    excerpt:
      "A practical introduction to building fault-tolerant distributed .NET systems with resilience patterns, communication strategies, and production-minded architecture.",
    content: `# Building Resilient Distributed Systems in .NET`,
    image: "/blogs_cover/distributed-systems.png",
    articleUrl:
      "https://medium.com/@sachinthachamindu26/building-resilient-distributed-systems-in-net-167e4c58744a",
    tags: [".NET", "Distributed Systems", "Resilience", "Backend"],
    publishedAt: "2025-02-10",
    readTime: "8 min read",
    featured: true,
    category: "Backend",
  },
  {
    id: "implementing-google-authentication-aspnet-core-mvc",
    title:
      "Implementing Google Authentication in ASP.NET Core MVC (Step-by-Step Guide)",
    excerpt:
      "A complete walkthrough for integrating Google OAuth 2.0 into ASP.NET Core MVC, covering setup, secure callbacks, and account flow implementation.",
    content: `# Implementing Google Authentication in ASP.NET Core MVC`,
    image: "/blogs_cover/google-auth.png",
    articleUrl:
      "https://medium.com/@sachinthachamindu26/implementing-google-oauth-2-0-authentication-in-net-8-mvc-step-by-step-guide-ee30ca859a0a",
    tags: ["ASP.NET Core", "Google OAuth", "Authentication", "Security"],
    publishedAt: "2025-01-28",
    readTime: "7 min read",
    featured: true,
    category: "Backend",
  },
  {
    id: "integrating-stripe-payment-gateway-dotnet",
    title: "Integrating Stripe Payment Gateway with .NET: A Step-by-Step Guide",
    excerpt:
      "Learn how to integrate Stripe payments into a .NET application with clear implementation steps, endpoint handling, and secure checkout considerations.",
    content: `# Integrating Stripe Payment Gateway with .NET`,
    image: "/blogs_cover/stripe.png",
    articleUrl:
      "https://medium.com/@sachinthachamindu26/integrating-stripe-payment-gateway-with-net-a-step-by-step-guide-c216baad024c",
    tags: [".NET", "Stripe", "Payments", "Web Development"],
    publishedAt: "2024-12-15",
    readTime: "7 min read",
    featured: true,
    category: "Backend",
  },
  {
    id: "understanding-oop-concepts-with-csharp",
    title: "Understanding Object-Oriented Programming (OOP) Concepts with C#",
    excerpt:
      "A beginner-friendly explanation of core OOP principles in C# including encapsulation, inheritance, polymorphism, and abstraction with practical examples.",
    content: `# Understanding Object-Oriented Programming (OOP) Concepts with C#`,
    image: "/blogs_cover/oop-concepts.png",
    articleUrl:
      "https://medium.com/@sachinthachamindu26/understanding-object-oriented-programming-oop-concepts-with-c-55bcdb16f4de",
    tags: ["C#", "OOP", "Programming Fundamentals"],
    publishedAt: "2024-11-30",
    readTime: "6 min read",
    featured: false,
    category: "Programming Fundamentals",
  },
  {
    id: "understanding-basic-sorting-algorithms",
    title: "Understanding Basic Sorting Algorithms",
    excerpt:
      "An accessible guide to common sorting algorithms, their behavior, and when to use each approach in problem-solving and coding interviews.",
    content: `# Understanding Basic Sorting Algorithms`,
    image: "/blogs_cover/sorting.png",
    articleUrl:
      "https://medium.com/@sachinthachamindu26/understanding-basic-sorting-algorithms-93cb5980cc43",
    tags: ["Algorithms", "Data Structures", "Problem Solving"],
    publishedAt: "2024-10-26",
    readTime: "6 min read",
    featured: false,
    category: "Programming Fundamentals",
  },
  {
    id: "introduction-to-cicd-pipeline-github-actions",
    title: "Introduction to CI/CD Pipeline Using GitHub Actions",
    excerpt:
      "A concise introduction to setting up automated build and deployment workflows with GitHub Actions to improve software delivery and reliability.",
    content: `# Introduction to CI/CD Pipeline Using GitHub Actions`,
    image: "/blogs_cover/cicd.png",
    articleUrl:
      "https://medium.com/@sachinthachamindu26/introduction-of-ci-cd-pipeline-using-github-actions-051b9a71d5b0",
    tags: ["CI/CD", "GitHub Actions", "DevOps", "Automation"],
    publishedAt: "2024-09-12",
    readTime: "5 min read",
    featured: false,
    category: "DevOps",
  },
];

export const featuredBlogs = blogs.filter((b) => b.featured).slice(0, 3);
