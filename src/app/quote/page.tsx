"use client";
import Link from "next/link";
import { Phone, Shield } from "lucide-react";
import { QuoteForm } from "@/components/quote/QuoteForm";

const WEBHOOK_URL = `https://josh.jam-bot.com/social-api/api/leads/webhook/netlify?tenant=josh&site=slabjackinginsurance.com`;
const TRADE_TYPE_OPTIONS = ["Concrete / Masonry"];

// Legacy field names the old form posted: kept posted (add-only) so old integrations keep working.
// phone, email, city, state, zip, fein already share their canonical name.
const LEGACY_ALIASES = {
  "contractor-name": "name",
  "business-name": "businessName",
  "service-type": "_info_serviceType",
  "annual-revenue": "lastGrossSales",
  employees: "fullTimeEmployees",
  "coverage-types": "coverageTypes",
  states: "statesOfOperation",
  message: "notes",
  "street-address": "address",
  "year-business-started": "yearBusinessStarted",
  "prior-carrier-name": "currentCarrier",
  "prior-policy-expiration": "currentPolicyExpiration",
  "business-description": "businessDescription",
};

export default function QuotePage() {
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
          <QuoteForm
            formName="quote"
            tradeName="Slabjacking / Concrete Leveling"
            endpoint={WEBHOOK_URL}
            format="json"
            netlifyFallback="/__forms.html"
            extraFields={{ form_name: "quote", source: "slabjackinginsurance.com" }}
            options={{ tradeTypeOptions: TRADE_TYPE_OPTIONS }}
            defaults={{ coverageTypes: "General Liability", tradeType: "Concrete / Masonry" }}
            legacyAliases={LEGACY_ALIASES}
            prefaceQuestions={[
              {
                name: "serviceType",
                label: "Primary service",
                type: "select",
                options: [
                  "Mudjacking / Slabjacking (cementitious grout)",
                  "Polyjacking (polyurethane foam)",
                  "Both mudjacking and polyjacking",
                  "Concrete leveling (other method)",
                ],
                required: true,
              },
            ]}
            successMessage="Quote request received! We'll have options for you within 15 minutes during business hours, or call 844-967-5247."
          />
          <p className="text-xs text-slate-400 text-center mt-6">
            We respond within 15 minutes during business hours. Your info is never sold.{" "}
            <Link href="/" className="underline">Back to Home</Link>
          </p>
        </div>
      </div>
    </main>
  );
}
