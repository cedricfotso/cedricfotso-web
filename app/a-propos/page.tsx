import Link from "next/link";

const timeline = [
  {
    title: "Origines",
    text: "Je grandis à Bandjoun dans l'Ouest Cameroun avant de partir à Yaoundé pour poursuivre mes études universitaires.",
  },
  {
    title: "Université",
    text: "Je poursuis des études de géographie avant de décider de me consacrer au web et au design.",
  },
  {
    title: "Auto-apprentissage",
    text: "Ne pouvant financer une école spécialisée, je me forme seul grâce à la documentation, l'expérimentation et les projets personnels.",
  },
  {
    title: "2018 — Premiers projets",
    text: "Je découvre WordPress et commence à développer mes premières plateformes web pour des clients locaux.",
  },
  {
    title: "Expériences professionnelles",
    text: "Community manager, social media manager, designer graphique puis développeur web. Ces expériences m'ont permis de comprendre les besoins réels des entreprises.",
  },
  {
    title: "Ouverture internationale",
    text: "Création de sites et plateformes pour des entreprises en France, au Canada, aux États-Unis et à Dubaï.",
  },
  {
    title: "Depuis 2023 — UX / UI",
    text: "Formation continue en design UX et UI pour améliorer la conception d'expériences utilisateur cohérentes.",
  },
  {
    title: "Aujourd'hui",
    text: "Je conçois identités visuelles, interfaces et plateformes web hautement personnalisées.",
  },
];

const portee = [
  {
    title: "Sites web",
    text: "Vitrines, e-commerce, plateformes institutionnelles, systèmes multi-sites.",
  },
  {
    title: "Identités visuelles",
    text: "Logos, chartes graphiques, systèmes visuels complets.",
  },
  {
    title: "Supports graphiques",
    text: "Flyers, affiches, visuels réseaux sociaux, supports print et digital.",
  },
  {
    title: "Interfaces & produits",
    text: "UX/UI Design, prototypes, architectures d'information.",
  },
];

const clients = [
  { name: "Tourismo Cameroun", location: "Cameroun" },
  { name: "Groupe ATP", location: "Cameroun" },
  { name: "Moqolo Beauté", location: "Cameroun" },
  { name: "6ème Sens Hôtel", location: "Cameroun" },
  { name: "Anna Jewelry Box", location: "USA / Canada" },
  { name: "Nayva Studios", location: "Montréal" },
  { name: "Nayah", location: "Dubaï" },
  { name: "Ambitio Invicta", location: "International" },
];

const expertise = [
  {
    category: "Développement",
    items: ["WordPress avancé", "PHP", "HTML", "CSS", "JavaScript", "React", "Next.js", "GraphQL"],
  },
  {
    category: "Design",
    items: ["UX / UI Design", "Design graphique", "Figma", "Adobe Creative Suite"],
  },
  {
    category: "Stratégie",
    items: ["SEO", "GEO", "Architecture de l'information", "Rédaction web"],
  },
  {
    category: "Intégrations",
    items: ["WooCommerce", "Pods", "Mobile Money", "Paiements internationaux", "APIs tierces", "IA"],
  },
];

export default function AProposPage() {
  return (
    <main className="bg-white text-[#0A0A0A]">
      {/* HERO */}
      <section className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        <p className="text-sm font-medium text-[#D85A30] tracking-widest uppercase mb-6">
          À propos
        </p>
        <h1 className="text-5xl md:text-6xl font-medium tracking-tight leading-[1.1] mb-8">
          Créateur de sites Web & Designer.<br />
          <span className="signature text-[#D85A30]">Depuis 2018.</span>
        </h1>
        <p className="text-lg text-neutral-600 max-w-2xl leading-relaxed">
          J&apos;accompagne des entreprises en Afrique, en France, au Canada, aux États-Unis et à Dubaï dans la conception de leurs systèmes digitaux.
        </p>
      </section>

      {/* INTRO / CADRE */}
      <section className="border-t border-[#F0EDE8]">
        <div className="max-w-3xl mx-auto px-6 py-24">
          <p className="text-2xl md:text-3xl font-medium tracking-tight leading-snug mb-8">
            Mon travail s&apos;étend du logo à la mise en ligne, du wireframe à la stratégie SEO.
          </p>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Je ne sépare pas ces disciplines — elles composent un seul métier : concevoir des <span className="text-[#D85A30] font-medium">systèmes cohérents</span> entre design, interface et technologie.
          </p>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-[#FAFAF9] border-y border-[#F0EDE8]">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">
            Parcours
          </p>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-16 max-w-2xl">
            Une progression construite entre apprentissage et pratique.
          </h2>
          <div className="space-y-10">
            {timeline.map((item, idx) => (
              <div
                key={idx}
                className="grid md:grid-cols-[120px_1fr] gap-3 md:gap-10"
              >
                <div className="text-xs font-bold uppercase tracking-widest text-[#D85A30] pt-1">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTÉE DU TRAVAIL */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">
          Portée du travail
        </p>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-16 max-w-2xl">
          Quatre disciplines, un seul métier.
        </h2>
        <div className="grid md:grid-cols-2 gap-px bg-[#F0EDE8] border border-[#F0EDE8]">
          {portee.map((p, idx) => (
            <div key={idx} className="bg-white p-10">
              <p className="text-xs font-bold text-[#D85A30] mb-4">
                {String(idx + 1).padStart(2, "0")}
              </p>
              <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
              <p className="text-neutral-600 leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CLIENTS */}
      <section className="bg-[#FAFAF9] border-y border-[#F0EDE8]">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">
            Ils m&apos;ont fait confiance
          </p>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-16 max-w-2xl">
            Une sélection de projets réalisés pour des entreprises en Afrique et à l&apos;international.
          </h2>
          <div className="grid md:grid-cols-2 gap-px bg-[#F0EDE8] border border-[#F0EDE8]">
            {clients.map((c, idx) => (
              <div
                key={idx}
                className="bg-white p-8 flex items-center justify-between"
              >
                <span className="text-lg font-semibold text-[#0A0A0A]">
                  {c.name}
                </span>
                <span className="text-xs font-medium uppercase tracking-widest text-neutral-400">
                  {c.location}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/projets"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#D85A30] hover:text-[#C14E27] transition-colors"
            >
              Voir toutes les réalisations
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">
          Expertise technique
        </p>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-16 max-w-2xl">
          Les outils et disciplines que je pratique au quotidien.
        </h2>
        <div className="space-y-12">
          {expertise.map((e) => (
            <div
              key={e.category}
              className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-10 pb-10 border-b border-[#F0EDE8] last:border-0"
            >
              <div className="text-xs font-bold uppercase tracking-widest text-[#D85A30] pt-1">
                {e.category}
              </div>
              <div className="flex flex-wrap gap-2">
                {e.items.map((i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-[#FAFAF9] border border-[#F0EDE8] rounded-full text-sm font-medium text-[#0A0A0A]"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VISION */}
      <section className="bg-[#FAFAF9] border-y border-[#F0EDE8]">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-6">
            Vision
          </p>
          <p className="text-2xl md:text-3xl font-medium tracking-tight leading-snug">
            Un projet digital n&apos;est pas seulement un site web. Les entreprises ont besoin de systèmes cohérents entre design, interface et technologie.
          </p>
        </div>
      </section>

      {/* VERSET */}
      <section className="border-b border-[#F0EDE8]">
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <p className="text-lg md:text-xl text-neutral-600 italic leading-relaxed mb-4">
            Fais de l&apos;Éternel tes délices, et il te donnera ce que ton cœur désire. Recommande ton sort à l&apos;Éternel, mets en lui ta confiance, et il agira.
          </p>
          <p className="text-sm font-semibold text-[#D85A30] tracking-widest uppercase">
            Psaumes 37 : 4-5
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">
          Un projet à construire ensemble ?
        </h2>
        <Link
          href="/contact"
          className="inline-block bg-[#D85A30] text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-[#C14E27] transition-colors"
        >
          Prendre contact
        </Link>
      </section>
    </main>
  );
}