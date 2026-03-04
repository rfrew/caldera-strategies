import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="topo-bg min-h-[85vh] flex items-center">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm uppercase tracking-[0.2em] text-warm-gray mb-4">
            Policy Design &middot; Governance &middot; Advocacy &middot; Evaluation
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight text-charcoal max-w-3xl">
            Collaborative approaches to transformative public policy.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-slate-mid max-w-2xl leading-relaxed">
            A caldera forms when pressure reshapes a landscape, creating the
            foundation for renewal and enduring change. Caldera Strategies
            partners with public agencies, nonprofits, and community leaders to
            design, strengthen, and transform public policy through
            collaborative, equity-informed strategy.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-block bg-charcoal text-off-white px-8 py-3.5 text-sm font-medium tracking-wide hover:bg-slate-dark transition-colors"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-white border-y border-warm-light/30">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-sm uppercase tracking-[0.2em] text-warm-gray mb-10">
            What We Do
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Policy Design & Analysis",
                desc: "Legislative and regulatory analysis, equity-informed policy review, and strategic roadmaps.",
                href: "/services#policy-design",
              },
              {
                title: "Governance & Implementation",
                desc: "Implementation planning, institutional design, and accountability frameworks.",
                href: "/services#governance",
              },
              {
                title: "Advocacy & Public Strategy",
                desc: "Stakeholder strategy, coalition governance, and legislative engagement planning.",
                href: "/services#advocacy",
              },
              {
                title: "Evaluation & Engagement",
                desc: "Mixed-methods evaluation, participatory design, and culturally responsive engagement.",
                href: "/services#evaluation",
              },
            ].map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group block p-6 border border-warm-light/40 hover:border-warm-gray/40 transition-colors"
              >
                <h3 className="text-lg font-medium text-charcoal group-hover:text-slate-dark">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-slate-mid leading-relaxed">
                  {service.desc}
                </p>
                <span className="mt-4 inline-block text-xs uppercase tracking-wider text-warm-gray group-hover:text-charcoal transition-colors">
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-charcoal leading-snug">
            Facing a policy challenge?
          </h2>
          <p className="mt-4 text-slate-mid leading-relaxed">
            Whether you&apos;re navigating implementation, building a coalition, or
            designing community engagement, Caldera Strategies can help you move
            forward with clarity and purpose.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block bg-charcoal text-off-white px-8 py-3.5 text-sm font-medium tracking-wide hover:bg-slate-dark transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
