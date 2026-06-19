import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { Calendar, Clock, ArrowLeft, ArrowRight, Phone } from "lucide-react";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: { title: post.title, description: post.description, type: "article" },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const paragraphs = post.content
    .split("\n\n")
    .filter((p) => p.trim())
    .map((p) => {
      const trimmed = p.trim();
      if (trimmed.startsWith("## ")) return { type: "h2", text: trimmed.slice(3) };
      if (trimmed.startsWith("### ")) return { type: "h3", text: trimmed.slice(4) };
      if (trimmed.startsWith("- ")) {
        return {
          type: "ul",
          items: trimmed.split("\n").filter((l) => l.startsWith("- ")).map((l) => l.slice(2)),
        };
      }
      const cleaned = trimmed.replace(/\*\*(.+?)\*\*/g, "$1").replace(/`(.+?)`/g, "$1");
      return { type: "p", text: cleaned };
    });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    author: { "@type": "Person", name: post.author },
    datePublished: post.date,
    publisher: {
      "@type": "Organization",
      name: "Contractors Choice Agency",
      url: "https://slabjackinginsurance.com",
    },
  };

  return (
    <main className="min-h-screen pt-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="py-20 bg-gradient-to-br from-brand-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-brand-700 text-sm font-semibold mb-8 hover:gap-3 transition-all">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" /> {post.readingTime}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-heading text-slate-900 mb-4">{post.title}</h1>
          <p className="text-lg text-slate-600 mb-6">{post.description}</p>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="bg-brand-100 text-brand-700 text-xs px-3 py-1 rounded-full font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose-slate max-w-none">
            {paragraphs.map((block, i) => {
              if (block.type === "h2") {
                return <h2 key={i} className="text-2xl font-heading text-slate-900 mt-10 mb-4">{block.text}</h2>;
              }
              if (block.type === "h3") {
                return <h3 key={i} className="text-xl font-heading text-slate-800 mt-8 mb-3">{block.text}</h3>;
              }
              if (block.type === "ul" && block.items) {
                return (
                  <ul key={i} className="my-4 space-y-2 pl-6">
                    {block.items.map((item, j) => (
                      <li key={j} className="text-slate-600 text-base leading-relaxed list-disc">{item}</li>
                    ))}
                  </ul>
                );
              }
              return <p key={i} className="text-slate-600 leading-relaxed mb-4 text-base">{block.text}</p>;
            })}
          </article>
        </div>
      </section>

      <section className="py-16 bg-brand-700 text-center">
        <div className="max-w-2xl mx-auto px-4 text-white">
          <h2 className="text-3xl font-heading mb-4">Get a Quote for Your Slabjacking Business</h2>
          <p className="text-brand-100 mb-8">15-minute quotes. A-rated carriers. Licensed all 50 states.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="inline-flex items-center justify-center gap-2 bg-white text-brand-700 px-8 py-4 rounded-xl font-bold hover:bg-brand-50 transition-colors">
              Get a Free Quote <ArrowRight className="w-5 h-5" />
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
