"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { Container } from "./Container"
import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/utils"

const links = [
  {
    href: "/metiers",
    label: "Métiers",
    subLinks: [
      { href: "/metiers/sites-web",  label: "Sites Web",          desc: "Vitrines, CMS, plateformes." },
      { href: "/metiers/design",     label: "Design",             desc: "Interfaces UI/UX & identité visuelle." },
      { href: "/metiers/wordpress",  label: "WordPress",          desc: "Sur mesure, sans page builder." },
      { href: "/metiers/headless",   label: "Headless / Next.js", desc: "Front moderne, back familier." },
      { href: "/metiers/ecommerce",  label: "E-commerce",         desc: "WooCommerce ou Next.js+Stripe." },
      { href: "/metiers/strategie",  label: "Stratégie",          desc: "Architecture & conseil digital." },
    ],
  },
  { href: "/etudes-de-cas", label: "Études de cas" },
  { href: "/ecrits",        label: "Écrits" },
  { href: "/a-propos",      label: "À propos" },
]

export function Header() {
  const pathname = usePathname()
  const router = useRouter() // AJOUT : Routeur manuel pour contourner le bug
  const [open, setOpen] = useState(false)

  // Empêcher la page de défiler quand le menu mobile est ouvert
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  // AJOUT : Fonction pour gérer la navigation mobile sans faire crasher Next.js
  const handleMobileNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault() // On stoppe le comportement natif
    setOpen(false)     // On ferme le menu
    router.push(href)  // On navigue manuellement via le hook
  }

  return (
    <header className="sticky top-0 z-[100] border-b border-border bg-white backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link 
            href="/" 
            onClick={() => setOpen(false)}
            className="shrink-0 rounded-md focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none"
          >
            <Image
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
                        "focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none",
                        active ? "text-foreground font-medium" : "text-muted hover:text-foreground",
                      )}
                    >
                      {l.label}
                    </button>

                    {/* Dropdown */}
                    <div className="absolute left-0 top-full pt-2 hidden group-hover:block z-[110]">
                      <div className="absolute -top-2 left-0 right-0 h-4 bg-transparent" />
                      
                      <div className="bg-white border border-border rounded-xl shadow-lg p-2 w-56">
                        {l.subLinks.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="block px-3 py-2 rounded-lg hover:bg-brand-soft transition-colors group/item"
                          >
                            <span className="text-sm font-medium text-foreground group-hover/item:text-brand transition-colors">
                              {sub.label}
                            </span>
                            <span className="block text-xs text-muted mt-0.5">
                              {sub.desc}
                            </span>
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
                    "focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none",
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
            className="md:hidden text-sm font-medium text-foreground px-2 py-1 rounded-md focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {open ? "Fermer" : "Menu"}
          </button>
        </div>
      </Container>

      {/* Menu mobile */}
      {open && (
        <>
          {/* Overlay gris derrière le menu */}
          <div 
            className="fixed inset-0 top-16 z-[105] bg-foreground/10 backdrop-blur-sm md:hidden" 
            onClick={() => setOpen(false)}
          />
          
          {/* Contenu du Menu mobile */}
          <div className="absolute top-16 left-0 right-0 z-[110] md:hidden border-t border-border bg-white/95 backdrop-blur shadow-xl pb-6 rounded-b-2xl">
            <Container>
              <nav className="py-6 flex flex-col gap-1">
                {links.map((l) => (
                  <div key={l.href}>
                    {/* Remplacement par une balise <a> et handleMobileNav */}
                    <a
                      href={l.href}
                      onClick={(e) => handleMobileNav(e, l.href)}
                      className="block py-2 text-lg font-medium text-foreground focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none rounded-md"
                    >
                      {l.label}
                    </a>
                    {l.subLinks && (
                      <div className="pl-4 flex flex-col gap-1 mb-2">
                        {l.subLinks.map((sub) => (
                          <a
                            key={sub.href}
                            href={sub.href}
                            onClick={(e) => handleMobileNav(e, sub.href)}
                            className="text-sm text-muted hover:text-foreground transition-colors py-1 focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none rounded-md"
                          >
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <a
                  href="/contact"
                  onClick={(e) => handleMobileNav(e, "/contact")}
                  className="mt-4 inline-block text-base font-medium text-brand focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none rounded-md"
                >
                  Me contacter →
                </a>
              </nav>
            </Container>
          </div>
        </>
      )}
    </header>
  )
}