import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contractor Bond for Slabjacking & Mudjacking Contractors",
  description:
    "Contractor bonds for slabjacking, mudjacking, and concrete leveling contractors. License bonds, performance bonds, and payment bonds. All 50 states.",
};

const bondTypes = [
  { title: "License & Permit Bond", desc: "Required in most states before you can legally operate as a concrete leveling contractor. Guarantees you'll comply with state regulations." },
  { title: "Performance Bond", desc: "Assures commercial clients you'll complete the project as specified. Commonly required on government and large commercial jobs." },
  { title: "Payment Bond", desc: "Guarantees subcontractors and suppliers get paid. Required on many commercial and public projects." },
  { title: "Bid Bond", desc: "Used during the bidding process to show you can perform the work at the price quoted." },
];

export default function ContractorBondPage() {
  return (
    <main className="min-h-screen pt-16">
      <section className="py-20 bg-gradient-to-br from-brand-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-slate-500 mb-6">
            <Link href="/" className="hover:text-brand-700">Home</Link> /{" "}
            <Link href="/coverages" className="hover:text-brand-700">Coverages</Link> /{" "}
            <span className="text-slate-900">Contractor Bond</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-heading text-slate-900 mb-6">
            Contractor Bonds for Slabjacking & Concrete Leveling Contractors
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            Most states require a contractor bond before issuing your license. Clients and project
            owners use them to ensure you&apos;ll perform the work as promised. We write bonds for
            slabjacking contractors in all 50 states.
          </p>
          <Link href="/quote" className="inline-flex items-center gap-2 bg-brand-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-800 transition-colors">
            Get a Bond Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading text-slate-900 mb-8">Types of Contractor Bonds</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {bondTypes.map((bt) => (
              <div key={bt.title} className="bg-brand-50 rounded-xl p-6">
                <h3 className="font-semibold text-brand-800 mb-2">{bt.title}</h3>
                <p className="text-slate-600 text-sm">{bt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-slate-600">
          <h2 className="text-3xl font-heading text-slate-900 mb-6">How Contractor Bonds Work</h2>
          <p>A surety bond is a three-party agreement between you (the principal), the entity requiring the bond (the obligee — typically a state licensing board or client), and the surety company (us). If you fail to meet your obligations, the surety pays the claim — and you repay the surety.</p>
          <p>Bond premiums are typically a small percentage of the bond amount (often 1-3% annually). A $10,000 license bond might cost $100-$300 per year. We quote fast and issue same-day on most standard license bonds.</p>
        </div>
      </section>

      <section className="py-16 bg-brand-700 text-center">
        <div className="max-w-2xl mx-auto px-4 text-white">
          <h2 className="text-3xl font-heading mb-4">Get Bonded Today</h2>
          <p className="text-brand-100 mb-8">Same-day bond issuance for most license bonds.</p>
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
