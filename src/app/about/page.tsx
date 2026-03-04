import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "Annie Aguiñiga Frew brings deep expertise in legislative analysis, evaluation, environmental justice policy, and collaborative governance.",
};

export default function About() {
  return (
    <>
      {/* Header */}
      <section className="topo-bg">
        <div className="mx-auto max-w-6xl px-6 pt-24 pb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-warm-gray mb-4">
            About
          </p>
          <h1 className="text-3xl md:text-5xl font-semibold text-charcoal tracking-tight">
            Annie Aguiñiga Frew
          </h1>
          <p className="mt-2 text-lg text-slate-mid">
            Founder, Caldera Strategies
          </p>
        </div>
      </section>

      <section className="bg-white border-y border-warm-light/30">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Photo */}
            <div className="md:col-span-1">
              <div className="aspect-[3/4] relative overflow-hidden">
                <Image
                  src="/images/annie-headshot-1.jpg"
                  alt="Annie Aguiñiga Frew"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Bio */}
            <div className="md:col-span-2">
              <h2 className="text-xl font-medium text-charcoal mb-6">
                Collaborative, participatory, equity-informed.
              </h2>
              <div className="space-y-4 text-slate-mid leading-relaxed">
                <p>
                  [Placeholder: Annie&apos;s professional bio — 2-3 paragraphs covering
                  her background in public policy, legislative experience, evaluation
                  expertise, and commitment to equity-informed governance. Include
                  information about her experience working with state and local agencies,
                  nonprofits, foundations, and community coalitions.]
                </p>
                <p>
                  [Placeholder: Additional context about her approach — collaborative
                  and participatory methods, working at the intersection of policy
                  design and community engagement, and her focus on building durable
                  systems that serve public interests.]
                </p>
              </div>

              {/* Credibility highlights */}
              <div className="mt-10 pt-8 border-t border-warm-light/30">
                <h3 className="text-sm uppercase tracking-[0.2em] text-warm-gray mb-4">
                  Areas of Focus
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Water Equity",
                    "Environmental Justice",
                    "Governance Design",
                    "Policy Implementation",
                    "Community Engagement",
                  ].map((area) => (
                    <span
                      key={area}
                      className="px-3 py-1.5 text-sm text-slate-dark border border-warm-light/50 bg-off-white"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Optional CV download */}
              <div className="mt-8">
                <a
                  href="#"
                  className="text-sm text-warm-gray hover:text-charcoal transition-colors underline underline-offset-4"
                >
                  Download CV (PDF) &darr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
