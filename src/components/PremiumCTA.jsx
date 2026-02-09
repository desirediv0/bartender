'use client';

import { ArrowRight, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export default function PremiumCTA() {
  return (
    <section id="contact" className="w-full bg-white py-12">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        {/* Main CTA Card */}
        <div className="relative bg-gradient-to-br from-royal-purple via-royal-purple/95 to-royal-purple text-white p-12 md:p-16 border border-soft-gold/30">
          {/* Background Accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-soft-gold/5 -z-10"></div>

          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to Elevate Your Event?
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto font-body leading-relaxed">
              Let&apos;s create an unforgettable bartending experience for your next celebration. Our team is ready to craft the perfect atmosphere.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <a
              href="tel:9213368407"
              className="group flex items-center gap-4 p-6 bg-white/10 border border-soft-gold/20 hover:bg-white/20 hover:border-soft-gold/40 transition-all duration-300"
            >
              <Phone size={32} className="text-soft-gold flex-shrink-0" />
              <div className="text-left">
                <p className="text-xs uppercase tracking-wide text-soft-gold font-semibold">Call Us</p>
                <p className="text-2xl font-heading font-bold group-hover:text-soft-gold transition-colors">+91 9213368407</p>
              </div>
            </a>

            <a
              href="mailto:info@bartendersclubdelhi.com"
              className="group flex items-center gap-4 p-6 bg-white/10 border border-soft-gold/20 hover:bg-white/20 hover:border-soft-gold/40 transition-all duration-300"
            >
              <Mail size={32} className="text-soft-gold flex-shrink-0" />
              <div className="text-left">
                <p className="text-xs uppercase tracking-wide text-soft-gold font-semibold">Email Us</p>
                <p className="text-lg font-heading font-bold group-hover:text-soft-gold transition-colors">Get Quote</p>
              </div>
            </a>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/contact" className="group px-10 py-4 bg-soft-gold text-royal-purple font-heading font-bold text-lg uppercase tracking-wide hover:bg-white transition-all duration-300 flex items-center gap-2 shadow-lg">
              Get Free Consultation
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/services" className="px-10 py-4 border-2 border-soft-gold text-soft-gold font-body font-semibold uppercase tracking-wide hover:bg-soft-gold/10 transition-all duration-300">
              View Packages
            </Link>
          </div>

          {/* Trust Badge */}
          <div className="mt-12 pt-8 border-t border-white/20 text-center">
            <p className="text-sm text-white/70 font-body mb-4">Trusted by hundreds of event organizers across Delhi & NCR</p>
            <div className="flex items-center justify-center gap-6 text-xs uppercase tracking-widest text-white/60">
              <span>Weddings</span>
              <span>•</span>
              <span>Corporate Events</span>
              <span>•</span>
              <span>Private Parties</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
