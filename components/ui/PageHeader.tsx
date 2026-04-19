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
    <header className={cn("pt-32 pb-16 md:pt-40 md:pb-24", className)}>
      <div className="mx-auto max-w-4xl px-6">
        {topline ? (
          <p className="mb-6 text-sm uppercase tracking-widest text-neutral-400">
            {topline}
          </p>
        ) : null}
        <h1 className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
          {title}
        </h1>
        {paragraph ? (
          <p className="mt-6 max-w-2xl text-lg text-neutral-300 md:text-xl">
            {paragraph}
          </p>
        ) : null}
      </div>
    </header>
  )
}