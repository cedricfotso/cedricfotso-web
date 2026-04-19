import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

export type SectionTone = "default" | "muted" | "contrast"

type Props = {
  children: ReactNode
  className?: string
  as?: "section" | "div" | "article"
  bordered?: boolean
  /** Variante visuelle : fond neutre, légèrement grisé ou inversé. */
  tone?: SectionTone
}

const toneClasses: Record<SectionTone, string> = {
  default: "",
  muted: "bg-white/[0.02]",
  contrast: "bg-white text-black",
}

export function Section({
  children,
  className,
  as: Tag = "section",
  bordered = false,
  tone = "default",
}: Props) {
  return (
    <Tag
      className={cn(
        "py-24 md:py-32",
        bordered && "border-t border-border",
        toneClasses[tone],
        className,
      )}
    >
      <div className="mx-auto max-w-6xl px-6">{children}</div>
    </Tag>
  )
}