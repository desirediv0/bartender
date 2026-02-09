
import PremiumCTA from '@/components/PremiumCTA';
import PremiumEvents from '@/components/PremiumEvents';
import PageHero from '@/components/PageHero';

export const metadata = {
    title: 'Our Events | Bartenders Club Delhi',
    description: 'We cater to all types of events including weddings, corporate functions, house parties, and private celebrations in Delhi NCR.',
};

export default function EventsPage() {
    return (
        <main className="min-h-screen bg-white text-brand-black">

            <PageHero
                title="Events We Manage"
                subtitle="Seamless bar management for every occasion. We bring the party to you."
                bgImage="/event.jpg"
            />

            {/* Events Grid (Reusing the EventTypes component which uses the new EventCard) */}
            <PremiumEvents />

            {/* Final Call To Action: "Book Bartenders Now" */}
            <PremiumCTA />
        </main>
    );
}
