import type { Metadata } from 'next';
import ServiceHero from '@/components/ServiceHero';
import AnimatedSection from '@/components/AnimatedSection';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Adótanácsadás és Optimalizálás | Pohánka és Társa',
  description: 'Személyre szabott adótanácsadás és stratégiai tervezés induló és működő vállalkozásoknak.',
};

export default function TaxAdvisoryPage() {
  return (
    <main>
      <ServiceHero 
        title="Adótanácsadás"
        description="Szakértő segítség az adódzsungelben: biztonság és stratégiai megtakarítás vállalkozása számára."
      />

      <AnimatedSection className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
                Stratégiai adótervezés
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Az adótanácsadás nem csupán a jogszabályok ismeretét jelenti, hanem azok kreatív és 
                biztonságos alkalmazását az Ön vállalkozásának egyedi igényeire szabva. Segítünk 
                megtalálni a legoptimálisabb utat.
              </p>
              <ul className="space-y-4 text-slate-700">
                {[
                  'Adóoptimalizálási lehetőségek feltárása',
                  'Induló vállalkozások adózási formájának kiválasztása',
                  'Hatóságok előtti szakmai képviselet',
                  'Adóhatósági ellenőrzések támogatása',
                  'Komplex adózási kérdések megválaszolása'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1 text-xl">✓</span>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 relative z-10">
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">Mikor van ránk szüksége?</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                    <p className="font-bold text-slate-900">Cégalapításkor</p>
                    <p className="text-sm text-slate-600">Hogy a kezdettől fogva a legjobb úton járjon.</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                    <p className="font-bold text-slate-900">Növekedési fázisban</p>
                    <p className="text-sm text-slate-600">Amikor a komplexitás új megoldásokat kíván.</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                    <p className="font-bold text-slate-900">NAV ellenőrzés előtt</p>
                    <p className="text-sm text-slate-600">A felkészültség a legjobb védekezés.</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl -z-0"></div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-8">
            Biztonság és Tervszerűség
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed italic">
            &quot;Célunk, hogy vállalkozása a lehető legkedvezőbb adózási formában működjön, 
            elkerülve a felesleges kockázatokat és maximalizálva a megtakarításokat.&quot;
          </p>
        </div>
      </AnimatedSection>

      <ContactCTA />
    </main>
  );
}
