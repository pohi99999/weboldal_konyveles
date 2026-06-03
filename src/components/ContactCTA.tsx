'use client';
import Link from 'next/link';

export default function ContactCTA() {
  return (
    <section className="w-full py-20 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto bg-slate-900 rounded-[3rem] p-12 text-center shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-3xl -z-0" />
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 relative z-10">Készen áll a stabil háttérre?</h2>
        <Link 
          href="/#contact" 
          className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold py-5 px-12 rounded-2xl transition-all shadow-xl shadow-blue-600/20 active:scale-95 relative z-10"
        >
          Kérjen ajánlatot most
        </Link>
      </div>
    </section>
  );
}
