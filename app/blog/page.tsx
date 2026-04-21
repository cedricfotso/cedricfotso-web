import Link from "next/link";
import Image from "next/image";
// CORRECTION ICI : on pointe vers queries au lieu de posts
import { getAllPosts } from "@/lib/graphql/queries";

export const revalidate = 3600;

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="bg-white text-[#0A0A0A]">
      {/* HERO */}
      <section className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        <p className="text-sm font-medium text-[#D85A30] tracking-widest uppercase mb-6">
          Journal
        </p>
        <h1 className="text-5xl md:text-6xl font-medium tracking-tight leading-[1.1] mb-8">
          Réflexions sur le web, le <span className="signature text-[#D85A30]">design</span> et la création.
        </h1>
        <p className="text-lg text-neutral-600 max-w-2xl leading-relaxed">
          Notes, retours d&apos;expérience et observations rassemblés au fil des projets.
        </p>
      </section>

      {/* LISTE */}
      <section className="max-w-5xl mx-auto px-6 pb-32 border-t border-[#F0EDE8] pt-16">
        {posts.length === 0 ? (
          <p className="text-neutral-500 text-lg">Aucun article publié pour le moment.</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-10">
            {posts.map((post) => {
              console.log("IMG URL →", post.slug, post.featuredImage?.node?.sourceUrl);
              const titleHtml = { __html: post.title };
              const excerptHtml = { __html: post.excerpt || "" };

              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block"
                >
                  {post.featuredImage?.node?.sourceUrl ? (
                    <div className="aspect-[16/10] overflow-hidden rounded-xl bg-[#FAFAF9] mb-5 border border-[#F0EDE8]">
                      <Image
                        src={post.featuredImage.node.sourceUrl}
                        alt={post.featuredImage.node.altText || post.title}
                        width={800}
                        height={500}
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      />
                    </div>
                  ) : (
                    <div className="aspect-[16/10] rounded-xl bg-gradient-to-br from-[#FFF4F0] via-[#FFE5D9] to-[#FFD4BE] mb-5" />
                  )}

                  <div className="flex items-center gap-3 text-xs text-neutral-400 mb-3">
                    <time>
                      {new Date(post.date).toLocaleDateString("fr-FR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                    {post.categories?.nodes?.[0] && (
                      <>
                        <span>·</span>
                        <span className="uppercase tracking-widest font-semibold text-[#D85A30]">
                          {post.categories.nodes[0].name}
                        </span>
                      </>
                    )}
                  </div>

                  <h2
                    className="text-2xl font-semibold tracking-tight mb-3 group-hover:text-[#D85A30] transition-colors"
                    dangerouslySetInnerHTML={titleHtml}
                  />
                  <div
                    className="text-neutral-600 leading-relaxed line-clamp-3"
                    dangerouslySetInnerHTML={excerptHtml}
                  />
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#D85A30] mt-4">
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