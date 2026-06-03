'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Milyen dokumentumok szükségesek a váltáshoz?",
    answer: "A váltáshoz szükségünk lesz az előző évi mérlegre, a főkönyvi kivonatokra, az alkalmazottak adataira és a hatályos társasági szerződésre. Minden egyéb technikai átvételt (NAV bejelentés) mi intézünk."
  },
  {
    question: "Hogyan történik a dokumentumok átadása?",
    answer: "Rugalmasak vagyunk: fogadjuk a bizonylatokat papír alapon a zalaegerszegi irodánkban, de preferáljuk és támogatjuk a digitális beküldést is, ami megkönnyíti mindkét fél munkáját."
  },
  {
    question: "Mikor kapok visszajelzést a fizetendő adókról?",
    answer: "A bizonylatok időben történő leadása esetén (tárgyhó 10-ig) legkésőbb a bevallási határidő előtt 3-5 nappal értesítjük Önt a pontos összegekről."
  },
  {
    question: "Vállalnak-e visszamenőleges könyvelést vagy rendbetételt?",
    answer: "Igen, gyakran keresnek meg minket elmaradt vagy hibás könyvelések korrigálásával. Ilyenkor egyedi állapotfelmérés után teszünk ajánlatot a rendbetételre."
  },
  {
    question: "Képviselnek-e engem a NAV előtt?",
    answer: "Természetesen. Meghatalmazottként teljes körűen eljárunk a hatóságok előtt, így Önnek nem kell személyesen megjelennie vagy technikai kérdésekre válaszolnia egy ellenőrzés során."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full py-24 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Segítség</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-slate-900">Gyakori Kérdések</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-6 text-left flex justify-between items-center gap-4"
              >
                <span className="font-bold text-slate-900 text-lg">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-blue-600 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
