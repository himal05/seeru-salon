import type { MetadataRoute } from "next";
import { serviceCategories } from "./data";
export default function sitemap(): MetadataRoute.Sitemap { const base="https://aabha-beauty.example"; return [{url:base,lastModified:new Date(),priority:1},...serviceCategories.map(s=>({url:`${base}/services/${s.slug}`,lastModified:new Date(),priority:.8}))]; }
