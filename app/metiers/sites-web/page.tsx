import type { Metadata } from "next"
import { MetierTemplate } from "@/components/metiers/MetierTemplate"
import { METIERS } from "@/lib/metiers"
import { getAllProjects } from "@/lib/queries"

export const revalidate = 300
export const metadata: Metadata = { title: "Sites web", description: METIERS["sites-web"].baseline }

export default async function Page() {
	const projets = await getAllProjects({ typeSlug: "sites-web" })
	return <MetierTemplate metier={METIERS["sites-web"]} projets={projets} />
}