'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function PremiumHero() {
  const [scrollY, setScrollY] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    // Check if video is already ready (e.g. from cache)
    if (videoRef.current && videoRef.current.readyState >= 3) {
      setVideoLoaded(true);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Media */}
      <div className="absolute inset-0 bg-black">
        {/* Fallback Image */}
        <div className={`absolute inset-0 transition-opacity duration-1000 ${videoLoaded ? 'opacity-0' : 'opacity-100'}`}>
            <Image
            src="/hero.jpg"
            alt="Bartenders Club Delhi"
            fill
            className="object-cover"
            priority
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
            />
        </div>

        {/* Video Background */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          onCanPlay={() => setVideoLoaded(true)}
          onLoadedData={() => setVideoLoaded(true)}
          className={`object-cover w-full h-full transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <source src="https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/bartender/0_Bartender_Bar_1920x1080.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
        {/* Gold Accent Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-royal-purple/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 md:px-8">
        {/* Logo and Title */}
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-soft-gold"></div>
            <span className="text-xs font-body font-semibold tracking-[0.15em] text-soft-gold uppercase">
              Est. 2015
            </span>
            <div className="h-px w-8 bg-soft-gold"></div>
          </div>
          <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight mb-4 leading-tight">
            <span className="block text-white">Bartenders</span>
            <span className="block text-soft-gold">Club Delhi</span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="max-w-2xl mx-auto mb-12 animate-fade-in-delayed">
          <p className="text-lg md:text-xl font-body text-white/90 leading-relaxed">
            Elevate your events with Delhi&apos;s premier mixology experts. Crafted experiences, 
            exceptional cocktails, and unforgettable moments.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 animate-fade-in-delayed-2">
          <Link href="/contact" className="group px-10 py-4 bg-soft-gold text-royal-purple font-heading font-bold text-lg tracking-wide uppercase hover:bg-white transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center gap-2">
              Get Your Quote
              <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <Link href="/services" className="px-10 py-4 border-2 border-soft-gold text-soft-gold font-body font-semibold tracking-wide uppercase hover:bg-soft-gold/10 transition-all duration-300">
            Explore Services
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={24} className="text-soft-gold" />
        </div>
      </div>

      {/* Parallax Divider Lines */}
      <div className="absolute top-1/4 left-0 w-px h-32 bg-gradient-to-b from-transparent via-soft-gold to-transparent opacity-50"></div>
      <div className="absolute bottom-1/3 right-0 w-px h-40 bg-gradient-to-b from-transparent via-soft-gold to-transparent opacity-50"></div>
    </section>
  );
}
