import { motion } from 'motion/react';
import { Scissors, Menu } from 'lucide-react';
import MergedOutline from './MergedOutline';

interface NavbarProps {
  onApply: () => void;
}

export default function Navbar({ onApply }: NavbarProps) {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 px-4 py-6"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between brutalist-card bg-black px-4 md:px-8 py-3 md:py-4 border-white/10 shadow-2xl">
        <div className="flex items-center gap-2 md:gap-4">
          <span className="font-black uppercase tracking-tighter text-sm sm:text-base md:text-xl italic leading-none flex items-center gap-1">
            $Billion Barber <span className="text-brand-gold">Academy</span>
          </span>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="hidden md:flex items-center gap-6"
        >
          <div className="flex items-center gap-12 mr-8">
            <motion.a 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              href="#story" 
              className="technical-label hover:text-white transition-all"
            >
              Story
            </motion.a>
            <motion.a 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              href="#results" 
              className="technical-label hover:text-white transition-all"
            >
              Results
            </motion.a>
          </div>
          <button 
            onClick={onApply}
            className="bg-brand-gold text-black px-10 py-4 brutalist-card text-xs font-black uppercase italic hover:opacity-90 active:bg-white active:scale-95 transition-all btn-sheen shadow-2xl"
          >
            Apply
          </button>
        </motion.div>

        <div className="md:hidden w-10 h-6">
          <img 
            src="https://i.ibb.co/pjB1MHPN/656220402-833597619777157-1121401611018245679-n-removebg-preview-1.png" 
            alt="Logo" 
            className="w-full h-full object-contain" 
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </motion.nav>
  );
}
