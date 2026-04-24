import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
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
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable}`}
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
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
