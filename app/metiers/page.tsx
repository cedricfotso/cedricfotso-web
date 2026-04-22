import type { Metadata } from "next"
// Link supprimé — importé mais jamais utilisé dans ce fichier
import { PageHeader } from "@/components/ui/PageHeader"
import { Section } from "@/components/ui/Section"
import { Card } from "@/components/ui/Card"
import { Label } from "@/components/ui/Label"
import { AccentLink } from "@/components/ui/AccentLink"
import { METIERS } from "@/lib/metiers"

export const metadata: Metadata = {
  title: "Métiers — Sites web, Design, Stratégie digitale",
  description: "Trois métiers exercés avec la même méthode : sites web, design et stratégie digitale.",
}

export default function MetiersPage() {
  return (
    <>
      <PageHeader
        label="Métiers"
        title="Trois métiers, une pratique."
        intro="Sites web, design, stratégie digitale. Séparés par livrables, unis par la même manière de travailler : décider avant de produire, livrer ce qui sert, mesurer ce qui compte."
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {Object.values(METIERS).map((m) => (
            <Card key={m.slug} className="flex h-full flex-col">
              <Label>{m.label}</Label>
              <h2 className="mt-4 text-[22px]">{m.title}</h2>
              <p className="mt-3 text-[15px] text-muted">{m.baseline}</p>
              <ul className="mt-5 space-y-1.5 text-[14px]">
                {m.livrables.map((l) => (
                  <li key={l.titre} className="flex gap-2">
                    <span className="text-muted">·</span>
                    <span>{l.titre}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6">
                <AccentLink href={`/metiers/${m.slug}`}>En savoir plus</AccentLink>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  )
}