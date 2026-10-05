import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://suavis.dev",
      lastModified: new Date(),
    },
  ];
}
