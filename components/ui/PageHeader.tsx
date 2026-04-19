import { cn } from "@/lib/utils"

type Props = {
  eyebrow?: string
  title: string
  lead?: string
  className?: string
}

export function PageHeader({ eyebrow, title, lead, className }: Props) {
  return (
    <header className={cn("pt-32 pb-16 md:pt-40 md:pb-24", className)}>
      <div className="mx-auto max-w-4xl px-6">
        {eyebrow ? (
          <p className="mb-6 text-sm uppercase tracking-widest text-neutral-400">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
          {title}
        </h1>
        {lead ? (
          <p className="mt-6 max-w-2xl text-lg text-neutral-300 md:text-xl">
            {lead}
          </p>
        ) : null}
      </div>
    </header>
  )
}