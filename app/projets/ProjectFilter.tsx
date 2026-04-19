"use client"

import { useState, useMemo } from "react"
import { ProjectCard } from "./ProjectCard"
import { cn } from "@/lib/utils"
import type { ProjetNode } from "@/lib/queries"

type Filter = "all" | "sites-web" | "design" | "strategie"
const filters: Array<{ id: Filter; label: string }> = [
	{ id: "all", label: "Tout" },
	{ id: "sites-web", label: "Sites web" },
	{ id: "design", label: "Design" },
	{ id: "strategie", label: "Stratégie" },
]

export function ProjectFilter({ projets }: { projets: ProjetNode[] }) {
	const [active, setActive] = useState<Filter>("all")
	const filtered = useMemo(() => {
		if (active === "all") return projets
		return projets.filter((p) => p.typesDeProjet?.nodes?.some((n) => n.slug === active))
	}, [active, projets])

	return (
		<div>
			<div className="mb-8 flex flex-wrap gap-2 border-b border-border">
				{filters.map((f) => (
					<button
						key={f.id}
						onClick={() => setActive(f.id)}
						className={cn("relative px-4 py-3 text-sm transition-colors", active === f.id ? "text-foreground" : "text-muted hover:text-foreground")}
					>
						{f.label}
						{active === f.id && <span className="absolute inset-x-0 -bottom-px h-0.5 bg-brand" />}
					</button>
				))}
			</div>

			{filtered.length === 0 ? (
				<p className="py-12 text-center text-muted">Aucun projet dans cette catégorie pour le moment.</p>
			) : (
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					{filtered.map((p) => <ProjectCard key={p.slug} projet={p} variant="portfolio" />)}
				</div>
			)}
		</div>
	)
}