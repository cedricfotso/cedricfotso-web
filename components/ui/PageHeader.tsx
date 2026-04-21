import { cn } from "@/lib/utils"

type Props = {
  /** Petit texte en surligne au-dessus du titre. */
  eyebrow?: string
  /** Alias de `eyebrow`, accepté pour compatibilité. */
  label?: string
  title: string
  /** Paragraphe d'introduction sous le titre. */
  lead?: string
  /** Alias de `lead`, accepté pour compatibilité. */
  intro?: string
  className?: string
}

export function PageHeader({
  eyebrow,
  label,
  title,
  lead,
  intro,
  className,
}: Props) {
  const topline = eyebrow ?? label
  const paragraph = lead ?? intro

  return (
    <div className={cn("site-container py-16 md:py-24", className)}>
      <div className="max-w-2xl">
        {topline ? (
          <p className="label-caps mb-4">{topline}</p>
        ) : null}
        <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground">
          {title}
        </h1>
        {paragraph ? (
          <p className="mt-4 text-[17px] leading-relaxed text-foreground/70">
            {paragraph}
          </p>
        ) : null}
      </div>
    </div>
  )
}