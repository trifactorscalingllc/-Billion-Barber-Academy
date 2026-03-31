import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Instagram, Youtube } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Authority from './components/Authority';
import Proof from './components/Proof';
import ApplicationForm from './components/ApplicationForm';
import InlineForm from './components/InlineForm';
import AdminDashboard from './components/AdminDashboard';
import MergedOutline from './components/MergedOutline';

export default function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Toggle admin view with a secret key combo (Alt + A)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && e.key === 'a') {
        setShowAdmin(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-brand-black selection:bg-brand-gold selection:text-black relative">
      {/* Global Background Glow */}
      <div className="absolute inset-0 hq-gradient-gold pointer-events-none z-0" />
      
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-brand-gold z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar onApply={() => setIsFormOpen(true)} />
      
      <main className="relative z-10">
        <Hero />
        
        <Authority />
        
        <Proof />

        {/* Final CTA Section */}
        <section className="py-16 md:py-32 px-2 md:px-4 text-center bg-black">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="w-full md:w-[50%] mx-auto p-4 md:p-16 relative"
          >
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-black uppercase italic leading-none mb-12 relative z-10 flex flex-col items-center gap-4">
              <span className="text-white">READY TO</span>
              <MergedOutline strokeWidth="4px">SCALE?</MergedOutline>
            </h2>
            <InlineForm />
          </motion.div>
        </section>

        {showAdmin && <AdminDashboard />}
      </main>

      <footer className="py-24 px-4 border-t border-white/5 text-center relative z-10 bg-black">
        <div className="flex flex-col items-center gap-12">
          <div className="technical-label">
            BOOK AN APPOINTMENT
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="https://www.instagram.com/cutbydack" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 brutalist-card border-brand-gold text-white flex items-center justify-center hover:bg-brand-gold hover:text-black active:bg-white group transition-all"
            >
              <Instagram size={20} className="group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="https://www.tiktok.com/@cutbydack" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 brutalist-card border-brand-gold text-white flex items-center justify-center hover:bg-brand-gold hover:text-black active:bg-white group transition-all"
            >
              <svg 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-5 h-5 group-hover:scale-110 transition-transform"
              >
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47-.13-.08-.26-.17-.38-.26v5.48c.01 1.89-.4 3.81-1.58 5.2a7.07 7.07 0 0 1-5.2 2.62c-1.9.1-3.94-.31-5.47-1.54a7.18 7.18 0 0 1-2.7-5.41 7.1 7.1 0 0 1 2.98-5.7c1.5-1.08 3.39-1.51 5.23-1.29.19.02.39.05.58.09V9.16c-.49-.17-.99-.26-1.5-.3-1.28-.09-2.6.24-3.55 1.11-.9.8-1.41 2.01-1.39 3.23.02 1.22.51 2.45 1.41 3.23.91.79 2.1 1.13 3.3 1.03 1.11-.09 2.14-.66 2.77-1.57.6-.88.75-2.02.74-3.08V.02z"/>
              </svg>
            </a>
            <a 
              href="https://www.youtube.com/@uncutdack" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 brutalist-card border-brand-gold text-white flex items-center justify-center hover:bg-brand-gold hover:text-black active:bg-white group transition-all"
            >
              <Youtube size={20} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>

          <div className="space-y-2">
            <div className="technical-label opacity-100">
              © 2026 CUTBYDACK
            </div>
            <a 
              href="https://trifactorscaling.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="technical-label text-[8px] opacity-40 hover:opacity-100 transition-opacity block"
            >
              TFS LLC
            </a>
          </div>
        </div>
      </footer>

      <ApplicationForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
}
