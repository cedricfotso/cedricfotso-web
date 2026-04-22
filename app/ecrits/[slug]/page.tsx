import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Section } from "@/components/ui/Section"
import { getPostBySlug } from "@/lib/queries"
import { formatDateFR, stripHtml, truncate } from "@/lib/utils"

export const revalidate = 300

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const p = await getPostBySlug(slug)
  if (!p) return { title: "Article introuvable" }
  const description = truncate(stripHtml(p.excerpt ?? p.content ?? ""), 160)
  return {
    title: p.title,
    description,
    openGraph: {
      title: p.title,
      description,
      type: "article",
      images: p.featuredImage?.url ? [p.featuredImage.url] : undefined,
    },
  }
}

export default async function EcritPage({ params }: Props) {
  const { slug } = await params
  const p = await getPostBySlug(slug)
  if (!p) notFound()

  const articleHtml = { __html: p.content ?? "" }

  return (
    <main>
      <header className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="mx-auto max-w-3xl px-6">
          <Link
            href="/ecrits"
            className="mb-8 inline-block text-sm text-muted underline-offset-4 hover:text-foreground hover:underline"
          >
            ← Tous les écrits
          </Link>
          {p.date ? (
            <p className="mb-6 text-sm uppercase tracking-widest text-muted">
              <time dateTime={p.date}>{formatDateFR(p.date)}</time>
            </p>
          ) : null}
          <h1 className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
            {p.title}
          </h1>
          {p.excerpt ? (
            <p className="mt-6 text-lg text-muted md:text-xl">
              {stripHtml(p.excerpt)}
            </p>
          ) : null}
        </div>
      </header>

      {p.featuredImage?.url ? (
        <div className="mx-auto mb-16 max-w-5xl px-6">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-background-2">
            <Image
              src={p.featuredImage.url}
              alt={p.featuredImage.alt}
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      ) : null}

      <Section>
        <article
          className="prose-cf mx-auto max-w-3xl"
          dangerouslySetInnerHTML={articleHtml}
        />
      </Section>
    </main>
  )
}