import type { Metadata } from "next";
import AnimateIn from "@/components/AnimateIn";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";

export const metadata: Metadata = {
  title: "Counseling & Coaching",
  description:
    "Individual counseling and life coaching with Brenda Yoder, LMHC. Faith-integrated, grounded, and real. In-person in Shipshewana, IN.",
};

export default function CounselingPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimateIn>
            <SectionLabel>Counseling &amp; Coaching</SectionLabel>
            <h1 className="font-serif text-5xl md:text-6xl text-charcoal mt-4 mb-6 leading-tight">
              A quiet place to find your way.
            </h1>
            <p className="text-charcoal/60 text-lg leading-relaxed max-w-2xl mx-auto">
              I&apos;m currently accepting a small number of new counseling and coaching clients.
              My practice is intentionally limited — I work with people, not caseloads.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <AnimateIn>
            <SectionLabel>Who This Is For</SectionLabel>
            <h2 className="font-serif text-3xl text-charcoal mt-3 mb-6">
              You don&apos;t have to have it all figured out.
            </h2>
            <p className="text-charcoal/70 leading-relaxed mb-4">
              I work with women who are navigating:
            </p>
            <ul className="space-y-3 text-charcoal/70">
              {[
                "Anxiety and overwhelm",
                "Life transitions and identity shifts",
                "Burnout and emotional exhaustion",
                "Faith questions and spiritual dryness",
                "Parenting adult children",
                "The desire for a more grounded, intentional life",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-gold mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            {/* PHOTO: Counseling office interior */}
            <PhotoPlaceholder aspect="landscape" label="Counseling office, warm and inviting" />
          </AnimateIn>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-3xl mx-auto px-6">
          <AnimateIn>
            <SectionLabel>My Approach</SectionLabel>
            <h2 className="font-serif text-3xl text-charcoal mt-3 mb-6">
              Faith-integrated. Grounded. Real.
            </h2>
            <div className="space-y-4 text-charcoal/70 leading-relaxed">
              <p>
                I don&apos;t do clinical jargon. I don&apos;t do programs or formulas. What I do is
                show up with 25+ years of professional training, genuine warmth, and a deep belief
                that God meets us in our most honest moments.
              </p>
              <p>
                My counseling is faith-integrated, which means your faith is welcome in the room
                — but so are your doubts, your questions, and the parts of your story that don&apos;t
                feel tidy. We&apos;ll work together at a pace that feels right for you.
              </p>
              <p>
                Whether we meet for counseling or coaching, you can expect a space that feels more
                like a conversation with a wise friend than a clinical appointment.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* The Setting */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <AnimateIn>
            {/* PHOTO: Farm/office exterior or property */}
            <PhotoPlaceholder aspect="landscape" label="Still Waters Farm, office setting" />
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <SectionLabel>The Setting</SectionLabel>
            <h2 className="font-serif text-3xl text-charcoal mt-3 mb-6">
              A restorative space.
            </h2>
            <p className="text-charcoal/70 leading-relaxed mb-4">
              My on-property office in Shipshewana, Indiana is designed to feel like a place you can
              exhale. Surrounded by farmland and quiet, it&apos;s a space that invites you to slow
              down before we even begin.
            </p>
            <p className="text-charcoal/70 leading-relaxed">
              There&apos;s something about stepping out of your routine and into a peaceful
              environment that opens things up. That&apos;s intentional.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-4xl mx-auto px-6">
          <AnimateIn>
            <SectionLabel>Services Offered</SectionLabel>
            <h2 className="font-serif text-3xl text-charcoal mt-3 mb-10">
              Two ways to work together.
            </h2>
          </AnimateIn>
          <div className="grid md:grid-cols-2 gap-8">
            <AnimateIn>
              <div className="bg-cream rounded-2xl p-8">
                <h3 className="font-serif text-2xl text-charcoal mb-3">Individual Counseling</h3>
                <p className="text-charcoal/60 leading-relaxed mb-2">
                  In-person sessions at my Shipshewana office. Licensed mental health counseling
                  for anxiety, life transitions, burnout, grief, and more.
                </p>
                <p className="text-charcoal/40 text-sm">In-person only &middot; Shipshewana, IN</p>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="bg-cream rounded-2xl p-8">
                <h3 className="font-serif text-2xl text-charcoal mb-3">Life Coaching</h3>
                <p className="text-charcoal/60 leading-relaxed mb-2">
                  For women ready to make intentional changes. Coaching is forward-focused and
                  action-oriented, available in-person or by phone.
                </p>
                <p className="text-charcoal/40 text-sm">In-person or phone</p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-6">
          <AnimateIn>
            <SectionLabel>What to Expect</SectionLabel>
            <h2 className="font-serif text-3xl text-charcoal mt-3 mb-6">
              Your first step is simple.
            </h2>
            <div className="space-y-6">
              {[
                { step: "01", title: "Reach Out", desc: "Send me a message through the contact form. Tell me a little about what you're looking for." },
                { step: "02", title: "We'll Talk", desc: "I'll respond to schedule a brief phone call so we can see if we're a good fit." },
                { step: "03", title: "Begin", desc: "If it feels right for both of us, we'll schedule your first session. No pressure, no sales pitch." },
              ].map((s) => (
                <div key={s.step} className="flex gap-6 items-start">
                  <span className="text-gold font-serif text-3xl">{s.step}</span>
                  <div>
                    <h3 className="font-serif text-xl text-charcoal mb-1">{s.title}</h3>
                    <p className="text-charcoal/60 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-sage">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimateIn>
            <h2 className="font-serif text-4xl text-warm-white mb-4">Ready to take the first step?</h2>
            <p className="text-warm-white/80 mb-8">
              I&apos;d love to hear from you. No commitment, just a conversation.
            </p>
            <Button href="/contact" variant="secondary">Inquire About Counseling</Button>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
