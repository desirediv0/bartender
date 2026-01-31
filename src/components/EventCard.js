"use client";

import { motion } from 'framer-motion';

import { fadeIn } from '@/lib/motionVariants';

const EventCard = ({ icon: Icon, title, description, image, index }) => (
    <motion.div
        variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
        className="group relative h-96 rounded-2xl overflow-hidden border border-white/10 cursor-pointer"
    >
        {/* Background Image */}
        <div className="absolute inset-0">
            <motion.div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('${image}')` }}
                variants={{
                    rest: { scale: 1 },
                    hover: { scale: 1.1, transition: { duration: 0.7 } }
                }}
            ></motion.div>
        </div>

        {/* Overlay Gradient */}
        <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80"
            variants={{
                rest: { opacity: 0.8 },
                hover: { opacity: 0.9 }
            }}
        ></motion.div>

        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
            <motion.div
                className="translate-y-4"
                variants={{
                    rest: { y: 16 },
                    hover: { y: 0, transition: { duration: 0.3 } }
                }}
            >
                <motion.div
                    className="mb-4 inline-flex p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10"
                    variants={{
                        rest: { backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: 'rgba(255, 255, 255, 0.1)' },
                        hover: { backgroundColor: 'rgba(108, 99, 255, 0.2)', borderColor: 'rgba(108, 99, 255, 0.3)' } // brand-purple
                    }}
                >
                    <Icon className="w-6 h-6 text-brand-purple" />
                </motion.div>
                <motion.h3
                    className="text-2xl font-bold text-white mb-2"
                    variants={{
                        rest: { color: '#ffffff' },
                        hover: { color: '#6C63FF' } // brand-purple
                    }}
                >
                    {title}
                </motion.h3>
                <div className="w-12 h-1 bg-brand-purple mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <motion.p
                    className="text-text-muted text-sm"
                    variants={{
                        rest: { opacity: 0 },
                        hover: { opacity: 1, transition: { delay: 0.1 } }
                    }}
                >
                    {description}
                </motion.p>
            </motion.div>
        </div>
    </motion.div>
);

export default EventCard;
