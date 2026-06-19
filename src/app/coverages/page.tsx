import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Users, Truck, Wrench, FileText, Umbrella, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Slabjacking Contractor Insurance Coverages",
  description:
    "Complete insurance coverage for slabjacking, mudjacking, and concrete leveling contractors. General liability, workers comp, commercial auto, tools, bonds, and umbrella.",
};

const coverages = [
  {
    icon: Shield,
    title: "General Liability",
    desc: "Core protection against third-party property damage and bodily injury during slabjacking operations.",
    href: "/coverages/general-liability",
  },
  {
    icon: Users,
    title: "Workers Compensation",
    desc: "Required in most states. Covers medical and lost wages for crew injuries on every job.",
    href: "/coverages/workers-compensation",
  },
  {
    icon: Truck,
    title: "Commercial Auto",
    desc: "Coverage for pump trucks, trailers, and service vehicles used in your concrete leveling business.",
    href: "/coverages/commercial-auto",
  },
  {
    icon: Wrench,
    title: "Tools & Equipment",
    desc: "Protects injection pumps, mixers, and specialized slabjacking equipment from theft and damage.",
    href: "/coverages/tools-equipment",
  },
  {
    icon: FileText,
    title: "Contractor Bond",
    desc: "Licensing bonds required by most states for concrete leveling and mudjacking contractors.",
    href: "/coverages/contractor-bond",
  },
  {
    icon: Umbrella,
    title: "Umbrella / Excess",
    desc: "Additional liability limits above your primary coverage for high-exposure jobs.",
    href: "/coverages/umbrella",
  },
];

export default function CoveragesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://slabjackinginsurance.com" },
      { "@type": "ListItem", position: 2, name: "Coverages", item: "https://slabjackinginsurance.com/coverages" },
    ],
  };

  return (
    <main className="min-h-screen pt-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="py-20 bg-gradient-to-br from-brand-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading text-slate-900 mb-6">
            Insurance Coverages for Slabjacking Contractors
          </h1>
          <p className="text-lg text-slate-600">
            Every coverage below is designed with the specific risks of mudjacking, polyjacking,
            and concrete leveling work in mind.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coverages.map((cov) => (
              <Link
                key={cov.title}
                href={cov.href}
                className="group block bg-white border border-slate-200 rounded-2xl p-6 hover:border-brand-600 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-700 transition-colors">
                  <cov.icon className="w-6 h-6 text-brand-700 group-hover:text-white transition-colors" />
                </div>
                <h2 className="font-heading text-xl text-slate-900 mb-2">{cov.title}</h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{cov.desc}</p>
                <div className="flex items-center gap-1 text-brand-700 text-sm font-semibold">
                  Learn more <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-700 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-heading text-white mb-4">Ready to Get Covered?</h2>
          <p className="text-brand-100 mb-8">15-minute quotes. A-rated carriers. Certificates same day.</p>
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
