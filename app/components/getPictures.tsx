import { useEffect, useState } from "react";
import type { DriveImage } from "./gallery";

export type LocalImageCategory = Record<string, DriveImage[]>;

export default function getPictures(
  type: "outreach" | "education" | "symposium"
) {
  const [data, setData] = useState<LocalImageCategory | null>(null);

  useEffect(() => {
    if (!type) return;

    // Import EVERYTHING once — Vite supports this
    const modules = import.meta.glob("../images/gallery/**/*", {
      eager: true,
      import: "default",
    }) as Record<string, string>;

    const categorized: LocalImageCategory = {};

    for (const [path, url] of Object.entries(modules)) {
      // Must match only the correct type
      // Example path: "../images/gallery/outreach/1. Workshop/img1.jpg"
      if (!path.includes(`/gallery/${type}/`)) continue;

      const parts = path.split("/");

      // folder structure: gallery/type/<subfolder>/<file>
      const folder = parts[parts.length - 2];
      const file = parts[parts.length - 1];

      if (!folder || !file) continue;

      // Remove numeric prefixes like "1. Workshop" → "Workshop"
      const cleaned = folder.replace(/^\d+\.\s*/, "");

      if (!categorized[cleaned]) categorized[cleaned] = [];

      categorized[cleaned].push({
        id: `${folder}-${file}`,
        name: file,
        url,
      });
    }

    // Sort subfolders by numeric prefix descending
    const sorted: LocalImageCategory = {};

    Object.keys(categorized)
      .sort((a, b) => {
        const aMatch = Object.keys(modules).find((p) => p.includes(a))?.match(/\/(\d+)\./);
        const bMatch = Object.keys(modules).find((p) => p.includes(b))?.match(/\/(\d+)\./);

        const numA = aMatch ? parseInt(aMatch[1], 10) : 0;
        const numB = bMatch ? parseInt(bMatch[1], 10) : 0;

        return numB - numA;
      })
      .forEach((folder) => {
        sorted[folder] = categorized[folder];
      });

    setData(sorted);
  }, [type]);

  return data;
}
