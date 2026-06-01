export default function Home() {
  const services = [
    {
      title: "Teljes körű könyvelés",
      description: "Precíz, naprakész könyvelés, hogy Ön nyugodtan koncentrálhasson vállalkozására.",
      icon: "📊"
    },
    {
      title: "Bérszámfejtés",
      description: "Munkavállalók bérszámfejtése, TB ügyintézés, bevallások pontos és időbeni elkészítése.",
      icon: "👥"
    },
    {
      title: "Adótanácsadás",
      description: "Személyre szabott adózási stratégiák és optimalizálás a jogszabályoknak megfelelően.",
      icon: "💡"
    }
  ];

  return (
    <div className="flex flex-col flex-1 w-full">
      {/* Hero Section */}
      <section className="w-full bg-zinc-50 py-24 px-6 md:py-32">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-8">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-950 max-w-4xl">
            Profi Könyvelés és Adótanácsadás a Sikeres Vállalkozásért
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 max-w-2xl">
            Pohánka Józsefné vezetésével nyújtunk megbízható pénzügyi és könyvviteli hátteret mikro-, kis- és középvállalkozások számára.
          </p>
          <div className="flex gap-4 mt-4">
            <a 
              href="#contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-sm"
            >
              Kérjen ajánlatot
            </a>
            <a 
              href="#services" 
              className="bg-white hover:bg-zinc-100 text-zinc-900 border border-zinc-200 font-semibold py-3 px-8 rounded-lg transition-colors shadow-sm"
            >
              Szolgáltatásaink
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zinc-900">Kiemelt Szolgáltatásaink</h2>
            <p className="text-zinc-600 mt-4 max-w-2xl mx-auto">
              Átfogó megoldásokat kínálunk, hogy vállalkozása pénzügyei mindig rendben legyenek.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">{service.title}</h3>
                <p className="text-zinc-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-24 px-6 bg-zinc-50 border-t border-zinc-100">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-400 shrink-0 overflow-hidden shadow-inner">
            <span className="text-4xl md:text-6xl">👤</span>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold text-zinc-900 mb-6">Rólunk: Pohánka Józsefné</h2>
            <div className="space-y-4 text-zinc-600 leading-relaxed">
              <p>
                Több évtizedes szakmai tapasztalattal rendelkező, regisztrált mérlegképes könyvelőként
                fő célom, hogy ügyfeleim számára átlátható, pontos és megbízható számviteli hátteret biztosítsak.
              </p>
              <p>
                A Pohánka és Társa Kft. keretein belül nem csupán az adatok rögzítésével foglalkozunk, hanem
                aktív, személyre szabott adótanácsadással is támogatjuk a vállalkozások növekedését és biztonságát.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-24 px-6 bg-white border-t border-zinc-100">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-900">Kapcsolat</h2>
            <p className="text-zinc-600 mt-4">Kérjen egyedi ajánlatot, vagy tegye fel kérdéseit bizalommal!</p>
          </div>
          
          <form className="flex flex-col gap-6 bg-zinc-50 p-8 rounded-2xl border border-zinc-100 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-semibold text-zinc-900">Név</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  className="px-4 py-3 rounded-lg border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  placeholder="Kovács János"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-semibold text-zinc-900">E-mail cím</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  className="px-4 py-3 rounded-lg border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  placeholder="kovacs@cege.hu"
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-sm font-semibold text-zinc-900">Telefon</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                className="px-4 py-3 rounded-lg border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                placeholder="+36 30 123 4567"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-semibold text-zinc-900">Üzenet</label>
              <textarea 
                id="message" 
                name="message" 
                required 
                rows={4}
                className="px-4 py-3 rounded-lg border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white resize-none"
                placeholder="Miben segíthetünk?"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors shadow-sm w-full md:w-auto self-end"
            >
              Küldés
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
