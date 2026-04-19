// app/projets/[slug]/page.tsx
import { fetchGraphQL } from '@/lib/graphql/client';
import { GET_PROJECT_BY_SLUG } from '@/lib/graphql/queries';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type ProjectData = {
  projet: {
    title: string;
    slug: string;
    tagline: string;
    lienProjet?: string;
    secteur: string;
    marche: string;
    tags?: string;
    // contexte?: string;
    // defis?: string;
    // solutions?: string;
    // resultats?: string;
  }
};

export default async function ProjectDetailPage({ params }: { params: { slug: string } }) {
  let project = null;

  // Le bouclier de sécurité anti-crash
  try {
    const data = await fetchGraphQL<ProjectData>(GET_PROJECT_BY_SLUG, { slug: params.slug });
    project = data?.projet;
  } catch (error) {
    console.error(`Erreur GraphQL pour le projet ${params.slug} :`, error);
  }

  // Si le projet n'est pas trouvé ou s'il y a une erreur, on redirige vers la page 404
  if (!project) {
    return notFound();
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-32 lg:py-48">
      
      {/* Bouton retour */}
      <Link href="/projets" className="inline-flex items-center text-sm font-medium text-neutral-500 hover:text-black mb-12 transition-colors">
        ← Retour aux projets
      </Link>

      <div className="animate-fade-in">
        {/* Badges */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          {project.secteur && (
            <span className="text-xs font-mono font-medium uppercase tracking-wider px-3 py-1.5 rounded bg-black text-white">
              {project.secteur}
            </span>
          )}
          {project.marche && (
            <span className="text-xs font-mono font-medium uppercase tracking-wider px-3 py-1.5 rounded border border-[#EAEAEA] text-neutral-600">
              {project.marche}
            </span>
          )}
        </div>

        {/* Titre et Tagline */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-black mb-6">
          {project.title}
        </h1>
        <p className="text-xl text-neutral-500 leading-relaxed font-light mb-12">
          {project.tagline}
        </p>

        {/* Lien externe du projet */}
        {project.lienProjet && (
          <a 
            href={project.lienProjet} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-black text-sm font-medium px-6 py-3 rounded-md border border-[#EAEAEA] hover:border-black hover:bg-neutral-50 transition-all shadow-sm"
          >
            Visiter le site web →
          </a>
        )}
      </div>

      <div className="mt-24 pt-12 border-t border-[#EAEAEA] animate-fade-in animation-delay-200">
        <p className="text-neutral-500 font-mono text-sm">
          // Détails de l'étude de cas en cours de rédaction...
        </p>
      </div>
      
    </main>
  );
}