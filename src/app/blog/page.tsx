import type { Metadata } from "next";
import AnimateIn from "@/components/AnimateIn";
import SectionLabel from "@/components/ui/SectionLabel";
import { BLOG_POSTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Reflections on faith, life, simplicity, and encouragement from Brenda Yoder.",
};

export default function BlogPage() {
  return (
    <section className="py-24 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn>
          <div className="text-center mb-16">
            <SectionLabel>Blog</SectionLabel>
            <h1 className="font-serif text-5xl text-charcoal mt-3 mb-4">Reflections</h1>
            <p className="text-charcoal/60 max-w-xl mx-auto">
              Thoughts on faith, life, simplicity, and the courage it takes to live uncomplicated.
            </p>
          </div>
        </AnimateIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, i) => (
            <AnimateIn key={post.slug} delay={i * 0.08}>
              <article className="bg-cream rounded-2xl p-8 h-full flex flex-col cursor-pointer hover:shadow-lg transition-shadow">
                <span className="text-gold text-xs uppercase tracking-widest mb-3">
                  {post.category}
                </span>
                <h2 className="font-serif text-xl text-charcoal mb-3">{post.title}</h2>
                <p className="text-charcoal/60 leading-relaxed flex-1 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sage text-sm">Read More</span>
                  <time className="text-charcoal/30 text-xs">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                </div>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
