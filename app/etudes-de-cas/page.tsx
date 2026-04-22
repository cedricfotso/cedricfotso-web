import type { Metadata } from "next"
import { PageHeader } from "@/components/ui/PageHeader"
import { Section } from "@/components/ui/Section"
import { ProjectFilter } from "@/components/projets/ProjectFilter"
import { getAllProjects } from "@/lib/queries"

// revalidate absent → ajouté : la page fetch des données dynamiques
export const revalidate = 300

export const metadata: Metadata = {
  title: "Études de cas",
  description: "Projets, refontes, systèmes de design — le détail de ce qui a été fait, pourquoi, et ce que ça a produit.",
}

export default async function EtudesDeCasPage() {
  const projets = await getAllProjects({ limit: 50 })

  return (
    <>
      <PageHeader
        label="Travaux"
        title="Ce qui a été fait."
        lead="Projets, refontes, systèmes de design. Le détail de la démarche, pas juste le résultat."
      />
      <Section>
        <div className="site-container">
          {projets.length > 0 ? (
            <ProjectFilter projets={projets} />
          ) : (
            <p className="text-muted py-16 text-center">
              Les projets arrivent bientôt.
            </p>
          )}
        </div>
      </Section>
    </>
  )
}