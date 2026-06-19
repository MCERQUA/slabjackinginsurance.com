import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Slabjacking Insurance Blog — Mudjacking & Concrete Leveling Resources",
  description:
    "Expert insurance advice for slabjacking, mudjacking, and concrete leveling contractors. Coverage guides, cost breakdowns, and risk management tips.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen pt-16">
      <section className="py-20 bg-gradient-to-br from-brand-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading text-slate-900 mb-6">
            Slabjacking Insurance Resources
          </h1>
          <p className="text-lg text-slate-600">
            Expert guidance on insurance for mudjacking, polyjacking, and concrete leveling contractors.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <p className="text-slate-500 text-center py-12">No posts yet — check back soon.</p>
          ) : (
            <div className="space-y-6">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-brand-600 hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      {post.readingTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-heading text-slate-900 mb-3">
                    <Link href={`/blog/${post.slug}`} className="hover:text-brand-700 transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{post.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="bg-brand-100 text-brand-700 text-xs px-3 py-1 rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-brand-700 text-sm font-semibold hover:gap-2 transition-all"
                  >
                    Read more <ArrowRight className="w-4 h-4" />
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
