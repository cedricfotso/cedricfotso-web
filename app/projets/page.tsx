import Link from "next/link"
import { getAllProjects } from "@/lib/queries"

export const revalidate = 300

export const metadata = {
  title: "Projets",
  description:
    "Sélection de projets web — sites vitrines, e-commerce et plateformes — conçus sur mesure pour des marques en Afrique, Europe et Amérique du Nord.",
}

export default async function ProjetsPage() {
  const projets = await getAllProjects()

  return (
    <main className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-6xl px-6">
        <header className="mb-16 max-w-3xl">
          <p className="mb-6 text-sm uppercase tracking-widest text-neutral-400">
            Projets
          </p>
          <h1 className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Des sites pensés avant d&apos;être codés.
          </h1>
          <p className="mt-6 text-lg text-neutral-300">
            Sélection de travaux récents — vitrines, e-commerce, plateformes métier.
            Chaque projet commence par une stratégie, pas par un template.
          </p>
        </header>

        {projets.length === 0 ? (
          <p className="py-24 text-center text-neutral-500">
            Connexion à la base de données en cours ou indisponible.
          </p>
        ) : (
          <ul className="grid gap-6 md:grid-cols-2">
            {projets.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/projets/${p.slug}`}
                  className="group block rounded-2xl border border-border p-8 transition hover:bg-white/5"
                >
                  {p.secteur ? (
                    <p className="mb-4 text-xs uppercase tracking-widest text-neutral-500">
                      {p.secteur}
                      {p.marche ? ` · ${p.marche}` : ""}
                    </p>
                  ) : null}
                  <h2 className="text-2xl font-semibold tracking-tight transition group-hover:text-white">
                    {p.title}
                  </h2>
                  {p.tagline ? (
                    <p className="mt-3 text-neutral-400">{p.tagline}</p>
                  ) : null}
                  <span className="mt-6 inline-block text-sm text-neutral-500 transition group-hover:text-white">
                    Voir le projet →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  )
}