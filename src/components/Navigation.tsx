import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Code, Briefcase, Mail, Cpu } from 'lucide-react';

const navItems = [
    { name: 'Home', icon: Home, id: 'hero' },
    { name: 'About', icon: User, id: 'about' },
    { name: 'Skills', icon: Cpu, id: 'skills' },
    { name: 'Projects', icon: Code, id: 'projects' },
    { name: 'Experience', icon: Briefcase, id: 'experience' },
    { name: 'Contact', icon: Mail, id: 'contact' },
];

export const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <>
            <button
                onClick={toggleMenu}
                className="fixed top-8 right-8 z-[60] p-4 bg-cyber-bg/80 backdrop-blur-md border border-cyber-accent/30 rounded-full text-cyber-accent hover:bg-cyber-accent hover:text-cyber-bg transition-all duration-300 group"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
                <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1 bg-cyber-accent text-cyber-bg text-sm font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {isOpen ? 'Close' : 'Menu'}
                </span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                        className="fixed inset-y-0 right-0 w-full md:w-96 bg-cyber-bg/95 backdrop-blur-xl border-l border-cyber-accent/20 z-[55] flex flex-col justify-center items-center"
                    >
                        <div className="flex flex-col gap-8 w-full px-12">
                            {navItems.map((item, index) => (
                                <motion.button
                                    key={item.name}
                                    initial={{ x: 50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => scrollToSection(item.id)}
                                    className="flex items-center gap-6 text-2xl md:text-3xl font-bold text-white/50 hover:text-cyber-accent transition-colors group text-left"
                                >
                                    <item.icon className="w-8 h-8 group-hover:scale-110 transition-transform" />
                                    <span className="group-hover:translate-x-2 transition-transform">{item.name}</span>
                                </motion.button>
                            ))}
                        </div>

                        <div className="absolute bottom-12 left-0 w-full text-center text-cyber-muted text-sm">
                            <p>© 2025 Deepesh Reddy</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
