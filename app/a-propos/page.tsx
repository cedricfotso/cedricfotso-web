import type { Metadata } from "next"
import Image from "next/image"
import { PageHeader } from "@/components/ui/PageHeader"
import { Section } from "@/components/ui/Section"
import { Label } from "@/components/ui/Label"
import { Button } from "@/components/ui/Button"

export const metadata: Metadata = { title: "À propos", description: "Parcours, méthode, convictions." }

const timeline = [
	{ year: "2026", event: "Relance de l'activité freelance sous la marque Cédric Fotso." },
	{ year: "2024", event: "Direction design d'un projet institutionnel au Cameroun." },
	{ year: "2022", event: "Lead designer sur une plateforme éducative régionale." },
	{ year: "2019", event: "Premières missions en direction artistique et identité." },
	{ year: "2015", event: "Débuts en web et design imprimé à Douala." },
]

export default function AboutPage() {
	return (
		<>
			<PageHeader eyebrow="À propos" title="Freelance à Douala, à l'intersection du design, du web et de la stratégie." />
			<Section>
				<div className="grid gap-12 md:grid-cols-12">
					<div className="md:col-span-4">
						<div className="relative aspect-[4/5] overflow-hidden rounded-[8px] bg-background-2 grayscale">
							<Image src="/about/portrait.jpg" alt="Portrait de Cédric Fotso" fill className="object-cover" sizes="(min-width: 768px) 33vw, 100vw" />
						</div>
					</div>
					<div className="md:col-span-8 space-y-5 text-[17px] leading-[1.7]">
						<p>Je m'appelle Cédric Fotso. Je travaille depuis Douala, au Cameroun, avec des structures privées et institutionnelles qui cherchent une exécution posée, lisible et mesurable.</p>
						<p>Mon travail s'organise autour de trois métiers : <strong>sites web</strong>, <strong>design</strong>, <strong>stratégie digitale</strong>. Ils se nourrissent les uns les autres. Une identité sans cap produit du bruit. Un site sans design sert mal. Une stratégie sans exécution reste un PDF.</p>
						<p>Je refuse les prestations isolées où on me demande d'exécuter sans comprendre. Je préfère des missions courtes et denses, où je peux poser les bonnes questions avant d'ouvrir Figma ou VS Code.</p>
						<p>Si cette manière de travailler résonne avec un projet que vous portez, la page <a className="text-brand underline underline-offset-4" href="/contact">contact</a> est la meilleure porte d'entrée.</p>
					</div>
				</div>
			</Section>

			<Section tone="muted">
				<Label>Parcours</Label>
				<ol className="mt-8 divide-y divide-border">
					{timeline.map((t) => (
						<li key={t.year} className="flex flex-col gap-2 py-5 md:flex-row md:items-baseline md:gap-10">
							<span className="label-caps md:w-24 md:shrink-0">{t.year}</span>
							<p className="text-[16px]">{t.event}</p>
						</li>
					))}
				</ol>
			</Section>

			<Section className="text-center py-20 md:py-28">
				<h2 className="text-[26px] md:text-[32px]">On se parle&nbsp;?</h2>
				<div className="mt-8"><Button href="/contact" variant="primary">Me contacter</Button></div>
			</Section>
		</>
	)
}