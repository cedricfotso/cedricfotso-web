"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { METIERS, type MetierSlug } from "@/lib/metiers"

const SLUGS: MetierSlug[] = [
  "sites-web",
  "design",
  "wordpress",
  "headless",
  "ecommerce",
  "strategie",
]

export function MetiersTabs() {
  const pathname = usePathname()

  return (
    <nav
      aria-label="Métiers"
      className="border-b border-border sticky top-[var(--header-height,64px)] z-10 bg-background"
    >
      <div className="site-container">
        <ul className="flex gap-1 overflow-x-auto py-1">
          {SLUGS.map((slug) => {
            const metier = METIERS[slug]
            const href = `/metiers/${slug}`
            const isActive = pathname === href

            return (
              <li key={slug} className="shrink-0">
                <Link
                  href={href}
                  className={cn(
                    "inline-flex items-center px-4 py-2.5 text-sm font-medium rounded-md transition-colors",
                    isActive
                      ? "bg-foreground text-background"
                      : "text-muted hover:text-foreground hover:bg-foreground/5",
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {metier.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}