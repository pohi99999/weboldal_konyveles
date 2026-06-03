import type { Metadata } from 'next';

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
    <div className="max-w-7xl mx-auto px-6 py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-8">
        Könyvelés és Számvitel
      </h1>
      <div className="prose prose-slate lg:prose-xl max-w-none">
        <p className="lead text-xl text-slate-600 mb-12 italic border-l-4 border-blue-600 pl-6">
          Vállalkozása pénzügyi stabilitásának alapja a precíz és naprakész könyvelés.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-serif font-bold mb-4 text-slate-900">Mivel segítünk?</h2>
            <ul className="space-y-3 text-slate-600 list-disc pl-5">
              <li>Kettős könyvvitel vezetése</li>
              <li>ÁFA, SZJA, Társasági adó bevallások</li>
              <li>Éves beszámolók, mérlegek készítése</li>
              <li>Képviselet a hatóságok előtt</li>
            </ul>
          </div>
          <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl">
            <h2 className="text-2xl font-serif font-bold mb-4">Miért minket?</h2>
            <p className="text-slate-300">Több mint 25 év tapasztalatával nem csak adatokat rögzítünk, hanem értelmezzük is azokat az Ön üzleti sikere érdekében.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
