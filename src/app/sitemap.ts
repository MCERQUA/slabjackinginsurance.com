import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const base = "https://slabjackinginsurance.com";

  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/coverages`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/coverages/general-liability`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/coverages/workers-compensation`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/coverages/commercial-auto`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/coverages/tools-equipment`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/coverages/contractor-bond`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/coverages/umbrella`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/quote`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.95 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
    ...posts.map((post) => ({
      url: `${base}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "yearly" as const,
      priority: 0.65,
    })),
  ];
}
