import type { Metadata } from "next"
import { PageHeader } from "@/components/ui/PageHeader"
import { Section } from "@/components/ui/Section"
import { ProjectCard } from "@/components/projets/ProjectCard"
import { getAllProjects } from "@/lib/queries"

export const revalidate = 300
export const metadata: Metadata = { title: "Études de cas", description: "Missions racontées du brief à la mesure." }

export default async function Page() {
	const projets = await getAllProjects({ format: "etude-de-cas" })
	return (
		<>
			<PageHeader label="Études de cas" title="Missions racontées du brief à la mesure." intro="Chaque étude décrit le contexte, les décisions prises, les livrables et les résultats mesurés." />
			<Section>
				{projets.length === 0 ? (
					<p className="py-12 text-center text-muted">Les études sont en cours de publication.</p>
				) : (
					<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
						{projets.map((p) => <ProjectCard key={p.slug} projet={p} />)}
					</div>
				)}
			</Section>
		</>
	)
}