import { fetchGraphQL } from '@/lib/graphql/client';
import { GET_PROJECT_BY_SLUG } from '@/lib/graphql/queries';
import Link from 'next/link';

// 1. LA SOLUTION : Empêcher Vercel de pré-calculer cette page à l'aveugle
export const dynamic = 'force-dynamic';

type ProjectData = {
  projet: {
    title: string;
    slug: string;
    tagline: string;
    lienProjet?: string;
    secteur: string;
    marche: string;
  }
};

// 2. CORRECTION NEXT.JS 16 : params doit être traité comme une promesse
export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  // On décode le slug en l'attendant proprement
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  let project = null;

  try {
    const data = await fetchGraphQL<ProjectData>(GET_PROJECT_BY_SLUG, { slug });
    project = data?.projet;
  } catch (error) {
    console.error(`Erreur GraphQL pour le projet ${slug} :`, error);
  }

  // Si le projet n'existe pas, on affiche un message propre au lieu de crasher
  if (!project) {
    return (
      <main className="max-w-4xl mx-auto px-6 py-32 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-black mb-4">Projet indisponible</h1>
        <p className="text-neutral-500 mb-8">Les détails de ce projet ne peuvent pas être chargés pour le moment.</p>
        <Link href="/projets" className="bg-black text-white text-sm font-medium px-6 py-3 rounded-md hover:bg-[#D85A30] transition-colors shadow-sm">
          ← Retour au portfolio
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-32 lg:py-48">
      {/* Bouton retour */}
      <Link href="/projets" className="inline-flex items-center text-sm font-medium text-neutral-500 hover:text-black mb-12 transition-colors">
        ← Retour aux projets
      </Link>

      <div className="animate-fade-in">
        {/* Badges avec le design Vercel-like */}
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
            className="inline-flex items-center gap-2 bg-white text-black text-sm font-medium px-6 py-3 rounded-md border border-[#EAEAEA] hover:border-[#D85A30] hover:text-[#D85A30] transition-all shadow-sm"
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