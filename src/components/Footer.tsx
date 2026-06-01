export default function Footer() {
  return (
    <footer role="contentinfo" className="w-full py-8 px-6 border-t bg-zinc-50 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <p className="font-semibold">Pohánka és Társa Kft.</p>
          <p className="text-sm text-zinc-500">Profi könyvelés és adótanácsadás.</p>
        </div>
        <div className="text-sm text-zinc-400">
          © {new Date().getFullYear()} Minden jog fenntartva.
        </div>
      </div>
    </footer>
  )
}
