import CTASection from '@/components/CTASection';
import Gallery from '@/components/Gallery';
import { Instagram } from 'lucide-react';

export const metadata = {
    title: 'Gallery | Bartenders Club Delhi',
    description: 'See our bartenders in action, cocktail presentations, and premium bar setups from recent events in Delhi NCR.',
};

export default function GalleryPage() {
    return (
        <main className="min-h-screen bg-brand-black text-white">

            {/* Page Hero */}
            <section className="relative pt-32 pb-16 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/20 via-brand-black to-brand-black"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                        Our <span className="text-brand-purple">Work</span>
                    </h1>
                    <p className="text-xl text-text-muted max-w-2xl mx-auto mb-8">
                        Visual proof of the experiences we craft. From elegant pours to vibrant setups.
                    </p>

                    <a
                        href="https://www.instagram.com/bartender_club_delhi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-brand text-white font-semibold hover:opacity-90 transition-all shadow-lg hover:shadow-brand-purple/25"
                    >
                        <Instagram size={20} />
                        Follow us on Instagram
                    </a>
                </div>
            </section>

            {/* Gallery Grid (Reused) */}
            <Gallery />

            <CTASection />

        </main>
    );
}
