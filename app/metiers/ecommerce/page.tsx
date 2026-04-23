import { MetierTemplate } from "@/components/metiers/MetierTemplate"

export default function EcommercePage() {
  return (
    <MetierTemplate 
      metier={{
        slug: "ecommerce",
        label: "E-commerce",
        title: "Vendre en ligne sans les compromis Shopify",
        baseline: "WooCommerce sur mesure ou Next.js + Stripe. Un tunnel de vente conçu pour convertir, pas pour cocher des cases.",
        intro: "La plupart des sites e-commerce sous-performent parce qu'ils ont été configurés, pas conçus. Je travaille sur les deux couches : l'expérience d'achat (parcours, friction, confiance) et la technique (performances, paiement, gestion des stocks).",
        pourQui: [
          "Marques qui veulent quitter Shopify pour garder la main sur leurs données et leurs marges",
          "Boutiques WooCommerce existantes qui souffrent de lenteur ou de taux d'abandon élevés",
          "Projets de niche avec des besoins de catalogue ou de pricing non standard"
        ],
        livrables: [
          {
            titre: "Boutique WooCommerce sur mesure",
            description: "Thème dédié, tunnel d'achat optimisé, passerelle de paiement configurée."
          },
          {
            titre: "E-commerce headless (Next.js + Stripe)",
            description: "Catalogue, panier, paiement — sans WordPress si le projet s'y prête."
          },
          {
            titre: "Audit & optimisation de boutique existante",
            description: "Analyse du tunnel, des performances, du taux de conversion. Recommandations chiffrées."
          }
        ],
        methode: [
          {
            etape: "Analyse",
            description: "Catalogue, volume de commandes, contraintes logistiques et légales."
          },
          {
            etape: "UX & tunnel",
            description: "Wireframes du parcours d'achat, points de friction identifiés et supprimés."
          },
          {
            etape: "Développement",
            description: "Intégration paiement, gestion stocks, emails transactionnels."
          },
          {
            etape: "Lancement & suivi",
            description: "Tests de bout en bout, monitoring des erreurs, bilan J+30."
          }
        ],
        faq: [
          {
            q: "Travaillez-vous avec Shopify ?",
            a: "Je peux, mais je préfère WooCommerce ou Next.js+Stripe pour les projets où la personnalisation et la propriété des données comptent."
          },
          {
            q: "Gérez-vous la logistique ?",
            a: "Non. Je connecte votre logisticien via API si nécessaire, mais la logistique reste de votre côté."
          },
          {
            q: "Quel budget pour une boutique en ligne ?",
            a: "À partir de 4 000 € pour une boutique WooCommerce sobre, 8 000–15 000 € pour un e-commerce headless."
          }
        ]
      }}
    />
  )
}