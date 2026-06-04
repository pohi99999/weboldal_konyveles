'use client';
import { motion } from 'framer-motion';

export default function Signature() {
  // A stylized SVG path representing a handwritten signature "Pohánka Józsefné"
  return (
    <div className="relative w-48 h-20">
      <svg
        viewBox="0 0 200 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <motion.path
          d="M20 40C30 35 50 30 60 35C70 40 55 55 45 50C35 45 60 20 80 25C100 30 90 50 110 45C130 40 120 20 140 25C160 30 155 50 175 45M30 20L25 60M75 35V45M105 35V45"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-blue-600"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </svg>
      <div className="absolute -bottom-2 right-0 text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">
        Pohánka Józsefné
      </div>
    </div>
  );
}
