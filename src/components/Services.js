"use client";
import { Users, Wine, GlassWater, Citrus, CloudFog, Flame } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/motionVariants';

const ServiceCard = ({ icon: Icon, title, description, index }) => (
  <motion.div
    variants={fadeIn('up', index * 0.1)}
    whileHover={{ y: -10 }}
    className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-brand-purple/50 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-brand-purple/20"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-brand-navy/0 group-hover:to-brand-navy/40 transition-all duration-500"></div>

    {/* Glow Effect */}
    <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-purple/20 blur-[60px] group-hover:bg-brand-purple/40 transition-colors duration-500"></div>

    <div className="relative z-10">
      <div className="w-14 h-14 mb-6 rounded-2xl bg-brand-navy/40 flex items-center justify-center border border-brand-purple/20 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-7 h-7 text-brand-purple group-hover:text-white transition-colors" />
      </div>

      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-purple transition-colors">{title}</h3>
      <p className="text-text-muted leading-relaxed text-sm">
        {description}
      </p>
    </div>
  </motion.div>
);

export default function Services() {
  const services = [
    {
      icon: Users,
      title: 'Bartender Staffing',
      description: 'Professional, experienced, and creative bartenders and mixologists. Our staff adds extra fun and joy to your event with amazing drinks and service.',
    },
    {
      icon: Wine,
      title: 'Customized Menu',
      description: 'Signature drinks tailored to your event theme or taste. We provide all ingredients for your menu, displayed beautifully. (Alcohol provided by host)',
    },
    {
      icon: GlassWater,
      title: 'Glassware',
      description: 'A variety of premium glassware to add a great impression. Available as an addition to any of our packages.',
    },
    {
      icon: Citrus,
      title: 'Mixer Packages',
      description: 'Comprehensive setup including Coke, Sprite, Juices (Cranberry, Orange, etc.), Garnishes (Lemon, Lime), and Syrups.',
    },
    {
      icon: CloudFog,
      title: 'Hookah on Hire',
      description: 'We provide various types of hookahs for any kind of event to enhance the atmosphere.',
    },
    {
      icon: Flame, // Using Flame as a proxy for Molecular/Science
      title: 'Molecular Bar Setup',
      description: 'The hottest trend this season. Liquid Nitrogen infused cocktails and molecular mixology that adds that extra "wow" factor.',
    },
  ];

  return (
    <section id="services" className="py-24 bg-brand-black relative">
      {/* Background Decoration */}
      <div className="absolute top-1/4 left-0 w-full h-1/2 bg-brand-navy/5 -skew-y-3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn('up', 0.2)}
            className="text-4xl sm:text-5xl font-bold mb-4"
          >
            What We <span className="text-transparent bg-clip-text bg-gradient-brand">Offer</span>
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn('up', 0.3)}
            className="text-text-muted max-w-2xl mx-auto"
          >
            A complete suite of bar services to ensure your event is unforgettable.
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
