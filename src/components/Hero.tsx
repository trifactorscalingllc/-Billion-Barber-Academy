import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import MergedOutline from './MergedOutline';

export default function Hero() {
  return (
    <section className="relative pt-32 md:pt-52 pb-10 md:pb-20 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl md:text-7xl font-black tracking-tighter leading-[1.1] mb-20 uppercase italic px-4 sm:px-8"
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
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative aspect-[4/3] w-full max-w-3xl mx-auto brutalist-card overflow-hidden bg-brand-gray shadow-2xl group"
        >
          <img 
            src="https://i.ibb.co/KpKT5xyw/image-2026-03-30-223225063.png" 
            alt="Academy Life" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-white/60 font-medium tracking-wide uppercase text-sm"
        >
          Giving information for free because the game is meant to be shared.
        </motion.p>
      </div>
    </section>
  );
}
