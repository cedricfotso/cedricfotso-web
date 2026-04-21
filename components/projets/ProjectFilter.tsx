"use client"

import { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import type { FeaturedProject } from "@/lib/queries"

type Props = {
  projets: FeaturedProject[]
}

export function ProjectFilter({ projets }: Props) {
  const [secteur, setSecteur] = useState<string | null>(null)

  // Extraire les secteurs uniques depuis le champ string
  const secteurs = Array.from(
    new Set(projets.map((p) => p.secteur).filter(Boolean) as string[]),
  )

  const filtered =
    secteur === null
      ? projets
      : projets.filter((p) => p.secteur === secteur)

  return (
    <div>
      {/* Filtres */}
      {secteurs.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setSecteur(null)}
            className={cn(
              "rounded-full border border-border px-4 py-2 text-sm transition-colors",
              secteur === null
                ? "bg-foreground text-background"
                : "text-muted hover:border-foreground hover:text-foreground",
            )}
          >
            Tous
          </button>
          {secteurs.map((s) => (
            <button
              key={s}
              onClick={() => setSecteur(s)}
              className={cn(
                "rounded-full border border-border px-4 py-2 text-sm transition-colors",
                secteur === s
                  ? "bg-foreground text-background"
                  : "text-muted hover:border-foreground hover:text-foreground",
              )}
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {/* Grille projets */}
      {filtered.length === 0 ? (
        <p className="text-muted text-center py-16">
          Aucun projet dans cette catégorie.
        </p>
      ) : (
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((projet) => (
            <li key={projet.slug}>
              <Link
                href={`/etudes-de-cas/${projet.slug}`}
                className="group block"
              >
                {/* Placeholder image */}
                <div className="aspect-[4/3] rounded-lg bg-neutral-100 mb-4 flex items-center justify-center">
                  <span className="text-muted text-sm">
                    {projet.secteur ?? "Projet"}
                  </span>
                </div>

                {/* Infos */}
                {projet.secteur && (
                  <p className="text-xs text-muted uppercase tracking-wider mb-1">
                    {projet.secteur}
                  </p>
                )}
                <h2 className="font-medium text-foreground group-hover:text-brand transition-colors">
                  {projet.title}
                </h2>
                {projet.tagline && (
                  <p className="text-sm text-muted mt-1 line-clamp-2">
                    {projet.tagline}
                  </p>
                )}
                {projet.marche && (
                  <p className="text-xs text-muted mt-2">{projet.marche}</p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}