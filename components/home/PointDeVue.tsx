export function PointDeVue() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <p className="mb-6 text-sm uppercase tracking-widest text-muted">
          Mon point de vue
        </p>
        <h2 className="text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
          La majorité des sites se ressemblent parce qu'ils sont
          pensés <em className="text-muted not-italic">après</em> avoir été codés.
        </h2>
        <div className="mt-10 space-y-6 text-lg text-muted">
          <p>
            Je travaille à l'envers : on définit ce qui rend ta marque
            singulière, on en tire une direction artistique, et seulement
            ensuite on choisit les outils — souvent WordPress, parfois
            headless avec Next.js.
          </p>
          <p>
            Pas de template, pas de contenu généré sans relecture, pas de
            promesses de SEO miracle. Juste un site qui te ressemble et qui
            travaille pour toi.
          </p>
        </div>
      </div>
    </section>
  )
}