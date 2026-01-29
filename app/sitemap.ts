import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://tortimex.com.mx/",
      lastModified: new Date(),
    },
  ];
}
