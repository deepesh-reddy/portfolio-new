import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: "Elon Musk (Fake)",
        title: "CEO, SpaceX & Tesla",
        review: "I tried to hire Deepesh for SpaceX, but he said he was busy debugging a CSS margin issue. Respect.",
        rating: 5,
        image: "🚀"
    },
    {
        id: 2,
        name: "His Mom",
        title: "Chief Life Officer",
        review: "He's a good boy. He fixes the Wi-Fi every time it breaks. Very reliable.",
        rating: 5,
        image: "👩"
    },
    {
        id: 3,
        name: "His Bestfriend",
        title: "Senior Debugging Consultant",
        review: "He explains his problems to me every day. I just sit there and somehow he fixes everything himself. Easiest job ever.",
        rating: 5,
        image: "👧"
    },
    {
        id: 4,
        name: "ChatGPT",
        title: "AI Assistant",
        review: "I wrote 50% of his code, but he takes 100% of the credit. Still proud of him though. 5 stars.",
        rating: 5,
        image: "🤖"
    },
    {
        id: 5,
        name: "Localhost:3000",
        title: "Development Server",
        review: "I've seen things you people wouldn't believe. Code so messy it would make you cry. But hey, it works... sometimes.",
        rating: 3,
        image: "💻"
    },
    {
        id: 6,
        name: "Coffee Machine",
        title: "Workplace Essential",
        review: "Without me, none of his code would work. I'm the real developer here. He's just the typist.",
        rating: 5,
        image: "☕"
    },
    {
        id: 7,
        name: "Stack Overflow",
        title: "The Real MVP",
        review: "He copies code from us, but he does it with style. At least he upvotes the answers. 5/5 would help again.",
        rating: 5,
        image: "📚"
    }
];

export const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isPaused]);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section id="testimonials" className="py-20 px-4 relative bg-cyber-bg overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold font-sans mb-4 neon-text">
                        HONEST REVIEWS
                    </h2>
                    <p className="text-cyber-muted text-lg">
                        What people (and things) are really saying.
                    </p>
                </motion.div>

                <div
                    className="relative max-w-4xl mx-auto"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div className="flex justify-center items-center">
                        <button
                            onClick={prevTestimonial}
                            className="absolute left-0 z-20 p-2 rounded-full bg-cyber-bg/50 border border-cyber-accent/20 text-cyber-accent hover:bg-cyber-accent hover:text-cyber-bg transition-all hidden md:block"
                        >
                            <ChevronLeft size={24} />
                        </button>

                        <div className="w-full overflow-hidden px-4 md:px-12">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -100 }}
                                    transition={{ duration: 0.5 }}
                                    className="glass-card p-8 md:p-12 rounded-3xl relative"
                                >
                                    <Quote className="absolute top-8 left-8 text-cyber-accent/20 w-12 h-12 md:w-16 md:h-16" />

                                    <div className="flex flex-col items-center text-center relative z-10">
                                        <div className="w-20 h-20 rounded-full bg-cyber-accent/10 flex items-center justify-center text-4xl mb-6 border-2 border-cyber-accent/50 shadow-[0_0_15px_rgba(0,255,242,0.3)]">
                                            {testimonials[currentIndex].image}
                                        </div>

                                        <div className="flex gap-1 mb-6">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    size={20}
                                                    className={i < testimonials[currentIndex].rating ? "fill-cyber-accent text-cyber-accent" : "text-gray-600"}
                                                />
                                            ))}
                                        </div>

                                        <p className="text-xl md:text-2xl text-gray-200 mb-8 italic leading-relaxed">
                                            "{testimonials[currentIndex].review}"
                                        </p>

                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-1">
                                                {testimonials[currentIndex].name}
                                            </h4>
                                            <p className="text-cyber-accent font-mono text-sm">
                                                {testimonials[currentIndex].title}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <button
                            onClick={nextTestimonial}
                            className="absolute right-0 z-20 p-2 rounded-full bg-cyber-bg/50 border border-cyber-accent/20 text-cyber-accent hover:bg-cyber-accent hover:text-cyber-bg transition-all hidden md:block"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                        ? "w-8 bg-cyber-accent shadow-[0_0_10px_#00fff2]"
                                        : "bg-gray-600 hover:bg-gray-500"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
