import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
    const [text, setText] = useState('');
    const fullText = 'INITIALIZING SYSTEM...';

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;
            if (index > fullText.length) {
                clearInterval(interval);
                setTimeout(() => {
                    onComplete();
                }, 1000);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[200] bg-cyber-bg flex flex-col items-center justify-center"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="relative">
                <div className="w-64 h-2 bg-gray-800 rounded overflow-hidden mb-4">
                    <motion.div
                        className="h-full bg-cyber-accent"
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />
                </div>
                <h2 className="text-xl font-mono text-cyber-accent text-center">
                    {text}
                    <span className="animate-pulse">_</span>
                </h2>
            </div>
        </motion.div>
    );
};
