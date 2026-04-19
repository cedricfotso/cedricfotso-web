import Link from "next/link"
import { PageHeader } from "@/components/ui/PageHeader"
import { Section } from "@/components/ui/Section"

export type MetierContent = {
  eyebrow: string
  title: string
  lead: string
  pourQui: string[]
  livrables: string[]
  methode: Array<{ titre: string; desc: string }>
  ctaLabel?: string
}

type Props = {
  content?: MetierContent
}

export function MetierTemplate({ content }: Props) {
  if (!content) {
    return (
      <Section>
        <p className="text-neutral-500">
          Contenu du métier non configuré.
        </p>
      </Section>
    )
  }

  const {
    eyebrow,
    title,
    lead,
    pourQui = [],
    livrables = [],
    methode = [],
    ctaLabel = "Parlons de ton projet",
  } = content

  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} lead={lead} />

      {(pourQui.length > 0 || livrables.length > 0) && (
        <Section bordered>
          <div className="grid gap-16 md:grid-cols-2">
            {pourQui.length > 0 && (
              <div>
                <h2 className="text-sm uppercase tracking-widest text-neutral-400">
                  Pour qui
                </h2>
                <ul className="mt-6 space-y-3 text-lg text-neutral-200">
                  {pourQui.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-neutral-500">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {livrables.length > 0 && (
              <div>
                <h2 className="text-sm uppercase tracking-widest text-neutral-400">
                  Livrables
                </h2>
                <ul className="mt-6 space-y-3 text-lg text-neutral-200">
                  {livrables.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-neutral-500">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Section>
      )}

      {methode.length > 0 && (
        <Section bordered>
          <h2 className="mb-12 text-sm uppercase tracking-widest text-neutral-400">
            Méthode
          </h2>
          <ol className="grid gap-8 md:grid-cols-3">
            {methode.map((etape, i) => (
              <li key={etape.titre} className="border-t border-border pt-6">
                <span className="mb-3 block text-sm text-neutral-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-semibold tracking-tight">
                  {etape.titre}
                </h3>
                <p className="mt-3 text-neutral-400">{etape.desc}</p>
              </li>
            ))}
          </ol>
        </Section>
      )}

      <Section bordered>
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <p className="text-2xl font-semibold tracking-tight md:text-3xl">
            Envie d&apos;avancer ?
          </p>
          <Link
            href="/contact"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-neutral-200"
          >
            {ctaLabel}
          </Link>
        </div>
      </Section>
    </>
  )
}