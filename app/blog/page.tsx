import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/graphql/queries";

export const revalidate = 3600;

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main>
      {/* HERO */}
      <section className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        <p className="text-sm font-medium text-brand tracking-widest uppercase mb-6">
          Journal
        </p>
        <h1 className="text-5xl md:text-6xl font-medium tracking-tight leading-[1.1] mb-8">
          Réflexions sur le web, le{" "}
          <span className="signature text-brand">design</span> et la création.
        </h1>
        <p className="text-lg text-muted max-w-2xl leading-relaxed">
          Notes, retours d&apos;expérience et observations rassemblés au fil des projets.
        </p>
      </section>

      {/* LISTE */}
      <section className="max-w-5xl mx-auto px-6 pb-32 border-t border-border pt-16">
        {posts.length === 0 ? (
          <p className="text-muted text-lg">Aucun article publié pour le moment.</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-10">
            {posts.map((post) => {
              // BUG-05 fix : console.log supprimé
              const titleHtml   = { __html: post.title };
              const excerptHtml = { __html: post.excerpt || "" };

              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block"
                >
                  {post.featuredImage?.node?.sourceUrl ? (
                    <div className="aspect-[16/10] overflow-hidden rounded-xl bg-background-2 mb-5 border border-border">
                      <Image
                        src={post.featuredImage.node.sourceUrl}
                        alt={post.featuredImage.node.altText || post.title}
                        width={800}
                        height={500}
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      />
                    </div>
                  ) : (
                    <div className="aspect-[16/10] rounded-xl bg-brand-soft mb-5" />
                  )}

                  <div className="flex items-center gap-3 text-xs text-muted mb-3">
                    {/* SEO-4 fix : ajout dateTime */}
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("fr-FR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                    {post.categories?.nodes?.[0] && (
                      <>
                        <span>·</span>
                        <span className="uppercase tracking-widest font-semibold text-brand">
                          {post.categories.nodes[0].name}
                        </span>
                      </>
                    )}
                  </div>

                  <h2
                    className="text-2xl font-semibold tracking-tight mb-3 group-hover:text-brand transition-colors"
                    dangerouslySetInnerHTML={titleHtml}
                  />
                  <div
                    className="text-muted leading-relaxed line-clamp-3"
                    dangerouslySetInnerHTML={excerptHtml}
                  />
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand mt-4">
                    Lire l&apos;article <span aria-hidden>→</span>
                  </span>
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}