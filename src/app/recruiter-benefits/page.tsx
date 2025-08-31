// app/recruiter-benefits/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Benefits for Recruiters | Inventure Recruitment",
  description:
    "See how our platform gives recruiters an edge with data-driven insights, advanced marketing tools, and a private broker community.",
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

export default function RecruiterBenefits() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h1
        className="text-4xl sm:text-5xl font-bold text-center mb-16"
        style={{ color: "#006B4E" }}
      >
        A Strategic Advantage for Recruiters
      </h1>
      <div className="space-y-16">
        {/* REVENUE SHARING */}
        <FeatureSection
          id="revenue-sharing"
          title="Revenue Sharing & Market Intelligence"
        >
          <FunctionalityCard title="Live Salary Benchmarking">
            Access our anonymized, real-time salary vault to ensure your offers
            are always competitive. The system even provides &#34;outlier
            alerts&#34; if your proposed offer is significantly below the market
            average for that role.
          </FunctionalityCard>
          <FunctionalityCard title="Commission & Placement Tracking">
            A dedicated dashboard allows you to log placements, set revenue
            share rates with other brokers, and track your commissions
            automatically. Generate reports with a single click.
          </FunctionalityCard>
          <FunctionalityCard title="Company Insight Pass">
            Offer your clients a paid &#34;Insight Pass&#34; to benchmark their
            compensation packages against the anonymized data on our platform,
            creating a new revenue stream for you.
          </FunctionalityCard>
          <FunctionalityCard title="Automated Comp-Insight Pipeline">
            Our system automatically scrapes new salary data nightly and uses AI
            to structure it into clear, usable compensation ranges, so the data
            you see is always fresh.
          </FunctionalityCard>
          <TechnicalNote>
            We&#39;d build a straightforward dashboard connected to our secure
            database. For financial tracking, integrating with Stripe Connect
            would handle payouts and commission splits reliably. The automated
            data pipeline could be a simple serverless function (e.g., a
            Supabase Edge Function or Netlify Function) that runs on a schedule.
          </TechnicalNote>
        </FeatureSection>

        {/* MARKETING ENGINE */}
        <FeatureSection id="marketing-engine" title="Marketing Engine">
          <FunctionalityCard title="A/B Test Job Descriptions">
            Don&#39;t guess which job title works best. Test two versions of
            your job ad and see which one gets more high-quality applicants. Let
            data guide your marketing spend.
          </FunctionalityCard>
          <FunctionalityCard title="Automated Email Campaigns">
            Create simple email sequences to nurture leads. For example,
            automatically send a follow-up to candidates who viewed a job but
            didn&#39;t apply.
          </FunctionalityCard>
          <FunctionalityCard title="Engagement Analytics">
            A clear dashboard shows you the reach and engagement of your job
            postings. See views, click-through rates, and application numbers
            all in one place.
          </FunctionalityCard>
          <FunctionalityCard title="Promote Your Jobs">
            Easily post jobs for promotion within the platform, targeting the
            right candidates based on their skills and interests.
          </FunctionalityCard>
          <TechnicalNote>
            The A/B testing can be implemented on the client-side using a
            lightweight analytics tool to track conversion events. For email
            campaigns, we&#39;d integrate with a service like SendGrid or
            Mailchimp, triggered by events within the platform (e.g., a new
            application) via a webhook managed by n8n.
          </TechnicalNote>
        </FeatureSection>

        {/* COMPETITIVE BROKER COMMUNITY */}
        <FeatureSection id="community" title="Competitive Broker Community">
          <FunctionalityCard title="Exclusive Real-Time Feed">
            This is your private, brokers-only social network. Share market
            insights, ask for advice on hard-to-fill roles, and follow peers to
            see what&#39;s working for them, all in real-time.
          </FunctionalityCard>
          <FunctionalityCard title="Upvote & Notifications">
            Upvote the most helpful tips and get real-time notifications when
            someone responds to your post, keeping the conversation active and
            valuable.
          </FunctionalityCard>
          <FunctionalityCard title="Automated Toxicity Guard">
            Our platform automatically filters out unprofessional or toxic
            posts, ensuring the community remains a productive and safe space
            for all members.
          </FunctionalityCard>
          <TechnicalNote>
            To build the community features, we would leverage a real-time
            backend service like Supabase Realtime, which allows us to build
            features like live feeds and notifications with minimal server
            management. For content moderation, a simple n8n workflow could pass
            new posts through an API like Google&#39;s Perspective API to flag
            inappropriate content automatically.
          </TechnicalNote>
        </FeatureSection>

        {/* AI-DRIVEN LEARNING PLATFORM */}
        <FeatureSection id="ai-learning" title="AI-Driven Sourcing & Insights">
          <FunctionalityCard title="View Verified Candidate Skills">
            See the private skill badges candidates earn from our daily
            challenges. This gives you verified proof of their abilities beyond
            what&#39;s on their CV. You can even search for candidates by these
            specific, verified skills.
          </FunctionalityCard>
          <FunctionalityCard title="Talent Heat-Maps">
            Access an interactive map of the USA that shows you where specific
            skills are concentrated. If you need a &#34;battery storage
            expert,&#34; our map will show you if the talent is in Texas or
            California.
          </FunctionalityCard>
          <FunctionalityCard title="Market Gap Insights">
            Our AI analyzes the skills recruiters are searching for versus the
            available talent on the platform, highlighting market gaps and
            opportunities for you to specialize in.
          </FunctionalityCard>
          <TechnicalNote>
            The talent heat-map would be built using a frontend library like
            Deck.gl or Mapbox, which are designed for visualizing geospatial
            data. A serverless function would periodically aggregate the
            anonymized skill data and feed it to the map, ensuring the
            visualization is always up-to-date without constant database
            queries.
          </TechnicalNote>
        </FeatureSection>
      </div>
    </div>
  );
}
