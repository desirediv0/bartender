'use client';

import Image from 'next/image';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';

export default function PremiumFooter() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: 'Bartenders (Indian & Foreign)', href: '/services' },
      { label: 'Molecular Bar Setup', href: '/services' },
      { label: 'Mixologists', href: '/services' },
      { label: 'Flavour Hookah', href: '/services' },
      { label: 'Imported Glassware', href: '/services' },
    ],
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Gallery', href: '/gallery' },
      { label: 'Services', href: '/services' },
      { label: 'Contact', href: '/contact' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms & Conditions', href: '#' },
      { label: 'Booking Terms', href: '#' },
    ],
  };

  return (
    <footer className="bg-royal-purple text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-24 h-24 relative">
                <Image
                  src="/logo.png"
                  alt="Bartenders Club Delhi"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <div>
                <p className="font-heading font-bold text-sm tracking-wide">BARTENDERS</p>
                <p className="font-heading font-bold text-xs text-soft-gold">CLUB DELHI</p>
              </div>
            </div>
            <p className="text-white/70 text-sm font-body leading-relaxed mb-6">
              Premier mixology and bartending services for Delhi & NCR. Since 2015, crafting memorable event experiences.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/share/1cjRhuYgXr/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 hover:bg-soft-gold/20 text-white hover:text-soft-gold transition-all rounded-sm">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/bartender_club_delhi" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 hover:bg-soft-gold/20 text-white hover:text-soft-gold transition-all rounded-sm">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-heading font-bold text-sm uppercase tracking-widest text-soft-gold mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white/70 hover:text-soft-gold text-sm font-body transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-heading font-bold text-sm uppercase tracking-widest text-soft-gold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white/70 hover:text-soft-gold text-sm font-body transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-sm uppercase tracking-widest text-soft-gold mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <a href="tel:9213368407" className="flex items-start gap-3 text-white/70 hover:text-soft-gold transition-colors group">
                <Phone size={18} className="mt-1 flex-shrink-0 text-soft-gold group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-soft-gold font-semibold">Call</p>
                  <p className="font-body text-sm">+91 9213368407</p>
                </div>
              </a>
              <a href="mailto:info@bartendersclubdelhi.com" className="flex items-start gap-3 text-white/70 hover:text-soft-gold transition-colors group">
                <Mail size={18} className="mt-1 flex-shrink-0 text-soft-gold group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-soft-gold font-semibold">Email</p>
                  <p className="font-body text-sm">info@bartendersclubdelhi.com</p>
                </div>
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-soft-gold" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-soft-gold font-semibold">Location</p>
                  <p className="font-body text-sm text-white/70">Delhi & NCR</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 py-8">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Legal Links */}
            <div className="flex flex-wrap gap-4 text-xs text-white/60 font-body">
              {footerLinks.legal.map((link, index) => (
                <div key={index}>
                  <a href={link.href} className="hover:text-soft-gold transition-colors">
                    {link.label}
                  </a>
                  {index < footerLinks.legal.length - 1 && <span className="mx-4 inline">|</span>}
                </div>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-center text-xs text-white/60 font-body">
              © {currentYear} Bartenders Club Delhi. All rights reserved.
            </p>

        
           
          </div>
        </div>
      </div>
    </footer>
  );
}
