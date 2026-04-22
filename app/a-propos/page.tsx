import type { Metadata } from "next"
import Image from "next/image"
import { Section } from "@/components/ui/Section"
import { Label } from "@/components/ui/Label"
import { Button } from "@/components/ui/Button"

export const metadata: Metadata = {
  title: "À propos — Cédric Fotso",
  description:
    "Freelance à Douala depuis 2015. Design, développement web, stratégie digitale. Autodidacte, 11 ans de pratique, 30+ projets livrés.",
}

const timeline = [
  {
    year: "2026",
    title: "Retour en freelance",
    desc: "Mise en pause de Tâmbour en avril 2026. Retour à l'exercice indépendant sous la marque Cédric Fotso. Certification Python obtenue (LinkedIn Learning).",
  },
  {
    year: "2023–2025",
    title: "Studio Tâmbour & UX / UI",
    desc: "Création du studio de design et développement digital pour accompagner les entreprises dans leurs plateformes et systèmes web. Formation continue en design UX / UI pour améliorer la conception d'expériences utilisateur cohérentes.",
  },
  {
    year: "2019–2022",
    title: "WordPress & marchés internationaux",
    desc: "Création de blogs, thèmes WordPress et plateformes personnalisées pour des entreprises dans plusieurs pays dont la France et le Canada. Approfondissement du développement back-end PHP et de l'architecture WordPress.",
  },
  {
    year: "2017–2019",
    title: "Premiers projets & expériences professionnelles",
    desc: "Découverte de WordPress. Parcours en entreprise : community manager, social media manager, designer graphique, puis développeur web. Ces expériences ont permis de comprendre les besoins réels des entreprises avant de travailler en indépendant.",
  },
  {
    year: "2015–2017",
    title: "Autodidacte — web & design",
    desc: "Ne pouvant pas financer une école spécialisée, formation en solo via la documentation, l'expérimentation et les projets personnels. Premiers travaux en développement web et design imprimé à Douala.",
  },
  {
    year: "2014–2018",
    title: "Université de Yaoundé 1",
    desc: "Master 1 en Géographie et cartographie. Né à Badjoun, dans l'Ouest Cameroun, arrivé à Yaoundé pour les études universitaires — c'est pendant cette période que la décision a été prise de tout consacrer au web et au design.",
  },
]

const certifications = [
  { titre: "Devenir développeur / développeuse Python", organisme: "LinkedIn Learning", annee: "Avr. 2026" },
  { titre: "Learn How to Code Course", organisme: "Codecademy", annee: "Mars 2026" },
  { titre: "UX Design Foundations", organisme: "Uxcel", annee: "Juil. 2022" },
  { titre: "Color Psychology", organisme: "Uxcel", annee: "Juil. 2022" },
  { titre: "UX Writing", organisme: "Uxcel", annee: "Juil. 2022" },
  { titre: "Design Composition", organisme: "Uxcel", annee: "Juil. 2022" },
  { titre: "Design Terminology", organisme: "Uxcel", annee: "Juil. 2022" },
  { titre: "Inbound Marketing", organisme: "HubSpot Academy", annee: "Juil. 2021" },
]

const competences = [
  "UX / UI Design",
  "Design graphique",
  "WordPress sur mesure",
  "Développement Next.js",
  "TypeScript / React",
  "Python",
  "Architecture web",
  "SEO technique",
  "Stratégie digitale",
  "Rédaction web",
  "Intelligence artificielle",
  "Identité visuelle",
]

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-0">
        <div className="site-container">
          <p className="label-caps mb-6">À propos</p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] max-w-4xl text-balance">
            Freelance à Douala,{" "}
            <span className="text-muted">à l'intersection du design, du web et de la stratégie.</span>
          </h1>
        </div>
      </section>

      {/* BIO + PHOTO + STATS */}
      <Section>
        <div className="grid gap-16 md:grid-cols-12">

          <div className="md:col-span-5 space-y-8">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[8px] bg-background-2 grayscale">
              <Image
                src="/about/portrait.jpg"
                alt="Portrait de Cédric Fotso"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 40vw, 100vw"
                priority
              />
            </div>
            <div className="grid grid-cols-2 gap-px border border-border rounded-xl overflow-hidden">
              <div className="bg-background-2 px-5 py-4">
                <p className="text-3xl font-semibold tracking-tight">11</p>
                <p className="text-xs text-muted mt-1 uppercase tracking-widest">ans de pratique</p>
              </div>
              <div className="bg-background-2 px-5 py-4">
                <p className="text-3xl font-semibold tracking-tight">30+</p>
                <p className="text-xs text-muted mt-1 uppercase tracking-widest">projets livrés</p>
              </div>
              <div className="bg-background-2 px-5 py-4">
                <p className="text-3xl font-semibold tracking-tight">5</p>
                <p className="text-xs text-muted mt-1 uppercase tracking-widest">pays clients</p>
              </div>
              <div className="bg-background-2 px-5 py-4">
                <p className="text-3xl font-semibold tracking-tight">3</p>
                <p className="text-xs text-muted mt-1 uppercase tracking-widest">métiers maîtrisés</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 space-y-6 text-[17px] leading-[1.75]">
            <p>
              Je m'appelle Cédric Fotso. Je travaille depuis Douala, au Cameroun,
              avec des structures privées et institutionnelles qui cherchent une
              exécution posée, lisible et mesurable.
            </p>
            <p>
              Originaire de Badjoun, dans l'Ouest Cameroun, je suis arrivé à Yaoundé
              pour un master en Géographie et cartographie — avant de décider de tout
              consacrer au web et au design. Autodidacte par nécessité, puis par conviction.
            </p>
            <p>
              Mon travail s'organise autour de trois métiers :{" "}
              <strong>sites web</strong>, <strong>design</strong>,{" "}
              <strong>stratégie digitale</strong>. Ils se nourrissent les uns les
              autres. Une identité sans cap produit du bruit. Un site sans design
              sert mal. Une stratégie sans exécution reste un PDF.
            </p>
            <p>
              Après avoir fondé Tâmbour — studio de design et développement digital —
              j'ai décidé en avril 2026 de mettre cette aventure en pause pour
              revenir à ce que je fais de mieux : travailler en direct, en freelance,
              avec peu de clients mais beaucoup d'exigence.
            </p>
            <p>
              Je refuse les prestations isolées où on me demande d'exécuter sans
              comprendre. Je préfère des missions courtes et denses, où je peux poser
              les bonnes questions avant d'ouvrir Figma ou VS Code.
            </p>
            <blockquote className="border-l-2 border-brand pl-6 text-[16px] text-muted italic not-italic">
              Un projet digital n'est pas seulement un site web. Les entreprises ont
              besoin de systèmes cohérents entre design, interface et technologie.
            </blockquote>
            <p>
              Si cette manière de travailler résonne avec un projet que vous portez,
              la page{" "}
              <a className="text-brand underline underline-offset-4" href="/contact">
                contact
              </a>{" "}
              est la meilleure porte d'entrée.
            </p>
          </div>

        </div>
      </Section>

      {/* COMPÉTENCES */}
<section className="bg-foreground py-20 md:py-28">
  <div className="site-container">
    <p className="text-xs font-medium uppercase tracking-widest text-white/50 mb-10">
      Compétences
    </p>
    <ul className="flex flex-wrap gap-3">
      {competences.map((c) => (
        <li
          key={c}
          className="border border-white/20 rounded-full px-4 py-2 text-sm font-medium text-white"
        >
          {c}
        </li>
      ))}
    </ul>
  </div>
</section>

      {/* PARCOURS */}
      <Section tone="muted">
        <Label>Parcours</Label>
        <ol className="mt-10 space-y-0">
          {timeline.map((t, i) => (
            <li key={t.year} className="grid md:grid-cols-12 gap-4 md:gap-10 py-8 border-t border-border">
              <div className="md:col-span-3">
                <span className="label-caps">{t.year}</span>
              </div>
              <div className="md:col-span-9">
                <p className="font-semibold text-foreground text-[17px] mb-2">{t.title}</p>
                <p className="text-muted text-[15px] leading-relaxed">{t.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* CERTIFICATIONS */}
      <Section>
        <Label>Certifications</Label>
        <ul className="mt-10 space-y-0">
          {certifications.map((c) => (
            <li
              key={c.titre}
              className="grid md:grid-cols-12 gap-2 md:gap-10 py-5 border-t border-border items-baseline"
            >
              <div className="md:col-span-7">
                <p className="font-medium text-foreground">{c.titre}</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-sm text-muted">{c.organisme}</p>
              </div>
              <div className="md:col-span-2 md:text-right">
                <span className="label-caps">{c.annee}</span>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* CTA */}
      <section className="border-t border-border py-24 md:py-32">
        <div className="site-container">
          <div className="max-w-2xl">
            <p className="label-caps mb-6">Travailler ensemble</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight mb-6">
              Un projet qui mérite une exécution rigoureuse ?
            </h2>
            <p className="text-muted text-lg mb-10">
              Disponible pour de nouveaux projets. Je réponds sous 48h ouvrées,
              en français ou en anglais, depuis Douala.
            </p>
            <Button href="/contact" variant="primary">
              Me contacter
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}