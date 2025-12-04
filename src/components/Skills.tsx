import { motion } from 'framer-motion';

const skills = [
    { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "Tailwind CSS", "JQuery"] },
    { category: "Backend", items: ["Node.js", "Express", "MongoDB", "MySQL", "PostgreSQL", "Puppeteer", "SQL"] },
    { category: "Tools & Cloud", items: ["Git", "Postman", "Azure", "Databricks", "Spark"] }
];

export const Skills = () => {
    return (
        <section id="skills" className="min-h-screen py-20 px-4 relative flex items-center justify-center bg-cyber-bg overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

            <div className="max-w-7xl mx-auto w-full relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-bold font-sans mb-4 neon-text">
                        TECHNICAL EXPERTISE
                    </h2>
                    <p className="text-cyber-muted text-lg max-w-2xl mx-auto">
                        A comprehensive toolkit for building scalable data solutions and modern applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skills.map((category, catIndex) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: catIndex * 0.2 }}
                            className="glass-card p-8 rounded-2xl border-t border-cyber-accent/20"
                        >
                            <h3 className="text-2xl font-bold mb-8 text-cyber-accent border-b border-cyber-accent/20 pb-4 inline-block">
                                {category.category}
                            </h3>

                            <div className="flex flex-wrap gap-4">
                                {category.items.map((skill) => (
                                    <motion.div
                                        key={skill}
                                        whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 255, 242, 0.1)" }}
                                        className="px-4 py-2 bg-cyber-bg/50 border border-cyber-muted/20 rounded-lg text-gray-300 hover:text-white hover:border-cyber-accent/50 transition-colors cursor-default relative group"
                                    >
                                        <span className="relative z-10">{skill}</span>
                                        <div className="absolute inset-0 bg-cyber-accent/5 rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-opacity" />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
