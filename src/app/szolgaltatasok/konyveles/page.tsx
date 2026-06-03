import type { Metadata } from 'next';
import ServiceHero from '@/components/ServiceHero';
import AnimatedSection from '@/components/AnimatedSection';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Könyvelés és Számviteli Szolgáltatások Zalaegerszeg',
  description: 'Teljes körű könyvelés, kettős könyvvitel és pénzügyi beszámolók készítése KKV-k részére Zalaegerszegen.',
};

export default function AccountingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "name": "Könyvelési Szolgáltatás - Pohánka és Társa",
    "description": "Precíz és megbízható könyvelés mikro- és kisvállalkozásoknak.",
    "areaServed": "Zalaegerszeg"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <ServiceHero 
        title="Könyvelés és Számvitel"
        description="Vállalkozása pénzügyi stabilitásának alapja a precíz és naprakész könyvelés."
      />

      <AnimatedSection className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
                Szakértő könyvelés a biztonságért
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                A könyvelés nálunk nem csupán a bizonylatok rögzítését jelenti. Célunk, hogy naprakész 
                információkkal segítsük döntéshozatalát, miközben teljes körűen levesszük a válláról 
                az adózási és adminisztrációs terheket.
              </p>
              <ul className="space-y-4 text-slate-700">
                {[
                  'Kettős könyvvitel precíz vezetése',
                  'ÁFA, SZJA és egyéb adónemek bevallása',
                  'Éves beszámolók, mérlegek összeállítása',
                  'Szakmai képviselet a hatóságok (NAV) előtt'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1 text-xl">✓</span>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">Mivel segítjük vállalkozását?</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-bold text-slate-900">Naprakészség</h4>
                  <p className="text-slate-600">Azonnali rálátás a cége pénzügyi helyzetére.</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-bold text-slate-900">Adóoptimalizálás</h4>
                  <p className="text-slate-600">Törvényes keretek között minimalizáljuk adóterheit.</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-bold text-slate-900">Biztonság</h4>
                  <p className="text-slate-600">Garantált jogszabályi megfelelőség és felelősségvállalás.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-8">
            Miért válassza a Pohánka és Társa Kft-t?
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed italic">
            &quot;Több mint 25 év tapasztalatával nem csak adatokat rögzítünk, hanem értelmezzük is azokat 
            az Ön üzleti sikere érdekében. A bizalom és a pontosság nálunk alapkövetelmény.&quot;
          </p>
        </div>
      </AnimatedSection>

      <ContactCTA />
    </main>
  );
}
