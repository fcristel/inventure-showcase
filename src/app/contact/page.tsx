// app/contact/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Inventure Recruitment",
  description:
    "Get in touch with Inventure Recruitment. We have offices in Los Angeles, New York, and Chicago.",
};

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1
          className="text-3xl sm:text-4xl font-bold mb-6"
          style={{ color: "#006B4E" }}
        >
          Contact Us
        </h1>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          Ready to discuss your recruitment needs or interested in joining our
          platform? We&#39;d love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div
          className="text-center p-6 rounded-lg"
          style={{ backgroundColor: "#F7F7F7" }}
        >
          <h3
            className="text-lg font-semibold mb-2"
            style={{ color: "#006B4E" }}
          >
            Los Angeles
          </h3>
          <p className="text-neutral-600 text-sm">
            West Coast operations and tech recruitment hub
          </p>
        </div>
        <div
          className="text-center p-6 rounded-lg"
          style={{ backgroundColor: "#F7F7F7" }}
        >
          <h3
            className="text-lg font-semibold mb-2"
            style={{ color: "#006B4E" }}
          >
            New York
          </h3>
          <p className="text-neutral-600 text-sm">
            Financial district partnerships and executive search
          </p>
        </div>
        <div
          className="text-center p-6 rounded-lg"
          style={{ backgroundColor: "#F7F7F7" }}
        >
          <h3
            className="text-lg font-semibold mb-2"
            style={{ color: "#006B4E" }}
          >
            Chicago
          </h3>
          <p className="text-neutral-600 text-sm">
            Midwest renewable energy and industrial recruiting
          </p>
        </div>
      </div>

      <div
        className="text-center p-8 rounded-lg"
        style={{ backgroundColor: "#F0F8F5" }}
      >
        <h2
          className="text-2xl font-semibold mb-4"
          style={{ color: "#006B4E" }}
        >
          Get In Touch
        </h2>
        <p className="text-neutral-600 mb-6">
          Whether you&#39;re a company looking for talent or a professional
          seeking new opportunities, our team is here to help.
        </p>
        <a
          href="https://www.inventurerecruitment.com/contact-us/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 rounded-md text-white font-medium hover:opacity-90 transition-opacity"
          style={{ backgroundColor: "#006B4E" }}
        >
          Contact Our Team →
        </a>
        <div className="mt-6 pt-6 border-t border-neutral-200">
          <p className="text-sm text-neutral-500">
            Or email us directly at{" "}
            <a
              href="mailto:contact@inventurerecruitment.com"
              className="hover:underline"
              style={{ color: "#006B4E" }}
            >
              contact@inventurerecruitment.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
