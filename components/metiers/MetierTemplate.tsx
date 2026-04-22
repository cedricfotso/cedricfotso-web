import { PageHeader } from "@/components/ui/PageHeader"
import { Section } from "@/components/ui/Section"
import { Label } from "@/components/ui/Label"
import { Button } from "@/components/ui/Button"
import type { MetierContent } from "@/lib/metiers"

import type { FeaturedProject } from "@/lib/queries" // à ajuster selon ton type réel

type Props = {
  metier?: MetierContent
  projets?: unknown[]  // accepté sans erreur TS, non utilisé pour l'instant
}


export function MetierTemplate({ metier: content }: Props) {
  if (!content) {
    return (
      <Section>
        <div className="site-container py-16">
          <p className="text-muted">Contenu du métier non configuré.</p>
        </div>
      </Section>
    )
  }

  const {
    label,
    title,
    intro,
    pourQui = [],
    livrables = [],
    methode = [],
    faq = [],
  } = content

  const ctaLabel = "Parlons de ton projet"

  return (
    <>
      <PageHeader label={label} title={title} lead={intro} />

      {(pourQui.length > 0 || livrables.length > 0) && (
        <Section>
          <div className="site-container">
            <div className="grid gap-12 md:grid-cols-2">
              {pourQui.length > 0 && (
                <div>
                  <Label>Pour qui</Label>
                  <ul className="mt-6 space-y-3">
                    {pourQui.map((item) => (
                      <li key={item} className="flex gap-3 text-foreground">
                        <span className="text-brand mt-1 shrink-0">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {livrables.length > 0 && (
                <div>
                  <Label>Livrables</Label>
                  <ul className="mt-6 space-y-4">
                    {livrables.map((item, i) => (
                      <li key={`livrable-${i}`} className="flex gap-3">
                        <span className="text-brand mt-1 shrink-0">—</span>
                        <div>
                          <p className="font-medium text-foreground">{item.titre}</p>
                          <p className="text-muted text-sm mt-0.5">{item.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </Section>
      )}

      {methode.length > 0 && (
        <Section tone="muted">
          <div className="site-container">
            <Label>Méthode</Label>
            <ol className="mt-8 space-y-6">
              {methode.map((etape, i) => (
                <li key={`etape-${i}`} className="flex gap-6 items-start">
                  <span className="text-[13px] font-medium text-muted tabular-nums w-6 shrink-0 pt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-medium text-foreground">{etape.etape}</p>
                    <p className="text-muted text-sm mt-1">{etape.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Section>
      )}

      {faq.length > 0 && (
        <Section>
          <div className="site-container">
            <Label>Questions fréquentes</Label>
            <dl className="mt-8 space-y-6 max-w-2xl">
              {faq.map((item) => (
                <div key={item.q}>
                  <dt className="font-medium text-foreground">{item.q}</dt>
                  <dd className="mt-1 text-muted leading-relaxed">{item.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Section>
      )}

      <Section tone="muted">
        <div className="site-container text-center py-8">
          <p className="text-lg font-medium text-foreground mb-6">
            Envie d&apos;avancer ?
          </p>
          <Button href="/contact">{ctaLabel}</Button>
        </div>
      </Section>
    </>
  )
}