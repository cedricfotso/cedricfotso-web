import type { Metadata } from "next"
import { MetierTemplate } from "@/components/metiers/MetierTemplate"
import { METIERS } from "@/lib/metiers"

const metier = METIERS.wordpress

export const metadata: Metadata = {
  title: metier.title,
  description: metier.baseline,
}

export default function WordPressPage() {
  return <MetierTemplate content={metier} />
}