import { fetchGraphQL } from '@/lib/graphql/client';
import { GET_PROJECTS } from '@/lib/graphql/queries';
import Link from 'next/link';

type Project = { title: string; slug: string; tagline: string; secteur: string; };
type ProjectsData = { projets: { nodes: Project[] } };

export default async function HomePage() {
  const data = await fetchGraphQL<ProjectsData>(GET_PROJECTS);
  const featured = data.projets.nodes.slice(0, 3);

  return (
    <main>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-32">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-10">
            <span className="w-2 h-2 rounded-full bg-[#D85A30]" />
            <span className="text-sm font-medium text-neutral-500 tracking-wide">
              Créateur de sites Web & Designer
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tighter mb-10 text-[#0A0A0A]">
            Je construis des sites qui <em className="text-[#D85A30] not-italic signature font-medium">travaillent</em> pour vous.
          </h1>
          <p className="text-xl text-neutral-500 max-w-2xl mb-12 leading-relaxed">
            WordPress avancé · UX/UI · SEO/GEO · Design graphique. Des plateformes qui génèrent de la visibilité, de la crédibilité et des clients — pas juste un site.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/projets" className="bg-[#D85A30] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#C14E27] transition-colors">
              Voir mes projets
            </Link>
            <Link href="/contact" className="text-[#0A0A0A] font-semibold px-8 py-4 rounded-full border border-[#F0EDE8] hover:border-[#D85A30] hover:text-[#D85A30] transition-colors">
              Demander un devis →
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-24 pt-12 border-t border-[#F0EDE8] max-w-lg">
          {[
            { n: '15+', l: 'Projets livrés' },
            { n: '8+', l: "Ans d'expérience" },
            { n: '5', l: 'Pays' },
          ].map((s) => (
            <div key={s.l}>
              <p className="text-4xl font-black tracking-tighter text-[#D85A30]">{s.n}</p>
              <p className="text-sm text-neutral-400 mt-1">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#FAFAF9]">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="flex items-start justify-between mb-16 flex-wrap gap-6">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter">Ce que je conçois</h2>
            <p className="text-neutral-500 max-w-sm">
              Chaque projet est un système cohérent entre design, technologie et stratégie.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { n: '01', titre: 'Sites sur mesure', desc: 'Vitrines, plateformes, landing pages. WordPress hautement personnalisé.' },
              { n: '02', titre: 'E-commerce', desc: 'WooCommerce, Mobile Money, paiements internationaux.' },
              { n: '03', titre: 'Systèmes web', desc: 'Multi-sites, écosystèmes, intégrations complexes.' },
              { n: '04', titre: 'UX/UI & Identité', desc: "Design d'interface, identité visuelle, expérience utilisateur." },
            ].map((s) => (
              <div key={s.n} className="bg-white rounded-2xl p-6 border border-[#F0EDE8] hover:border-[#D85A30] transition-colors">
                <span className="text-xs font-bold text-[#D85A30] tracking-widest">{s.n}</span>
                <h3 className="text-lg font-bold mt-3 mb-2">{s.titre}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projets sélectionnés */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="flex items-center justify-between mb-16 flex-wrap gap-4">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter">Projets sélectionnés</h2>
          <Link href="/projets" className="text-sm font-semibold hover:underline text-[#D85A30]">
            Voir tous les projets →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((p) => (
            <Link key={p.slug} href={`/projets/${p.slug}`} className="group block rounded-2xl overflow-hidden border border-[#F0EDE8] hover:border-[#D85A30] transition-all hover:-translate-y-1 bg-white">
              <div className="h-52 flex items-end p-6 bg-gradient-to-br from-[#FFF4F0] via-[#FFE5D9] to-[#FFD4BE]">
                <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white text-[#D85A30]">
                  {p.secteur || 'Projet'}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-1 group-hover:text-[#D85A30] transition-colors">{p.title}</h3>
                <p className="text-neutral-500 text-sm">{p.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="rounded-3xl p-12 md:p-16 text-center bg-gradient-to-br from-[#D85A30] to-[#B8401E]">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-white">
            Vous avez un projet ?
          </h2>
          <p className="text-white/90 text-lg mb-10 max-w-xl mx-auto">
            Discutons de comment votre site peut devenir votre meilleur commercial.
          </p>
          <Link href="/contact" className="bg-white text-[#D85A30] font-bold px-10 py-4 rounded-full hover:bg-[#FAFAF9] transition-colors inline-block">
            Demander un devis gratuit
          </Link>
        </div>
      </section>
    </main>
  );
}