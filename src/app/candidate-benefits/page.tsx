// app/candidate-benefits/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Benefits for Candidates | Inventure Recruitment",
  description:
    "Discover how our platform empowers candidates with transparency, marketing tools, and AI-driven learning.",
};

const FeatureSection = ({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) => (
  <section id={id} className="border-t border-neutral-200 pt-12">
    <h2 className="text-3xl font-bold mb-8" style={{ color: "#006B4E" }}>
      {title}
    </h2>
    <div className="grid gap-8 md:grid-cols-2">{children}</div>
  </section>
);

const FunctionalityCard = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="space-y-2">
    <h3 className="text-xl font-semibold text-neutral-800">{title}</h3>
    <p className="text-neutral-600 leading-relaxed">{children}</p>
  </div>
);

const TechnicalNote = ({ children }: { children: React.ReactNode }) => (
  <aside
    className="mt-12 col-span-1 md:col-span-2 p-4 rounded-lg text-sm border-l-4"
    style={{ backgroundColor: "#F7F7F7", borderColor: "#00B285" }}
  >
    <strong style={{ color: "#006B4E" }}>Our Approach:</strong> {children}
  </aside>
);

export default function CandidateBenefits() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h1
        className="text-4xl sm:text-5xl font-bold text-center mb-16"
        style={{ color: "#006B4E" }}
      >
        A New Era for Candidates
      </h1>
      <div className="space-y-16">
        {/* REVENUE SHARING */}
        <FeatureSection
          id="revenue-sharing"
          title="Revenue Sharing & Market Transparency"
        >
          <FunctionalityCard title="Crowdsourced Salary Vault">
            Anonymously share your salary, equity, and company reviews. This
            collective data empowers you with real-world insights to negotiate
            better offers and make informed career decisions. For example, see
            the average salary for a &#34;Solar Engineer&#34; in California
            before you even apply.
          </FunctionalityCard>
          <FunctionalityCard title="Personal Earnings Dashboard">
            If you work with our recruiters on a contract basis, you get a clear
            dashboard to view your earnings history, see upcoming payout
            schedules, and access necessary tax forms. No more chasing invoices.
          </FunctionalityCard>
          <TechnicalNote>
            We would implement a secure submission system where user identity is
            decoupled from the data provided. Using a database like Supabase
            with Row-Level Security, we can enforce strict privacy rules. To
            present the data, we&#39;d use differential privacy algorithms,
            ensuring that individual contributions are never exposed, only
            aggregated market trends.
          </TechnicalNote>
        </FeatureSection>

        {/* MARKETING ENGINE */}
        <FeatureSection id="marketing-engine" title="Marketing Engine">
          <FunctionalityCard title="A/B Test Your Profile">
            Create two versions of your profile headline or summary and let our
            platform show you which one gets more attention from recruiters.
            This data-driven approach helps you present your best self.
          </FunctionalityCard>
          <FunctionalityCard title="Premium Profile Features">
            For a small fee, you can boost your profile&#39;s visibility, making
            you appear at the top of recruiter searches for a limited
            time—perfect for when you&#39;re actively looking for a new role.
          </FunctionalityCard>
          <FunctionalityCard title="Tailored Job Alerts">
            Our system learns what you&#39;re interested in. Instead of generic
            job blasts, you&#39;ll receive highly relevant job alerts based on
            your skills, experience, and the roles you engage with.
          </FunctionalityCard>
          <FunctionalityCard title="Targeted Newsletters">
            Subscribe to newsletters focused on specific companies or sectors
            within renewable energy. Stay informed about the employers you care
            about most.
          </FunctionalityCard>
          <TechnicalNote>
            This would be built by tracking engagement metrics (like profile
            views or clicks) on different content variations. A simple frontend
            dashboard, built with React/Next.js and a lightweight charting
            library, would then present these analytics to the user in a clear
            and actionable format.
          </TechnicalNote>
        </FeatureSection>

        {/* AI LEARNING PLATFORM */}
        <FeatureSection id="ai-learning" title="AI-Driven Learning Platform">
          <FunctionalityCard title="Zero-Day Skill Challenge">
            Take a quick, daily quiz that adapts to your skill level. The AI
            gets harder as you get better, creating a private skill rating that
            proves your expertise to recruiters without you having to say a
            word.
          </FunctionalityCard>
          <FunctionalityCard title="Personalized Course Recommendations">
            Our AI analyzes the most in-demand skills from job postings and
            suggests relevant courses for you to take directly on our platform.
            Stay ahead of the curve by learning what the market wants.
          </FunctionalityCard>
          <FunctionalityCard title="Track Your Progress">
            A clean dashboard shows your course progress and certifications
            earned on the platform. These verified credentials give recruiters
            confidence in your abilities.
          </FunctionalityCard>
          <FunctionalityCard title="Automated Learning Nudges">
            If a recruiter is searching for a rare skill you&#39;re close to
            having, our platform will &#34;nudge&#34; you with a suggestion to
            take a micro-course on that topic, directly connecting your learning
            to job opportunities.
          </FunctionalityCard>
          <TechnicalNote>
            For the AI elements, we would leverage a model like a fine-tuned GPT
            variant to generate and adapt quiz questions. The learning
            &#34;nudges&#34; would be handled by an automation workflow tool
            like n8n, which can run scheduled checks and trigger notifications
            without complex backend code, making it fast to implement and easy
            to maintain.
          </TechnicalNote>
        </FeatureSection>
      </div>
    </div>
  );
}
