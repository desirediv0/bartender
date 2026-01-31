"use client";
const galleryImages = [
  {
    src: '/premium_bartender_hero_background.png',
    title: 'Bartenders in Action',
  },
  {
    src: '/cocktail_closeup_premium.png',
    title: 'Signature Cocktails',
  },
  {
    src: '/luxury_event_placeholder.png',
    title: 'Event Setups',
  },
  {
    src: '/premium_bartender_hero_background.png', // Reusing for demo to fill grid
    title: 'Mixology Art',
  }
];

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/motionVariants';

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-brand-black relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-brand-navy/20 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.h2
              variants={fadeIn('right', 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight"
            >
              Captured <span className="text-brand-purple">Moments</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('right', 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-xl text-text-muted"
            >
              A glimpse into the atmosphere we create.
            </motion.p>
          </div>
          <motion.button
            variants={fadeIn('left', 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ x: 5 }}
            className="hidden md:inline-flex items-center gap-2 text-brand-purple hover:text-brand-purple/80 transition-colors font-medium"
          >
            View All on Instagram <span>→</span>
          </motion.button>
        </div>

        {/* Horizontal Scroll Container for Mobile, Grid for Desktop */}
        <motion.div
          className="flex overflow-x-auto pb-8 gap-6 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 md:overflow-visible -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide snap-x"
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              variants={fadeIn('up', index * 0.1)}
              key={index}
              className="flex-shrink-0 w-72 md:w-auto aspect-[4/5] relative rounded-2xl overflow-hidden group snap-center cursor-pointer border border-white/10"
              whileHover={{ scale: 1.03 }}
            >
              {/* Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
                style={{ backgroundImage: `url('${image.src}')` }}
              ></div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile View All Button */}
        <div className="mt-8 text-center md:hidden">
          <button className="inline-flex items-center gap-2 text-brand-purple hover:text-brand-purple/80 transition-colors font-medium">
            View All on Instagram <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
