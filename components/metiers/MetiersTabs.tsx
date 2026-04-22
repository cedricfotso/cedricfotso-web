"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const TABS = [
  { slug: "sites-web",  label: "Sites web" },
  { slug: "design",     label: "Design" },
  { slug: "strategie",  label: "Stratégie" },
  { slug: "wordpress",  label: "WordPress" },
  { slug: "headless",   label: "Headless / Next.js" },
  { slug: "ecommerce",  label: "E-commerce" },
]

export function MetiersTabs() {
  const pathname = usePathname()

  return (
    <nav
      aria-label="Navigation des métiers"
      className="border-b border-border overflow-x-auto"
    >
      <ul className="flex min-w-max mx-auto max-w-6xl px-6">
        {TABS.map(({ slug, label }) => {
          const href = `/metiers/${slug}`
          const isActive = pathname === href

          return (
            <li key={slug}>
              <Link
                href={href}
                className={[
                  "inline-block px-4 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors",
                  isActive
                    ? "border-brand text-foreground"
                    : "border-transparent text-muted hover:text-foreground hover:border-border-hover",
                ].join(" ")}
                aria-current={isActive ? "page" : undefined}
              >
                {label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}