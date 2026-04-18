import { fetchGraphQL } from "./client";

// ============================================
// TYPES
// ============================================
export type PostSummary = {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
  categories?: {
    nodes: Array<{
      name: string;
      slug: string;
    }>;
  };
};

export type PostDetail = PostSummary & {
  content: string;
  author?: {
    node: {
      name: string;
    };
  };
};

// ============================================
// REQUÊTES
// ============================================

// Liste des articles
export async function getAllPosts(): Promise<PostSummary[]> {
  const query = `
    query GetAllPosts {
      posts(first: 100, where: { status: PUBLISH, orderby: { field: DATE, order: DESC } }) {
        nodes {
          title
          slug
          excerpt
          date
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          categories {
            nodes {
              name
              slug
            }
          }
        }
      }
    }
  `;
  const data = await fetchGraphQL<{ posts: { nodes: PostSummary[] } }>(query);
  return data.posts.nodes;
}

// Un article par slug
export async function getPostBySlug(slug: string): Promise<PostDetail | null> {
  const query = `
    query GetPostBySlug($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        title
        slug
        excerpt
        content
        date
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
        author {
          node {
            name
          }
        }
      }
    }
  `;
  const data = await fetchGraphQL<{ post: PostDetail | null }>(query, { slug });
  return data.post;
}

// Tous les slugs (pour generateStaticParams)
export async function getAllPostSlugs(): Promise<string[]> {
  const query = `
    query GetAllPostSlugs {
      posts(first: 100, where: { status: PUBLISH }) {
        nodes { slug }
      }
    }
  `;
  const data = await fetchGraphQL<{ posts: { nodes: Array<{ slug: string }> } }>(query);
  return data.posts.nodes.map((p) => p.slug);
}