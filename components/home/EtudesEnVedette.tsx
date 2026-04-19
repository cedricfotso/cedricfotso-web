import Link from "next/link"
import { FadeIn } from "@/components/motion/FadeIn"
import type { FeaturedProject } from "@/lib/queries"

type Props = {
  projets: FeaturedProject[]
}

export function EtudesEnVedette({ projets }: Props) {
  if (!projets?.length) {
    return (
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6 text-center text-neutral-500">
          Connexion à la base de données en cours ou indisponible.
        </div>
      </section>
    )
  }

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 flex items-end justify-between gap-6">
          <h2 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            Études de cas
          </h2>
          <Link
            href="/projets"
            className="text-sm text-neutral-400 underline-offset-4 hover:text-white hover:underline"
          >
            Tous les projets →
          </Link>
        </div>

        <ul className="grid gap-6 md:grid-cols-2">
          {projets.map((p, i) => (
            <FadeIn key={p.slug} delay={i * 0.05}>
              <Link
                href={`/projets/${p.slug}`}
                className="group block rounded-2xl border border-border p-8 transition hover:bg-white/5"
              >
                {p.secteur ? (
                  <p className="mb-4 text-xs uppercase tracking-widest text-neutral-500">
                    {p.secteur}
                  </p>
                ) : null}
                <h3 className="text-2xl font-semibold tracking-tight transition group-hover:text-white">
                  {p.title}
                </h3>
                {p.tagline ? (
                  <p className="mt-3 text-neutral-400">{p.tagline}</p>
                ) : null}
                <span className="mt-6 inline-block text-sm text-neutral-500 transition group-hover:text-white">
                  Lire l&apos;étude →
                </span>
              </Link>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  )
}