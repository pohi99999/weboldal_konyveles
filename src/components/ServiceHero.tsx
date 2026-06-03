'use client';
import { motion } from 'framer-motion';

export default function ServiceHero({ title, description }: { title: string; description: string }) {
  return (
    <section className="relative w-full overflow-hidden bg-slate-900 py-24 px-6 md:py-32 pt-32">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl opacity-50" />
      </div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        <div className="inline-block p-10 md:p-16 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">{title}</h1>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">{description}</p>
        </div>
      </motion.div>
    </section>
  );
}
