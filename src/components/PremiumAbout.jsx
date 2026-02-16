'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Award, Users, Zap } from 'lucide-react';

export default function PremiumAbout() {
  const stats = [
    { number: '9+', label: 'Years of Excellence', icon: Award },
    { number: '500+', label: 'Events Executed', icon: Users },
    { number: '1000+', label: 'Happy Clients', icon: Zap },
  ];

  return (
    <section id="about" className="w-full bg-royal-purple text-white py-12 md:py-14">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Left: Content */}
          <div className="order-2 md:order-1 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-soft-gold"></div>
              <span className="text-xs font-body font-semibold tracking-widest text-soft-gold uppercase">
                About Us
              </span>
            </div>

            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Bartenders Club Delhi
            </h2>

            <div className="space-y-4 mb-8 font-body text-white/90 leading-relaxed">
              <p>
                Since 2015, Bartenders Club Delhi has been Delhi & NCR&apos;s premier mixology and bartending service provider. 
                We specialize in delivering professional, reliable, and innovative bartending experiences for every occasion.
              </p>
              <p>
                Our team of professionally trained mixologists and bartenders brings expertise, style, and energy to every event. 
                Whether it&apos;s a corporate gathering, wedding, or private party, we create unforgettable cocktail experiences.
              </p>
              <p>
                With established relationships with leading catering companies and event planners, we understand what it takes 
                to make your event truly special. Our commitment to punctuality, reliability, and presentation value sets us apart.
              </p>
            </div>

            <Link href="/about" className="inline-block px-8 py-3 border-2 border-soft-gold text-soft-gold font-heading font-bold uppercase tracking-wide hover:bg-soft-gold/10 transition-all duration-300 w-fit">
              Learn Our Story
            </Link>
          </div>

          {/* Right: Image */}
          <div className="order-1 md:order-2 relative h-full min-h-[400px]">
            <div className="relative h-96 md:h-full overflow-hidden border border-soft-gold/30 rounded-2xl">
              <Image
                src="/team.jpg"
                alt="Bartenders Club Delhi team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-royal-purple/60 to-transparent"></div>
            </div>

            {/* Stats Overlay */}
            <div className="absolute -bottom-8 -left-8 grid grid-cols-3 gap-4 bg-white/95 backdrop-blur p-6 border border-soft-gold/20 w-[calc(100%+64px)]">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <Icon size={20} className="text-royal-purple mx-auto mb-2" />
                    <p className="font-heading font-bold text-royal-purple text-lg">{stat.number}</p>
                    <p className="text-xs text-black/60 font-body">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
