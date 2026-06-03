import type { Metadata } from 'next';
import ServiceHero from '@/components/ServiceHero';
import AnimatedSection from '@/components/AnimatedSection';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Bérszámfejtés és Munkaügyi Ügyintézés | Pohánka és Társa',
  description: 'Profi bérszámfejtés, TB ügyintézés és munkaügyi nyilvántartások vezetése vállalkozások számára. Naprakész jogszabályi követés.',
};

export default function PayrollPage() {
  return (
    <main>
      <ServiceHero 
        title="Bérszámfejtés és Munkaügy"
        description="Hatékony bérügyintézés és precíz munkaügyi adminisztráció, hogy Önnek csak a vállalkozása növekedésére kelljen koncentrálnia."
      />

      <AnimatedSection className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
                Komplex bérügyintézés
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                A bérszámfejtés az egyik legérzékenyebb terület egy cég életében. Szakértő csapatunk 
                naprakészen követi a munka törvénykönyve és a társadalombiztosítási jogszabályok 
                változásait, garantálva a hibamentes működést.
              </p>
              <ul className="space-y-4 text-slate-700">
                {[
                  'Havi bérszámfejtés és bérjegyzékek',
                  'Adó- és járulékbevallások benyújtása',
                  'Be- és kijelentések teljes körű kezelése',
                  'TB és táppénz ügyintézés',
                  'Munkaügyi nyilvántartások vezetése'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1 text-xl">✓</span>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">Miért bízza ránk a bérszámfejtést?</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4 shrink-0">
                    <span className="font-bold">01</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Jogbiztonság</h4>
                    <p className="text-slate-600">Folyamatosan figyeljük a jogszabályváltozásokat.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4 shrink-0">
                    <span className="font-bold">02</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Költséghatékonyság</h4>
                    <p className="text-slate-600">Nincs szükség saját bérszámfejtő szoftverre és szakemberre.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4 shrink-0">
                    <span className="font-bold">03</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Diszkréció</h4>
                    <p className="text-slate-600">A béradatokat szigorúan bizalmasan kezeljük.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-8">
            Biztonság és Szakértelem
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed italic">
            &quot;A munkaügyi adminisztráció precizitása a munkavállalói elégedettség egyik kulcsa. 
            Segítünk, hogy ezen a területen is minden zökkenőmentes legyen.&quot;
          </p>
        </div>
      </AnimatedSection>

      <ContactCTA />
    </main>
  );
}
