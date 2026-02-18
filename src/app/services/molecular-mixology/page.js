'use client';

import PageHero from '@/components/PageHero';
import PremiumCTA from '@/components/PremiumCTA';
import Image from 'next/image';
import { Sparkles, Zap, Snowflake, Wind, FlaskConical, Droplet } from 'lucide-react';

export default function MolecularMixologyPage() {
    const techniques = [
        {
            title: 'Spherification',
            description: 'Creating caviar-like spheres or larger capsules that burst with flavor using sodium alginate and calcium lactate.',
            icon: Droplet,
        },
        {
            title: 'Foams and Airs',
            description: 'Using lecithin or other stabilizers to create light, intense foams that add aroma without heavy texture.',
            icon: Wind,
        },
        {
            title: 'Gels and Solidification',
            description: 'Using agar-agar or gelatin to turn liquids into jellies or solid forms, transforming the state of your cocktail.',
            icon: Snowflake,
        },
        {
            title: 'Liquid Nitrogen',
            description: 'Used for rapid freezing to create unique textures like instant ice cream or sorbets, adding a dramatic smoke effect.',
            icon: Zap,
        },
        {
            title: 'Emulsification',
            description: 'Binding two liquids that normally do not mix, such as fat-washing spirits to create rich, complex flavors.',
            icon: FlaskConical,
        },
        {
            title: 'Atmospheric/Smoked',
            description: 'Using aroma guns or dry ice to add scents and visual effects, engaging both smell and sight.',
            icon: Sparkles,
        },
    ];

    const menuItems = [
        { name: 'Smoking Popcorn', description: 'A theatrical treat infused with smoky aromatics.' },
        { name: 'Vodka Jelly Shots', description: 'Premium vodka solidified into colorful, flavorful jelly bites.' },
        { name: 'Caviar', description: 'Fruit-flavored spheres that burst in your mouth, resembling caviar.' },
        { name: 'Spheres', description: 'Large flavor capsules offering a surprise liquid center.' },
        { name: 'Jello Shots', description: 'Classic party favorites elevated with premium ingredients and presentation.' },
    ];

    return (
        <main className="min-h-screen bg-brand-black text-white">
            {/* Hero Section */}
            <PageHero
                title="Molecular Mixology"
                subtitle="Where Science Meets Art. Experience the Future of Cocktails."
                bgImage="/molecular-mixology.png"
            />

            {/* Introduction */}
            <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="font-heading text-3xl md:text-4xl text-soft-gold mb-6">Redefining the Cocktail Experience</h2>
                        <p className="text-white/80 font-body leading-relaxed mb-6">
                            Molecular mixology is an advanced, science-driven approach to bartending that uses culinary techniques and additives to transform the texture, flavor, and appearance of cocktails. It applies principles from molecular gastronomy to create innovative, multisensory drinking experiences.
                        </p>
                        <p className="text-white/80 font-body leading-relaxed">
                            At <strong className="text-soft-gold">Bartenders Club Delhi</strong>, we experiment and create amazing cocktails with artistic presentation, textures, aromas, and flavors. It is the hottest trend this season, adding that extra "wow" factor to your bar.
                        </p>
                    </div>
                    <div className="relative h-[400px] w-full rounded-lg overflow-hidden border border-soft-gold/20 shadow-2xl">
                        <Image
                            src="/bar-setup.png"
                            alt="Molecular Bar Setup"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Key Techniques */}
            <section className="py-20 bg-white text-royal-purple">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-heading text-4xl font-bold mb-4">Key Techniques & Concepts</h2>
                        <p className="text-royal-purple/70 max-w-2xl mx-auto">
                            We utilize specialized equipment and natural additives to manipulate liquids into extraordinary forms.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {techniques.map((tech, index) => {
                            const Icon = tech.icon;
                            return (
                                <div key={index} className="p-6 bg-royal-purple/5 rounded-lg border border-royal-purple/10 hover:shadow-lg transition-all">
                                    <div className="w-12 h-12 bg-royal-purple text-white rounded-full flex items-center justify-center mb-4 mx-auto">
                                        <Icon size={24} />
                                    </div>
                                    <h3 className="font-heading text-xl font-bold text-center mb-3">{tech.title}</h3>
                                    <p className="text-center text-sm leading-relaxed opacity-80">{tech.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Menu Showcase */}
            <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
                <h2 className="font-heading text-4xl text-center text-soft-gold mb-16">Molecular Cocktails & Shots</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {menuItems.map((item, index) => (
                        <div key={index} className="flex items-center gap-4 p-4 border border-white/10 rounded-lg hover:bg-white/5 transition-colors">
                            <div className="w-16 h-16 relative bg-white/10 rounded overflow-hidden flex-shrink-0">
                                {/* Placeholder for menu item images if available later */}
                                <div className="absolute inset-0 flex items-center justify-center text-soft-gold text-xs">
                                    <Sparkles size={20} />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-heading text-lg font-bold text-white mb-1">{item.name}</h3>
                                <p className="text-xs text-white/50">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <p className="text-center text-white/40 mt-12 text-sm italic">
                    * Full detailed recipes available upon request. Ask our mixologists for custom creations.
                </p>
            </section>

            {/* Experience Section */}
            <section className="py-20 bg-royal-purple text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="max-w-4xl mx-auto px-4 md:px-8 text-center relative z-10">
                    <h2 className="font-heading text-3xl md:text-5xl font-bold mb-8">The Purpose & Experience</h2>
                    <p className="text-lg md:text-xl leading-relaxed opacity-90 mb-8">
                        Molecular mixology is designed to surprise guests by altering the expected state of a drink.
                        It creates greater intensities and varieties of flavor, offering a theatrical and engaging experience.
                    </p>
                    <div className="inline-block px-8 py-3 border border-soft-gold rounded-full text-soft-gold tracking-widest uppercase text-sm font-bold">
                        Bartenders Club Delhi
                    </div>
                </div>
            </section>

            <PremiumCTA />
        </main>
    );
}
