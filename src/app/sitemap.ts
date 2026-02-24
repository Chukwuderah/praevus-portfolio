import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://pleasant-chukwuderah.vercel.app",
      lastModified: new Date(),
    },
  ];
}
