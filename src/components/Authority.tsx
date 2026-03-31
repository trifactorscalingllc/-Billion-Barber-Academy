import { motion } from 'motion/react';
import { TrendingUp } from 'lucide-react';
import MergedOutline from './MergedOutline';

export default function Authority() {
  return (
    <section id="story" className="py-12 md:py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Image Block - First on mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-1 md:order-2"
        >
          <div className="aspect-[4/5] brutalist-card bg-black overflow-hidden border-brand-gold/30 shadow-2xl relative">
            <img 
              src="https://i.ibb.co/23FxGKfd/image-2026-03-30-003054012.png" 
              alt="The Hustle" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Quote - Overlapping on mobile, hidden on desktop here */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="md:hidden absolute -bottom-6 left-4 right-4 p-4 border-l-4 border-brand-gold bg-black/90 backdrop-blur-md brutalist-card italic font-bold text-sm z-20 shadow-2xl"
          >
            "Barbers don't need a big following to convert—they need the right system."
          </motion.div>
        </motion.div>

        {/* Text Block - Second on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 md:order-1 mt-12 md:mt-0"
        >
          <h2 className="text-sm font-black text-brand-gold tracking-[0.3em] uppercase mb-4">The Authority</h2>
          <h3 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase italic leading-none mb-8">
            From a Small Town to <MergedOutline strokeWidth="3px">$30k+ Months.</MergedOutline>
          </h3>
          <div className="space-y-6 text-white/70 text-base md:text-lg leading-relaxed">
            <p>
              I started where most of you are. Stuck in a chair, grinding 12 hours a day, trading time for pennies. I had the skills, but I didn't have the <span className="text-brand-gold font-bold">system.</span>
            </p>
            <p>
              By combining high-level barbering with a strategic digital presence, I moved from a limited environment to a high-ticket lifestyle using only <span className="text-brand-gold font-bold italic underline decoration-brand-gold">clippers and a phone.</span>
            </p>
          </div>
          
          {/* Quote - Desktop only here */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="hidden md:block mt-10 p-6 border-l-4 border-brand-gold bg-brand-gold/5 italic font-bold text-lg md:text-xl"
          >
            "Barbers don't need a big following to convert—they need the right system."
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
