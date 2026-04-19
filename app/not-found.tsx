import { Section } from "@/components/ui/Section"
import { Label } from "@/components/ui/Label"
import { Button } from "@/components/ui/Button"

export default function NotFound() {
	return (
		<Section className="py-32 text-center">
			<Label>Erreur 404</Label>
			<h1 className="mt-4 text-[36px] md:text-[52px]">Cette page n'existe pas.</h1>
			<p className="mx-auto mt-4 max-w-md text-muted">Le lien est peut-être cassé, ou la page a été déplacée.</p>
			<div className="mt-8 flex justify-center gap-3">
				<Button href="/" variant="primary">Retour à l'accueil</Button>
				<Button href="/contact" variant="secondary">Me contacter</Button>
			</div>
		</Section>
	)
}