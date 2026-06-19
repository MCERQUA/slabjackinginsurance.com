# QA Report — slabjackinginsurance.com

## Build Status: GREEN ✅

## Routes (20 pages)
- / (homepage — 9 sections)
- /coverages
- /coverages/general-liability
- /coverages/workers-compensation
- /coverages/commercial-auto
- /coverages/tools-equipment
- /coverages/contractor-bond
- /coverages/umbrella
- /blog
- /blog/slabjacking-insurance-complete-guide
- /blog/mudjacking-vs-polyjacking-insurance
- /blog/concrete-leveling-workers-comp
- /quote
- /contact
- /about
- /robots.txt
- /sitemap.xml
- /_not-found

## Quality Gate Checklist
- [x] Homepage ≥ 6 sections (9 sections: hero, trust bar, coverages grid, why CCA, how it works, stats, testimonials, FAQ, final CTA + footer)
- [x] ≥ 5 service pages (6: GL, workers comp, commercial auto, tools, bond, umbrella)
- [x] Blog with ≥ 3 posts (3 MDX posts, 800-1500 words each)
- [x] ≥ 2 Netlify forms (quote + contact) with webhook in netlify.toml
- [x] ≥ 8 generated images (9 HuggingFace FLUX images, all verified JPEG)
- [x] Schema: InsuranceAgency JSON-LD in layout, Article schema on blog posts, FAQPage on blog posts
- [x] sitemap.ts (20 routes)
- [x] robots.ts
- [x] llms.txt
- [x] public/__forms.html
- [x] npm run build GREEN (no errors, no type errors)
- [x] UNIQUE design: green/earth tone palette, DM Serif Display headings — distinct from c10 (blue) and pipeline (orange)
- [x] Responsive + interactive (motion/lenis animations, FAQ accordion, multi-step quote form)
- [x] Pushed to GitHub: MCERQUA/slabjackinginsurance.com (forced push)

## Images Generated (HuggingFace FLUX.1-schnell)
1. hero.jpg — concrete leveling contractor at work
2. general-liability.jpg — contractor reviewing insurance docs
3. workers-comp.jpg — mudjacking crew at job site
4. commercial-auto.jpg — contractor truck at job site
5. tools-equipment.jpg — slabjacking equipment
6. before-after.jpg — sunken concrete before/after
7. about.jpg — insurance agent portrait
8. cta-bg.jpg — aerial neighborhood view
9. foundation.jpg — concrete foundation repair crew

## Netlify Webhook
- Quote: https://josh.jam-bot.com/social-api/api/leads/webhook/netlify?tenant=josh&site=slabjackinginsurance.com
- Contact: same URL

## Design System
- Primary: Green #15803d (brand-700)
- Background: White + green-50 sections
- Headings: DM Serif Display
- Body: Inter
- Accent: Earth/amber tones
