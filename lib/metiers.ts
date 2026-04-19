export type MetierSlug = "sites-web" | "design" | "strategie"

export type MetierContent = {
	slug: MetierSlug
	label: string
	title: string
	baseline: string
	intro: string
	pourQui: string[]
	livrables: Array<{ titre: string; description: string }>
	methode: Array<{ etape: string; description: string }>
	faq: Array<{ q: string; a: string }>
}

export const METIERS: Record<MetierSlug, MetierContent> = {
	"sites-web": {
		slug: "sites-web",
		label: "Sites web",
		title: "Des sites qui tiennent dans le temps",
		baseline: "Architecture claire, performance mesurable, CMS headless. Je conçois et code des sites maintenables après la livraison.",
		intro: "Un site qui vieillit bien coûte moins cher qu'un site qu'on refait tous les deux ans. Je construis sur des bases sobres : Next.js pour le front, WordPress en headless pour le contenu, hébergement Vercel. Pas de frameworks exotiques, pas de dette technique gratuite.",
		pourQui: [
			"Structures qui ont dépassé le template WordPress standard",
			"Institutions qui ont besoin d'une gouvernance de contenu claire",
			"Entreprises en croissance qui veulent un site qui évolue sans refonte",
		],
		livrables: [
			{ titre: "Site vitrine & institutionnel", description: "De 5 à 20 pages, CMS piloté, SEO technique intégré, performance Lighthouse ≥ 95." },
			{ titre: "Refonte & migration", description: "Audit de l'existant, plan de redirects, migration de contenu sans perte SEO." },
			{ titre: "Intégration CMS headless", description: "WordPress + WPGraphQL, Sanity ou Payload selon le besoin éditorial." },
		],
		methode: [
			{ etape: "Cadrage", description: "1 atelier de 2h pour figer objectifs, arborescence et contraintes." },
			{ etape: "Design", description: "Wireframes puis maquettes haute fidélité Figma sur l'accueil et 2 gabarits." },
			{ etape: "Développement", description: "Itérations hebdomadaires sur une preview Vercel, accès continu du client." },
			{ etape: "Mise en ligne & mesure", description: "Redirects, sitemap, tags analytics, puis suivi 30 jours inclus." },
		],
		faq: [
			{ q: "Combien de temps pour un site vitrine ?", a: "Entre 4 et 8 semaines selon le volume de contenu et la disponibilité du client pour les validations." },
			{ q: "Qui gère le contenu après la livraison ?", a: "Vous. Je forme une ou deux personnes au CMS lors de la recette. Documentation écrite fournie." },
			{ q: "Quel budget indicatif ?", a: "À partir de 3 500 € pour un site vitrine sobre, 6 000–12 000 € pour un site institutionnel avec CMS avancé." },
		],
	},
	design: {
		slug: "design",
		label: "Design",
		title: "Une identité qui raconte juste",
		baseline: "Identité visuelle, système de composants, interfaces. Le design sert la lecture et la décision — pas la décoration.",
		intro: "Le design n'est pas un vernis. C'est la manière dont une marque se rend lisible, reconnaissable et utilisable. Je travaille à partir du positionnement, pas de tendances Dribbble. L'objectif : un système qui tient dans tous les formats, du papier à l'écran.",
		pourQui: [
			"Structures qui se lancent et doivent poser une identité",
			"Marques installées qui ont besoin de recentrer leur système",
			"Produits digitaux qui manquent de cohérence d'interface",
		],
		livrables: [
			{ titre: "Identité & charte", description: "Logo, palette, typographie, règles d'usage. Charte PDF + fichiers sources." },
			{ titre: "Design system", description: "Tokens, composants, variantes, documentation Figma. Prêt pour le dev." },
			{ titre: "Maquettes haute fidélité", description: "Interfaces web et mobile, prototype cliquable pour valider les parcours." },
		],
		methode: [
			{ etape: "Écoute", description: "Entretiens avec les parties prenantes, audit de l'existant, veille ciblée." },
			{ etape: "Direction", description: "2 pistes de direction présentées avec argumentaire, une seule retenue." },
			{ etape: "Système", description: "Extension de la direction retenue en un système complet." },
			{ etape: "Livraison", description: "Charte, sources, accompagnement sur les premières déclinaisons." },
		],
		faq: [
			{ q: "Combien de pistes me présentez-vous ?", a: "Deux, avec un argumentaire clair sur ce que chacune dit et ce qu'elle refuse de dire. Pas dix pistes." },
			{ q: "Fournissez-vous les fichiers sources ?", a: "Oui. Figma + exports SVG/PDF. Vous êtes propriétaire de l'identité livrée." },
			{ q: "Travaillez-vous avec des imprimeurs ?", a: "Je fournis les fichiers prêts pour l'impression. Je ne gère pas la production mais je peux recommander." },
		],
	},
	strategie: {
		slug: "strategie",
		label: "Stratégie",
		title: "Un cap lisible avant de produire",
		baseline: "Audit, positionnement, roadmap. On décide ce qu'on fait et ce qu'on ne fait pas avant de dépenser le premier pixel.",
		intro: "La plupart des projets ratés ne ratent pas à l'exécution. Ils ratent parce que personne n'a écrit noir sur blanc ce qu'on essaie de faire. Mon rôle : forcer les décisions difficiles tôt, pour que l'équipe design et dev n'ait plus qu'à exécuter.",
		pourQui: [
			"Structures en pivot ou en lancement",
			"Directions qui ont des signaux contradictoires et besoin d'un tiers",
			"Équipes qui produisent beaucoup sans direction lisible",
		],
		livrables: [
			{ titre: "Audit de présence", description: "État des lieux site, réseaux, SEO, perception. Livré en 10 jours." },
			{ titre: "Positionnement & messages", description: "Promesse, piliers, preuves, public. Un document de référence de 20–30 pages." },
			{ titre: "Roadmap 3–6 mois", description: "Priorités, dépendances, ressources. Revue mensuelle incluse si souhaité." },
		],
		methode: [
			{ etape: "Écoute", description: "6–10 entretiens internes et externes, analyse de données existantes." },
			{ etape: "Diagnostic", description: "Restitution des écarts entre ce que l'équipe pense et ce que perçoivent les publics." },
			{ etape: "Décisions", description: "Atelier de priorisation avec la direction, arbitrages écrits." },
			{ etape: "Roadmap", description: "Séquence d'actions chiffrée en temps et en ressources." },
		],
		faq: [
			{ q: "Vous exécutez vous-même la roadmap ?", a: "Parfois oui (sites web, design). Parfois non : je passe la main à vos équipes ou à des partenaires." },
			{ q: "Combien de temps dure une mission conseil ?", a: "Entre 3 et 8 semaines selon la profondeur attendue." },
			{ q: "Travaillez-vous avec des institutions publiques ?", a: "Oui, via marchés publics ou conventions. Prévoir plus de temps côté cadrage administratif." },
		],
	},
}