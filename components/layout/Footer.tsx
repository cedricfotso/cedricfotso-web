import Link from "next/link"
import { Container } from "./Container"
import { Label } from "@/components/ui/Label"

const groups = [
	{ title: "Navigation", items: [
		{ href: "/", label: "Accueil" },
		{ href: "/metiers", label: "Métiers" },
		{ href: "/a-propos", label: "À propos" },
		{ href: "/contact", label: "Contact" },
	]},
	{ title: "Métiers", items: [
		{ href: "/metiers/sites-web", label: "Sites web" },
		{ href: "/metiers/design", label: "Design" },
		{ href: "/metiers/strategie", label: "Stratégie" },
	]},
	{ title: "Travaux", items: [
		{ href: "/etudes-de-cas", label: "Études de cas" },
		{ href: "/portfolio", label: "Portfolio" },
		{ href: "/ecrits", label: "Écrits" },
	]},
	{ title: "Contact", items: [
		{ href: "mailto:mr@cedricfotso.com", label: "mr@cedricfotso.com" },
		{ href: "https://github.com/cedricfotso", label: "GitHub" },
		{ href: "https://www.linkedin.com/in/cedricaimefotso", label: "LinkedIn" },
	]},
]

export function Footer() {
	return (
		<footer className="border-t border-border py-14">
			<Container>
				<div className="grid grid-cols-2 gap-10 md:grid-cols-4">
					{groups.map((g) => (
						<div key={g.title}>
							<Label>{g.title}</Label>
							<ul className="mt-4 space-y-2">
								{g.items.map((it) => (
									<li key={it.href}>
										<Link href={it.href} className="text-sm text-muted transition-colors hover:text-foreground">{it.label}</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
				<div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-sm text-muted md:flex-row md:items-center md:justify-between">
					<p>© {new Date().getFullYear()} Cédric Fotso. Douala, Cameroun.</p>
					<p>Site conçu et développé en interne.</p>
				</div>
			</Container>
		</footer>
	)
}