import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

export const Contact = () => {
    return (
        <section id="contact" className="min-h-screen py-20 px-4 relative flex items-center justify-center bg-cyber-bg overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(183,0,255,0.05),transparent_70%)]" />

            <div className="max-w-4xl mx-auto w-full relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <h2 className="text-5xl md:text-7xl font-bold font-sans mb-6 neon-text">
                        LET'S CONNECT
                    </h2>
                </motion.div>

                <div className="flex justify-center gap-8">
                    {[
                        { icon: Github, href: "https://github.com/deepesh-reddy/", label: "GitHub" },
                        { icon: Linkedin, href: "https://www.linkedin.com/in/deepesh-reddy-a33a71238/", label: "LinkedIn" },
                        { icon: Twitter, href: "https://t.me/deepeshreddy03", label: "Telegram" },
                        { icon: Mail, href: "mailto:contact.deepeshreddy@gmail.com", label: "Email" }
                    ].map((social, index) => (
                        <motion.a
                            key={index}
                            href={social.href}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5, color: "#00fff2" }}
                            className="text-gray-400 hover:text-cyber-accent transition-colors flex flex-col items-center gap-2 group"
                        >
                            <div className="p-4 glass-card rounded-full group-hover:border-cyber-accent/50 transition-colors">
                                <social.icon size={24} />
                            </div>
                            <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                {social.label}
                            </span>
                        </motion.a>
                    ))}
                </div>

                <footer className="mt-20 text-cyber-muted text-sm">
                    <p>© 2025 Deepesh Reddy. Built with React & Tailwind.</p>
                </footer>
            </div>
        </section>
    );
};
