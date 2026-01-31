'use client';

import { Menu, X, Instagram, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for glassmorphism intensity
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Events', href: '/events' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  const menuVariants = {
    hidden: { x: '100%' },
    visible: {
      x: 0,
      transition: { duration: 0.3, ease: 'easeOut' }
    },
    exit: {
      x: '100%',
      transition: { duration: 0.2, ease: 'easeIn' }
    }
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10 py-2' : 'bg-transparent py-4'
        }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link href="#" className="text-2xl font-bold text-white tracking-wider">
              BARTENDERS <span className="text-purple-500">CLUB</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-sm font-medium text-text-muted hover:text-white transition-colors uppercase tracking-wide group"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-brand-purple transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Instagram - Always Visible */}
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.instagram.com/bartender_club_delhi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 hover:bg-brand-purple/20 text-white hover:text-brand-purple transition-all border border-transparent hover:border-brand-purple/30"
              aria-label="Follow us on Instagram"
            >
              <Instagram size={20} />
            </motion.a>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:9213368407"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-brand-purple/50 transition-all text-sm font-medium"
              >
                <Phone size={16} className="text-brand-purple" />
                <span>9213368407</span>
              </motion.a>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="px-6 py-2 rounded-full bg-gradient-brand text-white font-semibold text-sm hover:shadow-[0_0_15px_rgba(108,99,255,0.4)] transition-all"
                >
                  Get a Quote
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-white hover:text-purple-400 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              className="lg:hidden fixed top-20 right-0 bottom-0 w-3/4 max-w-sm bg-neutral-950/95 backdrop-blur-xl border-l border-white/10 shadow-2xl p-6"
            >
              <div className="flex flex-col space-y-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="text-xl font-medium text-gray-300 hover:text-white hover:text-purple-400 block"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

                <div className="pt-8 flex flex-col gap-4 border-t border-white/10">
                  <a
                    href="tel:9213368407"
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10"
                  >
                    <Phone size={18} className="text-purple-400" />
                    <span>Call 9213368407</span>
                  </a>
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full text-center px-4 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold shadow-lg"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
