import { useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navigation } from './components/Navigation';
import { LoadingScreen } from './components/LoadingScreen';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Testimonials } from './components/Testimonials';
import { JudgyMascot } from './components/JudgyMascot';
import { AnimatePresence } from 'framer-motion';

function App() {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className="min-h-screen bg-cyber-bg text-white selection:bg-cyber-accent selection:text-cyber-bg overflow-x-hidden">
            <CustomCursor />

            <AnimatePresence>
                {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
            </AnimatePresence>

            {!isLoading && (
                <>
                    <Navigation />
                    <main className="relative z-10">
                        <Hero />
                        <About />
                        <Skills />
                        <Projects />
                        <Experience />
                        <Testimonials />
                        <Contact />
                        <JudgyMascot />
                    </main>
                </>
            )}
        </div>
    );
}

export default App;
