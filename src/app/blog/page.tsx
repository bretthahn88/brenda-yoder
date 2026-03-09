import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import SectionLabel from "@/components/ui/SectionLabel";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Reflections on faith, life, simplicity, and encouragement from Brenda Yoder.",
};

export default function BlogPage() {
  const posts = getAllPosts();

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
          {posts.map((post, i) => (
            <AnimateIn key={post.slug} delay={i * 0.08}>
              <Link href={`/blog/${post.slug}`}>
                <article className="bg-cream border border-sage/10 rounded-2xl overflow-hidden h-full flex flex-col cursor-pointer hover:shadow-lg transition-shadow">
                  {post.image && (
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  )}
                  <div className="p-8 flex flex-col flex-1">
                    <span className="text-gold text-xs uppercase tracking-widest mb-3">
                      {post.category}
                    </span>
                    <h2 className="font-serif text-xl text-charcoal mb-3">{post.title}</h2>
                    <p className="text-charcoal/60 leading-relaxed flex-1 mb-4 text-sm">
                      {post.excerpt}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sage text-sm">Read More</span>
                      <time className="text-charcoal/30 text-xs">
                        {new Date(post.date + "T12:00:00").toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </time>
                    </div>
                  </div>
                </article>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
