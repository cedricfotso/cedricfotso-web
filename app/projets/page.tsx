import { fetchGraphQL } from '@/lib/graphql/client';
import { GET_PROJECTS } from '@/lib/graphql/queries';
import Link from 'next/link';

type Project = { title: string; slug: string; tagline: string; secteur: string; marche: string; };
type ProjectsData = { projets: { nodes: Project[] } };

export default async function ProjetsPage() {
  let projects: Project[] = [];

  // Le bloc try/catch empêche la page de crasher si WordPress est inaccessible
  try {
    const data = await fetchGraphQL<ProjectsData>(GET_PROJECTS);
    projects = data?.projets?.nodes || [];
  } catch (error) {
    console.error("Erreur de connexion GraphQL sur la page projets :", error);
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-32 lg:py-48">
      
      {/* En-tête de page - Style minimaliste */}
      <div className="mb-20 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 mb-8">
          <span className="w-2 h-2 rounded-full bg-black" />
          <span className="text-xs font-mono font-medium text-neutral-600 uppercase tracking-widest">
            Portfolio
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-black mb-6">
          Projets
        </h1>
        <p className="text-lg text-neutral-500 max-w-xl font-light leading-relaxed">
          Des plateformes et systèmes web conçus pour générer de la visibilité, de la crédibilité et des résultats.
        </p>
      </div>

      {/* Liste des projets */}
      <div className="grid gap-4 animate-fade-in animation-delay-200">
        {projects.length > 0 ? (
          projects.map((p) => (
            <Link
              key={p.slug}
              href={`/projets/${p.slug}`}
              className="group grid md:grid-cols-[1fr_auto] items-center gap-8 rounded-lg p-8 border border-[#EAEAEA] hover:border-black transition-colors bg-white shadow-sm hover:shadow-md"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  {p.secteur && (
                    <span className="text-[10px] font-mono font-medium uppercase tracking-wider px-2 py-1 rounded bg-neutral-50 border border-[#EAEAEA] text-neutral-600 group-hover:text-brand group-hover:border-brand/30 transition-colors">
                      {p.secteur}
                    </span>
                  )}
                  {p.marche && (
                    <>
                      <span className="text-neutral-300">/</span>
                      <span className="text-xs text-neutral-500 font-medium">{p.marche}</span>
                    </>
                  )}
                </div>
                <h2 className="text-2xl font-semibold tracking-tight text-black group-hover:text-brand transition-colors">{p.title}</h2>
                <p className="text-neutral-500 text-sm mt-2 leading-relaxed max-w-2xl">{p.tagline}</p>
              </div>
              
              {/* Flèche d'interaction discrète */}
              <span className="text-2xl text-neutral-300 group-hover:text-black group-hover:translate-x-1 transition-all md:block hidden font-light">
                →
              </span>
            </Link>
          ))
        ) : (
          // Message de secours élégant si la base de données est indisponible
          <div className="p-12 border border-dashed border-[#EAEAEA] rounded-lg text-center bg-neutral-50">
            <p className="text-neutral-500 font-mono text-sm">
              Connexion à la base de données en cours ou indisponible.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}