import PremiumServices from '@/components/PremiumServices';
import PremiumCTA from '@/components/PremiumCTA';
import PageHero from '@/components/PageHero';

export const metadata = {
    title: 'Our Services | Bartenders Club Delhi',
    description: 'Explore our premium bartending, mixology, and event staffing services in Delhi NCR. Male & female bartenders, flair mixologists, and complete bar setups.',
};

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-brand-black text-white">

            <PageHero
                title="Exceptional Bar Services"
                subtitle="From intimate gatherings to grand celebrations, we provide the staffing and logistical support to make your event a success."
                bgImage="/service.jpg"
            />

            {/* Services Grid (Reused) */}
            <PremiumServices />

            {/* Final Call To Action */}
            <PremiumCTA />

        </main>
    );
}
