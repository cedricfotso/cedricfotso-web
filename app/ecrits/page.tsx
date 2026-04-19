import type { Metadata } from "next"
import Link from "next/link"
import { PageHeader } from "@/components/ui/PageHeader"
import { Section } from "@/components/ui/Section"
import { Label } from "@/components/ui/Label"
import { getAllPosts } from "@/lib/queries"
import { formatDateFR, stripHtml } from "@/lib/utils"

export const revalidate = 300
export const metadata: Metadata = { title: "Écrits", description: "Notes, méthodes, prises de position." }

export default async function Page() {
	const posts = await getAllPosts()
	return (
		<>
			<PageHeader label="Écrits" title="Notes, méthodes, prises de position." intro="Des textes courts ou longs, sur ce que j'apprends en travaillant." />
			<Section>
				{posts.length === 0 ? (
					<p className="py-12 text-center text-muted">Les premiers articles arrivent bientôt.</p>
				) : (
					<ul className="divide-y divide-border">
						{posts.map((p) => (
							<li key={p.slug}>
								<Link href={`/ecrits/${p.slug}`} className="group flex flex-col gap-2 py-6 md:flex-row md:items-baseline md:gap-8">
									<Label className="md:w-32 md:shrink-0">{formatDateFR(p.date)}</Label>
									<div className="flex-1">
										<h2 className="text-[20px] transition-colors group-hover:text-brand">{p.title}</h2>
										<p className="mt-2 text-[15px] text-muted line-clamp-2">{stripHtml(p.excerpt)}</p>
									</div>
									<span aria-hidden className="text-brand transition-transform duration-150 group-hover:translate-x-1">→</span>
								</Link>
							</li>
						))}
					</ul>
				)}
			</Section>
		</>
	)
}