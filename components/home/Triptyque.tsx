const piliers = [
  {
    titre: "Stratégie",
    desc: "On clarifie ton positionnement, ta cible, ton offre. Avant la moindre maquette.",
  },
  {
    titre: "Direction artistique",
    desc: "Une identité visuelle singulière, pas un template Webflow recolorisé.",
  },
  {
    titre: "Développement",
    desc: "WordPress sur mesure ou Next.js headless, choisi selon ton projet — pas selon la mode.",
  },
]

export function Triptyque() {
  return (
    <section className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-12 text-sm uppercase tracking-widest text-neutral-400">
          Une méthode, trois temps
        </p>
        <ul className="grid gap-10 md:grid-cols-3">
          {piliers.map((p) => (
            <li key={p.titre} className="border-t border-border pt-6">
              <h3 className="text-xl font-semibold tracking-tight">{p.titre}</h3>
              <p className="mt-3 text-neutral-400">{p.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}