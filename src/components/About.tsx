import { motion } from 'framer-motion';
import { Code, Database, Server } from 'lucide-react';

export const About = () => {
    return (
        <section id="about" className="min-h-screen py-20 px-4 relative flex items-center justify-center">
            <div className="max-w-7xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-bold font-sans mb-4 neon-text">
                        ABOUT ME
                    </h2>
                    <p className="text-cyber-muted text-lg max-w-2xl mx-auto">
                        I bridge the gap between complex data systems and intuitive user experiences.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Main Bio Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="md:col-span-2 glass-card p-8 rounded-2xl relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-cyber-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-cyber-accent/20 transition-colors duration-500" />

                        <h3 className="text-2xl font-bold mb-4 text-white">The Architect of Data</h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            I'm a FullStack Developer based in India, and I'm very passionate and dedicated to my work.
                            As a Data Engineer at EY GDS, I specialize in building robust data pipelines.
                            But my passion doesn't stop at the backend. I'm a full-stack thinker who loves crafting
                            immersive digital experiences that make data accessible and beautiful.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {['Data Engineering', 'Full Stack Dev', 'Cloud Architecture', 'UI/UX Design'].map((tag) => (
                                <span key={tag} className="px-3 py-1 bg-cyber-bg/50 border border-cyber-accent/30 rounded-full text-sm text-cyber-accent">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Stats Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="glass-card p-8 rounded-2xl flex flex-col justify-center items-center text-center relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
                        <div className="text-6xl font-bold text-cyber-purple mb-2">2+</div>
                        <div className="text-gray-400 font-mono">Years Experience</div>
                        <div className="text-4xl font-bold text-cyber-accent mt-4 mb-2">8+</div>
                        <div className="text-gray-400 font-mono">Projects Completed</div>
                    </motion.div>

                    {/* Feature Cards */}
                    {[
                        { icon: Database, title: "Data First", desc: "Building reliable pipelines" },
                        { icon: Code, title: "Clean Code", desc: "Scalable & maintainable" },
                        { icon: Server, title: "Cloud Native", desc: "AWS & Azure experience" },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                            className="glass-card p-6 rounded-2xl hover:border-cyber-accent/50 transition-colors group cursor-none"
                        >
                            <item.icon className="w-10 h-10 text-cyber-accent mb-4 group-hover:scale-110 transition-transform" />
                            <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                            <p className="text-sm text-gray-400">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
