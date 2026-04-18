'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Projets', href: '/projets' },
    { name: 'Blog', href: '/blog' },
    { name: 'À propos', href: '/a-propos' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="border-b border-white/10 bg-black/50 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/images/cedricfotso.svg" 
              alt="Logo" 
              width={32} 
              height={32} 
              className="w-8 h-8"
            />
            <span className="font-bold text-xl tracking-tight text-white">Cédric Fotso</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-gray-400 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/contact" 
              className="bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors"
            >
              Travaillons ensemble
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white p-2"
              aria-label="Menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-black border-b border-white/10 px-4 pt-2 pb-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg text-gray-400 hover:text-white py-2 border-b border-white/5"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="bg-white text-black px-4 py-3 rounded-xl font-medium text-center"
          >
            Travaillons ensemble
          </Link>
        </div>
      )}
    </nav>
  );
}