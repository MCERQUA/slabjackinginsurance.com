import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Umbrella Insurance for Slabjacking Contractors",
  description:
    "Umbrella and excess liability insurance for slabjacking and concrete leveling contractors. Additional limits above primary coverage for high-exposure commercial jobs.",
};

const benefits = [
  "Additional liability limits above GL, auto, and workers comp",
  "Protection on high-value commercial and multi-family jobs",
  "Satisfies large general contractor and property owner requirements",
  "Cost-effective way to increase total liability limits",
  "Covers gaps and excess across multiple underlying policies",
];

export default function UmbrellaPage() {
  return (
    <main className="min-h-screen pt-16">
      <section className="py-20 bg-gradient-to-br from-brand-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-slate-500 mb-6">
            <Link href="/" className="hover:text-brand-700">Home</Link> /{" "}
            <Link href="/coverages" className="hover:text-brand-700">Coverages</Link> /{" "}
            <span className="text-slate-900">Umbrella / Excess</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-heading text-slate-900 mb-6">
            Umbrella & Excess Liability for Slabjacking Contractors
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            When one bad claim exceeds your primary limits, an umbrella policy steps in. For
            slabjacking contractors working on commercial properties or large multi-unit jobs,
            umbrella coverage is often the difference between a recoverable loss and a business-ending
            lawsuit.
          </p>
          <Link href="/quote" className="inline-flex items-center gap-2 bg-brand-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-800 transition-colors">
            Get an Umbrella Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading text-slate-900 mb-8">Benefits of Umbrella Coverage</h2>
          <div className="space-y-3">
            {benefits.map((b) => (
              <div key={b} className="flex items-start gap-3 bg-brand-50 rounded-xl p-4">
                <CheckCircle className="w-5 h-5 text-brand-700 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 text-sm">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-slate-600">
          <h2 className="text-3xl font-heading text-slate-900 mb-6">When Do Slabjacking Contractors Need Umbrella?</h2>
          <p>If you work on commercial properties, HOA common areas, apartment complexes, or any project where a single claim could easily exceed $1M-$2M, an umbrella policy provides the buffer you need. Commercial GCs frequently require subcontractors to carry $5M or more in total liability — umbrella gets you there at a fraction of the cost of increasing primary limits.</p>
          <p>Umbrella coverage is also worth considering if you operate in litigation-heavy markets or have a large annual revenue. The more you do, the more exposure you carry, and the more a bad year could threaten everything you&apos;ve built.</p>
        </div>
      </section>

      <section className="py-16 bg-brand-700 text-center">
        <div className="max-w-2xl mx-auto px-4 text-white">
          <h2 className="text-3xl font-heading mb-4">Get an Umbrella Quote</h2>
          <p className="text-brand-100 mb-8">$1M–$10M umbrella limits available. Fast turnaround.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="inline-flex items-center justify-center gap-2 bg-white text-brand-700 px-8 py-4 rounded-xl font-bold hover:bg-brand-50 transition-colors">
              Get a Quote <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="tel:844-967-5247" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors">
              <Phone className="w-5 h-5" /> 844-967-5247
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
