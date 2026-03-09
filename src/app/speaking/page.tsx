import type { Metadata } from "next";
import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Speaking",
  description:
    "Invite Brenda Yoder to speak at your next event. Topics include simplicity, soul care, faith, family, and resilience.",
};

export default function SpeakingPage() {
  const topics = [
    {
      title: "Living Uncomplicated",
      desc: "Practical steps to shed the unnecessary and embrace a life of holy simplicity.",
    },
    {
      title: "Soul Care for the Overwhelmed",
      desc: "How to nurture your inner life when your outer life won't slow down.",
    },
    {
      title: "Faith in the Mess",
      desc: "Finding God in the unpolished, real moments of everyday life.",
    },
    {
      title: "Launching & Letting Go",
      desc: "Parenting adult children with grace, grit, and a whole lot of trust.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <AnimateIn>
            <SectionLabel>Speaking</SectionLabel>
            <h1 className="font-serif text-5xl text-charcoal mt-3 mb-6 leading-tight">
              Words that settle the soul.
            </h1>
            <p className="text-charcoal/70 leading-relaxed mb-4">
              Brenda speaks selectively in this season, bringing her signature warmth, wisdom, and
              real-life stories to conferences, retreats, and events.
            </p>
            <p className="text-charcoal/70 leading-relaxed mb-8">
              Her topics are rooted in the themes of <em>Uncomplicated</em>: simplicity, soul care,
              faith, family, and resilience. She speaks like she writes: honestly, warmly, and with
              the kind of depth that stays with you.
            </p>
            <Button href="/contact" variant="primary">Inquire About Speaking</Button>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <Image
              src="/BrendaYoder_Speaking_Pic1.png"
              alt="Brenda Yoder speaking at an event"
              width={700}
              height={525}
              className="rounded-2xl object-cover w-full"
            />
          </AnimateIn>
        </div>
      </section>

      {/* Topics */}
      <section className="py-24 bg-sage/10">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateIn>
            <div className="text-center mb-16">
              <SectionLabel>Topics</SectionLabel>
              <h2 className="font-serif text-4xl text-charcoal mt-3">
                Speaking Topics
              </h2>
            </div>
          </AnimateIn>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {topics.map((topic, i) => (
              <AnimateIn key={topic.title} delay={i * 0.1}>
                <div className="bg-warm-white border border-sage/15 rounded-2xl p-8">
                  <h3 className="font-serif text-2xl text-charcoal mb-3">{topic.title}</h3>
                  <p className="text-charcoal/60 leading-relaxed">{topic.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Endorsements */}
      <section className="py-24 bg-brown/10">
        <div className="max-w-3xl mx-auto px-6">
          <AnimateIn>
            <SectionLabel>What Event Planners Say</SectionLabel>
            <h2 className="font-serif text-3xl text-charcoal mt-3 mb-10">Endorsements</h2>
          </AnimateIn>
          <div className="space-y-8">
            {[
              {
                quote: "Brenda connected with our audience in a way that was both deeply personal and universally relatable. Women were moved, challenged, and encouraged.",
                author: "Women's Conference Director",
              },
              {
                quote: "She brings a rare authenticity to the stage. No fluff, no performance, just truth delivered with warmth and grace.",
                author: "Retreat Coordinator",
              },
            ].map((e, i) => (
              <AnimateIn key={i} delay={i * 0.1}>
                <blockquote className="border-l-2 border-gold pl-6">
                  <p className="text-charcoal/70 italic leading-relaxed mb-2">
                    &ldquo;{e.quote}&rdquo;
                  </p>
                  <cite className="text-gold text-sm not-italic">{e.author}</cite>
                </blockquote>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Event Planner Kit + CTA */}
      <section className="py-20 bg-sage">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimateIn>
            <h2 className="font-serif text-4xl text-warm-white mb-4">Planning an Event?</h2>
            <p className="text-warm-white/80 leading-relaxed mb-8">
              Download the Event Planner Kit for bios, headshots, and topic descriptions.
              Or reach out directly to start a conversation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="#" variant="secondary">Event Planner Kit (PDF)</Button>
              <Button href="/contact" variant="outline">Contact Brenda</Button>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
