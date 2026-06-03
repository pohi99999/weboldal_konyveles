import Image from 'next/image';

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "name": "Pohánka és Társa Kft. - Könyvelés",
    "description": "Profi könyvelési szolgáltatások, bérszámfejtés és adótanácsadás.",
    "url": "https://konyveles.pohankaestarsa.com",
    "telephone": "+36 20 485 5420",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kossuth Lajos u. 39.",
      "addressLocality": "Zalaegerszeg",
      "postalCode": "8900",
      "addressCountry": "HU"
    },
    "founder": {
      "@type": "Person",
      "name": "Pohánka Józsefné"
    },
    "serviceType": ["Könyvelés", "Bérszámfejtés", "Adótanácsadás"]
  };

  const services = [
    {
      title: "Teljes körű könyvelés",
      description: "Precíz, naprakész könyvelés, kettős könyvvitel, bevallások készítése mikro- és kisvállalkozások részére.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
        </svg>
      )
    },
    {
      title: "Bérszámfejtés",
      description: "Munkavállalók bérszámfejtése, TB ügyintézés, elektronikus bevallások és munkaügyi nyilvántartások vezetése.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
        </svg>
      )
    },
    {
      title: "Adótanácsadás",
      description: "Személyre szabott adóoptimalizálás, tanácsadás induló és működő vállalkozások számára a hatékony működésért.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.503 7.503 0 1 0-7.516 0c.85.493 1.508 1.333 1.508 2.316V18" />
        </svg>
      )
    }
  ];

  return (
    <div className="flex flex-col flex-1 w-full pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Section with abstract background */}
      <section className="relative w-full overflow-hidden bg-slate-900 py-32 px-6 md:py-48">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl opacity-50" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center gap-10">
          <span className="inline-block px-4 py-1.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full text-xs font-bold uppercase tracking-widest">
            Szakértelem & Megbízhatóság
          </span>
          <h1 className="text-4xl md:text-7xl font-serif font-bold tracking-tight text-white max-w-4xl leading-[1.1] animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Precíz könyvelés,<br /> <span className="text-blue-400 italic">nyugodt vállalkozás.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
            Pohánka Józsefné szakmai vezetésével biztosítjuk vállalkozása stabil pénzügyi hátterét, hogy Ön az üzletépítésre koncentrálhasson.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 mt-4">
            <a 
              href="#contact" 
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-full transition-all shadow-lg shadow-blue-600/20 active:scale-95"
            >
              Kérjen ajánlatot
            </a>
            <a 
              href="#services" 
              className="bg-white/5 hover:bg-white/10 text-white border border-white/10 backdrop-blur-sm font-bold py-4 px-10 rounded-full transition-all active:scale-95"
            >
              Szolgáltatásaink
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-20">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Mivel foglalkozunk?</h2>
              <h3 className="text-3xl md:text-5xl font-serif font-bold text-slate-900">Átfogó megoldások az Ön cégének</h3>
            </div>
            <p className="text-slate-500 text-lg max-w-md italic border-l-2 border-blue-600 pl-6">
              &quot;A számok világa nálunk transzparens és érthető marad minden ügyfelünk számára.&quot;
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group p-10 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors">
                  {service.icon}
                </div>
                <h4 className="text-2xl font-serif font-bold text-slate-900 mb-4">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="relative w-full lg:w-1/2">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-50 rounded-full -z-10" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-slate-50 rounded-full -z-10" />
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-[2rem] shadow-2xl overflow-hidden group">
              <Image 
                src="/profil.jpeg" 
                alt="Pohánka Józsefné" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="absolute bottom-10 -right-4 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
              <p className="text-3xl font-serif font-bold text-slate-900">25+</p>
              <p className="text-slate-500 text-sm font-bold uppercase tracking-tighter">Év szakmai tapasztalat</p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">A szakmai háttér</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-8 leading-tight">Pohánka Józsefné<br /><span className="text-slate-400 font-normal italic">Mérlegképes könyvelő</span></h3>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                Több mint két évtizede nem csupán számokkal, hanem sorsokkal és vállalkozásokkal foglalkozom. Regisztrált mérlegképes könyvelőként pályafutásom alatt több száz cégnek – a legkisebb egyéni vállalkozóktól a nagyobb társaságokig – segítettem megtalálni a biztonságot a pénzügyekben.
              </p>
              <p className="p-8 bg-slate-50 rounded-2xl border-l-4 border-blue-600 font-medium italic text-slate-800">
                &quot;Számomra minden ügyfél egyformán fontos. Nem csak adatokat rögzítek: a célom a vállalkozások védelme és egy olyan stabil háttér megteremtése, ahol Ön nyugodtan alhat, tudva, hogy cége pénzügyei a legjobb kezekben vannak.&quot;
              </p>
              <p>
                A Pohánka és Társa Kft. keretein belül azért dolgozom nap mint nap, hogy szakmai tudásommal és közvetlen, támogató hozzáállásommal segítsem az Ön vállalkozásának növekedését és stabilitását.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-32 px-6 bg-slate-900 relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-3">Kapcsolatfelvétel</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Kérjen egyedi ajánlatot</h3>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">Vegyük fel a kapcsolatot, és találjuk meg az Ön vállalkozásához legjobban illeszkedő könyvelési megoldásokat.</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-white/80 text-sm font-medium">
              <div className="flex items-center gap-2">
                <span className="text-blue-400">📍</span> 8900 Zalaegerszeg, Kossuth Lajos u. 39.
              </div>
              <div className="flex items-center gap-2 text-blue-400 font-bold">
                <span>📞</span> <a href="tel:+36204855420">+36 20 485 5420</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400">✉️</span> Piroska@sze-po.hu
              </div>
            </div>
          </div>
          
          <form className="grid grid-cols-1 gap-8 bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Név</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-white transition-all"
                  placeholder="Kovács János"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">E-mail cím</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-white transition-all"
                  placeholder="kovacs@cege.hu"
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Telefon</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-white transition-all"
                placeholder="+36 30 123 4567"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Üzenet</label>
              <textarea 
                id="message" 
                name="message" 
                required 
                rows={4}
                className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-white transition-all resize-none"
                placeholder="Miben segíthetünk?"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="mt-4 bg-blue-600 hover:bg-blue-500 text-white font-bold py-5 px-12 rounded-2xl transition-all shadow-xl shadow-blue-600/20 active:scale-95 w-full md:w-max md:self-center"
            >
              Üzenet küldése
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
