import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import WhyChoose from '@/components/WhyChoose';
import EventTypes from '@/components/EventTypes';
import Packages from '@/components/Packages';
import Gallery from '@/components/Gallery';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-black text-white">

      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <EventTypes />
      <Packages />
      <Gallery />
      <CTASection />
    </main>
  );
}
