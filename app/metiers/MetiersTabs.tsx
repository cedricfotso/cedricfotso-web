"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Container } from "@/components/layout/Container"

const tabs = [
	{ href: "/metiers", label: "Vue d'ensemble" },
	{ href: "/metiers/sites-web", label: "Sites web" },
	{ href: "/metiers/design", label: "Design" },
	{ href: "/metiers/strategie", label: "Stratégie" },
]

export function MetiersTabs() {
	const pathname = usePathname()
	return (
		<div className="border-b border-border">
			<Container>
				<nav className="-mb-px flex gap-1 overflow-x-auto">
					{tabs.map((t) => {
						const active = pathname === t.href
						return (
							<Link key={t.href} href={t.href} className={cn("relative whitespace-nowrap px-4 py-3 text-sm transition-colors", active ? "text-foreground" : "text-muted hover:text-foreground")}>
								{t.label}
								{active && <span className="absolute inset-x-0 -bottom-px h-0.5 bg-brand" />}
							</Link>
						)
					})}
				</nav>
			</Container>
		</div>
	)
}