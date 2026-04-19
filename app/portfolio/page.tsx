import type { Metadata } from "next"
import { PageHeader } from "@/components/ui/PageHeader"
import { Section } from "@/components/ui/Section"
import { ProjectFilter } from "@/components/projets/ProjectFilter"
import { getAllProjects } from "@/lib/queries"

export const revalidate = 300
export const metadata: Metadata = { title: "Portfolio", description: "Tous les projets réalisés, filtrés par métier." }

export default async function Page() {
	const projets = await getAllProjects()
	return (
		<>
			<PageHeader label="Portfolio" title="Tous les projets réalisés." intro="Sites web, identités, systèmes visuels. Cliquez pour filtrer." />
			<Section><ProjectFilter projets={projets} /></Section>
		</>
	)
}