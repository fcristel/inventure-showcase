// app/page.tsx
import Link from "next/link";
import { Metadata, Viewport } from "next";

const LIVE_URL = "https://inventure-showcase.netlify.app";

export const viewport: Viewport = {
  themeColor: "#006B4E",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

// --- SEO METADATA ---
export const metadata: Metadata = {
  // Set the base URL for the site
  metadataBase: new URL(LIVE_URL),

  title: "Inventure Recruitment - Recruiting Without Limits",
  description:
    "A new model for recruitment in the renewable energy sector, combining revenue sharing, a marketing engine, a broker community, and an AI-driven learning platform.",

  // Keywords for search engines
  keywords: [
    "renewable energy recruitment",
    "tech recruitment",
    "AI recruitment",
    "recruitment platform",
    "clean energy jobs",
    "solar jobs",
    "wind energy careers",
  ],

  // Information about the authors and publisher
  authors: [
    {
      name: "Inventure Recruitment",
      url: "https://www.inventurerecruitment.com",
    },
  ],
  creator: "Cristian Furcila Mihalache",
  publisher: "Inventure Recruitment",

  // Robots instructions for search engine crawlers
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Open Graph metadata for social sharing (Facebook, LinkedIn, etc.)
  openGraph: {
    title: "Inventure Recruitment - Recruiting Without Limits",
    description: "A new recruitment model for the renewable energy sector.",
    url: LIVE_URL,
    siteName: "Inventure Recruitment",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Inventure Recruitment - A new model for recruitment",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter card metadata
  twitter: {
    card: "summary_large_image",
    title: "Inventure Recruitment - Recruiting Without Limits",
    description: "A new recruitment model for the renewable energy sector.",
    creator: "@fcristel",
    images: ["/og-image.jpg"],
  },
  // Icons and manifest - to be created
  // @TODO create icons and manifest
  //manifest: "/site.webmanifest",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

const features = [
  {
    id: "revenue-sharing",
    name: "Revenue Sharing",
    description:
      "Candidates can anonymously share salaries and reviews, creating a transparent, Glassdoor-like market. Recruiters leverage this data to craft competitive offers and track commission shares.",
  },
  {
    id: "marketing-engine",
    name: "Marketing Engine",
    description:
      "Empower candidates to A/B test their CVs and profiles for maximum visibility. Enable recruiters to split-test job descriptions to find messaging that resonates and attracts top talent.",
  },
  {
    id: "community",
    name: "Competitive Broker Community",
    description:
      "Candidates join a network focused on growth and learning. Recruiters gain exclusive access to a real-time feed for insights, skill-swaps, and peer mentorship.",
  },
  {
    id: "ai-learning",
    name: "AI-Driven Learning Platform",
    description:
      "Engage candidates with adaptive daily skill challenges that establish proficiency. Provide recruiters with live talent heat-maps to spot emerging skill trends by location.",
  },
];

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <section className="text-center mb-24">
        <h1
          className="text-4xl sm:text-5xl font-bold tracking-tight mb-3"
          style={{ color: "#006B4E" }}
        >
          Recruiting Without Limits.
        </h1>
        <h2 className="text-2xl sm:text-3xl font-medium text-neutral-700 mb-6">
          Speed and Scale.
        </h2>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
          We’re building a new model for recruitment. One that combines revenue
          sharing, a marketing engine, a competitive broker community, and an
          AI-driven learning platform. This is recruitment rewritten for the
          modern era.
        </p>
      </section>

      <div className="space-y-20">
        {features.map((feature) => (
          <section key={feature.id} id={feature.id}>
            <h3
              className="text-2xl font-semibold mb-4 border-l-4 pl-4"
              style={{ borderColor: "#006B4E" }}
            >
              {feature.name}
            </h3>
            <p className="text-neutral-600 mb-6">{feature.description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`/candidate-benefits#${feature.id}`}
                className="px-5 py-2.5 rounded-md text-center font-medium text-white transition-transform hover:scale-105"
                style={{ backgroundColor: "#006B4E" }}
              >
                Explore Candidate Benefits
              </Link>
              <Link
                href={`/recruiter-benefits#${feature.id}`}
                className="px-5 py-2.5 rounded-md text-center font-medium transition-colors"
                style={{
                  color: "#006B4E",
                  backgroundColor: "#E6F4F0", // A light green tint
                }}
              >
                Explore Recruiter Benefits
              </Link>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
