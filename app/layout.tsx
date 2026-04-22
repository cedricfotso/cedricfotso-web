import type { Metadata } from "next"
import { Inter_Tight } from "next/font/google"
import { GridLines } from "@/components/layout/GridLines"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import "./globals.css"

const interTight = Inter_Tight({
	subsets: ["latin"],
	weight: ["400", "500", "600"],
	variable: "--font-inter-tight",
	display: "swap",
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cedricfotso.com"

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: {
		default: "Cédric Fotso — Créateur de sites web, Designer, Consultant en stratégie digitale",
		template: "%s · Cédric Fotso",
	},
	description: "Freelance à Douala. Sites web, identités visuelles et stratégies digitales pour structures privées et institutions.",
	openGraph: { type: "website", locale: "fr_FR", url: siteUrl, siteName: "Cédric Fotso" },
	twitter: { card: "summary_large_image" },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="fr" className={interTight.variable}>
			<body className="min-h-screen bg-background-1 text-foreground">
				<GridLines />
				<div className="relative z-20 flex min-h-screen flex-col">
					<Header />
					<main className="flex-1">{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	)
}