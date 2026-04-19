import { wpQuery } from "./wordpress"

export type TypeDeProjet = { name: string; slug: string }

export type ProjetNode = {
	slug: string
	title: string
	excerpt?: string
	content?: string
	date?: string
	typesDeProjet?: { nodes: TypeDeProjet[] }
	featuredImage?: { node: { sourceUrl: string; altText?: string } }
	projetFields?: {
		client?: string
		annee?: string
		duree?: string
		role?: string
		formatProjet?: string
		featured?: boolean
	}
}

export type PostNode = {
	slug: string
	title: string
	excerpt?: string
	content?: string
	date: string
	featuredImage?: { node: { sourceUrl: string; altText?: string } }
}

const PROJECT_FIELDS_FRAGMENT = /* GraphQL */ `
	fragment ProjectFields on Projet {
		slug title excerpt date
		typesDeProjet { nodes { name slug } }
		featuredImage { node { sourceUrl altText } }
		projetFields { client annee duree role formatProjet featured }
	}
`

export async function getFeaturedProjects(): Promise<ProjetNode[]> {
	const data = await wpQuery<{ projets?: { nodes: ProjetNode[] } }>(/* GraphQL */ `
		${PROJECT_FIELDS_FRAGMENT}
		query FeaturedProjects {
			projets(first: 4, where: { metaQuery: { metaArray: [{ key: "featured", value: "1", compare: EQUAL_TO }] } }) {
				nodes { ...ProjectFields }
			}
		}
	`)
	return data?.projets?.nodes ?? []
}

export async function getAllProjects(opts?: { format?: "etude-de-cas" | "portfolio"; typeSlug?: string }): Promise<ProjetNode[]> {
	const metaArray: Array<Record<string, string>> = []
	if (opts?.format) metaArray.push({ key: "format_projet", value: opts.format, compare: "EQUAL_TO" })
	const data = await wpQuery<{ projets?: { nodes: ProjetNode[] } }>(/* GraphQL */ `
		${PROJECT_FIELDS_FRAGMENT}
		query AllProjects($type: String, $metaArray: [MetaArray]) {
			projets(
				first: 100
				where: {
					taxQuery: { taxArray: [{ taxonomy: TYPEDEPROJET, field: SLUG, terms: [$type], operator: IN }] }
					metaQuery: { metaArray: $metaArray }
				}
			) { nodes { ...ProjectFields } }
		}
	`, { type: opts?.typeSlug ?? null, metaArray: metaArray.length ? metaArray : null })
	return data?.projets?.nodes ?? []
}

export async function getProjectBySlug(slug: string): Promise<ProjetNode | null> {
	const data = await wpQuery<{ projet?: ProjetNode }>(/* GraphQL */ `
		${PROJECT_FIELDS_FRAGMENT}
		query ProjectBySlug($slug: ID!) {
			projet(id: $slug, idType: SLUG) { ...ProjectFields content }
		}
	`, { slug })
	return data?.projet ?? null
}

export async function getAllProjectSlugs(): Promise<string[]> {
	const data = await wpQuery<{ projets?: { nodes: { slug: string }[] } }>(/* GraphQL */ `
		query AllProjectSlugs { projets(first: 200) { nodes { slug } } }
	`)
	return (data?.projets?.nodes ?? []).map((n) => n.slug)
}

export async function getLatestPosts(limit = 3): Promise<PostNode[]> {
	const data = await wpQuery<{ posts?: { nodes: PostNode[] } }>(/* GraphQL */ `
		query LatestPosts($limit: Int!) {
			posts(first: $limit, where: { orderby: { field: DATE, order: DESC } }) {
				nodes { slug title excerpt date featuredImage { node { sourceUrl altText } } }
			}
		}
	`, { limit })
	return data?.posts?.nodes ?? []
}

export async function getAllPosts(): Promise<PostNode[]> {
	const data = await wpQuery<{ posts?: { nodes: PostNode[] } }>(/* GraphQL */ `
		query AllPosts {
			posts(first: 100, where: { orderby: { field: DATE, order: DESC } }) {
				nodes { slug title excerpt date featuredImage { node { sourceUrl altText } } }
			}
		}
	`)
	return data?.posts?.nodes ?? []
}

export async function getPostBySlug(slug: string): Promise<PostNode | null> {
	const data = await wpQuery<{ post?: PostNode }>(/* GraphQL */ `
		query PostBySlug($slug: ID!) {
			post(id: $slug, idType: SLUG) {
				slug title excerpt content date
				featuredImage { node { sourceUrl altText } }
			}
		}
	`, { slug })
	return data?.post ?? null
}

export async function getAllPostSlugs(): Promise<string[]> {
	const data = await wpQuery<{ posts?: { nodes: { slug: string }[] } }>(/* GraphQL */ `
		query AllPostSlugs { posts(first: 200) { nodes { slug } } }
	`)
	return (data?.posts?.nodes ?? []).map((n) => n.slug)
}s