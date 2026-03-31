import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import MergedOutline from './MergedOutline';

interface HeroProps {
  onApply: () => void;
}

export default function Hero({ onApply }: HeroProps) {
  return (
    <section className="relative pt-32 md:pt-52 pb-10 md:pb-20 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-7xl font-black tracking-tighter leading-[1.1] mb-20 uppercase italic px-4 sm:px-8 will-change-transform"
        >
          {/* Line 1 */}
          <div className="text-white block mb-2 whitespace-nowrap">REVEALING THE</div>
          
          {/* Line 2 */}
          <div className="flex justify-center items-center gap-x-[0.3em] mb-2 whitespace-nowrap">
            <MergedOutline strokeWidth="3px">EXACT BLUEPRINT</MergedOutline>
            <span className="text-white">TO A</span>
          </div>
          
          {/* Line 3 */}
          <div className="flex justify-center items-center gap-x-[0.3em] whitespace-nowrap">
            <span className="text-brand-gold">6-FIGURE</span>
            <span className="text-white">BARBERSHOP</span>
          </div>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98, filter: "blur(20px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative aspect-[4/3] w-full max-w-3xl mx-auto brutalist-card overflow-hidden bg-brand-gray shadow-2xl group will-change-transform"
        >
          <img 
            src="https://i.ibb.co/KpKT5xyw/image-2026-03-30-223225063.png" 
            alt="Academy Life" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="mt-8 flex flex-col items-center gap-8 will-change-transform"
        >
          <p className="text-white/60 font-medium tracking-wide uppercase text-sm">
            Giving information for free because the game is meant to be shared.
          </p>
          
          <button 
            onClick={onApply}
            className="px-12 h-16 bg-brand-gold text-black font-black uppercase italic tracking-tighter text-xl brutalist-card border-none hover:bg-white active:scale-95 transition-all btn-sheen shadow-[0_0_50px_rgba(255,215,0,0.3)]"
          >
            Apply Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}
