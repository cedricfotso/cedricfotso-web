import { MetierTemplate } from "@/components/metiers/MetierTemplate"
import { METIERS } from "@/lib/metiers"

export default function HeadlessPage() {
  return (
    <MetierTemplate metier={METIERS.headless} />
  )
}