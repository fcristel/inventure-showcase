// app/layout.tsx
"use client";

import "./globals.css";
import Link from "next/link";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

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
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <html lang="en" data-scroll-behavior="smooth" className={inter.className}>
      <body className="bg-white text-neutral-800 flex flex-col min-h-screen">
        <header className="sticky top-0 bg-white/80 backdrop-blur-md z-50 border-b border-neutral-200">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src="/inventure-logo-white_nav.svg"
                  alt="Inventure Recruitment Logo"
                  width={150}
                  height={40}
                  className="h-8 w-auto"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
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

            {/* Desktop Auth Buttons */}
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

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-neutral-600 hover:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </nav>

          {/* Mobile Menu, show/hide based on menu state. */}
          {isMobileMenuOpen && (
            <div className="md:hidden" id="mobile-menu">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-white hover:bg-green-700"
                    onClick={() => setMobileMenuOpen(false)} // Close menu on click
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="pt-4 pb-3 border-t border-neutral-200">
                <div className="px-2 space-y-1">
                  <Link
                    href="/login"
                    className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-white hover:bg-green-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-white hover:bg-green-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          )}
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
