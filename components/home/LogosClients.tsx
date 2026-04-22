import Image from "next/image"

const clients = [
  { name: "Tourismo",        logo: "/clients/tourismo.svg"        },
  { name: "Moqolo Beauté",   logo: "/clients/moqolo-beaute.svg"   },
  { name: "6ème Sens Hôtel", logo: "/clients/6eme-sens-hotel.svg" },
  { name: "Cacao Ivoire QC", logo: "/clients/cacao-ivoire-qc.svg" },
  { name: "Classpro",        logo: "/clients/classpro.svg"        },
]

export function LogosClients() {
  return (
    <section className="border-y border-border py-16">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-10 text-center text-xs uppercase tracking-widest text-muted">
          Ils m&apos;ont fait confiance
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {clients.map((c) => (
            <li key={c.name}>
              <Image
                src={c.logo}
                alt={c.name}
                width={120}
                height={40}
                className="h-8 w-auto object-contain opacity-50 transition hover:opacity-100"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}