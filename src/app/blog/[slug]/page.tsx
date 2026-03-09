import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AnimateIn from "@/components/AnimateIn";
import SectionLabel from "@/components/ui/SectionLabel";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  // Convert markdown-ish content to simple HTML paragraphs
  const contentHtml = post.content
    .split("\n\n")
    .filter((block) => block.trim())
    .map((block) => {
      const trimmed = block.trim();
      if (trimmed.startsWith("## "))
        return `<h2 class="font-serif text-2xl text-charcoal mt-8 mb-4">${trimmed.slice(3)}</h2>`;
      if (trimmed.startsWith("### "))
        return `<h3 class="font-serif text-xl text-charcoal mt-6 mb-3">${trimmed.slice(4)}</h3>`;
      if (trimmed.startsWith("##### "))
        return `<h3 class="font-serif text-lg text-charcoal mt-6 mb-3">${trimmed.slice(6)}</h3>`;
      if (trimmed.startsWith("> "))
        return `<blockquote class="border-l-2 border-gold pl-4 my-6 text-charcoal/70 italic">${trimmed.slice(2)}</blockquote>`;
      if (trimmed.startsWith("- "))
        return `<ul class="list-disc list-inside space-y-1 text-charcoal/70 my-4">${trimmed
          .split("\n")
          .map((li) => `<li>${li.replace(/^- /, "")}</li>`)
          .join("")}</ul>`;
      return `<p class="text-charcoal/70 leading-relaxed mb-4">${trimmed}</p>`;
    })
    .join("\n");

  return (
    <article className="py-24 bg-warm-white">
      <div className="max-w-3xl mx-auto px-6">
        <AnimateIn>
          {/* Back link */}
          <Link
            href="/blog"
            className="text-sage text-sm hover:underline inline-flex items-center gap-2 mb-8"
          >
            &larr; Back to Blog
          </Link>

          {/* Header */}
          <SectionLabel>{post.category}</SectionLabel>
          <h1 className="font-serif text-4xl md:text-5xl text-charcoal mt-3 mb-4 leading-tight">
            {post.title}
          </h1>
          <time className="text-charcoal/40 text-sm block mb-8">
            {new Date(post.date + "T12:00:00").toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </time>

          {/* Featured image */}
          {post.image && (
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-10">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 720px"
                priority
              />
            </div>
          )}

          {/* Content */}
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-charcoal/10">
            <Link
              href="/blog"
              className="text-sage hover:underline inline-flex items-center gap-2"
            >
              &larr; Back to Blog
            </Link>
          </div>
        </AnimateIn>
      </div>
    </article>
  );
}
