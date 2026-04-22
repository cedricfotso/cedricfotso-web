import { ImageResponse } from "next/og"

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
    gap: "16px",
  },
  eyebrow: {
    fontSize: "16px",
    color: "rgba(255,255,255,0.5)",
    letterSpacing: "0.15em",
    textTransform: "uppercase" as const,
    margin: "0",
  },
  title: {
    fontSize: "80px",
    fontWeight: 600,
    color: "#ffffff",
    margin: "0",
    lineHeight: 1.05,
    letterSpacing: "-0.02em",
  },
  subtitle: {
    fontSize: "24px",
    color: "rgba(255,255,255,0.5)",
    margin: "0",
  },
  footer: {
    fontSize: "16px",
    color: "#D85A30",
    margin: "0",
    letterSpacing: "0.05em",
  },
}

export default function OgImage() {
  return new ImageResponse(
    (
      <div style={S.root}>
        <div style={S.accent} />
        <div style={S.body}>
          <p style={S.eyebrow}>Freelance · Douala, Cameroun</p>
          <h1 style={S.title}>Cédric Aimé Fotso</h1>
          <p style={S.subtitle}>Sites web · Design · Stratégie digitale</p>
        </div>
        <p style={S.footer}>cedricfotso.com</p>
      </div>
    ),
    { ...size }
  )
}