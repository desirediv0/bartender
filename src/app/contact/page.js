"use client";
import { useState } from 'react';
import { Phone, Instagram, MapPin, Send, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/motionVariants';

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
        <main className="min-h-screen bg-brand-black text-white">
            <section className="relative pt-32 pb-24 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-brand-navy/20 blur-[120px] rounded-full pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-brand-purple/10 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="show"
                        className="max-w-5xl mx-auto"
                    >
                        <div className="text-center mb-16">
                            <motion.h1
                                variants={fadeIn('down', 0.2)}
                                className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight"
                            >
                                Get in <span className="text-transparent bg-clip-text bg-gradient-brand">Touch</span>
                            </motion.h1>
                            <motion.p
                                variants={fadeIn('up', 0.3)}
                                className="text-xl text-text-muted font-light"
                            >
                                Ready to elevate your event? Reach out to us directly.
                            </motion.p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 items-start">
                            {/* Contact Info */}
                            <motion.div variants={fadeIn('right', 0.4)} className="space-y-6">
                                <InfoCard
                                    icon={Phone}
                                    title="Phone"
                                    text="Direct line for bookings & inquiries."
                                    action={<a href="tel:9213368407" className="text-2xl font-bold text-white hover:text-brand-purple transition-colors">9213368407</a>}
                                    color="text-brand-purple"
                                />
                                <InfoCard
                                    icon={Instagram}
                                    title="Instagram"
                                    text="Follow us for latest event updates."
                                    action={
                                        <a href="https://www.instagram.com/bartender_club_delhi" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-white hover:text-brand-purple/80 transition-colors">
                                            @bartender_club_delhi
                                        </a>
                                    }
                                    color="text-brand-purple"
                                />
                                <InfoCard
                                    icon={MapPin}
                                    title="Service Area"
                                    text="Proudly serving Delhi NCR and surrounding regions."
                                    color="text-brand-purple"
                                />
                            </motion.div>

                            {/* Form */}
                            <motion.div
                                variants={fadeIn('left', 0.5)}
                                className="p-8 rounded-3xl bg-brand-navy/10 backdrop-blur-sm border border-white/10 relative overflow-hidden shadow-2xl"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/20 to-transparent pointer-events-none"></div>
                                <div className="relative">
                                    <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
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
                                            <label className="block text-sm font-medium text-text-muted mb-2">Event Type</label>
                                            <div className="relative">
                                                <select
                                                    name="eventType"
                                                    value={formData.eventType}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white focus:border-brand-purple focus:ring-1 focus:ring-brand-purple outline-none transition-all appearance-none"
                                                >
                                                    <option>Wedding</option>
                                                    <option>Corporate Event</option>
                                                    <option>House Party</option>
                                                    <option>Private Function</option>
                                                    <option>Other</option>
                                                </select>
                                                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500">
                                                    ▼
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-text-muted mb-2">Message</label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows={4}
                                                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white focus:border-brand-purple focus:ring-1 focus:ring-brand-purple outline-none transition-all placeholder:text-gray-600 resize-none"
                                                placeholder="Tell us about your event details..."
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="w-full py-4 rounded-xl bg-gradient-brand text-white font-bold text-lg hover:opacity-90 hover:shadow-lg hover:shadow-brand-purple/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                        >
                                            {loading ? (
                                                <>
                                                    <Loader2 className="animate-spin" size={20} />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    Send Inquiry
                                                    <Send size={20} />
                                                </>
                                            )}
                                        </button>
                                    </form>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}

const InfoCard = ({ icon: Icon, title, text, action, color }) => (
    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-purple/30 transition-all hover:bg-white/10 group">
        <div className="flex items-start gap-4">
            <div className={`p-3 rounded-xl bg-white/5 ${color} group-hover:scale-110 transition-transform`}>
                <Icon size={24} />
            </div>
            <div>
                <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
                <p className="text-text-muted text-sm mb-2">{text}</p>
                {action}
            </div>
        </div>
    </div>
);

const InputField = ({ label, name, type = "text", value, onChange, placeholder, required = false }) => (
    <div>
        <label className="block text-sm font-medium text-text-muted mb-2">{label}</label>
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white focus:border-brand-purple focus:ring-1 focus:ring-brand-purple outline-none transition-all placeholder:text-gray-600"
            placeholder={placeholder}
            required={required}
        />
    </div>
);
