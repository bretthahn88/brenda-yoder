"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import AnimateIn from "@/components/AnimateIn";
import SectionLabel from "@/components/ui/SectionLabel";
import { SITE } from "@/lib/constants";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    setSubmitted(true);
  }

  return (
    <section className="py-24 bg-warm-white">
      <div className="max-w-3xl mx-auto px-6">
        <AnimateIn>
          <div className="text-center mb-16">
            <SectionLabel>Contact</SectionLabel>
            <h1 className="font-serif text-5xl text-charcoal mt-3 mb-4">Get in Touch</h1>
            <p className="text-charcoal/60 max-w-xl mx-auto">
              Whether you have a question about counseling, coaching, speaking, or just want to say
              hello, I&apos;d love to hear from you. I typically respond within a few business days.
            </p>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.15}>
          {submitted ? (
            <div className="bg-cream rounded-2xl p-12 text-center">
              <h2 className="font-serif text-3xl text-charcoal mb-4">Thank you.</h2>
              <p className="text-charcoal/60">
                Your message has been sent. I&apos;ll be in touch soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-cream rounded-2xl p-8 md:p-12 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-charcoal/70 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-charcoal/10 bg-warm-white text-charcoal focus:outline-none focus:border-sage transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-charcoal/70 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-charcoal/10 bg-warm-white text-charcoal focus:outline-none focus:border-sage transition-colors"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm text-charcoal/70 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-charcoal/10 bg-warm-white text-charcoal focus:outline-none focus:border-sage transition-colors"
                >
                  <option value="">Select a topic</option>
                  <option value="Counseling Inquiry">Counseling Inquiry</option>
                  <option value="Coaching">Coaching</option>
                  <option value="Speaking">Speaking</option>
                  <option value="General">General</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-charcoal/70 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-charcoal/10 bg-warm-white text-charcoal focus:outline-none focus:border-sage transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-sage text-white py-3 rounded-full hover:bg-sage-light transition-colors text-sm tracking-wide"
              >
                Send Message
              </button>
            </form>
          )}
        </AnimateIn>

        <AnimateIn delay={0.25}>
          <div className="mt-12 text-center text-charcoal/50 text-sm space-y-2">
            <p>{SITE.location}</p>
            <p>{SITE.business}</p>
            <div className="flex justify-center gap-6 mt-4">
              {Object.entries(SITE.social).map(([name, url]) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sage transition-colors capitalize"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
