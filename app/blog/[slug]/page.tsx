import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPostSlugs } from "@/lib/graphql/queries";

export const revalidate = 3600;

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const titleHtml   = { __html: post.title };
  const excerptHtml = { __html: post.excerpt || "" };
  const contentHtml = { __html: post.content || "" };

  return (
    <main>
      {/* HERO */}
      <section className="max-w-3xl mx-auto px-6 pt-32 pb-12">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-brand transition-colors mb-10"
        >
          <span aria-hidden>←</span> Retour au journal
        </Link>

        <div className="flex items-center gap-3 text-xs text-muted mb-6">
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
          {post.author?.node?.name && (
            <>
              <span>·</span>
              <span>Par {post.author.node.name}</span>
            </>
          )}
        </div>

        <h1
          className="text-4xl md:text-5xl font-medium tracking-tight leading-[1.15] mb-8"
          dangerouslySetInnerHTML={titleHtml}
        />

        {post.excerpt && (
          <div
            className="text-xl text-muted leading-relaxed"
            dangerouslySetInnerHTML={excerptHtml}
          />
        )}
      </section>

      {/* IMAGE MISE EN AVANT */}
      {post.featuredImage?.node?.sourceUrl && (
        <section className="max-w-4xl mx-auto px-6 pb-16">
          <div className="aspect-[16/9] overflow-hidden rounded-2xl border border-border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.featuredImage.node.sourceUrl}
              alt={post.featuredImage.node.altText || post.title}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </section>
      )}

      {/* CONTENU */}
      <article className="max-w-3xl mx-auto px-6 pb-24">
        <div
          className="prose-article"
          dangerouslySetInnerHTML={contentHtml}
        />
      </article>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center border-t border-border">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">
          Envie de discuter d&apos;un projet ?
        </h2>
        <Link
          href="/contact"
          className="inline-block bg-brand text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-brand-hover transition-colors"
        >
          Démarrer un projet
        </Link>
      </section>
    </main>
  );
}