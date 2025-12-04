import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
    {
        company: "EY GDS",
        role: "Data Engineer",
        period: "2023 - Present",
        description: "Leading data migration projects and optimizing ETL pipelines for enterprise clients. Implementing cloud-native solutions on Azure.",
        tech: ["Azure", "Databricks", "Python", "SQL"]
    },
    {
        company: "Freelance",
        role: "FullStack Developer",
        period: "2023 - Present",
        description: "Developing end-to-end web applications for various clients, ensuring high performance and responsiveness.",
        tech: ["React", "Node.js", "MongoDB", "Express"]
    },
    {
        company: "Freelance",
        role: "Backend Developer",
        period: "2022 - 2023",
        description: "Designed and implemented RESTful APIs and database schemas. Optimized server-side logic for better performance.",
        tech: ["Node.js", "Express", "MySQL", "MongoDB"]
    },
    {
        company: "Freelance",
        role: "Frontend Developer",
        period: "2021 - 2022",
        description: "Created responsive and interactive user interfaces using modern frontend technologies.",
        tech: ["React", "HTML", "CSS", "JavaScript"]
    }
];

export const Experience = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const pointTop = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section id="experience" className="min-h-screen py-20 px-4 relative bg-cyber-bg flex items-center justify-center">
            <div className="max-w-4xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-bold font-sans mb-4 neon-text">
                        PROFESSIONAL JOURNEY
                    </h2>
                </motion.div>

                <div ref={containerRef} className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-cyber-accent/20 -translate-x-1/2 md:translate-x-0 ml-4 md:ml-0">
                        <motion.div
                            style={{ scaleY, originY: 0 }}
                            className="absolute top-0 left-0 w-full h-full bg-cyber-accent shadow-[0_0_10px_#00fff2]"
                        />
                        {/* Moving Shining Point */}
                        <motion.div
                            style={{ top: pointTop }}
                            className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-cyber-accent rounded-full shadow-[0_0_20px_#00fff2,0_0_40px_#00fff2] z-20"
                        >
                            <div className="absolute inset-0 bg-white rounded-full opacity-50 animate-ping" />
                        </motion.div>
                    </div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-cyber-bg border-2 border-cyber-accent rounded-full -translate-x-1/2 md:translate-x-[-50%] mt-6 ml-4 md:ml-0 z-10 shadow-[0_0_10px_#00fff2]">
                                    <div className="absolute inset-0 bg-cyber-accent rounded-full animate-ping opacity-20" />
                                </div>

                                <div className="flex-1 ml-12 md:ml-0">
                                    <div className={`glass-card p-6 rounded-2xl hover:border-cyber-accent/50 transition-colors ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                                        }`}>
                                        <span className="text-cyber-accent font-mono text-sm mb-2 block">
                                            {exp.period}
                                        </span>
                                        <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                                        <h4 className="text-lg text-cyber-purple mb-4">{exp.company}</h4>
                                        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                            {exp.description}
                                        </p>
                                        <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'justify-start' : 'justify-start md:justify-end'
                                            }`}>
                                            {exp.tech.map((tech) => (
                                                <span key={tech} className="px-2 py-1 text-xs bg-cyber-bg/50 border border-cyber-muted/20 rounded text-cyber-muted">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
