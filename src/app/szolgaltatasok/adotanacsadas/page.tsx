import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Adótanácsadás és Optimalizálás | Pohánka és Társa',
  description: 'Személyre szabott adótanácsadás és stratégiai tervezés induló és működő vállalkozásoknak.',
};

export default function TaxAdvisoryPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-8">
        Adótanácsadás
      </h1>
      <div className="prose prose-slate lg:prose-xl max-w-none">
        <p className="lead text-xl text-slate-600 mb-12 italic border-l-4 border-blue-600 pl-6">
          Szakértő segítség az adódzsungelben: biztonság és megtakarítás.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-serif font-bold mb-4 text-slate-900">Miben segítünk?</h2>
            <ul className="space-y-3 text-slate-600 list-disc pl-5">
              <li>Adóoptimalizálási lehetőségek feltérképezése</li>
              <li>Induló vállalkozások adótervezése</li>
              <li>Szakértő állásfoglalások kérése</li>
              <li>Képviselet adóhatósági ellenőrzések során</li>
            </ul>
          </div>
          <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl">
            <h2 className="text-2xl font-serif font-bold mb-4">Biztonság és Tervszerűség</h2>
            <p className="text-slate-300">Célunk, hogy vállalkozása a lehető legkedvezőbb adózási formában működjön, elkerülve a felesleges kockázatokat.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
