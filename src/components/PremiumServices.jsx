'use client';

import { Martini, Sparkles, Wine, Zap, Flame, Music } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function PremiumServices() {
  const services = [
    {
      icon: Martini,
      title: 'Bartender Staffing',
      description: 'Professional, experienced mixologists and bartenders for your events. Our team brings expertise, style, and exceptional service to every occasion.',
      image: '/bartender-staffing.jpg',
    },
    {
      icon: Sparkles,
      title: 'Signature Cocktails',
      description: 'Customized cocktail menus created for your event theme. From classic cocktails to innovative creations, we design the perfect drink experience.',
      image: '/signature-cocktails.jpg',
    },
    {
      icon: Zap,
      title: 'Molecular Mixology',
      description: 'Trending molecular bar setup with liquid nitrogen cocktails. Add a spectacular "wow" factor to your event with cutting-edge mixology.',
      image: '/molecular-mixology.jpg',
    },
    {
      icon: Wine,
      title: 'Premium Glassware',
      description: 'Elegant glassware collection that elevates the drinking experience. From classic to contemporary, we have the perfect vessels for your cocktails.',
      image: '/premium-glassware.jpg',
    },
    {
      icon: Flame,
      title: 'Mixer Packages',
      description: 'Complete mixer selection including sodas, juices, syrups, and garnishes. All components provided for seamless cocktail service.',
      image: '/mixer-packages.jpg',
    },
    {
      icon: Music,
      title: 'Hookah & Entertainment',
      description: 'Premium hookah service and event entertainment options. Create an immersive, luxurious ambiance that guests will remember.',
      image: '/hookah-entertainment.jpg',
    },
  ];

  return (
    <section id="services" className="w-full bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-soft-gold"></div>
            <span className="text-xs font-body font-semibold tracking-widest text-royal-purple uppercase">
              What We Offer
            </span>
            <div className="h-px w-8 bg-soft-gold"></div>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-royal-purple mb-6 leading-tight">
            Premium Bartending Services
          </h2>
          <p className="text-lg text-black/60 max-w-2xl mx-auto font-body leading-relaxed">
            Comprehensive mixology solutions tailored to elevate your event experience with professional expertise and creativity.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white border border-soft-gold/20 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-royal-purple via-royal-purple/50 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 relative">
                  <div className="mb-4">
                    <div className="inline-flex p-3 bg-soft-gold/10 rounded-sm mb-4">
                      <Icon size={24} className="text-soft-gold" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-royal-purple mb-3">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-black/70 font-body text-sm leading-relaxed">
                    {service.description}
                  </p>

                 
                </div>

                {/* Accent Line */}
                <div className="absolute top-0 left-0 h-1 bg-soft-gold group-hover:left-full transition-all duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 md:mt-24 text-center">
          <p className="text-lg text-black/60 mb-6 font-body">
            Ready to create an unforgettable bartending experience?
          </p>
          <Link href="/contact" className="inline-block px-12 py-4 bg-royal-purple text-white font-heading font-bold text-lg uppercase tracking-wide hover:bg-royal-purple/90 transition-all duration-300 shadow-lg hover:shadow-xl">
            Get Custom Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
