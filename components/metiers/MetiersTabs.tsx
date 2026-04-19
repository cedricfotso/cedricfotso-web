"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const metiers = [
  { slug: "design", label: "Design" },
  { slug: "wordpress", label: "WordPress" },
  { slug: "headless", label: "Headless / Next.js" },
  { slug: "ecommerce", label: "E-commerce" },
  { slug: "strategie", label: "Stratégie" },
]

export function MetiersTabs() {
  const pathname = usePathname()

  return (
    <nav
      aria-label="Métiers"
      className="border-b border-border"
    >
      <ul className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-6">
        {metiers.map((m) => {
          const href = `/metiers/${m.slug}`
          const active = pathname?.startsWith(href)

          return (
            <li key={m.slug} className="shrink-0">
              <Link
                href={href}
                className={cn(
                  "inline-block border-b-2 px-4 py-4 text-sm transition",
                  active
                    ? "border-white text-white"
                    : "border-transparent text-neutral-400 hover:text-white",
                )}
              >
                {m.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}