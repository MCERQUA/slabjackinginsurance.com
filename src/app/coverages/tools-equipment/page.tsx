import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Tools & Equipment Insurance for Slabjacking Contractors",
  description:
    "Tools and equipment insurance for slabjacking, mudjacking, and polyjacking contractors. Covers injection pumps, mixers, drills, and specialized concrete leveling equipment.",
};

const covered = [
  "Mud injection pump trucks and rigs",
  "Polyurethane foam injection equipment",
  "Core drills and injection ports",
  "Mixing tanks and grout mixers",
  "Compressors and generators",
  "Hand tools and accessories",
  "Theft from job sites and vehicles",
  "Accidental damage and breakdown",
];

export default function ToolsEquipmentPage() {
  return (
    <main className="min-h-screen pt-16">
      <section className="py-20 bg-gradient-to-br from-brand-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-slate-500 mb-6">
            <Link href="/" className="hover:text-brand-700">Home</Link> /{" "}
            <Link href="/coverages" className="hover:text-brand-700">Coverages</Link> /{" "}
            <span className="text-slate-900">Tools & Equipment</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-heading text-slate-900 mb-6">
            Tools & Equipment Insurance for Slabjacking Contractors
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            Your injection pumps, foam rigs, and drilling equipment represent a significant capital
            investment. Tools and equipment coverage protects that investment against theft, damage,
            and breakdown — wherever your equipment is.
          </p>
          <Link href="/quote" className="inline-flex items-center gap-2 bg-brand-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-800 transition-colors">
            Get a Tools Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading text-slate-900 mb-8">Equipment We Cover</h2>
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
          <h2 className="text-3xl font-heading text-slate-900 mb-6">On the Job Site and In Transit</h2>
          <img src="/images/tools-equipment.jpg" alt="Slabjacking equipment" className="w-full rounded-2xl object-cover mb-6" style={{ maxHeight: "350px" }} />
          <p>Standard business owner&apos;s policies (BOPs) and general liability policies typically have very limited equipment coverage — or none at all. A dedicated tools and equipment policy covers your gear at the job site, in your truck, at your yard, and in transit between locations.</p>
          <p>Slabjacking equipment is specialized and expensive to replace. A pump failure in the middle of a busy season can mean weeks of downtime without coverage. We structure policies to provide fast claims resolution and replacement so your business keeps moving.</p>
        </div>
      </section>

      <section className="py-16 bg-brand-700 text-center">
        <div className="max-w-2xl mx-auto px-4 text-white">
          <h2 className="text-3xl font-heading mb-4">Protect Your Equipment</h2>
          <p className="text-brand-100 mb-8">Fast quotes. Real replacement coverage for slabjacking gear.</p>
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
