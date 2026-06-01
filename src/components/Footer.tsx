export default function Footer() {
  return (
    <footer role="contentinfo" className="w-full py-12 px-6 border-t bg-zinc-50 mt-auto text-zinc-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="font-bold text-zinc-950 text-lg">Pohánka és Társa Kft.</p>
          <p className="text-sm text-zinc-600">Profi könyvelés és adótanácsadás az Ön sikeréért.</p>
        </div>
        <div className="text-sm text-zinc-500 font-medium">
          © {new Date().getFullYear()} Minden jog fenntartva.
        </div>
      </div>
    </footer>
  )
}
