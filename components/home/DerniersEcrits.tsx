import Link from "next/link"

type Post = {
  slug: string
  title: string
  date?: string | null
  excerpt?: string | null
}

type Props = {
  posts: Post[]
}

export function DerniersEcrits({ posts }: Props) {
  if (!posts?.length) return null

  return (
    <section className="border-t border-border py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-12 flex items-end justify-between gap-6">
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Derniers écrits
          </h2>
          <Link
            href="/blog"
            className="text-sm text-neutral-400 underline-offset-4 hover:text-white hover:underline"
          >
            Tout le blog →
          </Link>
        </div>

        <ul className="divide-y divide-border">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/blog/${p.slug}`}
                className="group flex flex-col gap-2 py-6 transition md:flex-row md:items-baseline md:justify-between md:gap-8"
              >
                <span className="text-lg font-medium tracking-tight transition group-hover:text-white">
                  {p.title}
                </span>
                {p.date ? (
                  <time className="shrink-0 text-sm text-neutral-500">{p.date}</time>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}