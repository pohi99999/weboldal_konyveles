import Link from 'next/link';

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-2 text-sm text-slate-500 font-medium">
        <Link href="/" className="hover:text-blue-600">Kezdőlap</Link>
        <span>/</span>
        <span className="text-slate-900 font-bold">Szolgáltatások</span>
      </nav>
      {children}
    </div>
  );
}
