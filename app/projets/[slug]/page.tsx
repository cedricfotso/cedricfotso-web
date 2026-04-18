import { fetchGraphQL } from '@/lib/graphql/client';
import { GET_PROJECT_BY_SLUG, GET_PROJECTS } from '@/lib/graphql/queries';
import Link from 'next/link';

type Project = {
  title: string; slug: string; tagline: string; lienProjet: string;
  secteur: string; marche: string; contexte: string;
  defis: string; solutions: string; resultats: string; tags: string;
};

export async function generateStaticParams() {
  const data = await fetchGraphQL<{ projets: { nodes: { slug: string }[] } }>(GET_PROJECTS);
  return data.projets.nodes.map((p) => ({ slug: p.slug }));
}

export default async function ProjetPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = await fetchGraphQL<{ projet: Project }>(GET_PROJECT_BY_SLUG, { slug });
  const p = data.projet;

  return (
    <main>
      <section className="bg-[#FAFAF9]">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <Link href="/projets" className="text-sm font-medium text-neutral-500 hover:text-[#D85A30] transition-colors inline-flex items-center gap-2">
            ← Tous les projets
          </Link>
          <div className="flex flex-wrap gap-3 mt-8 mb-6">
            {p.secteur && (
              <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white border border-[#F0EDE8]">{p.secteur}</span>
            )}
            {p.marche && (
              <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white border border-[#F0EDE8]">{p.marche}</span>
            )}
          </div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-4">{p.title}</h1>
          <p className="text-xl text-neutral-500">{p.tagline}</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-20 space-y-16">
        {p.contexte && (
          <section>
            <h2 className="text-xs font-bold uppercase tracking-widest mb-4 text-[#D85A30]">Contexte</h2>
            <p className="text-neutral-600 leading-relaxed text-lg">{p.contexte}</p>
          </section>
        )}

        {p.defis && (
          <section>
            <h2 className="text-xs font-bold uppercase tracking-widest mb-4 text-[#D85A30]">Le défi</h2>
            <p className="text-neutral-600 leading-relaxed text-lg">{p.defis}</p>
          </section>
        )}

        {p.solutions && (
          <section>
            <h2 className="text-xs font-bold uppercase tracking-widest mb-4 text-[#D85A30]">Ce que j'ai conçu</h2>
            <p className="text-neutral-600 leading-relaxed text-lg">{p.solutions}</p>
          </section>
        )}

        {p.resultats && (
          <section>
            <h2 className="text-xs font-bold uppercase tracking-widest mb-4 text-[#D85A30]">Résultats</h2>
            <div className="rounded-2xl p-8 border-l-4 border-[#D85A30] bg-[#FFF4F0]">
              <p className="text-neutral-700 leading-relaxed text-lg">{p.resultats}</p>
            </div>
          </section>
        )}

        {p.lienProjet && (
          <div>
            <a
              href={p.lienProjet}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#D85A30] text-white font-bold px-8 py-4 rounded-full hover:bg-[#C14E27] transition-colors"
            >
              Voir le site en ligne →
            </a>
          </div>
        )}
      </div>
    </main>
  );
}