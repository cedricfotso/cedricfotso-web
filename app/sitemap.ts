import type { MetadataRoute } from "next"
import { getAllProjectSlugs, getAllPostSlugs } from "@/lib/queries"

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cedricfotso.com"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [projects, posts] = await Promise.all([getAllProjectSlugs(), getAllPostSlugs()])

  const staticRoutes = [
    "",
    "/metiers",
    "/metiers/sites-web",
    "/metiers/design",
    "/metiers/strategie",
    "/metiers/wordpress",
    "/metiers/headless",
    "/metiers/ecommerce",
    "/etudes-de-cas",
    // SEO fix : /portfolio supprimé — page inexistante (404)
    "/ecrits",
    "/a-propos",
    "/contact",
  ].map((p) => ({ url: `${base}${p}`, lastModified: new Date() }))

  const projectRoutes = projects.map((slug) => ({
    url: `${base}/etudes-de-cas/${slug}`,
    lastModified: new Date(),
  }))

  const postRoutes = posts.map((slug) => ({
    url: `${base}/ecrits/${slug}`,
    lastModified: new Date(),
  }))

  return [...staticRoutes, ...projectRoutes, ...postRoutes]
}