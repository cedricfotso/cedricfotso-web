// app/layout.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import Image from "next/image";
import Navigation from '@/components/layout/Navigation';

export const metadata: Metadata = {
  title: 'Cédric Fotso — Créateur de sites Web & Designer',
  description: 'WordPress Avancé · UX/UI · SEO/GEO · Design graphique. Je conçois des systèmes web performants.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="antialiased min-h-screen flex flex-col">
        <Navigation />

        <div className="flex-grow pt-16">{children}</div>

        <footer className="border-t border-[#EAEAEA] mt-0">
  <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
    
    <div className="flex items-center gap-8">
      <Image
        src="/images/cedricfotso.svg"
        alt="Logo Cédric Fotso"
        width={20}
        height={20}
      />
      <nav className="flex gap-6 text-sm text-neutral-500">
        <Link href="/projets" className="hover:text-black transition-colors">Projets</Link>
        <Link href="/a-propos" className="hover:text-black transition-colors">À propos</Link>
        <Link href="/blog" className="hover:text-black transition-colors">Blog</Link>
      </nav>
    </div>

    <div className="flex items-center gap-6 text-xs text-neutral-400">
      <a href="mailto:mr@cedricfotso.com" className="hover:text-black transition-colors">
        mr@cedricfotso.com
      </a>
      <span>© {new Date().getFullYear()} Cédric Fotso</span>
    </div>

  </div>
</footer>
      </body>
    </html>
  );
}