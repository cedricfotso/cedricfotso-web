"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Container } from "./Container"
import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/utils"

const links = [
  {
    href: "/metiers",
    label: "Métiers",
    subLinks: [
      { href: "/metiers/sites-web",  label: "Sites Web",        desc: "Vitrines, CMS, plateformes." },
      { href: "/metiers/design",     label: "Design",           desc: "Interfaces UI/UX & identité visuelle." },
      { href: "/metiers/wordpress",  label: "WordPress",        desc: "Sur mesure, sans page builder." },
      { href: "/metiers/headless",   label: "Headless / Next.js", desc: "Front moderne, back familier." },
      { href: "/metiers/ecommerce",  label: "E-commerce",       desc: "WooCommerce ou Next.js+Stripe." },
      { href: "/metiers/strategie",  label: "Stratégie",        desc: "Architecture & conseil digital." },
    ],
  },
  { href: "/etudes-de-cas", label: "Études de cas" },
  { href: "/ecrits",        label: "Écrits" },
  { href: "/a-propos",      label: "À propos" },
]

export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link href="/" onClick={() => setOpen(false)} className="shrink-0">
                <image
                src="/images/cedricfotso.svg"
                alt="Cédric Fotso"
                width={130}
                height={130}
                />
          </Link>

          {/* Nav desktop */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => {
              const active = pathname === l.href || pathname.startsWith(l.href + "/")

              if (l.subLinks) {
                return (
                  <div key={l.href} className="relative group">
                    <button
                      className={cn(
                        "px-3 py-2 text-sm rounded-md transition-colors",
                        active ? "text-foreground font-medium" : "text-muted hover:text-foreground",
                      )}
                    >
                      {l.label}
                    </button>
                    {/* Dropdown */}
                    <div className="absolute left-0 top-full pt-2 hidden group-hover:block z-50">
                      <div className="bg-background border border-border rounded-xl shadow-lg p-2 w-56">
                        {l.subLinks.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="block px-3 py-2 rounded-lg hover:bg-foreground/5 transition-colors"
                          >
                            <span className="text-sm font-medium text-foreground">{sub.label}</span>
                            <span className="block text-xs text-muted mt-0.5">{sub.desc}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              }

              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "px-3 py-2 text-sm rounded-md transition-colors",
                    active ? "text-foreground font-medium" : "text-muted hover:text-foreground",
                  )}
                >
                  {l.label}
                </Link>
              )
            })}
          </nav>

          {/* CTA desktop */}
          <div className="hidden md:block">
            <Button href="/contact">Me contacter</Button>
          </div>

          {/* Burger mobile */}
          <button
            className="md:hidden text-sm font-medium text-foreground"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {open ? "Fermer" : "Menu"}
          </button>
        </div>
      </Container>

      {/* Menu mobile */}
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <Container>
            <nav className="py-6 flex flex-col gap-1">
              {links.map((l) => (
                <div key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-lg font-medium text-foreground"
                  >
                    {l.label}
                  </Link>
                  {l.subLinks && (
                    <div className="pl-4 flex flex-col gap-1 mb-2">
                      {l.subLinks.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setOpen(false)}
                          className="text-sm text-muted hover:text-foreground transition-colors py-1"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-4 text-base font-medium text-brand"
              >
                Me contacter →
              </Link>
            </nav>
          </Container>
        </div>
      )}
    </header>
  )
}