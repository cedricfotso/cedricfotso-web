import type { NextConfig } from "next"

const wpHost = process.env.NEXT_PUBLIC_WP_HOST ?? "cms.cedricfotso.com"

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // DETTE-06 : /blog canonical → /ecrits (redirection 301 permanente)
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "/ecrits",
        permanent: true,
      },
      {
        source: "/blog/:slug",
        destination: "/ecrits/:slug",
        permanent: true,
      },
    ]
  },

  images: {
    remotePatterns: [
      { protocol: "https", hostname: wpHost },
      { protocol: "https", hostname: "secure.gravatar.com" },
      { protocol: "https", hostname: "cedricfotso.com" },
    ],
  },

  experimental: { optimizePackageImports: ["framer-motion"] },
}

export default nextConfig