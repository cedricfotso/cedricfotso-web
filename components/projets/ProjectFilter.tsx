"use client"

import { useMemo, useState } from "react"
import { ProjectCard } from "@/components/projets/ProjectCard"
import { cn } from "@/lib/utils"
import type { FeaturedProject } from "@/lib/queries"

type Props = {
  projets: FeaturedProject[]
}

export function ProjectFilter({ projets }: Props) {
  const [secteur, setSecteur] = useState<string | null>(null)

  const secteurs = useMemo(() => {
    const set = new Set<string>()
    projets.forEach((p) => {
      if (p.secteur) set.add(p.secteur)
    })
    return Array.from(set).sort()
  }, [projets])

  const filtered = useMemo(() => {
    if (!secteur) return projets
    return projets.filter((p) => p.secteur === secteur)
  }, [projets, secteur])

  return (
    <div>
      {secteurs.length > 0 ? (
        <div className="mb-12 flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setSecteur(null)}
            className={cn(
              "rounded-full border border-border px-4 py-2 text-sm transition",
              secteur === null
                ? "bg-white text-black"
                : "text-neutral-400 hover:bg-white/5 hover:text-white",
            )}
          >
            Tous
          </button>
          {secteurs.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSecteur(s)}
              className={cn(
                "rounded-full border border-border px-4 py-2 text-sm transition",
                secteur === s
                  ? "bg-white text-black"
                  : "text-neutral-400 hover:bg-white/5 hover:text-white",
              )}
            >
              {s}
            </button>
          ))}
        </div>
      ) : null}

      {filtered.length === 0 ? (
        <p className="py-16 text-center text-neutral-500">
          Aucun projet dans cette catégorie.
        </p>
      ) : (
        <ul className="grid gap-6 md:grid-cols-2">
          {filtered.map((p, i) => (
            <li key={p.slug}>
              <ProjectCard projet={p} priority={i < 2} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}