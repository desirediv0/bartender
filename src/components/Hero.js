"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/premium_bartender_hero_background.png')" }}
        ></div>
        <div className="absolute inset-0 bg-black/70 bg-gradient-to-t from-black via-black/50 to-purple-950/30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <motion.div
          className="max-w-4xl mx-auto text-center space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge/Highlight */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-navy/60 border border-brand-purple/30 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-brand-purple animate-pulse"></span>
            <span className="text-brand-purple text-sm font-medium tracking-wide uppercase">Established 2015</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight drop-shadow-lg">
            Delhi’s Premier
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-brand">
              Bartender & Mixology
            </span>
            <br />
            Service
          </motion.h1>

          {/* Subheading */}
          <motion.p variants={itemVariants} className="text-lg sm:text-2xl text-text-muted max-w-2xl mx-auto font-light leading-relaxed">
            Safe, professional & memorable bar experiences.
            <br className="hidden sm:block" />
            Elevating events across Delhi NCR.
          </motion.p>

          {/* Highlights */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm sm:text-base text-gray-300 font-medium">
            <span className="flex items-center gap-2">
              <span className="text-brand-purple">✦</span> Male & Female Bartenders
            </span>
            <span className="flex items-center gap-2">
              <span className="text-brand-purple">✦</span> Mixologist Bartenders
            </span>
            <span className="flex items-center gap-2">
              <span className="text-brand-purple">✦</span> Corporate & Private Events
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href="/contact"
                className="block w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-brand text-white font-bold text-lg hover:shadow-[0_0_20px_rgba(108,99,255,0.5)] transition-all duration-300"
              >
                Get a Quote
              </Link>
            </motion.div>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="tel:9213368407"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-lg hover:bg-white/20 hover:border-white/40 transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2"
            >
              <span>Call 9213368407</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}
