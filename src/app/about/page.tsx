// app/about/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Inventure Recruitment",
  description:
    "Learn about Inventure Recruitment's mission in renewable energy talent acquisition and our team across the USA.",
};

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1
          className="text-3xl sm:text-4xl font-bold mb-6"
          style={{ color: "#006B4E" }}
        >
          About Inventure Recruitment
        </h1>
        <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
          We are a recruitment agency that focuses purely on renewable energy.
          We build long-term partnerships with companies to provide the high
          caliber candidates they need — and shape impactful recruitment
          processes for successful growth.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold" style={{ color: "#006B4E" }}>
            Our Mission
          </h2>
          <p className="text-neutral-600">
            As specialists driven by a passion for renewables and tech, we reach
            the rare talent that organizations need. An entrepreneurially minded
            and energetic firm, we work with globally recognized names who share
            the same progressive values as us.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold" style={{ color: "#006B4E" }}>
            Our Reach
          </h2>
          <p className="text-neutral-600">
            We recruit for roles across the USA, with operatives working from
            offices in Los Angeles, New York and Chicago. Our network spans the
            entire renewable energy ecosystem.
          </p>
        </div>
      </div>

      <div
        className="text-center p-8 rounded-lg"
        style={{ backgroundColor: "#F7F7F7" }}
      >
        <h2 className="text-xl font-semibold mb-4" style={{ color: "#006B4E" }}>
          Meet Our Team
        </h2>
        <p className="text-neutral-600 mb-6">
          Learn more about the people behind Inventure Recruitment and our
          commitment to transforming renewable energy hiring.
        </p>
        <a
          href="https://www.inventurerecruitment.com/about-us/meet-the-team/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 rounded-md text-white font-medium hover:opacity-90 transition-opacity"
          style={{ backgroundColor: "#006B4E" }}
        >
          Meet the Team →
        </a>
      </div>
    </div>
  );
}
