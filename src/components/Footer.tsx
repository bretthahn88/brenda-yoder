import Link from "next/link";
import { SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-dark text-warm-white/70 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl text-warm-white mb-2">Brenda Yoder</h3>
            <p className="text-sm leading-relaxed">{SITE.tagline}</p>
          </div>

          {/* About */}
          <div>
            <h4 className="text-warm-white font-sans text-xs uppercase tracking-widest mb-4">About</h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/about" className="hover:text-gold transition-colors">About Brenda</Link>
              <Link href="/counseling" className="hover:text-gold transition-colors">Counseling</Link>
              <Link href="/speaking" className="hover:text-gold transition-colors">Speaking</Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-warm-white font-sans text-xs uppercase tracking-widest mb-4">Resources</h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/books" className="hover:text-gold transition-colors">Books</Link>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-warm-white font-sans text-xs uppercase tracking-widest mb-4">Connect</h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/contact" className="hover:text-gold transition-colors">Contact</Link>
              <a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Facebook</a>
              <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Instagram</a>
              <a href={SITE.social.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">X / Twitter</a>
              <a href={SITE.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">LinkedIn</a>
              <a href={SITE.social.pinterest} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Pinterest</a>
            </div>
          </div>
        </div>

        <div className="border-t border-warm-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>{SITE.business} &middot; {SITE.location}</p>
          <p>&copy; {new Date().getFullYear()} Brenda Yoder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
