"use client";
import { useState } from 'react';
import { Phone, Instagram, MapPin, Send, Loader2, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/motionVariants';
import PageHero from '@/components/PageHero';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        eventType: 'Wedding',
        message: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulate network request
        await new Promise(resolve => setTimeout(resolve, 2000));

        console.log('Form Data Submitted:', formData);
        setLoading(false);
        alert("Inquiry Sent! We'll stay in touch.");
        setFormData({ name: '', phone: '', eventType: 'Wedding', message: '' });
    };

    return (
        <main className="min-h-screen bg-white text-brand-black">
            <PageHero
                title="Get In Touch"
                subtitle="Ready to elevate your event? Reach out to us directly for bookings and inquiries."
                bgImage="/contact.jpg"
            />

            <section className="relative py-12 md:py-14 overflow-hidden">
                {/* Background Elements - Adjusted for light theme */}
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-royal-purple/5 blur-[100px] rounded-full pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-soft-gold/10 blur-[100px] rounded-full pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 gap-16 items-start"
                    >
                        {/* Contact Info */}
                        <motion.div variants={fadeIn('right', 0.4)} className="space-y-8">
                            <div>
                                <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-black mb-4">
                                    Let&apos;s Plan Your <span className="text-royal-purple">Event</span>
                                </h2>
                                <p className="text-brand-black/70 font-body leading-relaxed">
                                    Whether it&apos;s a wedding, corporate gala, or private party, our team is ready to deliver an exceptional bar experience.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <InfoCard
                                    icon={Phone}
                                    title="Call Us"
                                    text="Direct line for bookings"
                                    action={<a href="tel:9213368407" className="text-xl font-heading font-bold text-royal-purple hover:text-brand-black transition-colors">9213368407</a>}
                                />
                                <InfoCard
                                    icon={Instagram}
                                    title="Follow Us"
                                    text="See our latest events"
                                    action={
                                        <a href="https://www.instagram.com/bartender_club_delhi" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-brand-black hover:text-royal-purple transition-colors">
                                            @bartender_club_delhi
                                        </a>
                                    }
                                />
                                <InfoCard
                                    icon={MapPin}
                                    title="Service Area"
                                    text="Serving Delhi NCR & surrounding regions"
                                    action={<span className="text-brand-black/80">Available for destination weddings</span>}
                                />
                            </div>
                        </motion.div>

                        {/* Form */}
                        <motion.div
                            variants={fadeIn('left', 0.5)}
                            className="p-8 rounded-none border border-black/5 bg-white shadow-xl relative overflow-hidden"
                        >
                            <div className="relative">
                                <h3 className="font-heading text-2xl font-bold text-brand-black mb-6">Send a Message</h3>
                                <form className="space-y-5" onSubmit={handleSubmit}>
                                    <InputField
                                        label="Name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your Name"
                                        required
                                    />
                                    <InputField
                                        label="Phone"
                                        name="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Your Phone Number"
                                        required
                                    />
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-widest text-royal-purple mb-2">Event Type</label>
                                        <div className="relative">
                                            <select
                                                name="eventType"
                                                value={formData.eventType}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-none bg-gray-50 border border-black/10 text-brand-black focus:border-royal-purple focus:ring-1 focus:ring-royal-purple outline-none transition-all appearance-none font-body"
                                            >
                                                <option>Wedding</option>
                                                <option>Corporate Event</option>
                                                <option>House Party</option>
                                                <option>Private Function</option>
                                                <option>Other</option>
                                            </select>
                                            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-royal-purple/70">
                                                ▼
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-widest text-royal-purple mb-2">Message</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={4}
                                            className="w-full px-4 py-3 rounded-none bg-gray-50 border border-black/10 text-brand-black focus:border-royal-purple focus:ring-1 focus:ring-royal-purple outline-none transition-all placeholder:text-black/30 font-body resize-none"
                                            placeholder="Tell us about your event details..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full py-4 mt-4 bg-royal-purple text-white font-heading font-bold text-lg tracking-wide uppercase hover:bg-brand-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    >
                                        {loading ? (
                                            <>
                                                <Loader2 className="animate-spin" size={20} />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Inquiry
                                                <Send size={18} />
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}

const InfoCard = ({ icon: Icon, title, text, action }) => (
    <div className="flex items-start gap-4 group">
        <div className="p-3 bg-royal-purple/10 border border-royal-purple/20 text-royal-purple group-hover:bg-royal-purple group-hover:text-white transition-all duration-300">
            <Icon size={24} />
        </div>
        <div>
            <h3 className="font-heading font-bold text-brand-black text-lg mb-1">{title}</h3>
            <p className="text-brand-black/60 text-sm mb-1 font-body">{text}</p>
            <div className="font-body text-brand-black">{action}</div>
        </div>
    </div>
);

const InputField = ({ label, name, type = "text", value, onChange, placeholder, required = false }) => (
    <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-royal-purple mb-2">{label}</label>
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            className="w-full px-4 py-3 rounded-none bg-gray-50 border border-black/10 text-brand-black focus:border-royal-purple focus:ring-1 focus:ring-royal-purple outline-none transition-all placeholder:text-black/30 font-body"
            placeholder={placeholder}
            required={required}
        />
    </div>
);
