import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export const JudgyMascot = () => {
    const [message, setMessage] = useState("Hey! I'm here to judge... I mean, guide you!");
    const [expression, setExpression] = useState("👋");
    const [isVisible, setIsVisible] = useState(true);
    const [isSleeping, setIsSleeping] = useState(false);

    const idleTimerRef = useRef<number | null>(null);
    const clickCountRef = useRef(0);
    const clickTimerRef = useRef<number | null>(null);

    // Helper to update mascot state
    const updateMascot = (msg: string, expr: string) => {
        setMessage(msg);
        setExpression(expr);
        setIsSleeping(false);
    };

    // 1. Idle Detection
    const resetIdleTimer = () => {
        if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
        setIsSleeping(false);

        idleTimerRef.current = window.setTimeout(() => {
            setIsSleeping(true);
            setMessage("Sleeping on the job... just like me during standups");
            setExpression("😴");
        }, 10000); // 10 seconds
    };

    // 2. Tab Switch Detection
    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.hidden) {
                // User left
            } else {
                // User returned
                const msgs = [
                    "Welcome back, traitor.",
                    "Oh, you're back? Checking LinkedIn, were we?",
                    "I saw you open Stack Overflow in another tab.",
                    "Did you miss me or did the other tabs not work?"
                ];
                updateMascot(msgs[Math.floor(Math.random() * msgs.length)], "🤨");
            }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);
        return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
    }, []);

    // 3. Scroll to Bottom Detection
    useEffect(() => {
        const handleScroll = () => {
            resetIdleTimer();

            const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 100;
            if (bottom) {
                updateMascot("You scrolled all this way and didn't hire me? 😢", "🥺");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // 4. Rapid Click Detection
    useEffect(() => {
        const handleClick = () => {
            resetIdleTimer();
            clickCountRef.current += 1;

            if (!clickTimerRef.current) {
                clickTimerRef.current = window.setTimeout(() => {
                    clickCountRef.current = 0;
                    clickTimerRef.current = null;
                }, 3000);
            }

            if (clickCountRef.current >= 5) {
                updateMascot("Whoa there, eager beaver! Take your time!", "🤯");
                clickCountRef.current = 0; // Reset to avoid spamming
            }
        };

        window.addEventListener("click", handleClick);
        return () => window.removeEventListener("click", handleClick);
    }, []);

    // 5. Hover Contact Button Detection
    useEffect(() => {
        const contactBtn = document.getElementById('contact-btn');
        if (!contactBtn) return;

        const handleHover = () => updateMascot("YES! DO IT! CLICK IT!", "🎉");

        contactBtn.addEventListener('mouseenter', handleHover);
        return () => contactBtn.removeEventListener('mouseenter', handleHover);
    }, []); // Needs to run after mount, might need retry if button renders late

    // 6. Random Periodic Messages
    useEffect(() => {
        const interval = setInterval(() => {
            if (document.hidden || isSleeping) return;

            const randomMsgs = [
                { msg: "Did you know? Deepesh codes better after 2 cups of coffee.", expr: "☕" },
                { msg: "Fun fact: This portfolio was made with 78% Stack Overflow.", expr: "🤫" },
                { msg: "Psst... scroll down, the cool stuff is below.", expr: "👇" },
                { msg: "I'm watching you... always watching.", expr: "👀" }
            ];
            const random = randomMsgs[Math.floor(Math.random() * randomMsgs.length)];
            updateMascot(random.msg, random.expr);
        }, 45000); // 45 seconds

        return () => clearInterval(interval);
    }, [isSleeping]);

    // Initial Welcome
    useEffect(() => {
        resetIdleTimer();
        // Events listener setup handles the reset
        return () => {
            if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed bottom-4 right-4 z-50 flex flex-col items-end pointer-events-none"
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={message}
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 10 }}
                    className="bg-white text-black p-4 rounded-2xl rounded-br-none shadow-lg mb-2 max-w-[250px] relative pointer-events-auto"
                >
                    <p className="text-sm font-medium">{message}</p>
                    <button
                        onClick={() => setIsVisible(false)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                    >
                        <X size={12} />
                    </button>
                </motion.div>
            </AnimatePresence>

            <motion.div
                animate={isSleeping ? { rotate: [0, 5, -5, 0], transition: { repeat: Infinity, duration: 4 } } : { y: [0, -5, 0], transition: { repeat: Infinity, duration: 2 } }}
                className="text-6xl cursor-pointer pointer-events-auto filter drop-shadow-lg hover:scale-110 transition-transform"
                onClick={() => updateMascot("Hey! I'm working here!", "😠")}
            >
                {expression}
            </motion.div>
        </motion.div>
    );
};
