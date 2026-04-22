import { ImageResponse } from "next/og"
import { getPostBySlug } from "@/lib/queries"

export const runtime = "edge"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

const S = {
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column" as const,
    backgroundColor: "#1c1c1c",
    padding: "80px",
    justifyContent: "space-between",
  },
  accent: {
    width: "48px",
    height: "4px",
    backgroundColor: "#D85A30",
  },
  body: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "20px",
  },
  eyebrow: {
    fontSize: "16px",
    color: "rgba(255,255,255,0.5)",
    letterSpacing: "0.15em",
    textTransform: "uppercase" as const,
    margin: "0",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center" as const,
  },
  footerName: {
    fontSize: "18px",
    color: "#ffffff",
    fontWeight: 600,
    margin: "0",
  },
  footerUrl: {
    fontSize: "16px",
    color: "#D85A30",
    margin: "0",
  },
}

type Props = {
  params: Promise<{ slug: string }>
}

export default async function OgImage({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  const title = post?.title ?? "Écrits — Cédric Aimé Fotso"
  const fontSize = title.length > 60 ? 48 : title.length > 40 ? 56 : 64

  const titleStyle = {
    fontSize: `${fontSize}px`,
    fontWeight: 600,
    color: "#ffffff",
    margin: "0",
    lineHeight: 1.1,
    letterSpacing: "-0.02em",
    maxWidth: "900px",
  }

  return new ImageResponse(
    (
      <div style={S.root}>
        <div style={S.accent} />
        <div style={S.body}>
          <p style={S.eyebrow}>Écrits</p>
          <h1 style={titleStyle}>{title}</h1>
        </div>
        <div style={S.footer}>
          <p style={S.footerName}>Cédric Aimé Fotso</p>
          <p style={S.footerUrl}>cedricfotso.com</p>
        </div>
      </div>
    ),
    { ...size }
  )
}