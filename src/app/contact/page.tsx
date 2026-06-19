"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen pt-16">
      <section className="py-20 bg-gradient-to-br from-brand-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-heading text-slate-900 mb-4">Contact Us</h1>
          <p className="text-lg text-slate-600">Get in touch with a slabjacking insurance specialist.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-heading text-slate-900 mb-8">Reach Out Directly</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-brand-700" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 mb-1">Phone</div>
                  <a href="tel:844-967-5247" className="text-brand-700 font-semibold text-lg hover:underline">844-967-5247</a>
                  <div className="text-slate-500 text-sm mt-0.5">Toll-free, all 50 states</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-brand-700" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 mb-1">Email</div>
                  <a href="mailto:josh@contractorschoiceagency.com" className="text-brand-700 hover:underline">josh@contractorschoiceagency.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-brand-700" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 mb-1">Office</div>
                  <div className="text-slate-600 text-sm">12220 E Riggs Rd, Chandler, AZ 85249</div>
                  <div className="text-slate-500 text-sm">Licensed in all 50 states</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-brand-700" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 mb-1">Hours</div>
                  <div className="text-slate-600 text-sm">Mon–Fri: 8am–6pm MST</div>
                  <div className="text-slate-500 text-sm">24/7 claims reporting available</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8">
            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-brand-700 mx-auto mb-4" />
                <h3 className="text-2xl font-heading text-slate-900 mb-3">Message Sent!</h3>
                <p className="text-slate-600">We&apos;ll be in touch within one business day.</p>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-heading text-slate-900 mb-6">Send a Message</h2>
                <form
                  name="contact"
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
                  className="space-y-4"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Name</label>
                    <input name="name" type="text" required className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-600" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
                    <input name="email" type="email" required className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-600" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone</label>
                    <input name="phone" type="tel" className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-600" placeholder="(555) 555-5555" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Message</label>
                    <textarea name="message" rows={4} required className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-600 resize-none" placeholder="How can we help?" />
                  </div>
                  <button type="submit" className="w-full bg-brand-700 text-white py-3.5 rounded-xl font-bold hover:bg-brand-800 transition-colors">
                    Send Message
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
