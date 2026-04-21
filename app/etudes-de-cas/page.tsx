import type { Metadata } from "next"
import { PageHeader } from "@/components/ui/PageHeader"
import { Section } from "@/components/ui/Section"
import { ProjectFilter } from "@/components/projets/ProjectFilter"
import type { FeaturedProject } from "@/components/projets/ProjectFilter"
import { gql, request } from "graphql-request"

export const metadata: Metadata = {
  title: "Études de cas",
  description:
    "Projets, refontes, systèmes de design — le détail de ce qui a été fait, pourquoi, et ce que ça a produit.",
}

const GRAPHQL_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL ?? ""

const GET_ALL_PROJECTS = gql`
  query GetAllProjects {
    projets(first: 100) {
      nodes {
        id
        slug
        title
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        secteurs {
          nodes {
            name
            slug
          }
        }
        projetFields {
          baseline
          client
          annee
          format
        }
      }
    }
  }
`

type WPProjetNode = {
  id: string
  slug: string
  title: string
  featuredImage?: {
    node: {
      sourceUrl: string
      altText: string
    }
  }
  secteurs?: {
    nodes: Array<{ name: string; slug: string }>
  }
  projetFields?: {
    baseline?: string
    client?: string
    annee?: string
    format?: string
  }
}

type QueryResult = {
  projets: {
    nodes: WPProjetNode[]
  }
}

async function getProjets(): Promise<FeaturedProject[]> {
  if (!GRAPHQL_URL) {
    console.warn("[etudes-de-cas] NEXT_PUBLIC_WORDPRESS_API_URL non définie.")
    return []
  }

  try {
    const data = await request<QueryResult>(GRAPHQL_URL, GET_ALL_PROJECTS)
    const nodes = data?.projets?.nodes ?? []

    return nodes.map((node): FeaturedProject => ({
      id: node.id,
      slug: node.slug,
      title: node.title,
      featuredImage: node.featuredImage
        ? {
            url: node.featuredImage.node.sourceUrl,
            alt: node.featuredImage.node.altText,
          }
        : null,
      secteurs: node.secteurs?.nodes ?? [],
      baseline: node.projetFields?.baseline ?? "",
      client: node.projetFields?.client ?? "",
      annee: node.projetFields?.annee ?? "",
      format: node.projetFields?.format ?? "",
    }))
  } catch (err) {
    console.error("[etudes-de-cas] GraphQL fetch failed:", err)
    return []
  }
}

export default async function EtudesDeCasPage() {
  const projets = await getProjets()

  return (
    <>
      <PageHeader
        label="Travaux"
        title="Ce qui a été fait."
        lead="Projets, refontes, systèmes de design. Le détail de la démarche, pas juste le résultat."
      />
      <Section>
        <div className="site-container">
          {projets.length > 0 ? (
            <ProjectFilter projets={projets} />
          ) : (
            <p className="text-muted py-16 text-center">
              Les projets arrivent bientôt.
            </p>
          )}
        </div>
      </Section>
    </>
  )
}