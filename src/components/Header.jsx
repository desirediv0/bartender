'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Instagram, Facebook } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-soft-gold/30 transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-20 h-20 relative">
            <Image
              src="/logo.png"
              alt="Bartenders Club Delhi"
              fill
              className="object-contain"
            />
          </div>
          {/* <div className="flex flex-col">
             <span className="text-xs font-heading font-bold text-royal-purple tracking-widest group-hover:text-soft-gold transition-colors">
                BARTENDERS
             </span>
             <span className="text-[10px] font-body text-soft-gold tracking-[0.2em]">
                CLUB DELHI
             </span>
          </div> */}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-xs font-body font-medium text-royal-purple hover:text-soft-gold transition-colors duration-300 tracking-widest uppercase group py-2"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-soft-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          
          {/* Social Icons (Desktop) */}
          <div className="hidden md:flex items-center gap-3 mr-2">
            <a href="https://www.instagram.com/bartender_club_delhi" target="_blank" rel="noopener noreferrer" className="text-royal-purple hover:text-soft-gold transition-colors">
              <Instagram size={18} />
            </a>
            <a href="https://www.facebook.com/share/1cjRhuYgXr" target="_blank" rel="noopener noreferrer" className="text-royal-purple hover:text-soft-gold transition-colors">
              <Facebook size={18} />
            </a>
          </div>

          <a
            href="tel:9213368407"
            className="hidden sm:flex items-center gap-1 text-xs font-body text-royal-purple hover:text-soft-gold transition-colors"
          >
            <Phone size={14} />
            <span className="font-semibold">9213368407</span>
          </a>
          <button className="px-5 py-2 text-xs font-heading font-semibold text-white bg-royal-purple hover:bg-royal-purple/90 transition-all duration-300 tracking-wider uppercase">
            Get Quote
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-1 text-black/70 hover:text-royal-purple"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-soft-gold/30">
          <div className="px-4 py-4 space-y-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-sm font-body text-royal-purple hover:text-soft-gold py-3 border-b border-gray-100 tracking-wide uppercase font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="flex items-center gap-4 py-2 border-b border-gray-100">
              <a href="https://www.instagram.com/bartender_club_delhi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-royal-purple hover:text-soft-gold">
                <Instagram size={18} />
                <span className="font-medium">Instagram</span>
              </a>
              <a href="https://www.facebook.com/people/Bartenders-Club-Delhi/61552721245263/?rdid=nOUIZH0uh0vqSmvX&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1cjRhuYgXr%2F" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-royal-purple hover:text-soft-gold">
                <Facebook size={18} />
                <span className="font-medium">Facebook</span>
              </a>
            </div>
            <a
              href="tel:9213368407"
              className="flex items-center gap-2 text-xs font-body text-royal-purple py-2 tracking-wide uppercase font-medium"
            >
              <Phone size={14} />
              <span>9213368407</span>
            </a>
            <button className="w-full px-4 py-2 text-xs font-heading font-semibold text-white bg-royal-purple hover:bg-royal-purple/90 transition-all duration-300 tracking-wider uppercase mt-2">
              Get Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
