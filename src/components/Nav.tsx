"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS } from "@/lib/constants";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md border-b border-charcoal/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl text-charcoal tracking-wide">
          Brenda Yoder
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-charcoal/70 hover:text-sage transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-sm bg-sage text-white px-5 py-2 rounded-full hover:bg-sage-light transition-colors"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-charcoal transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 bg-charcoal transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-charcoal transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div className="md:hidden fixed inset-0 top-16 bg-cream z-40 flex flex-col items-center justify-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-serif text-2xl text-charcoal hover:text-sage transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="bg-sage text-white px-8 py-3 rounded-full hover:bg-sage-light transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      )}
    </nav>
  );
}
