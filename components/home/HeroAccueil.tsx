import Link from "next/link"

export function HeroAccueil() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-5xl px-6">
        <p className="mb-6 text-sm uppercase tracking-widest text-neutral-400">
          Designer digital · Développeur WordPress · Douala
        </p>
        <h1 className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
          Des sites web sur mesure,
          <br />
          pensés <span className="text-neutral-400">avant</span> d&apos;être codés.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-neutral-300 md:text-xl">
          J&apos;accompagne les marques qui refusent les templates et les contenus générés
          à la chaîne. Stratégie, identité, code — un seul interlocuteur, du brief à la mise en ligne.
        </p>
        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-neutral-200"
          >
            Démarrer un projet
          </Link>
          <Link
            href="/projets"
            className="rounded-full border border-border px-6 py-3 text-sm font-medium text-white transition hover:bg-white/5"
          >
            Voir les projets
          </Link>
        </div>
      </div>
    </section>
  )
}