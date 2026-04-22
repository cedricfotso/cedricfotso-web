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
    default: "Cédric Aimé Fotso — Sites web, Design & Stratégie digitale",
    template: "%s · Cédric Aimé Fotso",
  },
  description:
    "Freelance à Douala. Sites web sur mesure, identités visuelles et stratégies digitales pour structures privées et institutions.",
  authors: [{ name: "Cédric Aimé Fotso", url: siteUrl }],
  creator: "Cédric Fotso",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Cédric Aimé Fotso",
    title: "Cédric Fotso — Sites web, Design & Stratégie digitale",
    description:
      "Freelance à Douala. Sites web sur mesure, identités visuelles et stratégies digitales pour structures privées et institutions.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cédric Aimé Fotso — Freelance web & design à Douala",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@cedricfotso",
    title: "Cédric Aimé Fotso — Sites web, Design & Stratégie digitale",
    description:
      "Freelance à Douala. Sites web sur mesure, identités visuelles et stratégies digitales.",
    images: ["/og-image.jpg"],
  },
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