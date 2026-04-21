export type MetierSlug =
  | "sites-web"
  | "design"
  | "strategie"
  | "wordpress"
  | "headless"
  | "ecommerce"

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
    baseline:
      "Architecture claire, performance mesurable, CMS headless. Je conçois et code des sites maintenables après la livraison.",
    intro:
      "Un site qui vieillit bien coûte moins cher qu'un site qu'on refait tous les deux ans. Je construis sur des bases sobres : Next.js pour le front, WordPress en headless pour le contenu, hébergement Vercel. Pas de frameworks exotiques, pas de dette technique gratuite.",
    pourQui: [
      "Structures qui ont dépassé le template WordPress standard",
      "Institutions qui ont besoin d'une gouvernance de contenu claire",
      "Entreprises en croissance qui veulent un site qui évolue sans refonte",
    ],
    livrables: [
      {
        titre: "Site vitrine & institutionnel",
        description:
          "De 5 à 20 pages, CMS piloté, SEO technique intégré, performance Lighthouse ≥ 95.",
      },
      {
        titre: "Refonte & migration",
        description:
          "Audit de l'existant, plan de redirects, migration de contenu sans perte SEO.",
      },
      {
        titre: "Intégration CMS headless",
        description:
          "WordPress + WPGraphQL, Sanity ou Payload selon le besoin éditorial.",
      },
    ],
    methode: [
      {
        etape: "Cadrage",
        description:
          "1 atelier de 2h pour figer objectifs, arborescence et contraintes.",
      },
      {
        etape: "Design",
        description:
          "Wireframes puis maquettes haute fidélité Figma sur l'accueil et 2 gabarits.",
      },
      {
        etape: "Développement",
        description:
          "Itérations hebdomadaires sur une preview Vercel, accès continu du client.",
      },
      {
        etape: "Mise en ligne & mesure",
        description:
          "Redirects, sitemap, tags analytics, puis suivi 30 jours inclus.",
      },
    ],
    faq: [
      {
        q: "Combien de temps pour un site vitrine ?",
        a: "Entre 4 et 8 semaines selon le volume de contenu et la disponibilité du client pour les validations.",
      },
      {
        q: "Qui gère le contenu après la livraison ?",
        a: "Vous. Je forme une ou deux personnes au CMS lors de la recette. Documentation écrite fournie.",
      },
      {
        q: "Quel budget indicatif ?",
        a: "À partir de 3 500 € pour un site vitrine sobre, 6 000–12 000 € pour un site institutionnel avec CMS avancé.",
      },
    ],
  },

  design: {
    slug: "design",
    label: "Design",
    title: "Une identité qui raconte juste",
    baseline:
      "Identité visuelle, système de composants, interfaces. Le design sert la lecture et la décision — pas la décoration.",
    intro:
      "Le design n'est pas un vernis. C'est la manière dont une marque se rend lisible, reconnaissable et utilisable. Je travaille à partir du positionnement, pas de tendances Dribbble. L'objectif : un système qui tient dans tous les formats, du papier à l'écran.",
    pourQui: [
      "Structures qui se lancent et doivent poser une identité",
      "Marques installées qui ont besoin de recentrer leur système",
      "Produits digitaux qui manquent de cohérence d'interface",
    ],
    livrables: [
      {
        titre: "Identité & charte",
        description:
          "Logo, palette, typographie, règles d'usage. Charte PDF + fichiers sources.",
      },
      {
        titre: "Design system",
        description:
          "Tokens, composants, variantes, documentation Figma. Prêt pour le dev.",
      },
      {
        titre: "Maquettes haute fidélité",
        description:
          "Interfaces web et mobile, prototype cliquable pour valider les parcours.",
      },
    ],
    methode: [
      {
        etape: "Écoute",
        description:
          "Entretiens avec les parties prenantes, audit de l'existant, veille ciblée.",
      },
      {
        etape: "Direction",
        description:
          "2 pistes de direction présentées avec argumentaire, une seule retenue.",
      },
      {
        etape: "Système",
        description: "Extension de la direction retenue en un système complet.",
      },
      {
        etape: "Livraison",
        description:
          "Charte, sources, accompagnement sur les premières déclinaisons.",
      },
    ],
    faq: [
      {
        q: "Combien de pistes me présentez-vous ?",
        a: "Deux, avec un argumentaire clair sur ce que chacune dit et ce qu'elle refuse de dire. Pas dix pistes.",
      },
      {
        q: "Fournissez-vous les fichiers sources ?",
        a: "Oui. Figma + exports SVG/PDF. Vous êtes propriétaire de l'identité livrée.",
      },
      {
        q: "Travaillez-vous avec des imprimeurs ?",
        a: "Je fournis les fichiers prêts pour l'impression. Je ne gère pas la production mais je peux recommander.",
      },
    ],
  },

  strategie: {
    slug: "strategie",
    label: "Stratégie",
    title: "Un cap lisible avant de produire",
    baseline:
      "Audit, positionnement, roadmap. On décide ce qu'on fait et ce qu'on ne fait pas avant de dépenser le premier pixel.",
    intro:
      "La plupart des projets ratés ne ratent pas à l'exécution. Ils ratent parce que personne n'a écrit noir sur blanc ce qu'on essaie de faire. Mon rôle : forcer les décisions difficiles tôt, pour que l'équipe design et dev n'ait plus qu'à exécuter.",
    pourQui: [
      "Structures en pivot ou en lancement",
      "Directions qui ont des signaux contradictoires et besoin d'un tiers",
      "Équipes qui produisent beaucoup sans direction lisible",
    ],
    livrables: [
      {
        titre: "Audit de présence",
        description:
          "État des lieux site, réseaux, SEO, perception. Livré en 10 jours.",
      },
      {
        titre: "Positionnement & messages",
        description:
          "Promesse, piliers, preuves, public. Un document de référence de 20–30 pages.",
      },
      {
        titre: "Roadmap 3–6 mois",
        description:
          "Priorités, dépendances, ressources. Revue mensuelle incluse si souhaité.",
      },
    ],
    methode: [
      {
        etape: "Écoute",
        description:
          "6–10 entretiens internes et externes, analyse de données existantes.",
      },
      {
        etape: "Diagnostic",
        description:
          "Restitution des écarts entre ce que l'équipe pense et ce que perçoivent les publics.",
      },
      {
        etape: "Décisions",
        description:
          "Atelier de priorisation avec la direction, arbitrages écrits.",
      },
      {
        etape: "Roadmap",
        description: "Séquence d'actions chiffrée en temps et en ressources.",
      },
    ],
    faq: [
      {
        q: "Vous exécutez vous-même la roadmap ?",
        a: "Parfois oui (sites web, design). Parfois non : je passe la main à vos équipes ou à des partenaires.",
      },
      {
        q: "Combien de temps dure une mission conseil ?",
        a: "Entre 3 et 8 semaines selon la profondeur attendue.",
      },
      {
        q: "Travaillez-vous avec des institutions publiques ?",
        a: "Oui, via marchés publics ou conventions. Prévoir plus de temps côté cadrage administratif.",
      },
    ],
  },

  wordpress: {
    slug: "wordpress",
    label: "WordPress",
    title: "WordPress sans les compromis habituels",
    baseline:
      "Sur mesure, performant, maintenable. Pas de page builder, pas de thème gonflé.",
    intro:
      "WordPress représente 43 % du web — pas parce que c'est le meilleur outil, mais parce que, bien configuré, il est imbattable pour la gouvernance de contenu. Je construis sur mesure : thème dédié, ACF/Pods pour la data, pas de page builder.",
    pourQui: [
      "Structures qui veulent garder la main sur le contenu sans dépendre d'un dev",
      "Sites existants sur WordPress qui souffrent de lenteur ou de dette technique",
      "Projets multi-auteurs avec besoins éditoriaux avancés",
    ],
    livrables: [
      {
        titre: "Thème WordPress sur mesure",
        description:
          "HTML/CSS/PHP propre, pas de Divi ni d'Elementor. Performance Lighthouse ≥ 95.",
      },
      {
        titre: "Configuration ACF / Pods",
        description:
          "Types de contenu personnalisés, relations, champs flexibles.",
      },
      {
        titre: "Audit & refonte de site existant",
        description:
          "Nettoyage des plugins, optimisation de la base, plan de migration.",
      },
    ],
    methode: [
      {
        etape: "Audit",
        description:
          "Analyse de l'existant : thème, plugins, performances, sécurité.",
      },
      {
        etape: "Architecture",
        description:
          "Définition des types de contenu, des rôles, de la structure de navigation.",
      },
      {
        etape: "Développement",
        description: "Itérations sur staging, accès continu pour validation.",
      },
      {
        etape: "Déploiement",
        description:
          "Migration en production, redirects, tests de régression.",
      },
    ],
    faq: [
      {
        q: "Utilisez-vous des page builders ?",
        a: "Non. Je code les templates manuellement. Les page builders alourdissent le code et compliquent la maintenance.",
      },
      {
        q: "Mon site actuel est sur WordPress, pouvez-vous le reprendre ?",
        a: "Oui. J'audite d'abord, puis je propose une roadmap de refonte ou d'optimisation selon l'ampleur.",
      },
      {
        q: "Quel budget pour un site WordPress sur mesure ?",
        a: "À partir de 2 500 € pour un site vitrine sobre, 5 000–10 000 € pour un site avec types de contenu avancés.",
      },
    ],
  },

  headless: {
    slug: "headless",
    label: "Headless / Next.js",
    title: "La puissance du web moderne sans sacrifier le contenu",
    baseline:
      "WordPress en back, Next.js en front. Le meilleur des deux mondes : éditorial familier, front ultra-performant.",
    intro:
      "L'architecture headless sépare la gestion de contenu (WordPress, Sanity) du rendu (Next.js). Le résultat : un front ultra-rapide, déployé sur Vercel, avec un éditeur de contenu que votre équipe connaît déjà. C'est le socle de cedricfotso.com.",
    pourQui: [
      "Projets qui exigent des performances max (LCP < 1s, Lighthouse 100)",
      "Équipes avec un back-office WordPress existant qui veulent moderniser le front",
      "Plateformes avec des besoins d'internationalisation ou de multi-canal",
    ],
    livrables: [
      {
        titre: "Front Next.js + WordPress headless",
        description:
          "WPGraphQL, ISR/SSG, déploiement Vercel. API typée avec TypeScript.",
      },
      {
        titre: "Intégration Sanity ou Payload",
        description:
          "Pour les projets qui partent de zéro côté CMS.",
      },
      {
        titre: "Audit & migration headless",
        description:
          "Bilan de faisabilité, plan de migration depuis un WordPress classique.",
      },
    ],
    methode: [
      {
        etape: "Cadrage technique",
        description:
          "Choix du CMS, de la stratégie de rendu (SSG/ISR/SSR), du pipeline de déploiement.",
      },
      {
        etape: "Schema & API",
        description:
          "Définition des types de contenu, des requêtes GraphQL, des types TypeScript.",
      },
      {
        etape: "Développement front",
        description:
          "Composants, pages, animations — itérations sur preview Vercel.",
      },
      {
        etape: "Mise en prod",
        description:
          "Webhooks de revalidation, monitoring, documentation pour l'équipe contenu.",
      },
    ],
    faq: [
      {
        q: "C'est plus cher qu'un WordPress classique ?",
        a: "Oui, le setup initial est plus lourd. Mais les performances et la maintenabilité compensent sur la durée.",
      },
      {
        q: "Notre équipe peut-elle gérer le contenu ?",
        a: "Oui. L'interface d'édition reste WordPress ou Sanity — familière pour les non-développeurs.",
      },
      {
        q: "Peut-on migrer depuis un WordPress classique ?",
        a: "Oui. J'installe WPGraphQL, j'expose l'API, et je construis le front Next.js en parallèle du site existant.",
      },
    ],
  },

  ecommerce: {
    slug: "ecommerce",
    label: "E-commerce",
    title: "Vendre en ligne sans les compromis Shopify",
    baseline:
      "WooCommerce sur mesure ou Next.js + Stripe. Un tunnel de vente conçu pour convertir, pas pour cocher des cases.",
    intro:
      "La plupart des sites e-commerce sous-performent parce qu'ils ont été configurés, pas conçus. Je travaille sur les deux couches : l'expérience d'achat (parcours, friction, confiance) et la technique (performances, paiement, gestion des stocks).",
    pourQui: [
      "Marques qui veulent quitter Shopify pour garder la main sur leurs données et leurs marges",
      "Boutiques WooCommerce existantes qui souffrent de lenteur ou de taux d'abandon élevés",
      "Projets de niche avec des besoins de catalogue ou de pricing non standard",
    ],
    livrables: [
      {
        titre: "Boutique WooCommerce sur mesure",
        description:
          "Thème dédié, tunnel d'achat optimisé, passerelle de paiement configurée.",
      },
      {
        titre: "E-commerce headless (Next.js + Stripe)",
        description:
          "Catalogue, panier, paiement — sans WordPress si le projet s'y prête.",
      },
      {
        titre: "Audit & optimisation de boutique existante",
        description:
          "Analyse du tunnel, des performances, du taux de conversion. Recommandations chiffrées.",
      },
    ],
    methode: [
      {
        etape: "Analyse",
        description:
          "Catalogue, volume de commandes, contraintes logistiques et légales.",
      },
      {
        etape: "UX & tunnel",
        description:
          "Wireframes du parcours d'achat, points de friction identifiés et supprimés.",
      },
      {
        etape: "Développement",
        description:
          "Intégration paiement, gestion stocks, emails transactionnels.",
      },
      {
        etape: "Lancement & suivi",
        description:
          "Tests de bout en bout, monitoring des erreurs, bilan J+30.",
      },
    ],
    faq: [
      {
        q: "Travaillez-vous avec Shopify ?",
        a: "Je peux, mais je préfère WooCommerce ou Next.js+Stripe pour les projets où la personnalisation et la propriété des données comptent.",
      },
      {
        q: "Gérez-vous la logistique ?",
        a: "Non. Je connecte votre logisticien via API si nécessaire, mais la logistique reste de votre côté.",
      },
      {
        q: "Quel budget pour une boutique en ligne ?",
        a: "À partir de 4 000 € pour une boutique WooCommerce sobre, 8 000–15 000 € pour un e-commerce headless.",
      },
    ],
  },
}