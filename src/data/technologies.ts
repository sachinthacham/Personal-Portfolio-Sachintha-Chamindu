export interface Technology {
  name: string;
  category: string;
  icon: string;
}

export const technologies: Technology[] = [
  // Languages
  
  { name: "C#",          category: "Languages", icon: "csharp"     },
  { name: "JavaScript",  category: "Languages", icon: "javascript" },
  { name: "TypeScript",  category: "Languages", icon: "typescript" },

  // Frontend
  { name: "React.js",    category: "Frontend",  icon: "react"      },
  { name: "Next.js",     category: "Frontend",  icon: "nextjs"     },
  { name: "Tailwind",    category: "Frontend",  icon: "tailwind"   },
  { name: "Redux",       category: "Frontend",  icon: "redux"      },

  // Backend
  { name: "ASP.NET",     category: "Backend",   icon: "aspnet"     },
  { name: "NestJS",      category: "Backend",   icon: "nestjs"     },
  { name: "Node.js",     category: "Backend",   icon: "nodejs"     },
  
  

  // Database
  { name: "MSSQL",       category: "Database",  icon: "mssql"      },
  { name: "MySQL",       category: "Database",  icon: "mysql"      },
  { name: "MongoDB",     category: "Database",  icon: "mongodb"    },

  // DevOps
  { name: "Docker",      category: "DevOps",    icon: "docker"     },
  { name: "CI/CD",       category: "DevOps",    icon: "cicd"       },
  { name: "AWS",         category: "DevOps",    icon: "aws"        },
  { name: "Azure",         category: "DevOps",    icon: "azure"        },
];

export const techCategories = ["All", "Languages", "Frontend", "Backend", "Database", "DevOps"];

const DEV = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const SI  = "https://cdn.simpleicons.org";

export const techIcons: Record<string, string> = {
  // devicons — more reliable for these specific logos
  java:       `${DEV}/java/java-original.svg`,
  csharp:     `${DEV}/csharp/csharp-original.svg`,
  mssql:      `${DEV}/microsoftsqlserver/microsoftsqlserver-original.svg`,
  aws:        `${DEV}/amazonwebservices/amazonwebservices-plain-wordmark.svg`,
  nextjs:     `${DEV}/nextjs/nextjs-original.svg`,
  react:      `${DEV}/react/react-original.svg`,
  nodejs:     `${DEV}/nodejs/nodejs-original.svg`,
  mongodb:    `${DEV}/mongodb/mongodb-original.svg`,
  mysql:      `${DEV}/mysql/mysql-original.svg`,
  docker:     `${DEV}/docker/docker-original.svg`,

  // Simple Icons — work fine for these
  javascript: `${SI}/javascript/F7DF1E`,
  typescript: `${SI}/typescript/3178C6`,
  tailwind:   `${SI}/tailwindcss/06B6D4`,
  redux:      `${SI}/redux/764ABC`,
  nestjs:     `${SI}/nestjs/E0234E`,
  aspnet:     `${SI}/dotnet/512BD4`,
  cicd:       `${SI}/githubactions/2088FF`,
};
