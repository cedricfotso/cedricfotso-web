import type { Metadata } from "next"
import { PageHeader } from "@/components/ui/PageHeader"
import { Section } from "@/components/ui/Section"
import { Label } from "@/components/ui/Label"
import { ContactForm } from "@/components/contact/ContactForm"

export const metadata: Metadata = { title: "Contact", description: "Écrivez-moi, je réponds sous 48h ouvrées." }

export default function ContactPage() {
	return (
		<>
			<PageHeader label="Contact" title="Écrivons-nous." intro="Décrivez votre projet en quelques lignes. Je réponds sous 48h ouvrées avec un premier retour honnête." />
			<Section>
				<div className="grid gap-12 md:grid-cols-12">
					<aside className="md:col-span-4 space-y-8">
						<div><Label>Email</Label><p className="mt-2 text-[16px]"><a href="mailto:mr@cedricfotso.com" className="text-brand underline underline-offset-4">mr@cedricfotso.com</a></p></div>
						<div><Label>Localisation</Label><p className="mt-2 text-[16px]">Douala, Cameroun<br /><span className="text-muted">GMT+1, missions à distance</span></p></div>
						<div><Label>Disponibilité</Label><p className="mt-2 text-[15px] text-muted">Prochaine fenêtre de démarrage : à la demande. Les cadrages peuvent commencer sous 2 semaines.</p></div>
					</aside>
					<div className="md:col-span-8"><ContactForm /></div>
				</div>
			</Section>
		</>
	)
}