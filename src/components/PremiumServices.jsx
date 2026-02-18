'use client';

import { Martini, Sparkles, Wine, Zap, Flame, Package } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function PremiumServices() {
  const services = [
    {
      icon: Martini,
      title: 'Professional Bartenders & Mixologists',
      description: 'Experienced Indian and foreign bartenders and mixologists. We provide improved hospitality, style, and expert drink crafting for your events.',
      image: '/bartenders.png',
    },
    {
      icon: Zap,
      title: 'Molecular Mixology',
      description: 'Advanced molecular bar setups with liquid nitrogen, smoke, and foams. A theatrical and scientific approach to cocktail making.',
      image: '/molecular-mixology.png',
      href: '/services/molecular-mixology',
    },
    {
      icon: Sparkles,
      title: 'Bar Setup & Props',
      description: 'Complete bar setup services including thematic props, counters, and decor to create the perfect ambiance for your party.',
      image: '/bar-setup.png',
    },
    {
      icon: Wine,
      title: 'Imported Glassware',
      description: 'Wide range of luxury imported glassware. From crystal flutes to modern tumblers, we have the perfect vessel.',
      image: '/imported-glassware.png',
    },
    {
      icon: Flame,
      title: 'Hookah on Rent / Flavoured',
      description: 'Premium hookah catering with a variety of exotic flavors. Professional setup for a relaxing and luxurious experience.',
      image: '/hookah.png',
    },
    {
      icon: Package,
      title: 'Complete Bar Solutions',
      description: 'End-to-end service including beverages, mixers, ingredients, and customized menus. We handle everything so you can enjoy your event.',
      image: '/bar-solutions.png',
    },
  ];

  return (
    <section id="services" className="w-full bg-white py-12 md:py-14">
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
            const Wrapper = service.href ? Link : 'div';
            const props = service.href ? { href: service.href } : {};

            return (
              <Wrapper
                key={index}
                {...props}
                className="group relative bg-white border border-soft-gold/20 overflow-hidden hover:shadow-lg transition-all duration-300 block"
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
              </Wrapper>
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
