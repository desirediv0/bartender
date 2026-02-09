'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function PageHero({ title, subtitle, bgImage = "/premium-cocktails.jpg" }) {
  return (
    <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={bgImage}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
        {/* Gold Accent Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-royal-purple/90 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 md:px-8">
        {/* Decorative Line */}
        <div className="flex items-center justify-center gap-3 mb-6 animate-fade-in">
             <div className="h-px w-12 bg-soft-gold"></div>
             <div className="w-2 h-2 rotate-45 bg-soft-gold"></div>
             <div className="h-px w-12 bg-soft-gold"></div>
        </div>

        {/* Title */}
        <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight animate-fade-in-delayed">
          <span className="block text-white">
            {title.split(' ').map((word, i) => (
              <span key={i} className={i % 2 !== 0 ? "text-soft-gold" : ""}>{word} </span>
            ))}
          </span>
        </h1>

        {/* Subtitle */}
        {subtitle && (
            <div className="max-w-2xl mx-auto animate-fade-in-delayed-2">
            <p className="text-lg md:text-xl font-body text-white/90 leading-relaxed">
                {subtitle}
            </p>
            </div>
        )}
      </div>

      {/* Parallax Divider Lines */}
      <div className="absolute top-0 left-8 w-px h-full bg-gradient-to-b from-transparent via-soft-gold/20 to-transparent"></div>
      <div className="absolute top-0 right-8 w-px h-full bg-gradient-to-b from-transparent via-soft-gold/20 to-transparent"></div>
    </section>
  );
}
