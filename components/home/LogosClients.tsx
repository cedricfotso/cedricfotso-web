export function LogosClients() {
  const clients = ["Tourismo", "Moqolo Beauté", "6ème Sens Hôtel", "Cacao Ivoire QC", "Classpro"]

  return (
    <section className="border-y border-border py-16">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-10 text-center text-xs uppercase tracking-widest text-neutral-500">
          Ils m&apos;ont fait confiance
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {clients.map((c) => (
            <li
              key={c}
              className="text-lg font-medium tracking-tight text-neutral-400 transition hover:text-white"
            >
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}