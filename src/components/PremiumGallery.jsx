'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function PremiumGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: '/gallery/premium-cocktails.jpg', alt: 'Premium cocktails setup', category: 'Cocktails' },
    { src: '/gallery/bartender-event.jpg', alt: 'Event bartending service', category: 'Events' },
    { src: '/gallery/molecular-bar.jpg', alt: 'Molecular mixology bar', category: 'Innovation' },
    { src: '/gallery/corporate-event.jpg', alt: 'Corporate event service', category: 'Corporate' },
    
  ];

  const nextImage = () => {
    const currentIndex = images.findIndex(img => img.src === selectedImage?.src);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = images.findIndex(img => img.src === selectedImage?.src);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
  };

  return (
    <section id="gallery" className="w-full bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-soft-gold"></div>
            <span className="text-xs font-body font-semibold tracking-widest text-royal-purple uppercase">
              Our Work
            </span>
            <div className="h-px w-8 bg-soft-gold"></div>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-royal-purple mb-6 leading-tight">
            Event Gallery
          </h2>
          <p className="text-lg text-black/60 max-w-2xl mx-auto font-body leading-relaxed">
            Moments captured from premium events we&apos;ve elevated with our bartending expertise and professional service.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square cursor-pointer overflow-hidden group border border-soft-gold/20"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-royal-purple/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-4">
                <div>
                  <p className="text-white font-body text-sm font-semibold">{image.category}</p>
                  <p className="text-soft-gold text-xs tracking-widest uppercase">View Details</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 md:mt-24 text-center">
          <Link href="/gallery" className="inline-block px-12 py-4 bg-royal-purple text-white font-heading font-bold text-lg uppercase tracking-wide hover:bg-royal-purple/90 transition-all duration-300 shadow-lg hover:shadow-xl">
            See All Events
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-60 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <X size={24} className="text-white" />
          </button>

          {/* Previous Button */}
          <button
            onClick={prevImage}
            className="absolute left-4 z-60 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <ChevronLeft size={28} className="text-white" />
          </button>

          {/* Image Container */}
          <div className="relative w-full h-96 md:h-full md:max-h-screen max-w-4xl">
            <Image
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.alt}
              fill
              className="object-contain"
            />
          </div>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-4 z-60 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <ChevronRight size={28} className="text-white" />
          </button>

          {/* Image Info */}
          <div className="absolute bottom-4 left-4 z-60">
            <p className="text-white font-body text-lg">{selectedImage.alt}</p>
            <p className="text-soft-gold text-sm">Category: {selectedImage.category}</p>
          </div>
        </div>
      )}
    </section>
  );
}
