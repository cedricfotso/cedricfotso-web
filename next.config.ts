import type { NextConfig } from "next"

const wpHost = process.env.NEXT_PUBLIC_WP_HOST ?? "cms.cedricfotso.com"

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: wpHost },
      { protocol: "https", hostname: "secure.gravatar.com" },
      // CORRECTION ICI : Ajout du domaine principal
      { protocol: "https", hostname: "cedricfotso.com" },
    ],
  },
  experimental: { optimizePackageImports: ["framer-motion"] },
}

export default nextConfig