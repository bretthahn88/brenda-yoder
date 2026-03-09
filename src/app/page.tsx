import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import { SERVICES, TESTIMONIALS, BLOG_POSTS } from "@/lib/constants";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[85vh] flex items-center bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 grid md:grid-cols-[1fr_1.2fr] gap-8 md:gap-10 items-center">
          <AnimateIn>
            <SectionLabel>Faith &middot; Family &middot; Simplicity &middot; Soul Care</SectionLabel>
            <h1 className="font-serif text-5xl md:text-7xl text-charcoal mt-4 mb-6 leading-tight">
              Life, <em className="text-sage">Uncomplicated.</em>
            </h1>
            <p className="text-lg text-charcoal/70 leading-relaxed mb-2">
              Grounded. Faithful. Whole.
            </p>
            <p className="text-charcoal/60 leading-relaxed mb-8 max-w-lg">
              I create welcoming spaces where people can slow down, heal, and grow in their
              relationship with themselves, with God, and with others.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/counseling">Counseling &amp; Coaching</Button>
              <Button href="/books" variant="outline">Explore the Book</Button>
            </div>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <Image
              src="/BrendaYoder_Homepage_Pic1.jpg"
              alt="Brenda Yoder, licensed therapist and author, standing outdoors"
              width={600}
              height={800}
              className="rounded-2xl object-cover w-full h-auto md:min-h-[560px]"
              priority
              sizes="(max-width: 768px) 100vw, 55vw"
            />
          </AnimateIn>
        </div>
      </section>

      {/* Intro Band */}
      <section className="bg-sage py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimateIn>
            <p className="text-warm-white/80 uppercase tracking-[0.25em] text-sm mb-4">
              Faith &middot; Family &middot; Simplicity &middot; Soul Care
            </p>
            <p className="text-warm-white text-lg max-w-2xl mx-auto leading-relaxed">
              Licensed therapist. Life coach. Author. Speaker. Mornings with Jesus contributor.
              Based at Still Waters Farm in Shipshewana, Indiana.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-24 bg-sage/10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <AnimateIn>
            <Image
              src="/BrendaYoder_Homepage_Pic2.jpg"
              alt="Brenda Yoder in a casual, warm setting"
              width={600}
              height={600}
              className="rounded-2xl object-cover w-full aspect-square"
            />
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <SectionLabel>About Brenda</SectionLabel>
            <h2 className="font-serif text-4xl text-charcoal mt-3 mb-6">
              Real life. Real faith. Real help.
            </h2>
            <p className="text-charcoal/70 leading-relaxed mb-4">
              I&apos;m a licensed mental health counselor, life coach, and author living on a small farm
              in northern Indiana. For over 25 years, I&apos;ve walked with women through anxiety,
              transitions, burnout, and the quiet ache of wanting more from life.
            </p>
            <p className="text-charcoal/70 leading-relaxed mb-6">
              My work is grounded in faith, shaped by experience, and offered with warmth. I believe
              the best version of your life is simpler than you think.
            </p>
            <Button href="/about" variant="outline">More About Brenda</Button>
          </AnimateIn>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateIn>
            <div className="text-center mb-16">
              <SectionLabel>How I Can Help</SectionLabel>
              <h2 className="font-serif text-4xl text-charcoal mt-3">
                Counseling. Coaching. Writing.
              </h2>
            </div>
          </AnimateIn>
          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <AnimateIn key={service.title} delay={i * 0.1}>
                <div className="bg-cream border border-sage/10 rounded-2xl p-8 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-full bg-gold/15 flex items-center justify-center mb-5">
                    <span className="text-sage text-xl">
                      {service.icon === "heart" && "♡"}
                      {service.icon === "compass" && "◎"}
                      {service.icon === "book" && "☙"}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl text-charcoal mb-3">{service.title}</h3>
                  <p className="text-charcoal/60 leading-relaxed mb-6 flex-1">{service.description}</p>
                  <Button href={service.href} variant="outline" className="self-start">
                    Learn More
                  </Button>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Book Feature */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <AnimateIn>
            <Image
              src="/BrendaYoder_Homepage_Pic3.png"
              alt="Brenda Yoder with her book Uncomplicated"
              width={480}
              height={640}
              className="rounded-2xl object-cover max-w-sm w-full"
            />
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <SectionLabel>New Book</SectionLabel>
            <h2 className="font-serif text-4xl text-warm-white mt-3 mb-6">
              Uncomplicated
            </h2>
            <p className="text-warm-white/60 text-sm mb-4">Herald Press, 2024</p>
            <p className="text-warm-white/80 leading-relaxed mb-6">
              In a world that rewards busyness and complexity, this book invites you to embrace a life
              of holy simplicity. Drawing from farm life, counseling, and decades of walking with women,
              Brenda offers practical wisdom for living with intention, faith, and peace.
            </p>
            <blockquote className="border-l-2 border-gold pl-4 mb-8">
              <p className="text-warm-white/70 italic leading-relaxed">
                &ldquo;Brenda Yoder is a refreshing voice calling us back to what matters most.
                Uncomplicated is the book every overwhelmed woman needs on her nightstand.&rdquo;
              </p>
              <cite className="text-gold text-sm mt-2 block not-italic">Carol Kent, Speaker and Author</cite>
            </blockquote>
            <Button href="https://www.amazon.com/Uncomplicated-Simple-Secrets-Compelling-Life/dp/B0CCKJN97J/" variant="secondary">
              Order on Amazon
            </Button>
          </AnimateIn>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-brown/10">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateIn>
            <div className="text-center mb-16">
              <SectionLabel>Kind Words</SectionLabel>
              <h2 className="font-serif text-4xl text-charcoal mt-3">What Others Are Saying</h2>
            </div>
          </AnimateIn>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <AnimateIn key={i} delay={i * 0.1}>
                <div className="bg-warm-white border border-gold/15 rounded-2xl p-8 h-full flex flex-col">
                  <p className="text-charcoal/70 italic leading-relaxed flex-1 mb-4">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p className="text-gold text-sm font-medium">{t.author}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateIn>
            <div className="text-center mb-16">
              <SectionLabel>From the Blog</SectionLabel>
              <h2 className="font-serif text-4xl text-charcoal mt-3">Recent Reflections</h2>
            </div>
          </AnimateIn>
          <div className="grid md:grid-cols-3 gap-8">
            {BLOG_POSTS.slice(0, 3).map((post, i) => (
              <AnimateIn key={post.slug} delay={i * 0.1}>
                <div className="bg-cream border border-sage/10 rounded-2xl p-8 h-full flex flex-col">
                  <span className="text-gold text-xs uppercase tracking-widest mb-3">{post.category}</span>
                  <h3 className="font-serif text-xl text-charcoal mb-3">{post.title}</h3>
                  <p className="text-charcoal/60 leading-relaxed flex-1 mb-4">{post.excerpt}</p>
                  <span className="text-sage text-sm hover:underline cursor-pointer">Read More</span>
                </div>
              </AnimateIn>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button href="/blog" variant="outline">View All Posts</Button>
          </div>
        </div>
      </section>

      {/* Email Capture */}
      {/* TODO: Wire to Constant Contact list — replace form action with Constant Contact embed URL */}
      <section className="py-20 bg-sage">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <AnimateIn>
            <h2 className="font-serif text-4xl text-warm-white mb-4">Stay Grounded</h2>
            <p className="text-warm-white/80 leading-relaxed mb-8">
              Encouragement, updates, and simple wisdom delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4">
              <input
                type="email"
                placeholder="Your email address"
                required
                className="flex-1 px-5 py-3 rounded-full bg-warm-white text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:ring-2 focus:ring-gold text-sm"
              />
              <button
                type="submit"
                className="px-7 py-3 rounded-full bg-gold text-white text-sm font-medium tracking-wide hover:bg-gold/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-warm-white/50 text-xs">No spam, ever. Unsubscribe anytime.</p>
          </AnimateIn>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-brown">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimateIn>
            <h2 className="font-serif text-4xl text-warm-white mb-4">Let&apos;s Connect</h2>
            <p className="text-warm-white/80 leading-relaxed mb-8">
              Whether you&apos;re looking for a counselor, a coach, or a speaker for your next event,
              I&apos;d love to hear from you.
            </p>
            <Button href="/contact" variant="secondary">Get in Touch</Button>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
