import type { MetadataRoute } from "next";
import { confirmedOrigin, sitemapPaths } from "@/config/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = confirmedOrigin();
  return origin ? sitemapPaths.map(path => ({ url: new URL(path, origin).href })) : [];
}
