import { Hero } from "@/components/home/Hero"
import { Triptyque } from "@/components/home/Triptyque"
import { EtudesEnVedette } from "@/components/home/EtudesEnVedette"
import { LogosClients } from "@/components/home/LogosClients"
import { PointDeVue } from "@/components/home/PointDeVue"
import { DerniersEcrits } from "@/components/home/DerniersEcrits"
import { CtaFinal } from "@/components/home/CtaFinal"
import { getFeaturedProjects, getLatestPosts } from "@/lib/queries"

export const revalidate = 300

export default async function HomePage() {
  const [projets, posts] = await Promise.all([
    getFeaturedProjects(),
    getLatestPosts(),
  ])

  return (
    <>
      <Hero />
      <Triptyque />
      <EtudesEnVedette projets={projets} />
      <LogosClients />
      <PointDeVue />
      <DerniersEcrits posts={posts} />
      <CtaFinal />
    </>
  )
}