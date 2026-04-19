import { MetiersTabs } from "@/components/metiers/MetiersTabs"

export default function MetiersLayout({ children }: { children: React.ReactNode }) {
	return (<><MetiersTabs />{children}</>)
}