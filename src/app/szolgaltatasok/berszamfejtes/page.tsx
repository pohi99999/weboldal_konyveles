import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bérszámfejtés és Munkaügyi Ügyintézés | Pohánka és Társa',
  description: 'Profi bérszámfejtés, TB ügyintézés és munkaügyi nyilvántartások vezetése vállalkozások számára. Naprakész jogszabályi követés.',
};

export default function PayrollPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-8">
        Bérszámfejtés és Munkaügy
      </h1>
      <div className="prose prose-slate lg:prose-xl max-w-none">
        <p className="lead text-xl text-slate-600 mb-12 italic border-l-4 border-blue-600 pl-6">
          Hatékony bérügyintézés és precíz munkaügyi adminisztráció, hogy Önnek csak a vállalkozása növekedésére kelljen koncentrálnia.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-serif font-bold mb-4 text-slate-900">Miben segítünk?</h2>
            <ul className="space-y-3 text-slate-600 list-disc pl-5">
              <li>Havi bérszámfejtés és bérjegyzékek elkészítése</li>
              <li>Adó- és járulékbevallások (08-as bevallás) benyújtása</li>
              <li>Munkaviszony létesítésével és megszűnésével kapcsolatos bejelentések (T1041)</li>
              <li>TB-kifizetőhelyi feladatok és táppénz ügyintézés</li>
              <li>Cafeteria rendszer kidolgozása és adminisztrációja</li>
              <li>Munkaügyi nyilvántartások vezetése</li>
            </ul>
          </div>
          
          <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl flex flex-col justify-center">
            <h2 className="text-2xl font-serif font-bold mb-4 italic text-blue-400">Biztonság és Szakértelem</h2>
            <p className="text-slate-300 leading-relaxed">
              A bérszámfejtés az egyik legérzékenyebb terület egy cég életében. 
              Szakértő csapatunk naprakészen követi a munka törvénykönyve és a 
              társadalombiztosítási jogszabályok változásait, garantálva a 
              hibamentes és jogkövető működést.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
