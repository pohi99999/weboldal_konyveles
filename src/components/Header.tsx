export default function Header() {
  return (
    <header role="banner" className="w-full py-4 px-6 border-b bg-white text-zinc-900">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold tracking-tight text-zinc-950">Pohánka és Társa Kft.</div>
        <nav>
          <ul className="flex gap-6 font-medium">
            <li><a href="#services" className="hover:text-blue-700 transition-colors">Szolgáltatások</a></li>
            <li><a href="#about" className="hover:text-blue-700 transition-colors">Rólunk</a></li>
            <li><a href="#contact" className="hover:text-blue-700 transition-colors">Kapcsolat</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
