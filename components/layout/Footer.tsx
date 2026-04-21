import Link from "next/link"
import { Container } from "./Container"
import { Label } from "@/components/ui/Label"

const groups = [
  {
    title: "Navigation",
    items: [
      { href: "/",          label: "Accueil" },
      { href: "/metiers",   label: "Métiers" },
      { href: "/a-propos",  label: "À propos" },
      { href: "/contact",   label: "Contact" },
    ],
  },
  {
    title: "Métiers",
    items: [
      { href: "/metiers/sites-web",  label: "Sites web" },
      { href: "/metiers/design",     label: "Design" },
      { href: "/metiers/wordpress",  label: "WordPress" },
      { href: "/metiers/headless",   label: "Headless / Next.js" },
      { href: "/metiers/ecommerce",  label: "E-commerce" },
      { href: "/metiers/strategie",  label: "Stratégie" },
    ],
  },
  {
    title: "Travaux",
    items: [
      { href: "/etudes-de-cas", label: "Études de cas" },
      { href: "/ecrits",        label: "Écrits" },
    ],
  },
  {
    title: "Contact",
    items: [
      { href: "mailto:mr@cedricfotso.com",                    label: "mr@cedricfotso.com" },
      { href: "https://github.com/cedricfotso",               label: "GitHub" },
      { href: "https://www.linkedin.com/in/cedricaimefotso",  label: "LinkedIn" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <Container>
        <div className="py-16 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {groups.map((g) => (
            <div key={g.title}>
              <Label>{g.title}</Label>
              <ul className="mt-4 space-y-2">
                {g.items.map((it) => (
                  <li key={it.href}>
                    <Link
                      href={it.href}
                      className="text-sm text-muted hover:text-foreground transition-colors"
                    >
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border py-6 flex flex-col sm:flex-row justify-between gap-2">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Cédric Fotso. Douala, Cameroun.
          </p>
          <p className="text-xs text-muted">Site conçu et développé en interne.</p>
        </div>
      </Container>
    </footer>
  )
}