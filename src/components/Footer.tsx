import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-warm-light/30 bg-off-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <p className="text-lg font-semibold text-charcoal tracking-tight">
              Caldera Strategies
            </p>
            <p className="mt-2 text-sm text-slate-mid">
              Policy Design. Governance. Advocacy. Evaluation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 text-sm text-slate-mid">
            <div>
              <p className="font-medium text-charcoal mb-2">Contact</p>
              <p>
                <a href="mailto:hello@calderastrategies.co" className="hover:text-charcoal transition-colors">
                  hello@calderastrategies.co
                </a>
              </p>
              <p className="mt-1">California</p>
            </div>

            <div>
              <p className="font-medium text-charcoal mb-2">Connect</p>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-charcoal transition-colors"
              >
                LinkedIn
              </a>
            </div>

            <div>
              <p className="font-medium text-charcoal mb-2">Navigate</p>
              <div className="flex flex-col gap-1">
                <Link href="/about" className="hover:text-charcoal transition-colors">About</Link>
                <Link href="/services" className="hover:text-charcoal transition-colors">Services</Link>
                <Link href="/work" className="hover:text-charcoal transition-colors">Selected Work</Link>
                <Link href="/contact" className="hover:text-charcoal transition-colors">Contact</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-warm-light/20 text-xs text-warm-gray">
          &copy; {new Date().getFullYear()} Caldera Strategies. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
