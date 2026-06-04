'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronRight, RotateCcw, HelpCircle } from 'lucide-react';

type Step = 'type' | 'employees' | 'vat' | 'result';

export default function ServiceWizard() {
  const [step, setStep] = useState<Step>('type');
  const [answers, setStepAnswers] = useState({
    type: '',
    employees: '',
    vat: ''
  });

  const nextStep = (key: keyof typeof answers, value: string, next: Step) => {
    setStepAnswers(prev => ({ ...prev, [key]: value }));
    setStep(next);
  };

  const reset = () => {
    setStep('type');
    setStepAnswers({ type: '', employees: '', vat: '' });
  };

  const getResult = () => {
    if (answers.type === 'Egyéni vállalkozó' && answers.employees === '0') {
      return {
        title: "Egyéni Vállalkozói Csomag",
        desc: "Ideális választás az Ön számára: költséghatékony könyvelés, KATA vagy átalányadó optimalizálással.",
        link: "/szolgaltatasok/konyveles"
      };
    }
    if (answers.employees !== '0') {
      return {
        title: "Bérszámfejtéssel bővített csomag",
        desc: "Cége mérete és a munkavállalók miatt komplexebb könyvelésre és precíz bérszámfejtésre van szüksége.",
        link: "/szolgaltatasok/berszamfejtes"
      };
    }
    return {
      title: "Teljes körű Társasági Könyvelés",
      desc: "Kft-je számára mindenre kiterjedő kettős könyvvitelt és stratégiai adótanácsadást javasolunk.",
      link: "/szolgaltatasok/adotanacsadas"
    };
  };

  const result = getResult();

  return (
    <section className="w-full py-24 px-6 bg-slate-900 overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold text-blue-400 uppercase tracking-[0.3em] mb-4">Segítünk a döntésben</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">Melyik szolgáltatásra van szüksége?</h3>
          <p className="mt-4 text-slate-400 text-lg">Válaszoljon 3 egyszerű kérdésre, és megmutatjuk a legjobb irányt.</p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-16 min-h-[400px] flex flex-col justify-center shadow-2xl">
          <AnimatePresence mode="wait">
            {step === 'type' && (
              <motion.div
                key="type"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <h4 className="text-2xl font-serif font-bold text-white text-center">1. Milyen típusú vállalkozása van?</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {['Egyéni vállalkozó', 'Kft. / Bt.', 'Alapítvány / Egyesület', 'Induló vállalkozás'].map((item) => (
                    <button
                      key={item}
                      onClick={() => nextStep('type', item, 'employees')}
                      className="p-6 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-blue-600 transition-all text-lg font-medium text-left flex justify-between items-center group"
                    >
                      {item}
                      <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all" />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 'employees' && (
              <motion.div
                key="employees"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <h4 className="text-2xl font-serif font-bold text-white text-center">2. Hány munkavállalót foglalkoztat?</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { label: 'Nincs (csak én)', value: '0' },
                    { label: '1 - 5 fő', value: '1-5' },
                    { label: '5 fő felett', value: '5+' }
                  ].map((item) => (
                    <button
                      key={item.value}
                      onClick={() => nextStep('employees', item.value, 'vat')}
                      className="p-8 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-blue-600 transition-all text-center flex flex-col items-center gap-4 group"
                    >
                      <span className="text-2xl font-bold">{item.label}</span>
                      <ChevronRight className="w-5 h-5 opacity-0 group-hover:translate-y-1 group-hover:opacity-100 transition-all" />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 'vat' && (
              <motion.div
                key="vat"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <h4 className="text-2xl font-serif font-bold text-white text-center">3. ÁFA körbe tartozik vagy alanyi mentes?</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {['ÁFA körös', 'Alanyi adómentes'].map((item) => (
                    <button
                      key={item}
                      onClick={() => nextStep('vat', item, 'result')}
                      className="p-10 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-blue-600 transition-all text-xl font-bold text-center"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 'result' && (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-8"
              >
                <div className="inline-flex p-4 bg-green-500/20 text-green-400 rounded-full mb-4">
                  <Check className="w-10 h-10" />
                </div>
                <h4 className="text-3xl md:text-4xl font-serif font-bold text-white">Javasolt megoldásunk:</h4>
                <div className="p-8 rounded-3xl bg-blue-600 text-white shadow-xl shadow-blue-600/20">
                  <h5 className="text-2xl font-bold mb-4">{result.title}</h5>
                  <p className="text-blue-50 text-lg leading-relaxed">{result.desc}</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <a href="#contact" className="px-10 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-100 transition-all">
                    Kérjen ajánlatot most
                  </a>
                  <button onClick={reset} className="px-10 py-4 bg-white/5 text-white border border-white/10 rounded-full font-bold hover:bg-white/10 transition-all flex items-center gap-2 justify-center">
                    <RotateCcw className="w-4 h-4" /> Újrakezdés
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-12 flex items-center justify-center gap-3 text-slate-500 text-sm italic">
          <HelpCircle className="w-4 h-4" />
          A javaslat tájékoztató jellegű, a pontos részleteket személyes konzultáció során egyeztetjük.
        </div>
      </div>
    </section>
  );
}
