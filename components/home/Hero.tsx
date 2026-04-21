import Link from "next/link"

export function Hero() {
  return (
    <section className="site-container py-24 md:py-32">
      <div className="max-w-3xl">
        <p className="label-caps mb-6">
          Créateur de sites web &amp; Designer · Douala
        </p>
        <h1 className="text-5xl md:text-6xl font-medium tracking-tight text-foreground leading-[1.1]">
          Des sites web sur mesure,{" "}
          <span className="text-brand">pensés avant d&apos;être codés.</span>
        </h1>
        <p className="mt-6 text-[18px] text-muted leading-relaxed max-w-xl">
          J&apos;accompagne les marques qui refusent les templates et les contenus
          générés à la chaîne. Stratégie, identité, code — un seul interlocuteur,
          du brief à la mise en ligne.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-[8px] px-5 py-3 text-sm font-medium bg-brand text-white hover:bg-brand-hover transition-colors"
          >
            Démarrer un projet
          </Link>
          <Link
            href="/etudes-de-cas"
            className="inline-flex items-center justify-center rounded-[8px] px-5 py-3 text-sm font-medium border border-border text-foreground hover:bg-foreground/5 transition-colors"
          >
            Voir les projets
          </Link>
        </div>
      </div>
    </section>
  )
}