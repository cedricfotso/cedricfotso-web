import { fetchGraphQL } from '@/lib/graphql/client';
import { GET_PROJECTS } from '@/lib/graphql/queries';
import Link from 'next/link';
import Image from 'next/image';
import FadeIn from '@/components/FadeIn';

type Project = { 
  title: string; 
  slug: string; 
  tagline: string; 
  secteur: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
      altText: string;
    }
  };
};
type ProjectsData = { projets: { nodes: Project[] } };

export default async function HomePage() {
  let data;
  let featured: Project[] = [];

  try {
    data = await fetchGraphQL<ProjectsData>(GET_PROJECTS);
    // Sécurisation : on vérifie que data, projets et nodes existent avant le slice
    featured = data?.projets?.nodes?.slice(0, 3) || [];
  } catch (error) {
    console.error("Erreur lors de la récupération des projets sur la page d'accueil :", error);
    // featured reste un tableau vide [] en cas d'erreur
  }

  return (
    <main>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-32 overflow-hidden">
        <div className="max-w-4xl">
          <FadeIn delay={0.1}>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#D85A30]" />
              <span className="text-sm font-semibold text-neutral-500 uppercase tracking-widest">
                Créateur de sites Web & Designer
              </span>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold leading-[1.05] tracking-tight mb-8 text-[#0A0A0A]">
              Je construis des sites qui <em className="text-[#D85A30] not-italic signature font-medium">travaillent</em> pour vous.
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-xl md:text-2xl font-light text-neutral-500 max-w-2xl mb-12 leading-relaxed tracking-wide">
              WordPress avancé · UX/UI · SEO/GEO · Design graphique. Des plateformes qui génèrent de la visibilité, de la crédibilité et des clients — pas juste un site.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/projets" className="bg-[#D85A30] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#C14E27] shadow-lg shadow-[#D85A30]/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                Voir mes projets
              </Link>
              <Link href="/contact" className="text-[#0A0A0A] font-semibold px-8 py-4 rounded-full border border-[#F0EDE8] hover:border-[#D85A30] hover:text-[#D85A30] transition-colors">
                Demander un devis →
              </Link>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.6}>
          <div className="grid grid-cols-3 gap-8 mt-24 pt-12 border-t border-[#F0EDE8] max-w-lg">
            {[
              { n: '15+', l: 'Projets livrés' },
              { n: '8+', l: "Ans d'expérience" },
              { n: '5', l: 'Pays' },
            ].map((s) => (
              <div key={s.l}>
                <p className="text-4xl font-black tracking-tighter text-[#D85A30]">{s.n}</p>
                <p className="text-sm font-medium text-neutral-400 mt-2 uppercase tracking-wide">{s.l}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Services */}
      <section className="bg-[#FAFAF9]">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <FadeIn>
            <div className="flex items-start justify-between mb-16 flex-wrap gap-6">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Ce que je conçois</h2>
              <p className="text-neutral-500 max-w-sm text-lg font-light leading-relaxed">
                Chaque projet est un système cohérent entre design, technologie et stratégie.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { n: '01', titre: 'Sites sur mesure', desc: 'Vitrines, plateformes, landing pages. WordPress hautement personnalisé.' },
              { n: '02', titre: 'E-commerce', desc: 'WooCommerce, Mobile Money, paiements internationaux.' },
              { n: '03', titre: 'Systèmes web', desc: 'Multi-sites, écosystèmes, intégrations complexes.' },
              { n: '04', titre: 'UX/UI & Identité', desc: "Design d'interface, identité visuelle, expérience utilisateur." },
            ].map((s, index) => (
              <FadeIn key={s.n} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 border border-[#F0EDE8] hover:border-[#D85A30] transition-colors h-full group">
                  <span className="text-sm font-bold text-[#D85A30] tracking-widest">{s.n}</span>
                  <h3 className="text-xl font-bold mt-4 mb-3 group-hover:text-[#D85A30] transition-colors">{s.titre}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Projets sélectionnés */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <FadeIn>
          <div className="flex items-center justify-between mb-16 flex-wrap gap-4">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Projets sélectionnés</h2>
            <Link href="/projets" className="text-sm font-semibold hover:underline text-[#D85A30] uppercase tracking-wider">
              Voir tous les projets →
            </Link>
          </div>
        </FadeIn>
        
        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((p, index) => (
            <FadeIn key={p.slug} delay={index * 0.15}>
              <Link href={`/projets/${p.slug}`} className="group block rounded-2xl overflow-hidden border border-[#F0EDE8] hover:border-[#D85A30] transition-all hover:-translate-y-2 bg-white shadow-sm hover:shadow-xl hover:shadow-[#D85A30]/10 duration-500">
                <div className="h-64 relative flex items-end p-6 bg-gradient-to-br from-[#FFF4F0] via-[#FFE5D9] to-[#FFD4BE] overflow-hidden">
                  
                  {/* Image dynamique avec fallback */}
                  {p.featuredImage?.node?.sourceUrl && (
                    <Image 
                      src={p.featuredImage.node.sourceUrl}
                      alt={p.featuredImage.node.altText || p.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  )}
                  
                  {/* Overlay subtil pour garantir la lisibilité du tag */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80" />

                  <span className="relative z-10 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full bg-white/95 text-[#D85A30] shadow-sm backdrop-blur-sm">
                    {p.secteur || 'Projet'}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-extrabold text-xl mb-2 group-hover:text-[#D85A30] transition-colors">{p.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{p.tagline}</p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <FadeIn>
          <div className="rounded-3xl p-12 md:p-20 text-center bg-[#D85A30] relative overflow-hidden">
            {/* Pattern/Texture de fond (Optionnel mais ajoute du premium) */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-white">
                Vous avez un projet ?
              </h2>
              <p className="text-white/90 text-xl mb-10 max-w-xl mx-auto font-light leading-relaxed">
                Discutons de comment votre site peut devenir votre meilleur commercial.
              </p>
              <Link href="/contact" className="bg-white text-[#D85A30] font-bold px-10 py-5 rounded-full hover:bg-[#FAFAF9] hover:scale-105 transition-all duration-300 inline-block shadow-xl">
                Demander un devis gratuit
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}