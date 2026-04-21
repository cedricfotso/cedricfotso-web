"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

export type FeaturedProject = {
  id: string
  slug: string
  title: string
  featuredImage?: { url: string; alt: string } | null
  secteurs?: Array<{ name: string; slug: string }>
  baseline?: string
  client?: string
  annee?: string
  format?: string
}

type Props = {
  projets: FeaturedProject[]
}

export function ProjectFilter({ projets }: Props) {
  const [secteur, setSecteur] = useState<string | null>(null)

  // Extraire les secteurs uniques
  const secteurs = Array.from(
    new Map(
      projets
        .flatMap((p) => p.secteurs ?? [])
        .map((s) => [s.slug, s]),
    ).values(),
  )

  const filtered =
    secteur === null
      ? projets
      : projets.filter((p) =>
          p.secteurs?.some((s) => s.slug === secteur),
        )

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
              key={s.slug}
              onClick={() => setSecteur(s.slug)}
              className={cn(
                "rounded-full border border-border px-4 py-2 text-sm transition-colors",
                secteur === s.slug
                  ? "bg-foreground text-background"
                  : "text-muted hover:border-foreground hover:text-foreground",
              )}
            >
              {s.name}
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
            <li key={projet.id}>
              <Link
                href={`/etudes-de-cas/${projet.slug}`}
                className="group block"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-neutral-100">
                  {projet.featuredImage ? (
                    <Image
                      src={projet.featuredImage.url}
                      alt={projet.featuredImage.alt || projet.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-muted text-sm">Image à venir</span>
                    </div>
                  )}
                </div>

                {/* Infos */}
                <div className="mt-4">
                  {projet.secteurs && projet.secteurs.length > 0 && (
                    <p className="text-xs text-muted uppercase tracking-wider mb-1">
                      {projet.secteurs.map((s) => s.name).join(", ")}
                    </p>
                  )}
                  <h2 className="font-medium text-foreground group-hover:text-brand transition-colors">
                    {projet.title}
                  </h2>
                  {projet.baseline && (
                    <p className="text-sm text-muted mt-1 line-clamp-2">
                      {projet.baseline}
                    </p>
                  )}
                  {(projet.client || projet.annee) && (
                    <p className="text-xs text-muted mt-2">
                      {[projet.client, projet.annee].filter(Boolean).join(" · ")}
                    </p>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}