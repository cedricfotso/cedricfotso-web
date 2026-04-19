import Link from "next/link"

export function CtaFinal() {
  return (
    <section className="border-t border-border py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
          Un projet web qui mérite mieux qu&apos;un template ?
        </h2>
        <p className="mt-6 text-lg text-neutral-300">
          Parlons-en. Je réponds sous 24h, en français ou en anglais,
          depuis Douala — pour des clients partout dans le monde.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-neutral-200"
          >
            Démarrer un projet
          </Link>
          <Link
            href="/offre"
            className="rounded-full border border-border px-6 py-3 text-sm font-medium text-white transition hover:bg-white/5"
          >
            Voir mon offre
          </Link>
        </div>
      </div>
    </section>
  )
}