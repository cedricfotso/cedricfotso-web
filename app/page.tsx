// app/page.tsx
import { fetchGraphQL } from '@/lib/graphql/client';
import { GET_PROJECTS } from '@/lib/graphql/queries';
import Link from 'next/link';
import ProjectCard from '@/components/ui/ProjectCard';

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
  let featured: Project[] = [];

  try {
    const data = await fetchGraphQL<ProjectsData>(GET_PROJECTS);
    featured = data?.projets?.nodes?.slice(0, 3) || [];
  } catch (error) {
    console.error("Erreur GraphQL :", error);
  }

  return (
    <main className="flex flex-col gap-32 pb-32">
      
      {/* Hero Section - Vercel Style (Minimaliste, contraste élevé) */}
      <section className="max-w-6xl mx-auto px-6 pt-32 lg:pt-48">
        <div className="max-w-4xl animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 mb-8">
            <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
            <span className="text-xs font-mono font-medium text-neutral-600 uppercase tracking-widest">
              Créateur de sites web & Designer
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter text-black mb-6">
            Je construis des sites qui <br className="hidden md:block"/>
            <span className="text-brand">travaillent</span> pour vous.
          </h1>

          <p className="text-lg md:text-xl text-neutral-500 max-w-2xl mb-10 leading-relaxed font-light">
            De l'architecture WordPress avancée au design d'interface. Des systèmes digitaux conçus pour la performance, la visibilité et la conversion.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link href="/contact" className="bg-black text-white text-sm font-medium px-6 py-3 rounded-md hover:bg-brand transition-colors shadow-sm">
              Démarrer un projet
            </Link>
            <Link href="/projets" className="bg-white text-black text-sm font-medium px-6 py-3 rounded-md border border-[#EAEAEA] hover:border-black transition-colors">
              Explorer le portfolio
            </Link>
          </div>
        </div>

        {/* Chiffres clés en police Mono */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-10 border-t border-[#EAEAEA] animate-fade-in animation-delay-200">
          {[
            { n: '15+', l: 'Projets livrés' },
            { n: '08+', l: "Ans d'expérience" },
            { n: '05', l: 'Pays d\'intervention' },
            { n: '99%', l: 'Performance SEO' },
          ].map((s) => (
            <div key={s.l}>
              <p className="text-3xl font-mono font-bold text-black tracking-tighter">{s.n}</p>
              <p className="text-xs font-medium text-neutral-500 mt-1 uppercase tracking-wider">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section - Cartes ultra-fines */}
      <section className="bg-neutral-50 border-y border-[#EAEAEA] py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16 max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-black mb-4">Ingénierie & Design</h2>
            <p className="text-neutral-500 text-lg leading-relaxed">
              Une approche systémique où chaque ligne de code et chaque pixel a un objectif commercial précis.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { id: '01', title: 'Systèmes Web', desc: 'Développement WordPress sur-mesure et Next.js.' },
              { id: '02', title: 'E-commerce', desc: 'WooCommerce, intégrations Mobile Money complexes.' },
              { id: '03', title: 'UX/UI Design', desc: 'Interfaces pensées pour la conversion utilisateur.' },
              { id: '04', title: 'SEO Technique', desc: 'Optimisation de la performance et du référencement.' },
            ].map((service) => (
              <div key={service.id} className="bg-white p-6 rounded-lg border border-[#EAEAEA] hover:border-brand transition-colors">
                <span className="text-xs font-mono font-medium text-brand bg-brand/10 px-2 py-1 rounded">{service.id}</span>
                <h3 className="text-lg font-semibold mt-4 mb-2 tracking-tight text-black">{service.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projets Section */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-black mb-2">Derniers lancements</h2>
            <p className="text-neutral-500">Sélection de réalisations récentes.</p>
          </div>
          <Link href="/projets" className="text-sm font-medium text-brand hover:text-black transition-colors hidden md:block">
            Voir tout le portfolio →
          </Link>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((p) => (
            <ProjectCard 
              key={p.slug}
              title={p.title}
              slug={p.slug}
              tagline={p.tagline}
              secteur={p.secteur}
              imageUrl={p.featuredImage?.node?.sourceUrl}
              imageAlt={p.featuredImage?.node?.altText}
            />
          ))}
        </div>
        
        {/* Bouton mobile uniquement */}
        <div className="mt-8 text-center md:hidden">
          <Link href="/projets" className="text-sm font-medium text-brand hover:text-black transition-colors">
            Voir tout le portfolio →
          </Link>
        </div>
      </section>
      
    </main>
  );
}