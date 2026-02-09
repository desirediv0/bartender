'use client';

import PageHero from '@/components/PageHero';
import PremiumCTA from '@/components/PremiumCTA';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/motionVariants';
import { CheckCircle2, Star, Clock, ShieldCheck, Sparkles, wine, Beer, GlassWater, Flame } from 'lucide-react';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white text-brand-black">
            <PageHero
                title="About Us"
                subtitle="Professional mixology, reliable service, and unforgettable experiences since 2015."
                bgImage="/about.jpg"
            />

            {/* Introduction */}
            <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-center max-w-4xl mx-auto mb-20"
                >
                    <motion.h2 variants={fadeIn('up', 0.2)} className="font-heading text-3xl md:text-5xl font-bold mb-8 text-brand-black">
                        Bartenders Club <span className="text-royal-purple">Delhi</span>
                    </motion.h2>
                    <motion.p variants={fadeIn('up', 0.3)} className="text-lg md:text-xl text-brand-black/80 leading-relaxed font-body">
                        Bartenders Club Delhi is a professional mixology brand that provides efficient, reliable, affordable and experienced bartenders services to its clients.
                        Utilizing a team of professionally well-trained bartenders, we provide services across Delhi and NCR.
                        A party bartender provides a lasting effect on any event. No matter the occasion, Bartenders Club Delhi brings a unique, stylish, and innovative spark to your event.
                    </motion.p>
                    <motion.p variants={fadeIn('up', 0.4)} className="text-lg md:text-xl text-brand-black/80 leading-relaxed font-body mt-6">
                        Our bartending services packages offer personable services, high energy, and delicious drinks, cocktails, and mocktails.
                        We started in 2015, and during our time in the business, we have built strong working relationships with many catering companies and event planners.
                    </motion.p>
                </motion.div>

                {/* What We Offer */}
                <div className="mb-24">
                    <h3 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 text-royal-purple">What We Offer</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <OfferCard
                            title="Bartender Staffing"
                            description="All of our bar staff are professional and experienced. We have a team of the best and creative Bartenders and mixologists who will add extra fun and joy to your event with amazing drinks."
                        />
                        <OfferCard
                            title="Customized Menu"
                            description="We'll create a signature drink for your event, or you can choose from ours. Drinks can be created to accompany a theme or your taste. Menus are displayed at the event. (Alcohol provided by host)."
                        />
                        <OfferCard
                            title="Glassware"
                            description="Glassware makes a great addition to any bar package. We offer a variety of glasses that can be added to any of our packages. Nice glassware creates a great impression on your guests."
                        />
                        <OfferCard
                            title="Mixer Packages"
                            description="Includes Coke, Diet Coke, Sprite, Ginger Ale, Tonic Water, Club Soda, Cranberry Juice, Orange Juice, Pineapple Juice, Grapefruit Juice, Lemon and Lime Garnish, Syrups etc."
                        />
                        <OfferCard
                            title="Hookah on Hire"
                            description="We provide hookah on hire for any kind of event. We have various types of hookahs available for your guests' enjoyment."
                        />
                        <OfferCard
                            title="Molecular Bar Setup"
                            description="Molecular mixology is the hottest trend this season. It adds that extra 'wow' factor to the bar. Liquid Nitrogen infused cocktails are really amazing and visually stunning."
                        />
                    </div>
                </div>
            </section>

            {/* Our Process - 3 P's */}
            <section className="py-20 bg-gray-50 border-y border-black/5">
                <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
                    <h3 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-brand-black">Our Party Planning Process</h3>
                    <p className="text-brand-black/70 mb-16 max-w-2xl mx-auto">The Bartenders Club Delhi goes far beyond arriving early and staying late. Our creative process is based on three P&apos;s.</p>

                    <div className="grid md:grid-cols-3 gap-8">
                        <ProcessCard number="01" title="Planning" description="We'll plan according to your event requirements and preferences." />
                        <ProcessCard number="02" title="Partying" description="Create and serve delicious drinks, cocktails, and mocktails in the event." />
                        <ProcessCard number="03" title="Polishing" description="We clean and polish the bar area, leaving it spotless after the service." />
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h3 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-royal-purple">Why Choose Us</h3>
                        <div className="space-y-8">
                            <ReasonItem
                                title="Punctuality"
                                description="This is very important for any event. You never need to worry; our staff is on site, well dressed, and set up well before your guests arrive."
                            />
                            <ReasonItem
                                title="Reliability"
                                description="Planning takes time and detail. You can count on being treated with respect, patience, and courtesy. Our experience and network will save you time and money."
                            />
                            <ReasonItem
                                title="Presentation Value"
                                description="Your beverage area will always be organized and beautiful. Guests will rave about how fantastic their drinks were and how kindly they were treated."
                            />
                        </div>
                    </div>
                    <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                        {/* Ideally an image here, using a placeholder gradient for now */}
                        <div className="absolute inset-0 bg-gradient-to-br from-royal-purple via-royal-purple/90 to-royal-purple/70"></div>
                        <div className="absolute inset-0 flex items-center justify-center p-12 text-center">
                            <div>
                                <h4 className="font-heading text-2xl font-bold mb-4 text-white">Our Mission</h4>
                                <p className="text-white/90 leading-relaxed italic">
                                    &quot;It is established to provide quality services to their clients. We believe in providing best services. We are passionate about our work. Our aim is to make our clients happy and rock their events.&quot;
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <PremiumCTA />
        </main>
    );
}

const OfferCard = ({ title, description }) => (
    <motion.div
        variants={fadeIn('up', 0.2)}
        className="p-8 bg-white border border-gray-100 rounded-xl shadow-lg hover:shadow-xl hover:border-royal-purple/20 transition-all group"
    >
        <h4 className="font-heading text-xl font-bold mb-4 text-brand-black group-hover:text-royal-purple transition-colors">{title}</h4>
        <p className="text-brand-black/70 font-body text-sm leading-relaxed">{description}</p>
    </motion.div>
);

const ProcessCard = ({ number, title, description }) => (
    <div className="relative p-8 border border-black/5 rounded-2xl bg-white shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300">
        <div className="text-6xl font-heading font-bold text-gray-100 absolute top-4 right-4">{number}</div>
        <h4 className="font-heading text-2xl font-bold mb-4 text-royal-purple">{title}</h4>
        <p className="text-brand-black/70 font-body">{description}</p>
    </div>
);

const ReasonItem = ({ title, description }) => (
    <div className="flex gap-4">
        <div className="mt-1">
            <CheckCircle2 className="text-royal-purple" size={24} />
        </div>
        <div>
            <h5 className="font-heading text-xl font-bold text-brand-black mb-2">{title}</h5>
            <p className="text-brand-black/70 font-body leading-relaxed">{description}</p>
        </div>
    </div>
);
