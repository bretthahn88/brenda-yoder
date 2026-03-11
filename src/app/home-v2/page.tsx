import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";
import Button from "@/components/ui/Button";
import { SERVICES, TESTIMONIALS } from "@/lib/constants";
import { getAllPosts } from "@/lib/blog";

export default function HomeV2() {
  const blogPosts = getAllPosts().slice(0, 3);
  return (
    <>
      {/* Hero — centered, warm, welcoming */}
      <section className="bg-sage text-warm-white">
        <div className="max-w-3xl mx-auto px-6 pt-28 pb-16 text-center">
          <AnimateIn>
            <p className="text-warm-white/60 uppercase tracking-[0.25em] text-sm mb-6">
              Faith &middot; Family &middot; Simplicity &middot; Soul Care
            </p>
            <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-6">
              You were made for a life that feels{" "}
              <em className="text-gold">whole.</em>
            </h1>
            <p className="text-warm-white/80 text-lg leading-relaxed max-w-xl mx-auto mb-10">
              Counseling, coaching, and encouragement for women who are ready to
              slow down, breathe deep, and live with intention.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-14">
              <Button href="/counseling" variant="secondary">
                Work With Brenda
              </Button>
              <Button href="/books" variant="outline" className="border-warm-white/30 text-warm-white hover:bg-warm-white/10">
                Explore the Book
              </Button>
            </div>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <Image
              src="/BrendaYoder_Homepage_Pic1.jpg"
              alt="Brenda Yoder, licensed therapist and author"
              width={600}
              height={750}
              className="rounded-2xl object-cover mx-auto w-full max-w-[560px] h-auto"
              priority
              sizes="(max-width: 768px) 90vw, 560px"
            />
          </AnimateIn>
        </div>
      </section>

      {/* Personal Welcome — conversational, empathetic */}
      <section className="py-20 bg-warm-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <AnimateIn>
            <p className="font-serif text-3xl md:text-4xl text-charcoal leading-snug mb-8">
              Have you been feeling overwhelmed lately?
            </p>
            <div className="space-y-5 text-charcoal/70 leading-relaxed">
              <p>
                Maybe you&apos;re carrying more than you were meant to carry. Maybe the
                season you&apos;re in feels heavier than it should. Maybe you just need
                someone to say, &ldquo;You&apos;re not alone in this.&rdquo;
              </p>
              <p>
                I&apos;m Brenda, a licensed therapist, life coach, and author living on a
                small farm in northern Indiana. For over 25 years, I&apos;ve walked with
                women through anxiety, burnout, transitions, and the quiet ache of
                wanting more from life.
              </p>
              <p>
                My work is rooted in faith, shaped by real experience, and offered with
                the kind of warmth you&apos;d find sitting on my front porch. I believe
                the best version of your life is simpler than you think.
              </p>
            </div>
            <div className="mt-10">
              <Button href="/about" variant="outline">More About Brenda</Button>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Services — minimal, centered cards */}
      <section className="py-20 bg-cream">
        <div className="max-w-5xl mx-auto px-6">
          <AnimateIn>
            <div className="text-center mb-14">
              <p className="text-gold uppercase tracking-[0.2em] text-xs mb-3">How I Can Help</p>
              <h2 className="font-serif text-4xl text-charcoal">
                Counseling. Coaching. Writing.
              </h2>
            </div>
          </AnimateIn>
          <div className="grid md:grid-cols-3 gap-10">
            {SERVICES.map((service, i) => (
              <AnimateIn key={service.title} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full bg-sage/10 flex items-center justify-center mx-auto mb-5">
                    <span className="text-sage text-xl">
                      {service.icon === "heart" && "♡"}
                      {service.icon === "compass" && "◎"}
                      {service.icon === "book" && "☙"}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl text-charcoal mb-3">{service.title}</h3>
                  <p className="text-charcoal/60 leading-relaxed mb-5">{service.description}</p>
                  <a href={service.href} className="text-sage text-sm hover:underline">
                    Learn More &rarr;
                  </a>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Book Feature — warm, simple side-by-side */}
      <section className="py-20 bg-brown/10">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-[auto_1fr] gap-12 items-center">
          <AnimateIn>
            <Image
              src="/BrendaYoder_Homepage_Pic3.png"
              alt="Uncomplicated by Brenda Yoder"
              width={280}
              height={400}
              className="rounded-xl object-cover mx-auto md:mx-0"
            />
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <p className="text-gold uppercase tracking-[0.2em] text-xs mb-3">New Book</p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-2">
              Uncomplicated
            </h2>
            <p className="text-charcoal/50 text-sm mb-5">Herald Press, 2024</p>
            <p className="text-charcoal/70 leading-relaxed mb-6 max-w-lg">
              In a world that rewards busyness, this book invites you to embrace a life of holy
              simplicity. Drawing from farm life, counseling, and decades of walking with women,
              Brenda offers practical wisdom for living with intention, faith, and peace.
            </p>
            <blockquote className="border-l-2 border-gold pl-4 mb-8">
              <p className="text-charcoal/60 italic leading-relaxed">
                &ldquo;Brenda Yoder is a refreshing voice calling us back to what matters most.
                Uncomplicated is the book every overwhelmed woman needs on her nightstand.&rdquo;
              </p>
              <cite className="text-gold text-sm mt-2 block not-italic">Carol Kent, Speaker and Author</cite>
            </blockquote>
            <Button href="https://www.amazon.com/Uncomplicated-Simple-Secrets-Compelling-Life/dp/B0CCKJN97J/" variant="outline">
              Order on Amazon
            </Button>
          </AnimateIn>
        </div>
      </section>

      {/* About Teaser — photo + warm paragraph */}
      <section className="py-20 bg-warm-white">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <AnimateIn>
            <Image
              src="/BrendaYoder_Homepage_Pic2.jpg"
              alt="Brenda Yoder in a casual, warm setting"
              width={520}
              height={520}
              className="rounded-2xl object-cover w-full aspect-square"
            />
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <p className="text-gold uppercase tracking-[0.2em] text-xs mb-3">About Brenda</p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-5">
              Real life. Real faith. Real help.
            </h2>
            <p className="text-charcoal/70 leading-relaxed mb-4">
              I live on a small farm in Shipshewana, Indiana, where the pace is slow and
              the porch light is always on. I&apos;m a licensed mental health counselor,
              life coach, and the author of several books including <em>Uncomplicated</em>.
            </p>
            <p className="text-charcoal/70 leading-relaxed mb-8">
              I also contribute to <em>Mornings with Jesus</em> and speak at events across
              the country. Whether I&apos;m in my counseling office or on a stage, my message
              is the same: you were made for a life that feels whole.
            </p>
            <Button href="/about" variant="outline">Get to Know Brenda</Button>
          </AnimateIn>
        </div>
      </section>

      {/* Testimonials — centered, large serif, clean */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-6">
          <AnimateIn>
            <p className="text-gold uppercase tracking-[0.2em] text-xs text-center mb-12">Kind Words</p>
          </AnimateIn>
          <div className="space-y-14">
            {TESTIMONIALS.map((t, i) => (
              <AnimateIn key={i} delay={i * 0.1}>
                <div className="text-center">
                  <p className="font-serif text-xl md:text-2xl text-charcoal/80 italic leading-relaxed mb-4">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p className="text-gold text-sm tracking-wide">{t.author}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 bg-warm-white">
        <div className="max-w-5xl mx-auto px-6">
          <AnimateIn>
            <div className="text-center mb-14">
              <p className="text-gold uppercase tracking-[0.2em] text-xs mb-3">From the Blog</p>
              <h2 className="font-serif text-4xl text-charcoal">Recent Reflections</h2>
            </div>
          </AnimateIn>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <AnimateIn key={post.slug} delay={i * 0.1}>
                <a href={`/blog/${post.slug}`} className="block h-full group">
                  <div className="h-full flex flex-col">
                    {post.image && (
                      <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-5">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                    )}
                    <span className="text-gold text-xs uppercase tracking-widest mb-2">{post.category}</span>
                    <h3 className="font-serif text-lg text-charcoal mb-2 group-hover:text-sage transition-colors">{post.title}</h3>
                    <p className="text-charcoal/50 text-sm leading-relaxed flex-1">{post.excerpt}</p>
                  </div>
                </a>
              </AnimateIn>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button href="/blog" variant="outline">View All Posts</Button>
          </div>
        </div>
      </section>

      {/* Email Capture */}
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
