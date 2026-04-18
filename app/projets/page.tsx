import { fetchGraphQL } from '@/lib/graphql/client';
import { GET_PROJECTS } from '@/lib/graphql/queries';
import Link from 'next/link';

type Project = { title: string; slug: string; tagline: string; secteur: string; marche: string; };
type ProjectsData = { projets: { nodes: Project[] } };

export default async function ProjetsPage() {
  const data = await fetchGraphQL<ProjectsData>(GET_PROJECTS);
  const projects = data.projets.nodes;

  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#D85A30]" />
          <span className="text-sm font-medium text-neutral-500">Portfolio</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-4">Projets</h1>
        <p className="text-neutral-500 text-lg max-w-xl">
          Des plateformes conçues pour générer des résultats concrets.
        </p>
      </div>

      <div className="grid gap-5">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/projets/${p.slug}`}
            className="group grid md:grid-cols-[1fr_auto] items-center gap-8 rounded-2xl p-8 border border-[#F0EDE8] hover:border-[#D85A30] hover:-translate-y-0.5 transition-all bg-white"
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                {p.secteur && (
                  <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">{p.secteur}</span>
                )}
                {p.marche && (
                  <>
                    <span className="text-neutral-300">·</span>
                    <span className="text-xs text-neutral-400">{p.marche}</span>
                  </>
                )}
              </div>
              <h2 className="text-2xl font-black tracking-tight group-hover:text-[#D85A30] transition-colors">{p.title}</h2>
              <p className="text-neutral-500 mt-2">{p.tagline}</p>
            </div>
            <span className="text-2xl text-neutral-300 group-hover:text-[#D85A30] transition-colors">→</span>
          </Link>
        ))}
      </div>
    </main>
  );
}