import Link from "next/link"

export function CtaFinal() {
  return (
    <section className="border-t border-border py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
          Un projet web qui mérite mieux qu&apos;un template ?
        </h2>
        {/* THEME-01 fix : text-neutral-300 → text-muted */}
        <p className="mt-6 text-lg text-muted">
          Parlons-en. Je réponds sous 48h ouvrées, en français ou en anglais,
          depuis Douala — pour des clients partout dans le monde.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {/* THEME-01 fix : bouton primaire — bg-white text-black invisible sur fond blanc
              → bg-foreground text-background (s'adapte au thème) */}
          <Link
            href="/contact"
            className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:opacity-80"
          >
            Démarrer un projet
          </Link>
          {/* BUG-03 fix : /offre → /metiers (temporaire jusqu'à création de la page /offre)
              THEME-01 fix : text-white hover:bg-white/5 → text-foreground hover:bg-foreground/5 */}
          <Link
            href="/metiers"
            className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition hover:bg-foreground/5"
          >
            Voir mon offre
          </Link>
        </div>
      </div>
    </section>
  )
}