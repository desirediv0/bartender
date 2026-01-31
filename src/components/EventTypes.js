"use client";
import { Heart, Briefcase, Home, Sparkles } from 'lucide-react';
import EventCard from './EventCard';
import { motion } from 'framer-motion';
import { staggerContainer } from '@/lib/motionVariants';

export default function EventTypes() {
  const eventTypes = [
    {
      icon: Heart,
      title: 'Weddings',
      description: 'Elegant staffing for your special day.',
      image: '/luxury_event_placeholder.png'
    },
    {
      icon: Briefcase,
      title: 'Corporate Events',
      description: 'Professional service for business gatherings.',
      image: '/luxury_event_placeholder.png'
    },
    {
      icon: Home,
      title: 'House Parties',
      description: 'Intimate vibes with expert bartenders.',
      image: '/luxury_event_placeholder.png'
    },
    {
      icon: Sparkles,
      title: 'Private Functions',
      description: 'Exclusive service for VIP celebrations.',
      image: '/luxury_event_placeholder.png'
    },
  ];

  return (
    <section id="events" className="py-24 bg-brand-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Events We <span className="text-brand-purple">Curate</span>
          </h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            From grand ballrooms to intimate living rooms, we adapt our expertise to your venue.
          </p>
        </div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {eventTypes.map((event, index) => (
            <EventCard key={index} {...event} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
