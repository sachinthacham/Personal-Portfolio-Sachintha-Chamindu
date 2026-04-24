export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  type: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  logo: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  location: string;
  gpa?: string;
  description: string;
  achievements: string[];
  logo: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issuedDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  certificateImage?: string;
  showVerifyLink?: boolean;
  logo: string;
  category: string;
}

export const workExperience: WorkExperience[] = [
  {
    id: "software-engineer-intern-ceb",
    company: "Ceylon Electricity Board (CEB)",
    role: "Software Engineer Intern",
    type: "Internship",
    startDate: "1 Apr 2025",
    endDate: "29 Sep 2025",
    location: "Sri Lanka",
    description:
      "Completed a 6-month internship while pursuing BSc (Hons) in Information Technology at the University of Moratuwa. Contributed to CEB INFO and CEB Reporting System initiatives with end-to-end ownership across frontend development, backend APIs, deployment, and AI-assisted feature delivery.",
    achievements: [
      "Redesigned the CEB INFO website with a modern, responsive UI",
      "Developed a CMS for uploading examination results and deployed it on Nginx",
      "Built and integrated REST APIs using Node.js for CEB INFO workflows",
      "Developed the CEB Reporting System for solar customer, billing, and payment reports",
      "Implemented APIs using .NET Framework with React, TypeScript, and Tailwind CSS frontend modules",
      "Collaborated on a RAG-architecture chatbot implementation for the CEB INFO website",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      ".NET Framework",
      "MongoDB",
      "Oracle",
      "Nginx",
      "Vercel",
      "GitHub",
      "RAG Architecture",
    ],
    logo: "/companies/bigtech.svg",
  },
];

export const education: Education[] = [
  {
    id: "bsc-hons-it-uom",
    institution: "University of Moratuwa",
    degree: "Bachelor of Science (Hons)",
    field: "Information Technology",
    startDate: "2022",
    endDate: "Present",
    location: "Moratuwa, Sri Lanka",
    gpa: "3.49 / 4.0",
    description:
      "Final-year undergraduate pursuing BSc (Hons) in Information Technology, with a strong academic track record and hands-on involvement in both technical and student-led initiatives.",
    achievements: [
      "Maintained a strong cumulative GPA of 3.49 / 4.0",
      "Actively participated in university clubs including Leo Club",
      "Collaborated on community projects such as Shilpasara",
      "Participated in coding competitions including Coderush and Devthon",
      "Served in organizing committees for multiple university events",
    ],
    logo: "/education/university.svg",
  },
  {
    id: "ananda-national-college-chilaw",
    institution: "Ananda National College, Chilaw",
    degree: "G.C.E. Advanced Level",
    field: "Science Stream",
    startDate: "",
    endDate: "",
    location: "Chilaw, Sri Lanka",
    description:
      "Completed primary and secondary education with a strong focus on mathematics and science, building the academic foundation for higher studies in technology.",
    achievements: [
      "Successfully completed G.C.E. Advanced Level in the Science stream",
      "Built a strong base in analytical thinking, problem solving, and quantitative subjects",
      "Actively participated in school-level academic and extracurricular activities",
    ],
    logo: "/education/university.svg",
  },
];

export const certificates: Certificate[] = [
  {
    id: "aspnet-experienced-developers",
    title: "ASP.NET for Experienced Developers",
    issuer: "Coursera",
    issuedDate: "2024",
    certificateImage: "/certificates/asp.net for experienced developers.png",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/specialization/KFX6VWNUVLRL?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=s12n",
    showVerifyLink: true,
    logo: "/certs/meta.svg",
    category: "Backend",
  },
  {
    id: "mongodb-associate-dev",
    title: "Backend Development Using ASP.NET",
    issuer: "Coursera",
    issuedDate: "Apr 2022",
    credentialId: "MDB-AD-12345",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/KYHC34CR0K57?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
    certificateImage: "/certificates/backend development using asp.net.png",
    showVerifyLink: true,
    logo: "/certs/mongodb.svg",
    category: "Backend",
  },
  {
    id: "aspnet-microservices-deployment",
    title: "Microservices and Deployment Using ASP.NET",
    issuer: "Coursera",
    issuedDate: "2024",
    certificateImage:
      "/certificates/microservices and deployment using asp.net.png",
    showVerifyLink: true,
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/HS4FLQSCKXY2",
    logo: "/certs/kubernetes.svg",
    category: "Backend",
  },
  {
    id: "dotnet-core-microservices",
    title: ".NET Core Microservices",
    issuer: "Udemy",
    issuedDate: "2024",
    certificateImage: "/certificates/dotnet core microservices.png",
    showVerifyLink: true,
    logo: "/certs/kubernetes.svg",
    category: "Backend",
    credentialUrl:
      "https://www.udemy.com/certificate/UC-fe0054b4-024f-4f43-aee4-3004590260f5/",
  },
  {
    id: "aws-solutions-architect",
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    issuedDate: "Mar 2024",
    expiryDate: "Mar 2027",
    credentialId: "AWS-PSA-12345",
    credentialUrl: "https://aws.amazon.com/verify",
    certificateImage: "/certificates/aws cloud practitioner.png",
    showVerifyLink: true,
    logo: "/certs/aws.svg",
    category: "Cloud",
  },
  {
    id: "gcp-professional-de",
    title: "AWS Essential Training for Developers",
    issuer: "Linkedin",
    issuedDate: "Jan 2023",
    expiryDate: "Jan 2025",
    credentialId: "GCP-PDE-12345",
    credentialUrl: "https://google.com/verify",
    certificateImage: "/certificates/aws essential training for developers.png",
    showVerifyLink: false,
    logo: "/certs/gcp.svg",
    category: "Cloud",
  },
  {
    id: "ckad",
    title: "Containerize Applications with Docker",
    issuer: "Linkedin",
    issuedDate: "Aug 2023",
    expiryDate: "Aug 2026",
    credentialId: "CKAD-2023-12345",
    credentialUrl: "https://ti.to/verify",
    certificateImage: "/certificates/containarize applications with docker.png",
    showVerifyLink: false,
    logo: "/certs/kubernetes.svg",
    category: "DevOps",
  },
  {
    id: "docker-essential-training",
    title: "Docker Essential Training",
    issuer: "Linkedin",
    issuedDate: "2024",
    certificateImage: "/certificates/docker essential training.png",
    showVerifyLink: false,
    logo: "/certs/kubernetes.svg",
    category: "DevOps",
  },
  {
    id: "tensorflow-developer",
    title: "Machine Learning",
    issuer: "Udemy-standford",
    issuedDate: "Nov 2022",
    credentialId: "TF-DEV-12345",
    certificateImage: "/certificates/machine learning.png",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/specialization/MXZEDMYNZGZL",
    showVerifyLink: true,
    logo: "/certs/tensorflow.svg",
    category: "AI/ML",
  },
  {
    id: "supervised-ml",
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "Udemy-standford",
    issuedDate: "2024",
    certificateImage: "/certificates/supervised ML.png",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/F7945HODF1ST",
    showVerifyLink: false,
    logo: "/certs/tensorflow.svg",
    category: "AI/ML",
  },
  {
    id: "unsupervised-learning",
    title: "Unsupervised Learning, Recommenders and Reinforcement Learning",
    issuer: "Udemy-standford",
    issuedDate: "2024",
    certificateImage: "/certificates/unsupervised learning.png",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/XJUFHV7T165W",
    showVerifyLink: false,
    logo: "/certs/tensorflow.svg",
    category: "AI/ML",
  },
  {
    id: "advanced-learning-algorithms",
    title: "Advanced Learning Algorithms",
    issuer: "Udemy-standford",
    issuedDate: "2024",
    certificateImage: "/certificates/advanced learning algorithms.png",
    showVerifyLink: false,
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/D10W0ZRNF0W1",
    logo: "/certs/tensorflow.svg",
    category: "AI/ML",
  },
  {
    id: "software-engineer-intern",
    title: "Software Engineer Intern",
    issuer: "HackerRank",
    issuedDate: "2024",
    certificateImage: "/certificates/software engineer intern.png",
    showVerifyLink: false,
    logo: "/certs/meta.svg",
    category: "Software Engineering",
  },

  {
    id: "career-essentials-software-development",
    title:
      "Career Essentials in Software Development by Microsoft and LinkedIn",
    issuer: "Microsoft & LinkedIn",
    issuedDate: "2024",
    certificateImage:
      "/certificates/career essentials in software development by microaoft and linkedin.png",
    showVerifyLink: false,
    logo: "/certs/meta.svg",
    category: "Software Engineering",
  },
  {
    id: "meta-react",
    title: "Career Essentials in GitHub Professional Certificate",
    issuer: "Linkedin",
    issuedDate: "Jun 2022",
    credentialId: "META-FE-2022",
    credentialUrl: "https://coursera.org/verify",
    certificateImage:
      "/certificates/career essentials in github professional certificate.png",
    showVerifyLink: false,
    logo: "/certs/meta.svg",
    category: "Software Engineering",
  },

  {
    id: "agile-software-development",
    title: "Agile Software Development",
    issuer: "Linkedin",
    issuedDate: "2024",
    certificateImage: "/certificates/agile software development.png",
    showVerifyLink: false,
    logo: "/certs/kubernetes.svg",
    category: "Software Engineering",
  },

  {
    id: "csharp-dotnet-developers",
    title: "C# for .NET Developers",
    issuer: "coursera",
    issuedDate: "2024",
    certificateImage: "/certificates/c sharp for dotnet developers.png",
    showVerifyLink: false,
    logo: "/certs/meta.svg",
    category: "Backend",
  },
  {
    id: "csharp-intermidiate",
    title: "C# Intermediate",
    issuer: "sololearn",
    issuedDate: "2024",
    certificateImage: "/certificates/c sharp intermidiate.png",
    showVerifyLink: false,
    logo: "/certs/meta.svg",
    category: "Backend",
  },
  {
    id: "sql-advanced",
    title: "SQL Advanced",
    issuer: "hackerrank",
    issuedDate: "2024",
    certificateImage: "/certificates/sql advanced.png",
    showVerifyLink: false,
    logo: "/certs/mongodb.svg",
    category: "Database",
  },
];
