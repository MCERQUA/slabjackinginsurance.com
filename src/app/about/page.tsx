import type { Metadata } from "next";
import Link from "next/link";
import { Award, MapPin, Users, Shield, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Contractors Choice Agency — Slabjacking Insurance Specialists",
  description:
    "Contractors Choice Agency has been serving contractor insurance needs for 20+ years. Founded by a former contractor, we specialize in niche trades like slabjacking and mudjacking.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-16">
      <section className="py-20 bg-gradient-to-br from-brand-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-heading text-slate-900 mb-6">
            About Contractors Choice Agency
          </h1>
          <p className="text-lg text-slate-600">
            Insurance built by someone who&apos;s been on the tools — and has spent 20+ years
            protecting the contractors who still are.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/images/about.jpg"
              alt="Josh Cotner, founder of Contractors Choice Agency"
              className="w-full rounded-2xl shadow-lg object-cover"
              style={{ aspectRatio: "4/3" }}
            />
          </div>
          <div>
            <h2 className="text-3xl font-heading text-slate-900 mb-6">Josh Cotner — Founder</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Josh Cotner didn&apos;t start in insurance. He started as a contractor — building
                things, running crews, dealing with job sites, equipment breakdowns, and the
                constant pressure of keeping a trade business running.
              </p>
              <p>
                That firsthand experience became the foundation of Contractors Choice Agency when
                Josh founded it in 2005. He understood what contractors needed from their insurance
                because he&apos;d been on the other side of the coverage gap — the small print
                that doesn&apos;t pay, the carrier that doesn&apos;t understand your trade, the
                policy that looks fine until something goes wrong.
              </p>
              <p>
                Twenty-plus years later, CCA has placed over $50M in premiums for more than 298
                contractors across 50+ specialty trades. Slabjacking, mudjacking, and concrete
                leveling contractors are among the niche specialties we know best.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 section-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading text-slate-900 mb-10 text-center">By the Numbers</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, label: "Years in Business", value: "20+" },
              { icon: Users, label: "Contractor Clients", value: "298+" },
              { icon: Shield, label: "Premiums Placed", value: "$50M+" },
              { icon: MapPin, label: "States Licensed", value: "All 50" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl p-6 text-center shadow-sm">
                <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-brand-700" />
                </div>
                <div className="text-3xl font-heading text-brand-700 font-bold mb-1">{stat.value}</div>
                <div className="text-slate-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-slate-600">
          <h2 className="text-3xl font-heading text-slate-900 mb-6">Why Specialty Contractor Insurance</h2>
          <p>
            Most insurance agencies try to be everything to everyone. CCA took a different path:
            deep specialization in contractor trades. We focus exclusively on contractors —
            not restaurants, not retail, not professional services. Contractors, and the specific
            trades they work in.
          </p>
          <p>
            That focus means when a slabjacking contractor comes to us, we&apos;re not starting
            from scratch trying to figure out what mudjacking is and what it risks. We already know.
            We&apos;ve placed the policies, seen the claims, talked to the carriers, and built
            the coverage solutions.
          </p>
          <p>
            We&apos;re licensed in all 50 states, which means if you operate across state lines —
            following storm work, seasonal demand, or regional job markets — we can keep you
            properly covered everywhere you work.
          </p>
        </div>
      </section>

      <section className="py-16 bg-brand-700 text-center">
        <div className="max-w-2xl mx-auto px-4 text-white">
          <h2 className="text-3xl font-heading mb-4">Ready to Work with Us?</h2>
          <p className="text-brand-100 mb-8">Get a quote in 15 minutes from a broker who actually knows your trade.</p>
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 bg-white text-brand-700 px-10 py-4 rounded-xl font-bold text-lg hover:bg-brand-50 transition-colors"
          >
            Get a Free Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
