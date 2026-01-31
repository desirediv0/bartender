"use client";
export const fadeIn = (direction = 'up', delay = 0) => {
    return {
        hidden: {
            y: direction === 'up' ? 20 : direction === 'down' ? -20 : 0,
            x: direction === 'left' ? 20 : direction === 'right' ? -20 : 0,
            opacity: 0,
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 0.5,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75],
            },
        },
    };
};

export const staggerContainer = (staggerChildren, delayChildren) => {
    return {
        hidden: {},
        show: {
            transition: {
                staggerChildren: staggerChildren,
                delayChildren: delayChildren || 0,
            },
        },
    };
};

export const scaleOnHover = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    tap: { scale: 0.95, transition: { duration: 0.2 } },
};

export const cardHover = {
    rest: { y: 0, scale: 1 },
    hover: { y: -6, scale: 1.02, transition: { duration: 0.3 } },
    tap: { scale: 0.98, transition: { duration: 0.1 } },
};
