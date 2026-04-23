import { MetierTemplate } from "@/components/metiers/MetierTemplate"
import { METIERS } from "@/lib/metiers"

export default function WordPressPage() {
  return (
    <MetierTemplate metier={METIERS.wordpress} />
  )
}