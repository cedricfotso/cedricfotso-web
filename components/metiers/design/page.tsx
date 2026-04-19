import type { Metadata } from "next"
import Link from "next/link"
import { MetiersTabs } from "@/components/metiers/MetiersTabs"
import { MetierTemplate } from "@/components/metiers/MetierTemplate"
import { ProjectCard } from "@/components/projets/ProjectCard"
import { Section } from "@/components/ui/Section"
import { getProjectsByMetier } from "@/lib/queries"

export const revalidate = 300

export const metadata: Metadata = {
  title: "Design — Direction artistique & UI",
  description:
    "Design digital sur mesure : direction artistique, systèmes d'interface et identités de marque pensées avant d'être codées.",
}

export default async function DesignPage() {
  const projets = await getProjectsByMetier("design", 6)

  return (
    <>
      <MetiersTabs />

      <MetierTemplate
        content={{
          eyebrow: "Métier · Design",
          title: "Une direction artistique, pas un template.",
          lead:
            "Je conçois des interfaces qui portent ta singularité : typographie, rythme, tension, densité. Chaque décision visuelle sert ton positionnement.",
          pourQui: [
            "Marques qui refusent le look générique des templates",
            "Fondateurs qui veulent un site qui raconte une histoire",
            "Studios et agences cherchant un design partner",
          ],
          livrables: [
            "Direction artistique & moodboard",
            "Système d'interface (tokens, composants, grille)",
            "Maquettes haute-fidélité responsives",
            "Guide d'usage pour l'équipe dev",
          ],
          methode: [
            {
              titre: "Immersion",
              desc: "On décortique ta marque, ta cible et tes concurrents pour poser une tension visuelle unique.",
            },
            {
              titre: "Direction",
              desc: "Trois pistes créatives, un parti-pris assumé, une itération ciblée — pas dix variantes tièdes.",
            },
            {
              titre: "Système",
              desc: "L'identité devient un système reproductible : composants, règles, documentation.",
            },
          ],
          ctaLabel: "Démarrer un projet de design",
        }}
      />

      {projets.length > 0 ? (
        <Section bordered>
          <div className="mb-12 flex items-end justify-between gap-6">
            <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              Projets design récents
            </h2>
            <Link
              href="/etudes-de-cas"
              className="text-sm text-neutral-400 underline-offset-4 hover:text-white hover:underline"
            >
              Toutes les études →
            </Link>
          </div>

          <ul className="grid gap-6 md:grid-cols-2">
            {projets.map((p, i) => (
              <li key={p.slug}>
                <ProjectCard projet={p} priority={i < 2} />
              </li>
            ))}
          </ul>
        </Section>
      ) : null}
    </>
  )
}