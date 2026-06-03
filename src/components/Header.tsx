'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header role="banner" className="fixed top-0 left-0 right-0 z-50 w-full py-4 px-6 border-b border-slate-200/50 bg-white/70 backdrop-blur-md text-slate-900 transition-all">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-serif font-bold tracking-tight text-slate-900 flex items-center gap-2">
          <span className="w-8 h-8 bg-slate-900 text-white rounded flex items-center justify-center text-sm font-sans">P</span>
          Pohánka és Társa Kft.
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-8 text-sm font-medium">
            <li><Link href="/#services" className="hover:text-blue-600 transition-colors">Szolgáltatások</Link></li>
            <li><Link href="/#about" className="hover:text-blue-600 transition-colors">Rólunk</Link></li>
            <li><Link href="/#contact" className="bg-slate-900 text-white px-5 py-2 rounded-full hover:bg-slate-800 transition-all shadow-sm">Kapcsolat</Link></li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-slate-900 outline-none" 
          aria-label="Menü megnyitása"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-xl animate-in slide-in-from-top duration-300">
          <ul className="flex flex-col p-6 gap-4 text-base font-medium">
            <li>
              <Link 
                href="/#services" 
                className="block py-2 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Szolgáltatások
              </Link>
            </li>
            <li>
              <Link 
                href="/#about" 
                className="block py-2 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Rólunk
              </Link>
            </li>
            <li>
              <Link 
                href="/#contact" 
                className="block py-3 px-6 bg-slate-900 text-white rounded-xl text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Kapcsolat
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
