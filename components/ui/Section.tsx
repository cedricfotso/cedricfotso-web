import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

type Props = {
  children: ReactNode
  className?: string
  as?: "section" | "div" | "article"
  bordered?: boolean
}

export function Section({ children, className, as: Tag = "section", bordered = false }: Props) {
  return (
    <Tag
      className={cn(
        "py-24 md:py-32",
        bordered && "border-t border-border",
        className,
      )}
    >
      <div className="mx-auto max-w-6xl px-6">{children}</div>
    </Tag>
  )
}