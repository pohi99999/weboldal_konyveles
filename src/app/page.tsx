export default function Home() {
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
    </div>
  );
}
