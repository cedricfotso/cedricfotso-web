import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Section } from "@/components/ui/Section"
import {
  getAllProjectSlugs,
  getProjectBySlug,
} from "@/lib/queries"

export const revalidate = 300
export const dynamicParams = true

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = await getAllProjectSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const projet = await getProjectBySlug(slug)
  if (!projet) return { title: "Projet introuvable" }

  return {
    title: projet.title,
    description: projet.tagline ?? undefined,
    openGraph: {
      title: projet.title,
      description: projet.tagline ?? undefined,
      type: "article",
    },
  }
}

export default async function ProjetPage({ params }: Props) {
  const { slug } = await params
  const projet = await getProjectBySlug(slug)
  if (!projet) notFound()

  return (
    <main>
      <header className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-4xl px-6">
          <Link
            href="/projets"
            className="mb-8 inline-block text-sm text-neutral-400 underline-offset-4 hover:text-white hover:underline"
          >
            ← Tous les projets
          </Link>

          {projet.secteur ? (
            <p className="mb-6 text-sm uppercase tracking-widest text-neutral-400">
              {projet.secteur}
              {projet.marche ? ` · ${projet.marche}` : ""}
            </p>
          ) : null}

          <h1 className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            {projet.title}
          </h1>

          {projet.tagline ? (
            <p className="mt-6 text-lg text-neutral-300 md:text-xl">
              {projet.tagline}
            </p>
          ) : null}
        </div>
      </header>

      <Section bordered>
        <div className="mx-auto max-w-3xl space-y-8 text-lg text-neutral-300">
          <p>
            Étude de cas en cours de rédaction. Les champs détaillés
            (contexte, défis, solutions, résultats) seront branchés dès que
            les champs Pods correspondants seront exposés via WPGraphQL.
          </p>

          {projet.lienProjet ? (
            <p>
              <a
                href={projet.lienProjet}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-white"
              >
                Voir le site en ligne ↗
              </a>
            </p>
          ) : null}
        </div>
      </Section>

      <Section bordered>
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <p className="text-2xl font-semibold tracking-tight md:text-3xl">
            Un projet similaire en tête ?
          </p>
          <Link
            href="/contact"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-neutral-200"
          >
            Discutons-en
          </Link>
        </div>
      </Section>
    </main>
  )
}