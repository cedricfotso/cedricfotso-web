// components/layout/Navigation.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Projets', href: '/projets' },
    { name: 'Blog', href: '/blog' },
    { name: 'À propos', href: '/a-propos' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-[#EAEAEA] transition-all">
      <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
        
        {/* Logo minimaliste */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image 
            src="/images/cedricfotso.svg" 
            alt="Cédric Fotso" 
            width={80} 
            height={80} 
            className="w-6 h-6 group-hover:scale-105 transition-transform"
          />
        </Link>

        {/* Desktop Menu - Contrastes forts */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-neutral-600 hover:text-black transition-colors"
            >
              {link.name}
            </Link>
          ))}
          
          {/* Bouton style Vercel (Noir, devient orange subtilement) */}
          <Link 
            href="/contact" 
            className="text-sm font-medium bg-black text-white px-4 py-2 rounded-md border border-black hover:bg-brand hover:border-brand transition-all shadow-sm"
          >
            Travaillons ensemble
          </Link>
        </div>

        {/* Mobile Menu Button - Épuré */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-black p-2"
          aria-label="Menu"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-[#EAEAEA] px-6 py-6 flex flex-col gap-6 absolute w-full shadow-lg">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-neutral-600 hover:text-black"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="bg-black text-white px-4 py-3 rounded-md font-medium text-center text-sm w-full"
          >
            Travaillons ensemble
          </Link>
        </div>
      )}
    </nav>
  );
}