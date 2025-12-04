import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: "Notes App",
        description: "A public notes application built with the MERN stack, allowing users to create, read, update, and delete notes.",
        tech: ["React", "Node.js", "MongoDB", "Express"],
        image: "https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        links: { demo: "https://public-notes-app-frontend.vercel.app/", code: "#" }
    },
    {
        title: "Google Form Automation",
        description: "Automated script to fill Google Forms programmatically, saving time on repetitive data entry tasks.",
        tech: ["Python", "Selenium", "Automation"],
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        links: { demo: "https://github.com/deepesh-reddy/Gform-auto", code: "https://github.com/deepesh-reddy/Gform-auto" }
    },
    {
        title: "QR Code Generator",
        description: "A simple and efficient tool to generate QR codes for various types of input data.",
        tech: ["JavaScript", "HTML", "CSS"],
        image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        links: { demo: "https://qrcodegenerator-9a33x5ste-deepesh-reddys-projects.vercel.app/", code: "#" }
    },
    {
        title: "Superset Automation",
        description: "Puppeteer script to automate dashboard interactions and reporting in Apache Superset.",
        tech: ["Puppeteer", "JavaScript", "Automation"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        links: { demo: "https://github.com/deepesh-reddy/superset-puppeteer", code: "https://github.com/deepesh-reddy/superset-puppeteer" }
    },
    {
        title: "Video Call App",
        description: "Real-time video calling application using WebRTC and React.",
        tech: ["React", "WebRTC", "Socket.io"],
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        links: { demo: "https://reactvideocallappbydeepesh.vercel.app/room/Deepesh", code: "#" }
    },
    {
        title: "ToDo List",
        description: "A classic ToDo list application to manage daily tasks effectively.",
        tech: ["React", "CSS"],
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        links: { demo: "https://github.com/deepesh-reddy/to-do-list-", code: "https://github.com/deepesh-reddy/to-do-list-" }
    }
];

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen py-20 px-4 relative bg-cyber-bg overflow-hidden">
            <div className="max-w-7xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-bold font-sans mb-4 neon-text">
                        FEATURED PROJECTS
                    </h2>
                    <p className="text-cyber-muted text-lg max-w-2xl mx-auto">
                        Showcasing innovation in data engineering and full-stack development.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="glass-card rounded-2xl overflow-hidden group hover:border-cyber-accent/50 transition-colors"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-cyber-bg/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <a href={project.links.demo} className="p-2 bg-cyber-accent rounded-full text-cyber-bg hover:scale-110 transition-transform">
                                        <ExternalLink size={20} />
                                    </a>
                                    <a href={project.links.code} className="p-2 bg-white rounded-full text-cyber-bg hover:scale-110 transition-transform">
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyber-accent transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-4 text-sm line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span key={tech} className="px-2 py-1 text-xs bg-cyber-bg/50 border border-cyber-muted/20 rounded text-cyber-muted">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
