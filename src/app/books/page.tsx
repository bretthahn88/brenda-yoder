import type { Metadata } from "next";
import AnimateIn from "@/components/AnimateIn";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import { BOOKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Books",
  description:
    "Books by Brenda Yoder including Uncomplicated, Fledge, and Balance & Busyness. Faith-filled, practical wisdom for women.",
};

export default function BooksPage() {
  const featured = BOOKS.find((b) => b.featured);
  const others = BOOKS.filter((b) => !b.featured);

  return (
    <>
      {/* Featured Book */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <AnimateIn>
            {/* PHOTO: Uncomplicated book cover */}
            <PhotoPlaceholder aspect="portrait" label="Uncomplicated Book Cover" className="max-w-sm mx-auto" />
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <SectionLabel>Featured Book</SectionLabel>
            <h1 className="font-serif text-5xl text-charcoal mt-3 mb-2 leading-tight">
              {featured?.title}
            </h1>
            <p className="text-charcoal/50 text-sm mb-6">{featured?.publisher}</p>
            <p className="text-charcoal/70 leading-relaxed mb-6">{featured?.description}</p>
            {featured?.endorsement && (
              <blockquote className="border-l-2 border-gold pl-4 mb-8">
                <p className="text-charcoal/60 italic leading-relaxed">
                  &ldquo;{featured.endorsement.quote}&rdquo;
                </p>
                <cite className="text-gold text-sm mt-2 block not-italic">
                  {featured.endorsement.author}
                </cite>
              </blockquote>
            )}
            <div className="flex flex-wrap gap-4">
              <Button href={featured?.buyLink || "#"} variant="primary">Order on Amazon</Button>
              {/* Media kit link placeholder */}
              <Button href="#" variant="outline">Media Kit (PDF)</Button>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Other Books */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateIn>
            <div className="text-center mb-16">
              <SectionLabel>Also by Brenda</SectionLabel>
              <h2 className="font-serif text-4xl text-charcoal mt-3">More Books</h2>
            </div>
          </AnimateIn>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {others.map((book, i) => (
              <AnimateIn key={book.title} delay={i * 0.1}>
                <div className="bg-warm-white rounded-2xl p-8 flex flex-col h-full">
                  <h3 className="font-serif text-2xl text-charcoal mb-2">{book.title}</h3>
                  {book.publisher && (
                    <p className="text-charcoal/40 text-sm mb-4">{book.publisher}</p>
                  )}
                  <p className="text-charcoal/60 leading-relaxed flex-1 mb-6">{book.description}</p>
                  <Button href={book.buyLink} variant="outline" className="self-start">
                    Learn More
                  </Button>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Mornings with Jesus */}
      <section className="py-20 bg-sage">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimateIn>
            <SectionLabel>Annual Contributor</SectionLabel>
            <h2 className="font-serif text-4xl text-warm-white mt-3 mb-4">
              Mornings with Jesus
            </h2>
            <p className="text-warm-white/80 leading-relaxed mb-8">
              Brenda is an annual contributing writer to <em>Mornings with Jesus</em>, a daily
              devotional published by Guideposts. Her reflections bring the same grounded, honest
              voice readers love in her books.
            </p>
            <Button href="https://www.amazon.com/s?k=mornings+with+jesus" variant="secondary">
              Find Mornings with Jesus
            </Button>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
