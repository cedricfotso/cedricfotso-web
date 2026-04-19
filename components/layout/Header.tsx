"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Container } from "./Container"
import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/utils"

const links = [
	{ href: "/metiers", label: "Métiers" },
	{ href: "/etudes-de-cas", label: "Études de cas" },
	{ href: "/portfolio", label: "Portfolio" },
	{ href: "/ecrits", label: "Écrits" },
	{ href: "/a-propos", label: "À propos" },
]

export function Header() {
	const pathname = usePathname()
	const [open, setOpen] = useState(false)
	return (
		<header className="sticky top-0 z-40 border-b border-border bg-background-1/90 backdrop-blur">
			<Container className="flex h-16 items-center justify-between">
				<Link href="/" className="text-[15px] font-medium tracking-[-0.01em] text-foreground" onClick={() => setOpen(false)}>
					Cédric Fotso
				</Link>

				<nav className="hidden items-center gap-7 md:flex">
					{links.map((l) => {
						const active = pathname === l.href || pathname.startsWith(l.href + "/")
						return (
							<Link
								key={l.href}
								href={l.href}
								className={cn("text-sm transition-colors", active ? "text-foreground" : "text-muted hover:text-foreground")}
							>
								{l.label}
							</Link>
						)
					})}
				</nav>

				<Button href="/contact" variant="primary" className="hidden md:inline-flex">Me contacter</Button>

				<button type="button" aria-label="Menu" className="md:hidden text-sm" onClick={() => setOpen(!open)}>
					{open ? "Fermer" : "Menu"}
				</button>
			</Container>

			{open && (
				<div className="border-t border-border bg-background-1 md:hidden">
					<Container className="py-4">
						<nav className="flex flex-col gap-3">
							{links.map((l) => (
								<Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-muted hover:text-foreground">
									{l.label}
								</Link>
							))}
							<Link href="/contact" onClick={() => setOpen(false)} className="text-sm font-medium text-brand underline underline-offset-4">Me contacter</Link>
						</nav>
					</Container>
				</div>
			)}
		</header>
	)
}