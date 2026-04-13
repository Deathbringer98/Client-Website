export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"]
    },
    sitemap: "https://konarrtech.shop/sitemap.xml",
    host: "https://konarrtech.shop"
  }
}
