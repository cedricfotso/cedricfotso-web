import { MetierTemplate } from "@/components/metiers/MetierTemplate"

export default function HeadlessPage() {
  return (
    <MetierTemplate 
      content={{
        eyebrow: "Performance",
        title: "Architecture Headless",
        lead: "Performance et sécurité maximales en séparant votre back-end (WordPress) de votre front-end (Next.js).",
        pourQui: [
          "Projets web nécessitant des temps de chargement instantanés",
          "Applications web complexes (comme Koorre)",
          "Marques exigeant une fluidité absolue et des animations poussées"
        ],
        livrables: [
          "Front-end Next.js ultra-rapide",
          "Back-end WordPress ou Firebase sécurisé",
          "API GraphQL configurée"
        ],
        methode: [
          { titre: "Conception API", desc: "Mise en place des requêtes GraphQL pour lier le front et le back." },
          { titre: "Intégration", desc: "Développement de l'interface en React/Next.js avec des transitions fluides." },
          { titre: "Génération", desc: "Mise en cache statique (ISR/SSG) pour des performances de haut vol." }
        ]
      }}
    />
  )
}