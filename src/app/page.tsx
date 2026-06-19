"use client";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import {
  Shield,
  Users,
  Truck,
  Wrench,
  FileText,
  Umbrella,
  CheckCircle,
  Phone,
  Star,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Award,
  Clock,
  MapPin,
} from "lucide-react";

const NAV_LINKS = [
  { label: "Coverages", href: "/coverages" },
  { label: "Services", href: "/coverages" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const COVERAGES = [
  {
    icon: Shield,
    title: "General Liability",
    desc: "Covers property damage and bodily injury caused during slabjacking operations — including accidental damage to driveways, slabs, or structures.",
    href: "/coverages/general-liability",
  },
  {
    icon: Users,
    title: "Workers Compensation",
    desc: "Required in most states. Covers crew injuries from heavy equipment operation, slips, falls, and chemical exposure during mud injection.",
    href: "/coverages/workers-compensation",
  },
  {
    icon: Truck,
    title: "Commercial Auto",
    desc: "Coverage for your pump trucks, trailers, and rigs — on the road and at the job site.",
    href: "/coverages/commercial-auto",
  },
  {
    icon: Wrench,
    title: "Tools & Equipment",
    desc: "Protects your injection pumps, mixers, and specialized slabjacking equipment against theft, breakdown, and damage.",
    href: "/coverages/tools-equipment",
  },
  {
    icon: FileText,
    title: "Contractor Bond",
    desc: "Licensing bonds required to legally operate as a concrete leveling contractor in most states.",
    href: "/coverages/contractor-bond",
  },
  {
    icon: Umbrella,
    title: "Umbrella / Excess",
    desc: "Extra liability protection above your primary limits — critical when working on high-value residential or commercial properties.",
    href: "/coverages/umbrella",
  },
];

const WHY_ITEMS = [
  {
    icon: Award,
    title: "Former Contractor Insight",
    desc: "Josh Cotner built things before he insured them. He understands the real risks of concrete leveling work — not just what's on paper.",
  },
  {
    icon: MapPin,
    title: "Licensed in All 50 States",
    desc: "Whether you operate locally or chase seasonal markets across state lines, we have you covered.",
  },
  {
    icon: Clock,
    title: "15-Minute Quotes",
    desc: "No weeks of back-and-forth. Tell us about your business and get coverage options fast.",
  },
  {
    icon: Phone,
    title: "2-Hour Claims Response",
    desc: "When something goes wrong on a job, you need answers fast. We guarantee a 2-hour claims response.",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Tell Us About Your Business",
    desc: "Answer a few questions about your slabjacking or mudjacking operation — services offered, crew size, annual revenue, states you work in.",
  },
  {
    num: "02",
    title: "Get Matched to the Right Coverage",
    desc: "We shop your risk across A-rated carriers that actually understand concrete leveling — not generic contractors' policies with slabjacking exclusions.",
  },
  {
    num: "03",
    title: "Get Covered, Keep Working",
    desc: "Bind coverage fast. Get your certificate of insurance. Stay compliant and protect everything you've built.",
  },
];

const TESTIMONIALS = [
  {
    name: "Mike D.",
    company: "Midwest Concrete Leveling, LLC",
    quote:
      "I called three other brokers and none of them understood what slabjacking was. Josh got it immediately, explained the coverage gaps I had, and got me a better policy in a day.",
    stars: 5,
  },
  {
    name: "Sarah T.",
    company: "Precision Mudjacking Co.",
    quote:
      "Running a mudjacking crew across three states was a compliance nightmare until we found CCA. Now I have one policy that covers all our operations. Game changer.",
    stars: 5,
  },
  {
    name: "Carlos R.",
    company: "Southwest Slab Solutions",
    quote:
      "My old policy had an exclusion buried in the fine print that would have left me exposed on every job. CCA found it, fixed it, and saved my business from a potential disaster.",
    stars: 5,
  },
];

const FAQS = [
  {
    q: "Do slabjacking contractors really need specialized insurance?",
    a: "Yes. Standard contractor policies often exclude or underprice risks specific to concrete injection work — including property damage from over-injection, chemical spills, and equipment-caused slab cracking. You need coverage that actually fits your work.",
  },
  {
    q: "Is mudjacking and polyjacking covered under the same policy?",
    a: "Often yes, but coverage can vary by carrier. We make sure your policy explicitly covers both mudjacking (cementitious grout) and polyjacking (polyurethane foam) if you offer both services.",
  },
  {
    q: "How much general liability coverage do slabjacking contractors need?",
    a: "Most contractors carry $1M per occurrence / $2M aggregate. If you work on high-value commercial properties or require a larger contract minimum, we can quote up to $5M.",
  },
  {
    q: "Do I need workers comp if I only have 1-2 employees?",
    a: "Most states require workers comp once you have any employees. Solo operators with no employees may be exempt, but many clients require a workers comp certificate regardless. We'll walk you through your state's requirements.",
  },
  {
    q: "What does commercial auto cover for my pump truck?",
    a: "Commercial auto covers your pump trucks and trailers in transit between jobs, loading/unloading, and at job sites. Personal auto policies typically exclude business use.",
  },
  {
    q: "How fast can I get a certificate of insurance?",
    a: "Typically same-day once you bind coverage. We can rush certificates when a client or job site needs one immediately.",
  },
];

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-700 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="font-heading font-bold text-slate-900 text-lg leading-tight">
              Slabjacking<br />
              <span className="text-brand-700 text-sm font-sans font-semibold">Insurance</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-600 hover:text-brand-700 font-medium text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/quote"
              className="bg-brand-700 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-brand-800 transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden py-4 border-t border-slate-100">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2.5 text-slate-600 font-medium"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/quote"
              className="block mt-3 bg-brand-700 text-white text-center px-5 py-3 rounded-lg font-semibold"
              onClick={() => setOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-slate-900 pr-4">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-brand-700 flex-shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 text-slate-600 leading-relaxed text-sm border-t border-slate-100">
          <p className="pt-4">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Nav />

      {/* HERO */}
      <section className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-white via-brand-50 to-slate-50 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#166534" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-800 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <Shield className="w-4 h-4" />
              Specialist Insurance for Concrete Leveling Pros
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-slate-900 leading-tight mb-6">
              Slabjacking Insurance Built for{" "}
              <span className="text-brand-700">Mudjacking Contractors</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Generic contractor policies don&apos;t cut it for slabjacking work. We specialize in
              coverage tailored to mudjacking, polyjacking, and concrete leveling operations —
              from injection pump trucks to property damage liability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2 bg-brand-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-800 transition-colors shadow-lg"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:844-967-5247"
                className="inline-flex items-center justify-center gap-2 border-2 border-brand-700 text-brand-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-50 transition-colors"
              >
                <Phone className="w-5 h-5" />
                844-967-5247
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-slate-500">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-brand-600" /> 15-min quotes
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-brand-600" /> All 50 states
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-brand-600" /> A-rated carriers
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-brand-700/10 rounded-3xl blur-2xl" />
            <img
              src="/images/hero.jpg"
              alt="Slabjacking contractor injecting grout under concrete slab"
              className="relative w-full rounded-2xl shadow-2xl object-cover"
              style={{ aspectRatio: "4/3" }}
            />
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3">
              <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-brand-700" />
              </div>
              <div>
                <div className="font-bold text-slate-900 text-sm">20+ Years</div>
                <div className="text-slate-500 text-xs">Contractor Insurance</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-slate-900 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-sm text-slate-300">
            {[
              "✓ Licensed in All 50 States",
              "✓ 20+ Years Experience",
              "✓ Former Contractor Founder",
              "✓ 15-Minute Quote Turnaround",
              "✓ 2-Hour Claims Response",
              "✓ A-Rated Carriers",
            ].map((item) => (
              <span key={item} className="font-medium whitespace-nowrap">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* COVERAGES GRID */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading text-slate-900 mb-4">
              Coverage Built for Concrete Leveling Work
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Every coverage below is evaluated specifically for the risks of slabjacking,
              mudjacking, and polyjacking operations.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COVERAGES.map((cov, i) => (
              <motion.div
                key={cov.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  href={cov.href}
                  className="group block h-full bg-white border border-slate-200 rounded-2xl p-6 hover:border-brand-600 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-700 transition-colors">
                    <cov.icon className="w-6 h-6 text-brand-700 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-heading text-lg text-slate-900 mb-2">{cov.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{cov.desc}</p>
                  <div className="mt-4 flex items-center gap-1 text-brand-700 text-sm font-semibold group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE CCA */}
      <section className="py-24 section-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading text-slate-900 mb-4">
              Why Contractors Choose CCA
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              We&apos;re not a call center. We&apos;re a specialty contractor insurance shop built
              by someone who&apos;s been on the tools.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_ITEMS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm"
              >
                <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-brand-700" />
                </div>
                <h3 className="font-heading text-lg text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <img
              src="/images/about.jpg"
              alt="Josh Cotner, CCA founder"
              className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-brand-200"
            />
            <p className="text-slate-700 font-semibold">Josh Cotner</p>
            <p className="text-slate-500 text-sm">Founder, Contractors Choice Agency — former contractor, 20+ years</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading text-slate-900 mb-4">
              Getting Covered Is Simple
            </h2>
            <p className="text-slate-600 text-lg">From inquiry to certificate in as little as one business day.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="relative"
              >
                {i < STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-brand-200 z-0" />
                )}
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-brand-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.num}
                  </div>
                  <h3 className="font-heading text-xl text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 bg-brand-700 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-brand-800 transition-colors"
            >
              Start My Quote <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-brand-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { value: "298+", label: "Contractor Clients" },
              { value: "$50M+", label: "Premiums Placed" },
              { value: "50", label: "States Licensed" },
              { value: "20+", label: "Years Experience" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-heading font-bold mb-2">{stat.value}</div>
                <div className="text-brand-100 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading text-slate-900 mb-4">
              What Contractors Say
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-earth-400 fill-earth-400" />
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed mb-4 italic">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <div className="font-semibold text-slate-900">{t.name}</div>
                  <div className="text-slate-500 text-sm">{t.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-lg">Common questions about slabjacking contractor insurance.</p>
          </motion.div>

          <div className="space-y-3">
            {FAQS.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-slate-600 mb-4">Still have questions?</p>
            <a
              href="tel:844-967-5247"
              className="inline-flex items-center gap-2 text-brand-700 font-semibold hover:underline"
            >
              <Phone className="w-5 h-5" /> Call 844-967-5247
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/cta-bg.jpg"
            alt="Slabjacking job site"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-900/85" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-heading mb-6">
              Ready to Protect Your Slabjacking Business?
            </h2>
            <p className="text-brand-100 text-lg mb-10 max-w-2xl mx-auto">
              Get coverage that actually fits mudjacking, polyjacking, and concrete leveling work.
              15-minute quote. Same-day certificates available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2 bg-white text-brand-700 px-10 py-4 rounded-xl font-bold text-lg hover:bg-brand-50 transition-colors"
              >
                Get a Free Quote <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:844-967-5247"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors"
              >
                <Phone className="w-5 h-5" /> 844-967-5247
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-brand-700 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <span className="font-heading font-bold text-white">Slabjacking Insurance</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Specialized insurance for slabjacking, mudjacking, and concrete leveling contractors.
                Powered by Contractors Choice Agency.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Coverages</h4>
              <ul className="space-y-2 text-sm">
                {["General Liability", "Workers Comp", "Commercial Auto", "Tools & Equipment", "Contractor Bond"].map((c) => (
                  <li key={c}>
                    <Link href={`/coverages/${c.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`} className="hover:text-white transition-colors">{c}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                {[["About", "/about"], ["Blog", "/blog"], ["Quote", "/quote"], ["Contact", "/contact"]].map(([label, href]) => (
                  <li key={label}>
                    <Link href={href} className="hover:text-white transition-colors">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="tel:844-967-5247" className="hover:text-white transition-colors flex items-center gap-2"><Phone className="w-4 h-4" /> 844-967-5247</a></li>
                <li><a href="mailto:josh@contractorschoiceagency.com" className="hover:text-white transition-colors">josh@contractorschoiceagency.com</a></li>
                <li className="text-slate-400">12220 E Riggs Rd<br />Chandler, AZ 85249</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>&copy; 2026 Contractors Choice Agency. All rights reserved.</p>
            <p>Licensed in all 50 states · NPN: 8608479</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
