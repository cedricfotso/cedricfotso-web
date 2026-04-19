import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Section } from "@/components/ui/Section"
import { Label } from "@/components/ui/Label"
import { Button } from "@/components/ui/Button"
import { Container } from "@/components/layout/Container"
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/queries"
import { stripHtml } from "@/lib/utils"

type Props = { params: Promise<{ slug: string }> }

export const revalidate = 300

export async function generateStaticParams() {
	const slugs = await getAllProjectSlugs()
	return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params
	const p = await getProjectBySlug(slug)
	if (!p) return { title: "Étude introuvable" }
	return { title: p.title, description: stripHtml(p.excerpt).slice(0, 160) }
}

export default async function ProjectPage({ params }: Props) {
	const { slug } = await params
	const p = await getProjectBySlug(slug)
	if (!p) notFound()

	const type = p.typesDeProjet?.nodes?.[0]?.name ?? "Projet"
	const fields = p.projetFields
	const img = p.featuredImage?.node

	return (
		<>
			<Section className="pt-10 pb-6 md:pt-16 md:pb-10">
				<Label>{type}</Label>
				<h1 className="mt-5 max-w-4xl text-[32px] md:text-[44px]">{p.title}</h1>
				<div className="mt-8 grid gap-4 border-t border-border pt-6 text-sm md:grid-cols-4">
					{fields?.client && <Meta label="Client" value={fields.client} />}
					{fields?.annee && <Meta label="Année" value={fields.annee} />}
					{fields?.duree && <Meta label="Durée" value={fields.duree} />}
					{fields?.role && <Meta label="Rôle" value={fields.role} />}
				</div>
			</Section>

			{img?.sourceUrl && (
				<Container className="mb-10">
					<div className="relative aspect-[16/9] overflow-hidden rounded-[8px] bg-background-2">
						<Image src={img.sourceUrl} alt={img.altText ?? p.title} fill className="object-cover" priority sizes="(min-width: 1160px) 1160px, 100vw" />
					</div>
				</Container>
			)}

			<Section>
				<article className="prose-cf mx-auto max-w-3xl" dangerouslySetInnerHTML= __html: p.content ?? ""  />
			</Section>

			<Section tone="muted" className="text-center">
				<h2 className="text-[26px] md:text-[32px]">Un projet similaire&nbsp;?</h2>
				<p className="mx-auto mt-4 max-w-xl text-muted">Écrivez-moi, je réponds sous 48h ouvrées.</p>
				<div className="mt-8"><Button href="/contact" variant="primary">Me contacter</Button></div>
			</Section>
		</>
	)
}

function Meta({ label, value }: { label: string; value: string }) {
	return (<div><Label>{label}</Label><p className="mt-1">{value}</p></div>)
}