import { Section } from "@/components/ui/Section"
import { Label } from "@/components/ui/Label"
import { Card } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { FadeIn } from "@/components/motion/FadeIn"
import { ProjectCard } from "@/components/projets/ProjectCard"
import type { MetierContent } from "@/lib/metiers"
import type { ProjetNode } from "@/lib/queries"

type Props = { metier: MetierContent; projets: ProjetNode[] }

export function MetierTemplate({ metier, projets }: Props) {
	return (
		<>
			<Section className="pt-10 pb-8 md:pt-16 md:pb-12">
				<Label>{metier.label}</Label>
				<h1 className="mt-5 max-w-3xl text-[32px] md:text-[44px]">{metier.title}</h1>
				<p className="mt-4 max-w-2xl text-[18px] text-muted">{metier.baseline}</p>
			</Section>

			<Section tone="muted">
				<div className="grid gap-12 md:grid-cols-12">
					<div className="md:col-span-8">
						<Label>Introduction</Label>
						<p className="mt-4 text-[17px] leading-[1.7]">{metier.intro}</p>
					</div>
					<div className="md:col-span-4">
						<Label>Pour qui</Label>
						<ul className="mt-4 space-y-3 text-[15px]">
							{metier.pourQui.map((p) => (<li key={p} className="flex gap-2"><span className="text-brand">·</span><span>{p}</span></li>))}
						</ul>
					</div>
				</div>
			</Section>

			<Section>
				<div className="mb-10"><Label>Livrables</Label><h2 className="mt-4 text-[26px] md:text-[32px]">Ce que je livre concrètement.</h2></div>
				<div className="grid gap-6 md:grid-cols-3">
					{metier.livrables.map((l, i) => (
						<FadeIn key={l.titre} delay={i * 0.05}>
							<Card className="h-full"><h3 className="text-[20px]">{l.titre}</h3><p className="mt-3 text-[15px] text-muted">{l.description}</p></Card>
						</FadeIn>
					))}
				</div>
			</Section>

			<Section tone="muted">
				<div className="mb-10"><Label>Méthode</Label><h2 className="mt-4 text-[26px] md:text-[32px]">Comment on travaille ensemble.</h2></div>
				<ol className="grid gap-6 md:grid-cols-2">
					{metier.methode.map((m, i) => (
						<li key={m.etape} className="rounded-[8px] border border-border bg-background-1 p-6">
							<Label>Étape {i + 1}</Label>
							<h3 className="mt-3 text-[18px]">{m.etape}</h3>
							<p className="mt-2 text-[15px] text-muted">{m.description}</p>
						</li>
					))}
				</ol>
			</Section>

			{projets.length > 0 && (
				<Section>
					<div className="mb-10"><Label>Études de cas liées</Label><h2 className="mt-4 text-[26px] md:text-[32px]">Exemples concrets.</h2></div>
					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						{projets.slice(0, 3).map((p) => <ProjectCard key={p.slug} projet={p} />)}
					</div>
				</Section>
			)}

			<Section tone="muted">
				<div className="mb-10"><Label>Questions fréquentes</Label><h2 className="mt-4 text-[26px] md:text-[32px]">Ce qu'on me demande souvent.</h2></div>
				<dl className="divide-y divide-border rounded-[8px] border border-border bg-background-1">
					{metier.faq.map((f) => (
						<details key={f.q} className="group">
							<summary className="flex cursor-pointer items-center justify-between px-6 py-5 text-[16px] font-medium">
								{f.q}
								<span className="text-brand transition-transform group-open:rotate-45">+</span>
							</summary>
							<p className="px-6 pb-6 text-[15px] text-muted">{f.a}</p>
						</details>
					))}
				</dl>
			</Section>

			<Section className="text-center py-20 md:py-28">
				<h2 className="text-[28px] md:text-[32px]">Un projet {metier.label.toLowerCase()} en tête&nbsp;?</h2>
				<p className="mx-auto mt-4 max-w-xl text-muted">Écrivez-moi une ligne, je réponds sous 48h ouvrées avec un premier retour honnête.</p>
				<div className="mt-8"><Button href="/contact" variant="primary">Démarrer une conversation</Button></div>
			</Section>
		</>
	)
}