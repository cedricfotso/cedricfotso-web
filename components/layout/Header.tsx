"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Container } from "./Container"
import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/utils"

// 1. Modification de la structure des liens pour inclure les sous-menus avec descriptions
const links = [
    { 
        href: "/metiers", 
        label: "Métiers",
        subLinks: [
            // On remplace par les chemins qui existent réellement dans ton dossier 'app'
            { href: "/metiers/sites-web", label: "Sites Web", desc: "Applications métiers & plateformes fluides." },
            { href: "/metiers/design", label: "Design", desc: "Interfaces UI/UX & identité visuelle." },
            { href: "/metiers/strategie", label: "Stratégie", desc: "Architecture & conseil digital." }
        ]
    },
    { href: "/etudes-de-cas", label: "Études de cas" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/ecrits", label: "Écrits" },
    { href: "/a-propos", label: "À propos" },
]

export function Header() {
    const pathname = usePathname()
    const [open, setOpen] = useState(false)
    
    return (
        <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
            <Container className="flex h-16 items-center justify-between">
                <Link href="/" className="text-[15px] font-medium tracking-[-0.01em] text-foreground" onClick={() => setOpen(false)}>
                    <Image 
                        src="/images/cedricfotso.svg" 
                        alt="Cédric Fotso" 
                        width={130}
                        height={130}
                    />
                </Link>
                
                <nav className="hidden items-center md:flex">
                    {links.map((l) => {
                        const active = pathname === l.href || pathname.startsWith(l.href + "/")
                        
                        // S'il y a un sous-menu, on gère la logique de Dropdown (survol)
                        if (l.subLinks) {
                            return (
                                <div key={l.href} className="group relative py-6 px-3">
                                    <Link
                                        href={l.href}
                                        className={cn("text-sm transition-colors", active ? "text-foreground" : "text-muted group-hover:text-foreground")}
                                    >
                                        {l.label}
                                    </Link>
                                    
                                    {/* Le menu déroulant - Style soft/minimaliste */}
                                    <div className="absolute left-0 top-full hidden w-64 translate-y-2 flex-col rounded-2xl border border-border bg-background/95 p-2 shadow-sm backdrop-blur-xl transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-hover:flex opacity-0">
                                        {l.subLinks.map(sub => (
                                            <Link 
                                                key={sub.href} 
                                                href={sub.href} 
                                                className="flex flex-col rounded-xl p-3 hover:bg-neutral-100/5 transition-colors"
                                            >
                                                <span className="text-sm font-medium text-foreground">{sub.label}</span>
                                                <span className="mt-0.5 text-xs text-muted leading-relaxed">{sub.desc}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )
                        }

                        // S'il n'y a pas de sous-menu, on affiche un lien normal
                        return (
                            <Link
                                key={l.href}
                                href={l.href}
                                className={cn("text-sm transition-colors py-6 px-3", active ? "text-foreground" : "text-muted hover:text-foreground")}
                            >
                                {l.label}
                            </Link>
                        )
                    })}
                </nav>

                <Button href="/contact" variant="primary" className="hidden md:inline-flex">Me contacter</Button>

                <button type="button" aria-label="Menu" className="md:hidden text-sm p-2 -mr-2 text-foreground" onClick={() => setOpen(!open)}>
                    {open ? "Fermer" : "Menu"}
                </button>
            </Container>

            {/* Menu Mobile */}
            {open && (
                <div className="border-t border-border bg-background md:hidden absolute w-full h-[calc(100vh-4rem)] overflow-y-auto">
                    <Container className="py-6">
                        <nav className="flex flex-col gap-6">
                            {links.map((l) => (
                                <div key={l.href} className="flex flex-col gap-3">
                                    <Link 
                                        href={l.href} 
                                        onClick={() => setOpen(false)} 
                                        className="text-lg font-medium text-foreground"
                                    >
                                        {l.label}
                                    </Link>
                                    
                                    {/* Sous-liens en version mobile (indentés) */}
                                    {l.subLinks && (
                                        <div className="flex flex-col gap-3 pl-4 border-l-2 border-border/50 ml-1">
                                            {l.subLinks.map(sub => (
                                                <Link 
                                                    key={sub.href} 
                                                    href={sub.href} 
                                                    onClick={() => setOpen(false)} 
                                                    className="text-sm text-muted hover:text-foreground transition-colors"
                                                >
                                                    {sub.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <div className="pt-6 mt-2 border-t border-border">
                                <Link href="/contact" onClick={() => setOpen(false)} className="text-base font-medium text-[#D85A30]">
                                    Me contacter →
                                </Link>
                            </div>
                        </nav>
                    </Container>
                </div>
            )}
        </header>
    )
}