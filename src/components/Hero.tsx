import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export const Hero = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const roles = ["Data Engineer", "Full Stack Developer", "Problem Solver", "Tech Enthusiast"];
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-cyber-bg">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,242,0.1),transparent_50%)]" />
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_50%_50%,rgba(183,0,255,0.1),transparent_50%)]" />
            </div>

            {/* Animated Shapes */}
            <motion.div
                style={{ y: y1, x: -100 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/4 left-1/4 w-64 h-64 border border-cyber-accent/20 rounded-full blur-sm"
            />
            <motion.div
                style={{ y: y2, x: 100 }}
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-1/4 right-1/4 w-96 h-96 border border-cyber-purple/20 rounded-full blur-sm"
            />

            {/* Content */}
            <div className="relative z-10 text-center px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-cyber-accent font-mono mb-4 tracking-widest"
                >
                    HELLO, I AM
                </motion.h2>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-6xl md:text-8xl font-bold font-sans mb-6 text-white mix-blend-overlay"
                >
                    DEEPESH REDDY
                </motion.h1>

                <div className="h-12 md:h-16 overflow-hidden mb-8">
                    <motion.div
                        key={roleIndex}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -50, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyber-accent to-cyber-purple"
                    >
                        {roles[roleIndex]}
                    </motion.div>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-cyber-muted max-w-lg mx-auto mb-12 text-lg"
                >
                    Data Engineer by profession. Developer by passion.
                    <br />
                    Bridging the gap between data systems and user experiences.
                </motion.p>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cyber-muted"
            >
                <ArrowDown size={32} />
            </motion.div>
        </section>
    );
};
