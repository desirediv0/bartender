
"use client";
import Link from 'next/link';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/motionVariants';

export default function CTASection() {
  return (
    <section id="quote" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-brand opacity-20"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn('up', 0.2)}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
      >
        <motion.h2
          variants={fadeIn('up', 0.3)}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 leading-tight max-w-4xl mx-auto"
        >
          Make Your Event Fun, Safe & <span className="text-brand-purple">Unforgettable</span>
        </motion.h2>

        <motion.p
          variants={fadeIn('up', 0.4)}
          className="text-xl text-text-muted mb-12 max-w-2xl mx-auto font-light"
        >
          Whether it&apos;s a cozy house party or a grand wedding, we have the perfect team for you. Book Delhi&apos;s most trusted bartenders today.
        </motion.p>

        <motion.div
          variants={fadeIn('up', 0.5)}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-10 py-4 rounded-full bg-white text-brand-navy font-bold text-xl hover:bg-gray-100 transition-colors shadow-2xl hover:shadow-white/25 transform duration-300 block"
            >
              Get a Quote
            </Link>
          </motion.div>

          <motion.a
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
            href="tel:9213368407"
            className="w-full sm:w-auto px-10 py-4 rounded-full bg-brand-navy/50 border border-brand-purple/30 text-white font-semibold text-xl hover:bg-brand-navy transition-all backdrop-blur-sm flex items-center justify-center gap-3"
          >
            <Phone size={24} />
            <span>9213368407</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
