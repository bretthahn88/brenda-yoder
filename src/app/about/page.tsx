import type { Metadata } from "next";
import AnimateIn from "@/components/AnimateIn";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import { CREDENTIALS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Brenda Yoder — licensed therapist, life coach, author, and speaker based in Shipshewana, Indiana.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <AnimateIn>
            <SectionLabel>About Brenda</SectionLabel>
            <h1 className="font-serif text-5xl text-charcoal mt-3 mb-6 leading-tight">
              Rooted in faith.<br />Grounded in real life.
            </h1>
            <p className="text-charcoal/70 leading-relaxed mb-4">
              I&apos;m Brenda Yoder, a licensed mental health counselor, certified life coach, and
              author. I live on a small farm in Shipshewana, Indiana, with my husband. We have four
              adult children and five grandchildren.
            </p>
            <p className="text-charcoal/70 leading-relaxed mb-4">
              For over 25 years, I&apos;ve worked as a therapist, school counselor, and teacher. My
              practice, Still Waters Christian Services, is rooted in the belief that healing happens
              in unhurried, authentic connection.
            </p>
            <p className="text-charcoal/70 leading-relaxed">
              I grew up in the Mennonite community and carry those values of simplicity, service, and
              faith into everything I do. Whether I&apos;m counseling, coaching, writing, or speaking,
              my goal is the same: to help women slow down, reconnect with what matters, and live
              lives that feel whole.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            {/* PHOTO: Brenda portrait, warm and approachable */}
            <PhotoPlaceholder aspect="portrait" label="Brenda, warmth portrait" className="max-w-md ml-auto" />
          </AnimateIn>
        </div>
      </section>

      {/* Credentials Bar */}
      <section className="py-10 bg-sage">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {CREDENTIALS.map((cred) => (
              <span key={cred} className="text-warm-white/80 text-sm tracking-wide">
                {cred}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Farm */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <AnimateIn>
            {/* PHOTO: Farm/property exterior */}
            <PhotoPlaceholder aspect="landscape" label="Still Waters Farm, exterior" />
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <SectionLabel>The Heart Behind It</SectionLabel>
            <h2 className="font-serif text-3xl text-charcoal mt-3 mb-6">Still Waters Farm</h2>
            <p className="text-charcoal/70 leading-relaxed mb-4">
              Shipshewana, Indiana &middot; Still Waters Farm
            </p>
            <blockquote className="border-l-2 border-gold pl-4 my-6">
              <p className="text-charcoal/70 italic leading-relaxed">
                &ldquo;I create welcoming spaces where people can slow down, heal, and grow in their
                relationship with themselves, God, and others. Through counseling, coaching, writing,
                speaking, and thoughtful hospitality, I help nourish holistic growth — offering authentic
                connection, grounding principles, and practical life balance for our hurried,
                complicated lives.&rdquo;
              </p>
            </blockquote>
            <Button href="/contact" variant="outline">Get in Touch</Button>
          </AnimateIn>
        </div>
      </section>

      {/* Professional Background */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-3xl mx-auto px-6">
          <AnimateIn>
            <SectionLabel>Professional Background</SectionLabel>
            <h2 className="font-serif text-3xl text-charcoal mt-3 mb-8">
              25+ Years of Helping Others
            </h2>
            <div className="space-y-4 text-charcoal/70 leading-relaxed">
              <p>
                Brenda holds a Master&apos;s degree in counseling and is a Licensed Mental Health
                Counselor (LMHC) in the state of Indiana. She has worked as a classroom teacher,
                school counselor, and private practice therapist.
              </p>
              <p>
                She is the author of three books, including <em>Uncomplicated: Simple Secrets for a
                Compelling Life</em> (Herald Press, 2024), and is an annual contributor to
                <em> Mornings with Jesus</em> (Guideposts).
              </p>
              <p>
                Brenda serves on the boards of Menno-Clinic India and the LaGrange County Community
                Foundation. She speaks selectively at conferences, retreats, and events on themes of
                faith, family, simplicity, and resilience.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-sage">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimateIn>
            <h2 className="font-serif text-4xl text-warm-white mb-4">Ready to Connect?</h2>
            <p className="text-warm-white/80 mb-8">
              I&apos;d love to hear from you, whether it&apos;s about counseling, coaching, speaking, or just to say hello.
            </p>
            <Button href="/contact" variant="secondary">Get in Touch</Button>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
