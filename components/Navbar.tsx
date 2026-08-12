"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-black p-4 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <img src="/MINS LOGO.png" alt="Mehta Insights Logo" className="h-10 md:h-10 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/about" className="hover:text-gold transition-colors font-medium">About</Link>
          <Link href="/services" className="hover:text-gold transition-colors font-medium">Services</Link>
          <Link href="/pricing" className="hover:text-gold transition-colors font-medium">Pricing</Link>
          <Link href="/contact" className="hover:text-gold transition-colors font-medium">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-black hover:text-gold focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100 flex flex-col p-4 space-y-4">
          <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-gold transition-colors font-medium block">About</Link>
          <Link href="/services" onClick={() => setIsOpen(false)} className="hover:text-gold transition-colors font-medium block">Services</Link>
          <Link href="/pricing" onClick={() => setIsOpen(false)} className="hover:text-gold transition-colors font-medium block">Pricing</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-gold transition-colors font-medium block">Contact</Link>
        </div>
      )}
    </nav>
  );
}