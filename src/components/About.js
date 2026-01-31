"use client";
import { Target, Award, Users, Heart, ClipboardCheck, PartyPopper, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/motionVariants';

export default function About() {
    const mission = "It is established to provide quality services to their clients. We believe in providing best services . We are passionate about our work. Our aim is to make our clients happy and rock their events.";

    const process = [
        {
            icon: ClipboardCheck,
            title: "Planning",
            desc: "We'll plan according to your event requirements with attention to detail."
        },
        {
            icon: PartyPopper,
            title: "Partying",
            desc: "We create and serve delicious drinks, cocktails, and mocktails to keep the energy high."
        },
        {
            icon: Sparkles,
            title: "Polishing",
            desc: "We ensure a clean and polished bar setup, handling cleanup so you don't have to."
        }
    ];

    return (
        <section id="about" className="py-24 bg-brand-black relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-brand-navy/10 blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    variants={staggerContainer(0.1, 0.1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid lg:grid-cols-2 gap-16 items-start"
                >
                    {/* Text Content */}
                    <motion.div variants={fadeIn('right', 0.2)} className="space-y-8">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple text-sm font-medium mb-4">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-purple"></span>
                                Since 2015
                            </div>
                            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                                Bartenders Club <span className="text-brand-purple">Delhi</span>
                            </h2>
                        </div>

                        <div className="space-y-6 text-text-muted text-lg leading-relaxed">
                            <p>
                                Bartenders Club Delhi is a professional mixology brand that provides efficient, reliable, affordable, and experienced bartender services to its clients. Utilizing a team of professionally well-trained bartenders, we provide services across Delhi and NCR.
                            </p>
                            <p>
                                No matter the occasion, Bartenders Club Delhi brings a unique, stylish, and innovative spark to your event. Our packages offer personable service, high energy, and delicious cocktails and mocktails.
                            </p>
                            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                                    <Heart className="text-brand-purple fill-brand-purple/20" size={20} /> Our Mission
                                </h3>
                                <p className="text-text-muted italic">
                                    &quot;{mission}&quot;
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Process Visuals */}
                    <motion.div variants={fadeIn('left', 0.4)} className="space-y-8 relative">
                        <div className="text-center lg:text-left mb-8">
                            <h3 className="text-2xl font-bold text-white mb-2">Our Party Planning Process</h3>
                            <p className="text-text-muted">Based on the three P&apos;s</p>
                        </div>

                        <div className="grid gap-6">
                            {process.map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ x: 10 }}
                                    className="flex items-start gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-purple/30 hover:bg-white/10 transition-all duration-300 group"
                                >
                                    <div className="flex-shrink-0">
                                        <div className="w-14 h-14 rounded-full bg-brand-navy/40 flex items-center justify-center border border-brand-purple/20 group-hover:scale-110 transition-transform duration-300">
                                            <item.icon className="w-6 h-6 text-brand-purple" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-brand-purple transition-colors">{item.title}</h4>
                                        <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
