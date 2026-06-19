import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Commercial Auto Insurance for Slabjacking & Mudjacking Contractors",
  description:
    "Commercial auto insurance for slabjacking, mudjacking, and concrete leveling contractors. Covers pump trucks, trailers, and service vehicles. All 50 states.",
};

const covered = [
  "Liability coverage for accidents in company vehicles",
  "Collision and comprehensive for pump trucks and trailers",
  "Uninsured/underinsured motorist protection",
  "Hired and non-owned auto liability",
  "Loading and unloading coverage",
  "Medical payments for vehicle occupants",
];

export default function CommercialAutoPage() {
  return (
    <main className="min-h-screen pt-16">
      <section className="py-20 bg-gradient-to-br from-brand-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-slate-500 mb-6">
            <Link href="/" className="hover:text-brand-700">Home</Link> /{" "}
            <Link href="/coverages" className="hover:text-brand-700">Coverages</Link> /{" "}
            <span className="text-slate-900">Commercial Auto</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-heading text-slate-900 mb-6">
            Commercial Auto Insurance for Mudjacking Contractors
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            Your pump truck is the lifeblood of your slabjacking business. A commercial auto policy
            covers it properly — personal auto policies exclude business use and won&apos;t respond
            when you need them most.
          </p>
          <Link href="/quote" className="inline-flex items-center gap-2 bg-brand-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-800 transition-colors">
            Get an Auto Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading text-slate-900 mb-8">What&apos;s Covered</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {covered.map((item) => (
              <div key={item} className="flex items-start gap-3 bg-brand-50 rounded-xl p-4">
                <CheckCircle className="w-5 h-5 text-brand-700 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-slate-600">
          <h2 className="text-3xl font-heading text-slate-900 mb-6">Why Slabjacking Trucks Need Commercial Coverage</h2>
          <img src="/images/commercial-auto.jpg" alt="Mudjacking contractor truck" className="w-full rounded-2xl object-cover mb-6" style={{ maxHeight: "350px" }} />
          <p>Slabjacking pump trucks are specialized, high-value commercial vehicles. A standard personal auto policy will deny claims when a vehicle is used for business purposes — and a mudjacking rig driving to and from job sites every day absolutely qualifies as business use.</p>
          <p>Commercial auto coverage is specifically designed for vehicles used in trade and contracting. It accounts for the higher exposure, the equipment attached to or carried by your truck, and the liability limits that commercial jobs typically require.</p>
          <p>We also cover trailers, service vans, and any hired or non-owned vehicles your employees drive for company purposes.</p>
        </div>
      </section>

      <section className="py-16 bg-brand-700 text-center">
        <div className="max-w-2xl mx-auto px-4 text-white">
          <h2 className="text-3xl font-heading mb-4">Cover Your Fleet Today</h2>
          <p className="text-brand-100 mb-8">Pump trucks, trailers, service vans — we cover them all.</p>
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
