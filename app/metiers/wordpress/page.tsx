import { MetierTemplate } from "@/components/metiers/MetierTemplate"

export default function WordPressPage() {
  return (
    <MetierTemplate 
      content={{
        eyebrow: "Expertise",
        title: "Solutions WordPress",
        lead: "Développement de thèmes sur mesure et gestion de contenu intuitive avec le CMS le plus populaire au monde.",
        pourQui: [
          "Entreprises cherchant une gestion de contenu 100% autonome",
          "Sites vitrines nécessitant un design sur mesure",
          "Projets de refonte avec migration de données"
        ],
        livrables: [
          "Thème WordPress personnalisé (zéro constructeur de page lourd)",
          "Back-office optimisé et sécurisé",
          "Formation complète à l'utilisation"
        ],
        methode: [
          { titre: "Architecture", desc: "Définition de la structure des données et des types de contenus." },
          { titre: "Développement", desc: "Création d'un thème propre, rapide et fidèle au web design." },
          { titre: "Déploiement", desc: "Mise en ligne, configuration SEO et optimisations de sécurité." }
        ]
      }}
    />
  )
}