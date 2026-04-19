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
    console.error('Erreur GraphQL :', error);
  }

  return (
    <main className="flex flex-col">

      {/* ─── HERO : centré, titre massif, zéro stats ─── */}
      <section className="flex flex-col items-center text-center px-6 pt-40 pb-32 max-w-5xl mx-auto w-full">

        <p className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 mb-8">
          Design · Identité · Web · SEO
        </p>

        <h1 className="text-6xl md:text-8xl font-bold tracking-[-0.04em] leading-[1.02] text-black mb-8 max-w-4xl">
          Le design qui fait{' '}
          <span className="underline decoration-brand decoration-[3px] underline-offset-4">
            décider.
          </span>
        </h1>

        <p className="text-lg text-neutral-500 max-w-xl leading-relaxed mb-12 font-light">
          Je conçois des identités, des interfaces et des expériences web
          pour des marques qui veulent être prises au sérieux.
        </p>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="bg-black text-white text-sm font-medium px-6 py-3 rounded-md hover:bg-neutral-800 transition-colors"
          >
            Démarrer un projet
          </Link>
          <Link
            href="/projets"
            className="text-sm font-medium text-black px-6 py-3 rounded-md border border-[#EAEAEA] hover:border-black transition-colors"
          >
            Voir mes travaux
          </Link>
        </div>
      </section>

      {/* ─── SÉPARATEUR PLEINE LARGEUR ─── */}
      <div className="border-t border-[#EAEAEA]" />

      {/* ─── SOCIAL PROOF typographique, style Vercel ─── */}
      <section className="py-16 px-6 max-w-5xl mx-auto w-full">
        <p className="text-neutral-400 text-sm leading-relaxed max-w-3xl">
          <span className="font-semibold text-black">Untel</span> a doublé
          son trafic organique en 3 mois.{' '}
          <span className="font-semibold text-black">Studio Kamba</span> est
          passé de invisible à première page.{' '}
          <span className="font-semibold text-black">Mes clients</span>{' '}
          ne remarquent pas leur site — leurs clients, si.
        </p>
      </section>

      <div className="border-t border-[#EAEAEA]" />

      {/* ─── EXPERTISE : rows typographiques, zéro cards ─── */}
      <section className="py-32 px-6 max-w-5xl mx-auto w-full">

        <p className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 mb-16">
          Expertise
        </p>

        <div className="divide-y divide-[#EAEAEA]">
          {[
            {
              title: 'Design & Identité visuelle',
              desc: 'Donner une présence à ce qui n\'en a pas encore.',
            },
            {
              title: 'Expériences web',
              desc: 'Des interfaces que les gens comprennent sans qu\'on leur explique.',
            },
            {
              title: 'Stratégie & Visibilité',
              desc: 'Être trouvé par ceux qui cherchent exactement ce que vous faites.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex flex-col md:flex-row md:items-center justify-between py-8 gap-2 group"
            >
              <h3 className="text-xl font-semibold tracking-tight text-black group-hover:text-brand transition-colors">
                {item.title}
              </h3>
              <p className="text-neutral-500 text-sm md:text-right md:max-w-xs">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-[#EAEAEA]" />

      {/* ─── PROJETS ─── */}
      <section className="py-32 px-6 max-w-5xl mx-auto w-full">

        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 mb-4">
              Réalisations
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-black">
              Ce que j'ai construit
            </h2>
          </div>
          <Link
            href="/projets"
            className="text-sm text-neutral-500 hover:text-black transition-colors hidden md:block"
          >
            Tout voir →
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
      </section>

      <div className="border-t border-[#EAEAEA]" />

      {/* ─── CTA FINAL : massif centré style Vercel ─── */}
      <section className="py-40 px-6 text-center">
        <h2 className="text-5xl md:text-7xl font-bold tracking-[-0.04em] text-black mb-10">
          Travaillons ensemble.
        </h2>
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 bg-black text-white text-sm font-medium px-8 py-4 rounded-full hover:bg-neutral-800 transition-colors"
        >
          Démarrer un projet
          <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">
            →
          </span>
        </Link>
      </section>

    </main>
  );
}