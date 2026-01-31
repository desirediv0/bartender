
import CTASection from '@/components/CTASection';
import EventTypes from '@/components/EventTypes';

export const metadata = {
    title: 'Our Events | Bartenders Club Delhi',
    description: 'We cater to all types of events including weddings, corporate functions, house parties, and private celebrations in Delhi NCR.',
};

export default function EventsPage() {
    return (
        <main className="min-h-screen bg-brand-black text-white">

            {/* Page Hero */}
            <section className="relative pt-32 pb-16 overflow-hidden">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/30 via-brand-black to-brand-purple/10"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                        Events We <span className="text-transparent bg-clip-text bg-gradient-brand">Manage</span>
                    </h1>
                    <p className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
                        Seamless bar management for every occasion. We bring the party to you.
                    </p>
                </div>
            </section>

            {/* Events Grid (Reusing the EventTypes component which uses the new EventCard) */}
            <EventTypes />

            {/* Final Call To Action: "Book Bartenders Now" */}
            <CTASection />
        </main>
    );
}
