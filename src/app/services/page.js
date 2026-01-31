import Services from '@/components/Services';
import CTASection from '@/components/CTASection';

export const metadata = {
    title: 'Our Services | Bartenders Club Delhi',
    description: 'Explore our premium bartending, mixology, and event staffing services in Delhi NCR. Male & female bartenders, flair mixologists, and complete bar setups.',
};

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-brand-black text-white">

            {/* Page Hero */}
            <section className="relative pt-32 pb-16 overflow-hidden">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/20 via-brand-black to-brand-black"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-brand-navy/30 border border-brand-purple/20">
                        <span className="w-2 h-2 rounded-full bg-brand-purple animate-pulse"></span>
                        <span className="text-brand-purple text-sm font-medium tracking-wide uppercase">World Class Service</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                        Exceptional <span className="text-transparent bg-clip-text bg-gradient-brand">Bar Services</span>
                    </h1>
                    <p className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
                        From intimate gatherings to grand celebrations, we provide the staffing and logistical support to make your event a success.
                    </p>
                </div>
            </section>

            {/* Services Grid (Reused) */}
            <Services />

            {/* Final Call To Action */}
            <CTASection />

        </main>
    );
}
