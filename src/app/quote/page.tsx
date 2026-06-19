"use client";
import { useState } from "react";
import Link from "next/link";
import { CheckCircle, ArrowLeft, Phone, Shield } from "lucide-react";

export default function QuotePage() {
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(1);

  if (submitted) {
    return (
      <main className="min-h-screen pt-16 bg-gradient-to-br from-brand-50 to-white flex items-center">
        <div className="max-w-2xl mx-auto px-4 py-20 text-center">
          <div className="w-20 h-20 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-brand-700" />
          </div>
          <h1 className="text-3xl font-heading text-slate-900 mb-4">Quote Request Received!</h1>
          <p className="text-slate-600 mb-2">
            Thanks for reaching out. We&apos;ll review your information and have options for you within 15 minutes during business hours.
          </p>
          <p className="text-slate-600 mb-8">
            Need faster help? Call us directly at{" "}
            <a href="tel:844-967-5247" className="text-brand-700 font-semibold">
              844-967-5247
            </a>
            .
          </p>
          <Link href="/" className="inline-flex items-center gap-2 text-brand-700 font-semibold hover:underline">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-16 bg-gradient-to-br from-brand-50 to-white">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <Shield className="w-8 h-8 text-brand-700" />
            <span className="font-heading font-bold text-slate-900 text-xl">Slabjacking Insurance</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-heading text-slate-900 mb-3">Get a Free Quote</h1>
          <p className="text-slate-600">
            Tell us about your concrete leveling business and we&apos;ll find the right coverage.
          </p>
          <div className="flex items-center justify-center gap-3 mt-4 text-sm text-slate-500">
            <a href="tel:844-967-5247" className="flex items-center gap-1 text-brand-700 font-medium">
              <Phone className="w-4 h-4" /> Prefer to call? 844-967-5247
            </a>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
          {/* Step indicator */}
          <div className="flex items-center gap-3 mb-8">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                    step >= s ? "bg-brand-700 text-white" : "bg-slate-100 text-slate-400"
                  }`}
                >
                  {s}
                </div>
                {s < 3 && <div className={`h-0.5 w-12 ${step > s ? "bg-brand-700" : "bg-slate-200"}`} />}
              </div>
            ))}
            <span className="text-sm text-slate-500 ml-2">
              Step {step} of 3
            </span>
          </div>

          <form
            name="quote"
            data-netlify="true"
            method="POST"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(new FormData(form) as unknown as Record<string, string>).toString(),
              })
                .then(() => setSubmitted(true))
                .catch(() => setSubmitted(true));
            }}
          >
            <input type="hidden" name="form-name" value="quote" />

            {step === 1 && (
              <div className="space-y-5">
                <h2 className="text-xl font-heading text-slate-900 mb-5">About You</h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Your Name *</label>
                    <input name="contractor-name" type="text" required className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent" placeholder="John Smith" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Business Name *</label>
                    <input name="business-name" type="text" required className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent" placeholder="Smith Concrete Leveling LLC" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone *</label>
                    <input name="phone" type="tel" required className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent" placeholder="(555) 555-5555" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Email *</label>
                    <input name="email" type="email" required className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent" placeholder="john@company.com" />
                  </div>
                </div>
                <button type="button" onClick={() => setStep(2)} className="w-full bg-brand-700 text-white py-3.5 rounded-xl font-bold hover:bg-brand-800 transition-colors">
                  Continue →
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-5">
                <h2 className="text-xl font-heading text-slate-900 mb-5">Your Business</h2>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Primary Service *</label>
                  <select name="service-type" required className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent bg-white">
                    <option value="">Select service type...</option>
                    <option value="mudjacking">Mudjacking / Slabjacking (cementitious grout)</option>
                    <option value="polyjacking">Polyjacking (polyurethane foam)</option>
                    <option value="both">Both mudjacking and polyjacking</option>
                    <option value="concrete-leveling">Concrete leveling (other method)</option>
                  </select>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Annual Revenue *</label>
                    <select name="annual-revenue" required className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent bg-white">
                      <option value="">Select range...</option>
                      <option value="under-100k">Under $100K</option>
                      <option value="100k-250k">$100K – $250K</option>
                      <option value="250k-500k">$250K – $500K</option>
                      <option value="500k-1m">$500K – $1M</option>
                      <option value="over-1m">Over $1M</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Number of Employees</label>
                    <select name="employees" className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent bg-white">
                      <option value="">Select...</option>
                      <option value="solo">Solo operator (no employees)</option>
                      <option value="1-3">1–3 employees</option>
                      <option value="4-10">4–10 employees</option>
                      <option value="over-10">10+ employees</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">States You Work In</label>
                  <input name="states" type="text" className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent" placeholder="e.g., TX, OK, KS, MO" />
                </div>
                <div className="flex gap-3">
                  <button type="button" onClick={() => setStep(1)} className="flex-1 border border-slate-300 text-slate-700 py-3.5 rounded-xl font-semibold hover:bg-slate-50 transition-colors">
                    ← Back
                  </button>
                  <button type="button" onClick={() => setStep(3)} className="flex-1 bg-brand-700 text-white py-3.5 rounded-xl font-bold hover:bg-brand-800 transition-colors">
                    Continue →
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-5">
                <h2 className="text-xl font-heading text-slate-900 mb-5">Coverage Needs</h2>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Coverage Types Needed</label>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {["General Liability", "Workers Compensation", "Commercial Auto", "Tools & Equipment", "Contractor Bond", "Umbrella / Excess"].map((cov) => (
                      <label key={cov} className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                        <input type="checkbox" name="coverage-types" value={cov} className="rounded text-brand-700 focus:ring-brand-600" />
                        {cov}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Additional Notes</label>
                  <textarea name="message" rows={4} className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent resize-none" placeholder="Current carrier, upcoming renewal date, specific coverage questions, or anything else we should know..." />
                </div>
                <div className="flex gap-3">
                  <button type="button" onClick={() => setStep(2)} className="flex-1 border border-slate-300 text-slate-700 py-3.5 rounded-xl font-semibold hover:bg-slate-50 transition-colors">
                    ← Back
                  </button>
                  <button type="submit" className="flex-1 bg-brand-700 text-white py-3.5 rounded-xl font-bold hover:bg-brand-800 transition-colors">
                    Submit Quote Request
                  </button>
                </div>
                <p className="text-xs text-slate-400 text-center">We respond within 15 minutes during business hours. Your info is never sold.</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}
