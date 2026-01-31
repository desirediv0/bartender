"use client";
import { Martini, Wine, Check, Smile } from 'lucide-react';

const PackageItem = ({ icon: Icon, title, subtext }) => (
  <div className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-purple/40 hover:bg-white/10 transition-all duration-300 group">
    <div className="w-12 h-12 rounded-full bg-brand-navy/40 flex items-center justify-center border border-brand-purple/30 group-hover:scale-110 transition-transform duration-300">
      <Icon className="w-6 h-6 text-brand-purple" />
    </div>
    <div>
      <h3 className="text-xl font-bold text-white group-hover:text-brand-purple transition-colors">{title}</h3>
      {subtext && <p className="text-text-muted text-sm mt-1">{subtext}</p>}
    </div>
  </div>
);

export default function Packages() {
  const offering = [
    {
      icon: Martini,
      title: 'Customized Cocktail Menu',
      subtext: 'Tailored to your taste.',
    },
    {
      icon: Wine,
      title: 'Glassware on Rent',
      subtext: 'Premium crystal for every drink.',
    },
    {
      icon: Check,
      title: 'Mixers & Garnishes',
      subtext: 'Fresh ingredients included.',
    },
    {
      icon: Smile,
      title: 'Stress-Free Planning',
      subtext: 'We handle the bar, you handle the fun.',
    },
  ];

  return (
    <section id="packages" className="py-24 bg-brand-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Everything You Need for a
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-brand">Perfect Bar</span>
            </h2>
            <p className="text-xl text-text-muted font-light leading-relaxed">
              We don&apos;t just provide staff; we provide a complete bar ecosystem. From the first pour to the last call, our comprehensive packages ensure no detail is overlooked.
            </p>
            <button className="px-8 py-3 rounded-full border border-brand-purple text-brand-purple font-medium hover:bg-brand-purple/20 transition-all duration-300">
              Download Rate Card
            </button>
          </div>

          {/* Right List */}
          <div className="space-y-4">
            {offering.map((item, index) => (
              <PackageItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
