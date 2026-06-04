'use client';
import { motion } from 'framer-motion';
import { Lightbulb } from 'lucide-react';

const tips = [
  "A jól strukturált bérszámfejtés akár 10-15%-os megtakarítást is jelenthet az adóterhek optimalizálásával.",
  "A digitális könyvelés nem csak gyorsabb, de környezetkímélőbb és bármikor visszakereshetőbb is.",
  "Egy tapasztalt könyvelő már a vállalkozás alapításakor segíthet elkerülni a későbbi bírságokat.",
  "A kettős könyvvitel nem teher, hanem egy precíz tükör a vállalkozása valódi értékéről."
];

export default function TrustTips() {
  return (
    <div className="w-full py-12 bg-blue-600/5 border-y border-blue-500/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex items-center gap-4 shrink-0">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h5 className="text-lg font-bold text-slate-900 dark:text-white uppercase tracking-widest">Tudta-e?</h5>
          </div>
          
          <div className="flex-1 overflow-hidden h-12 relative">
             <div className="flex flex-col animate-vertical-slide">
               {tips.map((tip, idx) => (
                 <p key={idx} className="h-12 flex items-center text-slate-600 dark:text-slate-400 text-lg font-medium italic">
                   &quot;{tip}&quot;
                 </p>
               ))}
               {/* Duplicate first tip for seamless loop */}
               <p className="h-12 flex items-center text-slate-600 dark:text-slate-400 text-lg font-medium italic">
                 &quot;{tips[0]}&quot;
               </p>
             </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes vertical-slide {
          0% { transform: translateY(0); }
          20% { transform: translateY(0); }
          25% { transform: translateY(-3rem); }
          45% { transform: translateY(-3rem); }
          50% { transform: translateY(-6rem); }
          70% { transform: translateY(-6rem); }
          75% { transform: translateY(-9rem); }
          95% { transform: translateY(-9rem); }
          100% { transform: translateY(-12rem); }
        }
        .animate-vertical-slide {
          animation: vertical-slide 20s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}
