import Image from "next/image"
import Link from "next/link"
import type { FeaturedProject } from "@/lib/queries"

type Props = {
  projet: FeaturedProject
  priority?: boolean
}

export function ProjectCard({ projet, priority = false }: Props) {
  return (
    <Link
      href={`/projets/${projet.slug}`}
      className="group block overflow-hidden rounded-2xl border border-border transition hover:bg-white/5"
    >
      {projet.featuredImage?.url ? (
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900">
          <Image
            src={projet.featuredImage.url}
            alt={projet.featuredImage.alt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
            priority={priority}
          />
        </div>
      ) : (
        <div className="aspect-[16/10] w-full bg-gradient-to-br from-neutral-900 to-neutral-800" />
      )}

      <div className="p-6 md:p-8">
        {projet.secteur ? (
          <p className="mb-3 text-xs uppercase tracking-widest text-neutral-500">
            {projet.secteur}
          </p>
        ) : null}
        <h3 className="text-2xl font-semibold tracking-tight transition group-hover:text-white">
          {projet.title}
        </h3>
        {projet.tagline ? (
          <p className="mt-3 text-neutral-400">{projet.tagline}</p>
        ) : null}
        <span className="mt-6 inline-block text-sm text-neutral-500 transition group-hover:text-white">
          Lire l'étude →
        </span>
      </div>
    </Link>
  )
}
