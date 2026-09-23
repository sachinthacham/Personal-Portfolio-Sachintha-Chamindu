import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

// Body copy
const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

// Headings
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sachintha Chamindu",
  description:
    "Full-stack software engineer specializing in building exceptional digital experiences. Explore my projects, blogs, and professional journey.",
  keywords: [
    "software engineer",
    "full-stack developer",
    "portfolio",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Sachintha Chamindu" }],
  icons: {
    icon: "/hero-removebg.png?v=5",
    shortcut: "/hero-removebg.png?v=5",
    apple: "/hero-removebg.png?v=5",
  },
  openGraph: {
    title: "Sachintha Chamindu",
    description:
      "Full-stack software engineer specializing in building exceptional digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jakarta.variable}`}
    >
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/hero-removebg.png?v=5" />
        <link rel="shortcut icon" type="image/png" href="/hero-removebg.png?v=5" />
        <link rel="apple-touch-icon" href="/hero-removebg.png?v=5" />
      </head>
      <body className="min-h-screen antialiased font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
