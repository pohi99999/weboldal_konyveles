export default function Header() {
  return (
    <header role="banner" className="w-full py-4 px-6 border-b bg-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Pohánka és Társa Kft.</div>
        <nav>
          <ul className="flex gap-4">
            <li><a href="#services" className="hover:underline">Szolgáltatások</a></li>
            <li><a href="#about" className="hover:underline">Rólunk</a></li>
            <li><a href="#contact" className="hover:underline">Kapcsolat</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
