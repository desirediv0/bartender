'use client';

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/motionVariants';
import { Wine, Music, Users, PartyPopper, Check } from 'lucide-react';

const events = [
  {
    title: "Weddings",
    description: "Make your special day unforgettable with our bespoke wedding bar services. From champagne towers to signature couple cocktails.",
    icon: Wine,
    features: ["Custom Cocktail Menu", "Champagne Service", "Professional Staff"]
  },
  {
    title: "Corporate Events",
    description: "Impress your clients and colleagues with a sophisticated bar setup. Perfect for product launches, galas, and networking events.",
    icon: Users,
    features: ["Branded Bar Setup", "speed & Efficiency", "Premium Selection"]
  },
  {
    title: "Private Parties",
    description: "Elevate your house party or birthday bash. We handle everything from setup to cleanup so you can enjoy the party.",
    icon: PartyPopper,
    features: ["Theme Matching", "Full Bar Equipment", "Hassle-free Service"]
  },
  {
    title: "Music Festivals",
    description: "High-volume bar management for large scale events. We keep the drinks flowing and the energy high.",
    icon: Music,
    features: ["High Capacity", "Fast Service", "Crowd Control"]
  }
];

export default function PremiumEvents() {
  return (
    <section className="py-20 bg-white px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
        >
          {events.map((event, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up', 0.2 * index)}
              className="group relative p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl hover:border-royal-purple/20 transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-xl bg-royal-purple/10 text-royal-purple group-hover:scale-110 transition-transform duration-300">
                  <event.icon size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-heading font-bold text-brand-black mb-3 group-hover:text-royal-purple transition-colors">{event.title}</h3>
                  <p className="text-brand-black/70 font-body mb-6 leading-relaxed">{event.description}</p>
                  
                  <ul className="space-y-2">
                    {event.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-brand-black/60 font-body">
                        <Check size={14} className="text-royal-purple" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
