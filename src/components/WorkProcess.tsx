'use client';
import { motion } from 'framer-motion';
import { PhoneCall, MessageSquare, FileText, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: <PhoneCall className="w-8 h-8" />,
    title: "1. Kapcsolat",
    description: "Kérjen ajánlatot vagy hívjon minket telefonon egy rövid egyeztetéshez."
  },
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: "2. Konzultáció",
    description: "Személyesen vagy online átbeszéljük vállalkozása igényeit és céljait."
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "3. Megállapodás",
    description: "Szerződést kötünk és átvesszük a korábbi könyvelési dokumentumokat."
  },
  {
    icon: <CheckCircle className="w-8 h-8" />,
    title: "4. Biztonság",
    description: "Ön az üzletre koncentrál, mi pedig precízen végezzük a könyvelést."
  }
];

export default function WorkProcess() {
  return (
    <section className="w-full py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Munkamenet</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-slate-900">Hogyan dolgozunk együtt?</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 -translate-y-12 z-0" />
          
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 bg-slate-900 text-white rounded-3xl flex items-center justify-center mb-6 shadow-xl group-hover:bg-blue-600 transition-colors duration-300">
                {step.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h4>
              <p className="text-slate-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
