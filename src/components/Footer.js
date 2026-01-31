"use client";
import { Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/motionVariants';

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={fadeIn('up', 0.2)}
      className="bg-brand-black border-t border-white/5 py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-1">
              BARTENDERS <span className="text-brand-purple">CLUB</span> DELHI
            </h3>
            <p className="text-text-muted text-sm">
              Premium Bar Staffing & Mixology Services • Established 2015
            </p>
          </div>

          {/* Social & Contact */}
          <div className="flex items-center gap-6">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.instagram.com/bartender_club_delhi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-brand-purple hover:shadow-[0_0_15px_rgba(108,99,255,0.5)] transition-all p-2 rounded-full"
            >
              <Instagram size={24} />
              <span className="sr-only">Instagram</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:9213368407"
              className="text-white font-bold hover:text-brand-purple hover:shadow-[0_0_15px_rgba(108,99,255,0.3)] transition-all px-3 py-1 rounded-lg"
            >
              9213368407
            </motion.a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Bartenders Club Delhi. Serving Delhi NCR & Surrounding Areas.</p>
        </div>
      </div>
    </motion.footer>
  );
}
