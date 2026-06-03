import type { Metadata } from 'next';
import ServiceHero from '@/components/ServiceHero';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Kapcsolat | Pohánka és Társa Kft.',
  description: 'Vegye fel velünk a kapcsolatot! Könyvelő irodánk Zalaegerszeg belvárosában várja Önt.',
};

export default function ContactPage() {
  return (
    <main>
      <ServiceHero 
        title="Kapcsolat"
        description="Kérdése van? Kérjen ajánlatot vagy látogasson el hozzánk személyesen Zalaegerszegen."
      />

      <AnimatedSection className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info & Map */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Elérhetőségeink</h2>
                <div className="space-y-6 text-lg text-slate-600">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl mt-1">📍</span>
                    <div>
                      <p className="font-bold text-slate-900">Iroda címe:</p>
                      <p>8900 Zalaegerszeg, Kossuth Lajos u. 39.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl mt-1">📞</span>
                    <div>
                      <p className="font-bold text-slate-900">Telefon:</p>
                      <a href="tel:+36204855420" className="text-blue-600 hover:underline">+36 20 485 5420</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl mt-1">✉️</span>
                    <div>
                      <p className="font-bold text-slate-900">E-mail:</p>
                      <a href="mailto:Piroska@sze-po.hu" className="text-blue-600 hover:underline">Piroska@sze-po.hu</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps Integration */}
              <div className="aspect-video w-full bg-slate-100 rounded-[2rem] border border-slate-200 shadow-xl overflow-hidden relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2726.657384918738!2d16.840788676884617!3d46.84450174057864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4769260667e69f83%3A0xc3c54d1d91834925!2sZalaegerszeg%2C%20Kossuth%20Lajos%20u.%2039%2C%208900!5e0!3m2!1shu!2shu!4v1717430000000!5m2!1shu!2shu"
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Pohánka és Társa Kft. Iroda helyszíne"
                ></iframe>
              </div>
            </div>

            {/* Enhanced Form */}
            <div className="bg-slate-50 p-8 md:p-12 rounded-[3rem] border border-slate-200 shadow-xl">
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-8">Üzenet küldése</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="c-name" className="text-xs font-bold text-slate-500 uppercase tracking-widest">Név</label>
                    <input type="text" id="c-name" required className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-blue-500 focus:outline-none transition-all" placeholder="Kovács János" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="c-email" className="text-xs font-bold text-slate-500 uppercase tracking-widest">E-mail</label>
                    <input type="email" id="c-email" required className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-blue-500 focus:outline-none transition-all" placeholder="email@cege.hu" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="c-phone" className="text-xs font-bold text-slate-500 uppercase tracking-widest">Telefon</label>
                  <input type="tel" id="c-phone" className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-blue-500 focus:outline-none transition-all" placeholder="+36 30 123 4567" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="c-message" className="text-xs font-bold text-slate-500 uppercase tracking-widest">Miben segíthetünk?</label>
                  <textarea id="c-message" required rows={4} className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-blue-500 focus:outline-none transition-all resize-none" placeholder="Írja le röviden igényeit..."></textarea>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-2xl border border-blue-100">
                  <input type="checkbox" id="c-callback" className="w-5 h-5 rounded border-blue-300 text-blue-600 focus:ring-blue-500" />
                  <label htmlFor="c-callback" className="text-sm font-medium text-blue-900 cursor-pointer select-none">Visszahívást kérek a megadott telefonszámon</label>
                </div>

                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-5 px-12 rounded-2xl transition-all shadow-xl shadow-blue-600/20 active:scale-[0.98]">
                  Ajánlat kérése
                </button>
              </form>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}
