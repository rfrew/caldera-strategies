import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "Applied policy design, governance strategy, and community engagement across environmental justice, water equity, and public policy implementation.",
};

const projects = [
  {
    title: "SAFER Policy Research & Implementation",
    sector: "State Agency",
    description:
      "[Placeholder: 2-3 sentences about your role in SAFER policy research, implementation support, and equity-informed analysis. Describe the policy context and your specific contributions.]",
    outcomes:
      "[Placeholder: General outcomes — e.g., informed implementation strategy, contributed to equity framework adoption, etc.]",
  },
  {
    title: "Diablo Canyon Community Impact & Policy",
    sector: "State / Community",
    description:
      "[Placeholder: 2-3 sentences about your work on Diablo Canyon / DCPP community impact and policy. Describe the engagement context and your role.]",
    outcomes:
      "[Placeholder: General outcomes — e.g., supported community engagement process, contributed to policy recommendations, etc.]",
  },
  {
    title: "Advocacy & Community Engagement Strategy",
    sector: "Nonprofit / Coalition",
    description:
      "[Placeholder: 2-3 sentences about advocacy and community engagement strategy work. Describe the coalition or organizational context and your role.]",
    outcomes:
      "[Placeholder: General outcomes — e.g., aligned coalition strategy, strengthened community voice in decision-making, etc.]",
  },
  {
    title: "Legislative & Policy Analysis",
    sector: "State / Local Government",
    description:
      "[Placeholder: 2-3 sentences about legislative and policy analysis work. Describe the policy area and your analytical contributions.]",
    outcomes:
      "[Placeholder: General outcomes — e.g., informed legislative deliberation, provided equity-centered policy recommendations, etc.]",
  },
];

export default function Work() {
  return (
    <>
      {/* Header */}
      <section className="topo-bg">
        <div className="mx-auto max-w-6xl px-6 pt-24 pb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-warm-gray mb-4">
            Selected Work
          </p>
          <h1 className="text-3xl md:text-5xl font-semibold text-charcoal tracking-tight max-w-2xl">
            Applied expertise across sectors
          </h1>
          <p className="mt-4 text-lg text-slate-mid max-w-2xl leading-relaxed">
            A sample of engagements spanning policy design, governance,
            community engagement, and evaluation.
          </p>
        </div>
      </section>

      {/* Project Cards */}
      <section className="bg-white border-y border-warm-light/30">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="p-8 border border-warm-light/40 bg-off-white"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h2 className="text-lg font-medium text-charcoal">
                    {project.title}
                  </h2>
                </div>
                <span className="inline-block text-xs uppercase tracking-wider text-warm-gray bg-cream px-2.5 py-1 mb-4">
                  {project.sector}
                </span>
                <p className="text-sm text-slate-mid leading-relaxed mb-4">
                  {project.description}
                </p>
                <div>
                  <h3 className="text-xs uppercase tracking-wider text-warm-gray mb-1">
                    Outcomes
                  </h3>
                  <p className="text-sm text-slate-mid leading-relaxed">
                    {project.outcomes}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold text-charcoal">
            Interested in working together?
          </h2>
          <p className="mt-3 text-slate-mid leading-relaxed">
            Every engagement is tailored to your specific policy context and
            goals.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block bg-charcoal text-off-white px-8 py-3.5 text-sm font-medium tracking-wide hover:bg-slate-dark transition-colors"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
