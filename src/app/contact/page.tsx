import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Caldera Strategies to discuss your policy, governance, or advocacy needs.",
};

export default function Contact() {
  return (
    <>
      {/* Header */}
      <section className="topo-bg">
        <div className="mx-auto max-w-6xl px-6 pt-24 pb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-warm-gray mb-4">
            Contact
          </p>
          <h1 className="text-3xl md:text-5xl font-semibold text-charcoal tracking-tight">
            Let&apos;s talk
          </h1>
          <p className="mt-4 text-lg text-slate-mid max-w-2xl leading-relaxed">
            Tell me about the decision you&apos;re facing, your timeline, and the
            stakeholders involved. I&apos;ll follow up within two business days.
          </p>
        </div>
      </section>

      <section className="bg-white border-y border-warm-light/30">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Form */}
            <div className="md:col-span-2">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-charcoal mb-1.5"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2.5 border border-warm-light/60 bg-off-white text-charcoal text-sm focus:outline-none focus:border-slate-mid transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="org"
                      className="block text-sm font-medium text-charcoal mb-1.5"
                    >
                      Organization
                    </label>
                    <input
                      type="text"
                      id="org"
                      name="org"
                      className="w-full px-4 py-2.5 border border-warm-light/60 bg-off-white text-charcoal text-sm focus:outline-none focus:border-slate-mid transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-charcoal mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2.5 border border-warm-light/60 bg-off-white text-charcoal text-sm focus:outline-none focus:border-slate-mid transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-charcoal mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder="What decision are you facing? What's your timeline? Who are the key stakeholders?"
                    className="w-full px-4 py-2.5 border border-warm-light/60 bg-off-white text-charcoal text-sm focus:outline-none focus:border-slate-mid transition-colors resize-none placeholder:text-warm-light"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-charcoal text-off-white px-8 py-3.5 text-sm font-medium tracking-wide hover:bg-slate-dark transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-1 space-y-8">
              <div>
                <h3 className="text-sm uppercase tracking-[0.15em] text-warm-gray mb-2">
                  Email
                </h3>
                <a
                  href="mailto:hello@calderastrategies.co"
                  className="text-charcoal hover:text-slate-mid transition-colors text-sm"
                >
                  hello@calderastrategies.co
                </a>
              </div>

              <div>
                <h3 className="text-sm uppercase tracking-[0.15em] text-warm-gray mb-2">
                  Location
                </h3>
                <p className="text-sm text-slate-mid">California</p>
              </div>

              <div>
                <h3 className="text-sm uppercase tracking-[0.15em] text-warm-gray mb-2">
                  Connect
                </h3>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-charcoal hover:text-slate-mid transition-colors text-sm"
                >
                  LinkedIn
                </a>
              </div>

              {/* Calendly placeholder */}
              <div className="pt-4 border-t border-warm-light/30">
                <h3 className="text-sm uppercase tracking-[0.15em] text-warm-gray mb-2">
                  Schedule directly
                </h3>
                <p className="text-sm text-slate-mid">
                  [Calendly link will go here]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
