import { motion } from 'motion/react';
import { Star, TrendingUp, Users, CheckCircle2, Instagram } from 'lucide-react';
import MergedOutline from './MergedOutline';

const caseStudies = [
  {
    name: "Yari",
    metric: "Generated 12k Rev",
    shortMetric: "12k Rev",
    timeframe: "in 1 month",
    shortTimeframe: "1 Month",
    rating: "5.0",
    projects: "1000+",
    instagram: "https://www.instagram.com/yaricutz/",
    image: "https://i.ibb.co/1Gfj8Mfv/340337075-766262201731245-6783814181699090570-n.jpg"
  },
  {
    name: "George",
    metric: "10x client booking",
    shortMetric: "10x Growth",
    timeframe: "and retention",
    shortTimeframe: "Retention",
    rating: "5.0",
    projects: "750+",
    instagram: "https://www.instagram.com/cutsbyygeorge/",
    image: "https://i.ibb.co/Q76NtnvJ/487857539-1058398809642327-353604875646274729-n.jpg"
  }
];

export default function Proof() {
  return (
    <section id="results" className="py-12 md:py-24 px-4 content-visibility-auto">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 will-change-transform"
        >
          <h2 className="text-sm font-black text-brand-gold tracking-[0.3em] uppercase mb-4">The Proof</h2>
          <h3 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase italic leading-none">
            My <MergedOutline strokeWidth="3px" strokeColor="white">Students</MergedOutline>
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 md:gap-12 max-w-4xl mx-auto">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.name}
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative aspect-[3/4.5] brutalist-card bg-black overflow-hidden shadow-2xl will-change-transform"
            >
              {/* Background Image */}
              <img 
                src={study.image} 
                alt={study.name} 
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 hq-overlay" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-8 text-white">
                <div className="flex items-center gap-1 md:gap-2 mb-2 md:mb-6">
                  <h4 className="text-xs sm:text-sm md:text-3xl font-black uppercase italic leading-none truncate">{study.name}</h4>
                  <CheckCircle2 size={10} className="text-blue-500 md:w-[18px] md:h-[18px] flex-shrink-0" />
                </div>

                {/* Stats Row */}
                <div className="flex items-center justify-between mb-4 md:mb-8 px-0.5 md:px-2">
                  <div className="text-center flex-1 min-w-0">
                    <div className="flex items-center justify-center gap-0.5 md:gap-1 technical-value text-[clamp(8px,2.5vw,10px)] md:text-sm">
                      {study.rating} <Star size={8} className="text-brand-gold fill-current md:w-[12px] md:h-[12px] flex-shrink-0" />
                    </div>
                    <div className="technical-label mt-0.5 md:mt-1 text-[clamp(6px,2vw,8px)] md:text-[10px]">Rating</div>
                  </div>
                  
                  <div className="w-px h-4 md:h-8 bg-white/10 flex-shrink-0 mx-1" />
                  
                  <div className="text-center flex-1 min-w-0">
                    <div className="technical-value text-[clamp(8px,2.5vw,10px)] md:text-sm truncate">{study.projects}</div>
                    <div className="technical-label mt-0.5 md:mt-1 text-[clamp(6px,2vw,8px)] md:text-[10px]">Cuts</div>
                  </div>
                  
                  <div className="w-px h-4 md:h-8 bg-white/10 flex-shrink-0 mx-1" />
                  
                  <div className="text-center flex-1 min-w-0">
                    <div className="technical-value text-[clamp(8px,2.5vw,10px)] md:text-sm text-brand-gold truncate">
                      <span className="md:hidden">{study.shortMetric}</span>
                      <span className="hidden md:inline">{study.metric}</span>
                    </div>
                    <div className="technical-label mt-0.5 md:mt-1 text-[clamp(6px,2vw,8px)] md:text-[10px] truncate">
                      <span className="md:hidden">{study.shortTimeframe}</span>
                      <span className="hidden md:inline">{study.timeframe}</span>
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-2">
                  <a 
                    href={study.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border border-brand-gold md:border-2 text-white h-7 md:h-12 font-black flex items-center justify-center gap-1 md:gap-2 hover:bg-brand-gold/10 active:bg-white active:text-black transition-all btn-sheen shadow-xl"
                  >
                    <Instagram size={10} className="text-brand-gold md:w-[16px] md:h-[16px]" />
                    <span className="text-[7px] sm:text-[8px] md:text-[10px] uppercase tracking-[0.1em] md:tracking-[0.2em]">IG Profile</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual Badges */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 flex justify-center items-center gap-4 sm:gap-8 md:gap-16 opacity-50 overflow-x-auto no-scrollbar py-4 will-change-transform"
        >
           <div className="flex flex-col items-center gap-2 flex-shrink-0">
              <Users size={24} className="md:size-8" />
              <span className="text-[8px] md:text-[10px] uppercase font-black tracking-widest whitespace-nowrap">500+ Barbers Scaled</span>
           </div>
           <div className="flex flex-col items-center gap-2 flex-shrink-0">
              <Star size={24} className="md:size-8" />
              <span className="text-[8px] md:text-[10px] uppercase font-black tracking-widest whitespace-nowrap">Proven Growth Systems</span>
           </div>
           <div className="flex flex-col items-center gap-2 flex-shrink-0">
              <TrendingUp size={24} className="md:size-8" />
              <span className="text-[8px] md:text-[10px] uppercase font-black tracking-widest whitespace-nowrap">6-Figure Blueprint</span>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
