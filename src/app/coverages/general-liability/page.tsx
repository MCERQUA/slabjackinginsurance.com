import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "General Liability Insurance for Slabjacking Contractors",
  description:
    "General liability insurance for slabjacking, mudjacking, and concrete leveling contractors. Covers property damage from mud injection, bodily injury, and completed operations.",
};

const covered = [
  "Property damage to driveways, slabs, and structures from grout injection",
  "Accidental over-injection causing slab heave or cracking",
  "Bodily injury to clients or bystanders at the job site",
  "Completed operations — claims arising after a job is finished",
  "Advertising injury and personal liability",
  "Medical payments for minor injuries regardless of fault",
];

const faqs = [
  {
    q: "Does GL cover damage caused by my grout injection?",
    a: "Yes — general liability for slabjacking contractors explicitly covers property damage resulting from mud or polymer injection operations, including accidental over-lifting or slab cracking.",
  },
  {
    q: "How much GL coverage do slabjacking contractors need?",
    a: "Standard limits are $1M per occurrence / $2M aggregate. Commercial property owners and general contractors often require $2M/$4M or higher. We quote all limit levels.",
  },
  {
    q: "Does my GL cover my completed operations?",
    a: "Yes. Completed operations coverage protects you from claims arising weeks or months after a job is done — such as a slab that was lifted but later cracked due to ground movement.",
  },
  {
    q: "Will GL cover a chemical spill from my polyjacking foam?",
    a: "Standard GL may have pollution exclusions that affect chemical spill claims. We can add a pollution liability endorsement to ensure polyurethane foam spills are covered.",
  },
];

export default function GeneralLiabilityPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main className="min-h-screen pt-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="py-20 bg-gradient-to-br from-brand-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-slate-500 mb-6">
            <Link href="/" className="hover:text-brand-700">Home</Link> /{" "}
            <Link href="/coverages" className="hover:text-brand-700">Coverages</Link> /{" "}
            <span className="text-slate-900">General Liability</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-heading text-slate-900 mb-6">
            General Liability Insurance for Slabjacking Contractors
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            General liability is the cornerstone of every slabjacking contractor&apos;s insurance
            program. It protects your business from the property damage and bodily injury claims
            that are an inherent part of mud injection and concrete leveling work.
          </p>
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 bg-brand-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-800 transition-colors"
          >
            Get a GL Quote <ArrowRight className="w-5 h-5" />
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading text-slate-900 mb-8">
            Why Slabjacking Work Has Unique GL Risks
          </h2>
          <div className="prose prose-slate max-w-none text-slate-600 space-y-4">
            <p>
              Slabjacking involves injecting material — cementitious grout, polyurethane foam, or
              stone slurry — beneath settled concrete to lift it back to grade. This process carries
              unique liability exposures that standard contractor GL policies may not address.
            </p>
            <p>
              <strong>Property damage from over-injection</strong> is one of the most common claims
              in concrete leveling. If a slab is lifted too aggressively, it can crack, heave, or
              damage adjacent structures. A standard contractor policy might exclude this as
              &ldquo;expected or intended damage&rdquo; or as a product/completed operations issue.
              CCA ensures your GL policy explicitly covers this risk.
            </p>
            <p>
              <strong>Completed operations</strong> coverage is critical for slabjacking contractors
              because settlement claims often surface weeks or months after the job. If a customer
              calls back six months later claiming their slab re-settled or cracked, completed
              operations coverage kicks in.
            </p>
            <p>
              <strong>Subsurface work exclusions</strong> are another hidden trap. Some GL policies
              exclude claims arising from work performed below grade — which is exactly where
              slabjacking happens. We specifically identify and remove these exclusions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading text-slate-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border border-slate-200 rounded-xl p-6">
                <h3 className="font-semibold text-slate-900 mb-3">{faq.q}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-700 text-center">
        <div className="max-w-2xl mx-auto px-4 text-white">
          <h2 className="text-3xl font-heading mb-4">Get General Liability Coverage Today</h2>
          <p className="text-brand-100 mb-8">15-minute quotes. A-rated carriers who understand slabjacking.</p>
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
