import type { Metadata } from "next"
import { MetierTemplate } from "@/components/metiers/MetierTemplate"
import { METIERS } from "@/lib/metiers"
import { getAllProjects } from "@/lib/queries"

export const revalidate = 300
export const metadata: Metadata = { title: "Design", description: METIERS.design.baseline }

export default async function Page() {
	const projets = await getAllProjects({ typeSlug: "design" })
	return <MetierTemplate metier={METIERS.design} projets={projets} />
}