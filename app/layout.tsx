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

        <footer className="border-t border-[#EAEAEA] bg-white mt-24">
          <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="flex flex-col md:flex-row justify-between items-start gap-8">
              
              <div className="flex flex-col gap-4">
                <Image
                  src="/images/cedricfotso.svg"
                  alt="Logo Cédric Fotso"
                  width={70}
                  height={70}
                  className="w-6 h-6"
                />
                <p className="text-neutral-500 text-sm max-w-xs leading-relaxed">
                  Créateur de sites Web & Designer. Ingénierie web, UX/UI, SEO/GEO.
                </p>
              </div>

              <div className="flex gap-16">
                <div>
                  <p className="text-xs font-mono font-medium tracking-wider text-black uppercase mb-4">Liens</p>
                  <ul className="space-y-3 text-sm">
                    <li><Link href="/projets" className="text-neutral-500 hover:text-brand transition-colors">Projets</Link></li>
                    <li><Link href="/a-propos" className="text-neutral-500 hover:text-brand transition-colors">À propos</Link></li>
                    <li><Link href="/blog" className="text-neutral-500 hover:text-brand transition-colors">Blog</Link></li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-mono font-medium tracking-wider text-black uppercase mb-4">Contact</p>
                  <ul className="space-y-3 text-sm">
                    <li><a href="mailto:mr@cedricfotso.com" className="text-neutral-500 hover:text-brand transition-colors">mr@cedricfotso.com</a></li>
                    <li><a href="https://github.com/cedricfotso" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-brand transition-colors">GitHub</a></li>
                  </ul>
                </div>
              </div>

            </div>
            
            <div className="mt-12 pt-8 border-t border-[#EAEAEA] flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-neutral-400 text-xs">
                © {new Date().getFullYear()} Cédric Aimé Fotso. Tous droits réservés.
              </p>
              <p className="text-neutral-400 text-xs font-mono italic">« Psaumes 37 : 4-5 »</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}