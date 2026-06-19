import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Workers Compensation for Slabjacking & Mudjacking Contractors",
  description:
    "Workers compensation insurance for slabjacking and mudjacking contractors. Covers crew injuries from heavy equipment, concrete work, and chemical exposure. All 50 states.",
};

const covered = [
  "Medical expenses for on-the-job injuries",
  "Lost wage replacement during recovery",
  "Rehabilitation and physical therapy costs",
  "Permanent disability benefits",
  "Death benefits for surviving family members",
  "Employer liability protection",
];

const risks = [
  { title: "Heavy Equipment Operation", desc: "Pump truck rollovers, hydraulic failures, and equipment malfunctions can cause serious injuries." },
  { title: "Slips and Falls", desc: "Wet concrete, muddy job sites, and uneven surfaces create constant slip hazards for crew members." },
  { title: "Chemical Exposure", desc: "Polyurethane foam chemicals and cementitious grout can cause skin, eye, and respiratory issues." },
  { title: "Back and Musculoskeletal Injuries", desc: "Repeated lifting, drilling, and injection work places heavy strain on workers' backs and joints." },
];

export default function WorkersCompPage() {
  return (
    <main className="min-h-screen pt-16">
      <section className="py-20 bg-gradient-to-br from-brand-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-slate-500 mb-6">
            <Link href="/" className="hover:text-brand-700">Home</Link> /{" "}
            <Link href="/coverages" className="hover:text-brand-700">Coverages</Link> /{" "}
            <span className="text-slate-900">Workers Compensation</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-heading text-slate-900 mb-6">
            Workers Compensation for Slabjacking & Mudjacking Contractors
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            Slabjacking and mudjacking crews face real physical hazards every day — heavy equipment,
            chemical exposure, and demanding ground-level work. Workers compensation protects your
            crew and shields your business from direct liability.
          </p>
          <Link href="/quote" className="inline-flex items-center gap-2 bg-brand-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-800 transition-colors">
            Get a Workers Comp Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading text-slate-900 mb-8">What Workers Comp Covers</h2>
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading text-slate-900 mb-8">Key Risks for Slabjacking Crews</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {risks.map((r) => (
              <div key={r.title} className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-2">{r.title}</h3>
                <p className="text-slate-600 text-sm">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-slate-600">
          <h2 className="text-3xl font-heading text-slate-900 mb-6">State Requirements & Classification</h2>
          <p>Workers compensation is required in virtually every state once you have employees. Even with one part-time crew member, you&apos;re likely legally required to carry it. Operating without it can result in fines, license suspension, and personal liability for injured workers&apos; costs.</p>
          <p>Slabjacking contractors are typically classified under construction industry codes — which carry higher rates than office work but are still very insurable. The specific classification (mudjacking, polyjacking, or general concrete work) affects your premium, and we work to get you the most accurate and favorable classification.</p>
          <p>We write workers comp in all 50 states and can handle multi-state policies for contractors who follow storm or seasonal work across state lines.</p>
        </div>
      </section>

      <section className="py-16 bg-brand-700 text-center">
        <div className="max-w-2xl mx-auto px-4 text-white">
          <h2 className="text-3xl font-heading mb-4">Protect Your Crew Today</h2>
          <p className="text-brand-100 mb-8">Workers comp in all 50 states. Same-day certificates available.</p>
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
