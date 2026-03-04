import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Policy design, governance strategy, advocacy planning, and participatory evaluation for public agencies, nonprofits, and coalitions.",
};

const services = [
  {
    id: "policy-design",
    title: "Policy Design & Analysis",
    whoFor:
      "Public agencies, legislative offices, and nonprofits seeking rigorous, equity-informed policy analysis.",
    deliverables: [
      "Legislative and regulatory analysis",
      "Policy development and strategic roadmaps",
      "Equity-informed policy review",
      "Briefing memos and policy briefs",
    ],
    success:
      "Decision-makers have the analysis and framing they need to move policy forward with confidence and clarity.",
  },
  {
    id: "governance",
    title: "Governance & Implementation Strategy",
    whoFor:
      "Agencies and organizations navigating complex implementation challenges, cross-agency coordination, or institutional reform.",
    deliverables: [
      "Implementation planning and assessment",
      "Institutional design and systems reform support",
      "Accountability and learning frameworks",
      "Coordination and facilitation for cross-agency work",
    ],
    success:
      "Implementation moves from plan to practice with clear roles, accountability, and mechanisms for learning and adaptation.",
  },
  {
    id: "advocacy",
    title: "Advocacy & Public Strategy",
    whoFor:
      "Coalitions, nonprofits, and community organizations developing advocacy campaigns or aligning diverse stakeholders.",
    deliverables: [
      "Power mapping and stakeholder strategy",
      "State and local advocacy strategic planning",
      "Coalition strategy and governance support",
      "Legislative engagement planning",
      "Facilitation for strategic alignment",
    ],
    success:
      "Coalitions are aligned, strategy is actionable, and advocacy efforts build durable power toward shared goals.",
  },
  {
    id: "evaluation",
    title: "Evaluation & Participatory Engagement",
    whoFor:
      "Foundations, agencies, and nonprofits seeking to understand impact, improve programs, or engage communities meaningfully.",
    deliverables: [
      "Mixed-methods evaluation (qualitative + quantitative)",
      "Participatory evaluation design",
      "Culturally responsive engagement planning",
      "Public forums, listening sessions, and convenings",
    ],
    success:
      "Organizations learn what's working, communities feel heard, and findings drive meaningful improvement.",
  },
];

export default function Services() {
  return (
    <>
      {/* Header */}
      <section className="topo-bg">
        <div className="mx-auto max-w-6xl px-6 pt-24 pb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-warm-gray mb-4">
            Services
          </p>
          <h1 className="text-3xl md:text-5xl font-semibold text-charcoal tracking-tight max-w-2xl">
            How we work with you
          </h1>
          <p className="mt-4 text-lg text-slate-mid max-w-2xl leading-relaxed">
            Every engagement is shaped around your context, stakeholders, and
            goals. Here&apos;s what we bring to the table.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white border-y border-warm-light/30">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="space-y-16">
            {services.map((service, i) => (
              <div
                key={service.id}
                id={service.id}
                className={`scroll-mt-24 ${
                  i > 0 ? "pt-16 border-t border-warm-light/30" : ""
                }`}
              >
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-1">
                    <h2 className="text-xl font-medium text-charcoal">
                      {service.title}
                    </h2>
                  </div>

                  <div className="md:col-span-2 space-y-6">
                    <div>
                      <h3 className="text-sm uppercase tracking-[0.15em] text-warm-gray mb-2">
                        Who this is for
                      </h3>
                      <p className="text-slate-mid leading-relaxed">
                        {service.whoFor}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-sm uppercase tracking-[0.15em] text-warm-gray mb-2">
                        Typical deliverables
                      </h3>
                      <ul className="space-y-1.5">
                        {service.deliverables.map((d) => (
                          <li
                            key={d}
                            className="text-slate-mid text-sm leading-relaxed flex items-start gap-2"
                          >
                            <span className="text-warm-light mt-1">&#8212;</span>
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-sm uppercase tracking-[0.15em] text-warm-gray mb-2">
                        What success looks like
                      </h3>
                      <p className="text-slate-mid leading-relaxed">
                        {service.success}
                      </p>
                    </div>
                  </div>
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
            Not sure where to start?
          </h2>
          <p className="mt-3 text-slate-mid leading-relaxed">
            Many engagements span multiple service areas. Let&apos;s talk about
            what you&apos;re working on and shape the right approach together.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block bg-charcoal text-off-white px-8 py-3.5 text-sm font-medium tracking-wide hover:bg-slate-dark transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
