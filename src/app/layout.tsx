// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inventure Recruitment - Recruiting Without Limits",
  description:
    "We’re building a new model for recruitment. One that combines revenue sharing, a marketing engine, a competitive broker community, and an AI-driven learning platform.",
  keywords:
    "renewable energy recruitment, tech recruitment, full-stack developer jobs, recruitment platform, AI in recruitment",
  authors: [{ name: "Inventure Recruitment" }],
  creator: "Cristian Furcila Mihalache",
  publisher: "Inventure Recruitment",
};

const navigation = [
  { name: "Home", href: "/" },
  { name: "Revenue Sharing", href: "/#revenue-sharing" },
  { name: "Marketing Engine", href: "/#marketing-engine" },
  { name: "Community", href: "/#community" },
  { name: "AI Learning", href: "/#ai-learning" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-white text-neutral-800 flex flex-col min-h-screen">
        <header className="sticky top-0 bg-white/80 backdrop-blur-md z-50 border-b border-neutral-200">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="text-2xl font-bold"
                style={{ color: "#006B4E" }}
              >
                Inventure
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="/login"
                className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="px-4 py-2 rounded-md text-sm font-medium text-white transition-colors"
                style={{ backgroundColor: "#006B4E" }}
              >
                Sign Up
              </Link>
            </div>
            {/* A simple mobile menu button can be added here */}
          </nav>
        </header>

        <main className="flex-grow w-full">{children}</main>

        <footer className="bg-neutral-50 border-t border-neutral-200">
          <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center text-sm text-neutral-500">
            <div className="flex justify-center space-x-6 mb-4">
              <Link href="/about" className="hover:text-neutral-900">
                About Us
              </Link>
              <Link href="/contact" className="hover:text-neutral-900">
                Contact
              </Link>
              <Link
                href="/candidate-benefits"
                className="hover:text-neutral-900"
              >
                Benefits for Candidates
              </Link>
              <Link
                href="/recruiter-benefits"
                className="hover:text-neutral-900"
              >
                Benefits for Recruiters
              </Link>
            </div>
            <p>
              &copy; {new Date().getFullYear()} Inventure Recruitment. All
              rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
