import PremiumCTA from '@/components/PremiumCTA';
import PremiumGallery from '@/components/PremiumGallery';
import PageHero from '@/components/PageHero';

export const metadata = {
    title: 'Gallery | Bartenders Club Delhi',
    description: 'See our bartenders in action, cocktail presentations, and premium bar setups from recent events in Delhi NCR.',
};

export default function GalleryPage() {
    return (
        <main className="min-h-screen bg-brand-black text-white">

            <PageHero
                title="Our Work"
                subtitle="Visual proof of the experiences we craft. From elegant pours to vibrant setups."
                bgImage="/gallery.jpg"
            />

            {/* Gallery Grid (Reused) */}
            <PremiumGallery />

            <PremiumCTA />

        </main>
    );
}
