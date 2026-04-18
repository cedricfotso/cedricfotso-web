import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import Image from "next/image";
import Navigation from '../components/Navigation'; // Import du nouveau composant

export const metadata: Metadata = {
  title: 'Cédric Fotso — Créateur de sites Web & Designer',
  description: 'WordPress Avancé · UX/UI · SEO/GEO · Design graphique. Je conçois des systèmes web qui génèrent de la visibilité, de la crédibilité et des clients.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        {/* Navigation interactive (Mobile + Desktop) */}
        <Navigation />

        <div className="pt-16">{children}</div>

        <footer className="border-t border-[#F0EDE8] bg-[#FAFAF9] mt-32">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div>
                <Image
                  src="/images/cedricfotso.svg"
                  alt="Cédric Fotso"
                  width={180}
                  height={40}
                  className="h-10 w-auto mb-3"
                />
                <p className="text-neutral-500 text-sm max-w-xs">
                  Créateur de sites Web & Designer — WordPress, UX/UI, SEO/GEO, Design graphique.
                </p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">Navigation</p>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/projets" className="text-neutral-600 hover:text-[#D85A30] transition-colors">Projets</Link></li>
                  <li><Link href="/a-propos" className="text-neutral-600 hover:text-[#D85A30] transition-colors">À propos</Link></li>
                  <li><Link href="/blog" className="text-neutral-600 hover:text-[#D85A30] transition-colors">Blog</Link></li>
                  <li><Link href="/contact" className="text-neutral-600 hover:text-[#D85A30] transition-colors">Contact</Link></li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">Contact</p>
                <ul className="space-y-2 text-sm">
                  <li><a href="mailto:mr@cedricfotso.com" className="text-neutral-600 hover:text-[#D85A30] transition-colors">mr@cedricfotso.com</a></li>
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-[#F0EDE8] flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-neutral-400 text-sm">
                © {new Date().getFullYear()} Cédric Aimé Fotso
              </p>
              <p className="text-neutral-400 text-xs italic">« Psaumes 37 : 4-5 »</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}