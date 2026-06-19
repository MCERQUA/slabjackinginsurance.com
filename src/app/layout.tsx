import type { Metadata } from "next";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://slabjackinginsurance.com"),
  title: {
    default: "Slabjacking Insurance — Coverage for Mudjacking & Concrete Leveling Contractors",
    template: "%s | Slabjacking Insurance",
  },
  description:
    "Specialized insurance for slabjacking, mudjacking, polyjacking, and concrete leveling contractors. General liability, workers comp, equipment, bonds. 15-minute quotes. Licensed all 50 states.",
  keywords: [
    "slabjacking insurance",
    "mudjacking insurance",
    "concrete leveling contractor insurance",
    "polyjacking contractor insurance",
    "concrete lifting company insurance",
    "slab lifting insurance",
    "concrete raising contractor insurance",
    "mudjacking company insurance",
    "concrete contractor insurance",
  ],
  authors: [{ name: "Contractors Choice Agency" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://slabjackinginsurance.com",
    siteName: "Slabjacking Insurance",
    title: "Slabjacking Insurance — Mudjacking & Concrete Leveling Contractor Coverage",
    description:
      "Specialized insurance for slabjacking, mudjacking, and concrete leveling contractors. Get covered in 15 minutes. Licensed all 50 states.",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Slabjacking Insurance — Mudjacking Contractor Coverage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Slabjacking Insurance — Mudjacking & Concrete Leveling Contractor Coverage",
    description:
      "Specialized insurance for slabjacking, mudjacking, and concrete leveling contractors. 15-minute quotes.",
    images: ["/images/hero.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  name: "Contractors Choice Agency — Slabjacking Insurance",
  url: "https://slabjackinginsurance.com",
  telephone: "844-967-5247",
  email: "josh@contractorschoiceagency.com",
  description:
    "Specialized insurance for slabjacking, mudjacking, and concrete leveling contractors.",
  areaServed: "United States",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Slabjacking Contractor Insurance Coverages",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "General Liability Insurance" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Workers Compensation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Auto Insurance" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tools & Equipment Coverage" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Contractor Bond" } },
    ],
  },
  founder: {
    "@type": "Person",
    name: "Josh Cotner",
    description: "Former contractor, 20+ years insurance experience",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
