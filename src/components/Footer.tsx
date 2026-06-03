import Link from 'next/link';

export default function Footer() {
  return (
    <footer role="contentinfo" className="w-full py-20 px-6 bg-slate-950 border-t border-white/5 mt-auto text-slate-400">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-serif font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-white text-slate-900 rounded flex items-center justify-center text-sm font-sans">P</span>
              Pohánka és Társa Kft.
            </Link>
            <p className="max-w-sm leading-relaxed">
              Profi könyvelési szolgáltatások és adótanácsadás KKV-k részére. Megbízhatóság, szakértelem és személyes odafigyelés.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Navigáció</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="hover:text-white transition-colors">Kezdőlap</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors">Szolgáltatások</Link></li>
              <li><Link href="/#about" className="hover:text-white transition-colors">Rólunk</Link></li>
              <li><Link href="/#contact" className="hover:text-white transition-colors">Kapcsolat</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Kapcsolat</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-blue-500 shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <span>8900 Zalaegerszeg, <br />Kossuth Lajos u. 39.</span>
              </li>
              <li className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-blue-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 14.25 14.25 14.25 1.124 0 2.213-.124 3.248-.359 1.171-.259 2.081-1.126 2.081-2.27v-3.879a1.5 1.5 0 0 0-1.215-1.474l-4.482-.896a1.5 1.5 0 0 0-1.581.814l-1.306 2.612c-3.858-1.817-7.034-4.993-8.851-8.858l2.612-1.306a1.5 1.5 0 0 0 .814-1.581l-.896-4.482A1.5 1.5 0 0 0 10.125 2.25H6.375c-1.144 0-2.211.91-2.211 2.081Z" />
                </svg>
                <a href="tel:+36204855420" className="hover:text-white transition-colors">+36 20 485 5420</a>
              </li>
              <li className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-blue-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <a href="mailto:Piroska@sze-po.hu" className="hover:text-white transition-colors">Piroska@sze-po.hu</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-widest text-slate-500">
          <p>© {new Date().getFullYear()} Pohánka és Társa Kft. Minden jog fenntartva.</p>
          <p>Készítette: <span className="text-slate-300">Pohánka József Péter</span></p>
        </div>
      </div>
    </footer>
  )
}
