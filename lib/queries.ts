import { wpQuery } from "@/lib/graphql/wordpress"

// ---------- Types ----------

export type FeaturedProject = {
  slug: string
  title: string
  tagline?: string | null
  secteur?: string | null
  marche?: string | null
  tags?: string | null
  lienProjet?: string | null
  featuredImage?: { url: string; alt: string } | null
}

export type LatestPost = {
  slug: string
  title: string
  date?: string | null
  excerpt?: string | null
}

export type Post = LatestPost & {
  content?: string | null
  featuredImage?: { url: string; alt: string } | null
}

// ---------- GraphQL queries ----------

const GET_FEATURED_PROJECTS = /* GraphQL */ `
  query GetFeaturedProjects($first: Int!) {
    projets(first: $first) {
      nodes {
        title
        slug
        tagline
        lienProjet
        secteur
        marche
        tags
      }
    }
  }
`

const GET_LATEST_POSTS = /* GraphQL */ `
  query GetLatestPosts($first: Int!) {
    posts(
      first: $first
      where: { status: PUBLISH, orderby: { field: DATE, order: DESC } }
    ) {
      nodes {
        slug
        title
        date
        excerpt
      }
    }
  }
`

const GET_POST_BY_SLUG = /* GraphQL */ `
  query GetPostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      slug
      title
      date
      excerpt
      content
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
    }
  }
`

// ---------- Fetchers ----------

type ProjectsResponse = {
  projets: {
    nodes: Array<{
      title: string
      slug: string
      tagline?: string | null
      lienProjet?: string | null
      secteur?: string | null
      marche?: string | null
      tags?: string | null
    }>
  }
}

export async function getFeaturedProjects(limit = 4): Promise<FeaturedProject[]> {
  try {
    const data = await wpQuery<ProjectsResponse>(GET_FEATURED_PROJECTS, {
      variables: { first: limit },
    })

    return (data?.projets?.nodes ?? []).map((p) => ({
      slug: p.slug,
      title: p.title,
      tagline: p.tagline ?? null,
      secteur: p.secteur ?? null,
      marche: p.marche ?? null,
      tags: p.tags ?? null,
      lienProjet: p.lienProjet ?? null,
      featuredImage: null,
    }))
  } catch (err) {
    console.error("[getFeaturedProjects] failed:", err)
    return []
  }
}

export async function getAllProjects(limit = 50): Promise<FeaturedProject[]> {
  return getFeaturedProjects(limit)
}

type PostsResponse = {
  posts: {
    nodes: Array<{
      slug: string
      title: string
      date?: string | null
      excerpt?: string | null
    }>
  }
}

export async function getLatestPosts(limit = 3): Promise<LatestPost[]> {
  try {
    const data = await wpQuery<PostsResponse>(GET_LATEST_POSTS, {
      variables: { first: limit },
    })

    return (data?.posts?.nodes ?? []).map((p) => ({
      slug: p.slug,
      title: p.title,
      date: p.date ?? null,
      excerpt: p.excerpt ?? null,
    }))
  } catch (err) {
    console.error("[getLatestPosts] failed:", err)
    return []
  }
}

export async function getAllPosts(limit = 50): Promise<LatestPost[]> {
  return getLatestPosts(limit)
}

type PostBySlugResponse = {
  post: {
    slug: string
    title: string
    date?: string | null
    excerpt?: string | null
    content?: string | null
    featuredImage?: {
      node?: { sourceUrl?: string | null; altText?: string | null } | null
    } | null
  } | null
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const data = await wpQuery<PostBySlugResponse>(GET_POST_BY_SLUG, {
      variables: { slug },
    })
    const p = data?.post
    if (!p) return null

    return {
      slug: p.slug,
      title: p.title,
      date: p.date ?? null,
      excerpt: p.excerpt ?? null,
      content: p.content ?? null,
      featuredImage: p.featuredImage?.node?.sourceUrl
        ? {
            url: p.featuredImage.node.sourceUrl,
            alt: p.featuredImage.node.altText ?? p.title,
          }
        : null,
    }
  } catch (err) {
    console.error("[getPostBySlug] failed:", err)
    return null
  }
}

/**
 * Retourne les projets associés à un métier/slug.
 * Pour l'instant, filtre côté JS sur le champ Pods "tags" (chaîne).
 * Quand les taxonomies WP seront branchées, remplacer par une query GraphQL avec where.
 */
export async function getProjectsByMetier(
  slug: string,
  limit = 20,
): Promise<FeaturedProject[]> {
  const all = await getFeaturedProjects(50)
  const needle = slug.toLowerCase()

  const matched = all.filter((p) => {
    const haystack = [p.tags, p.secteur, p.marche]
      .filter(Boolean)
      .join(" ")
      .toLowerCase()
    return haystack.includes(needle)
  })

  return matched.slice(0, limit)
}