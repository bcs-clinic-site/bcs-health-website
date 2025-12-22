import { useEffect, useState } from "react";
import type { DriveImage } from "./gallery";

export type LocalImageCategory = Record<string, DriveImage[]>;

export default function getPictures(
  type: String
) {
  const [data, setData] = useState<LocalImageCategory | null>(null);

  useEffect(() => {
    if (!type) return;

    // CHANGED: Remove eager: true to enable lazy loading
    const modules = import.meta.glob("../images/gallery/**/*", {
      import: "default",
    }) as Record<string, () => Promise<string>>;

    const categorized: LocalImageCategory = {};

    for (const [path, importFn] of Object.entries(modules)) {
      if (!path.includes(`/gallery/${type}/`)) continue;

      const parts = path.split("/");
      const folder = parts[parts.length - 2];
      const file = parts[parts.length - 1];

      if (!folder || !file) continue;

      const cleaned = folder.replace(/^\d+\.\s*/, "");

      if (!categorized[cleaned]) categorized[cleaned] = [];

      // Store the import function path - will be loaded when needed
      categorized[cleaned].push({
        id: `${folder}-${file}`,
        name: file,
        url: path, // Store path temporarily
      });
    }

    // Load URLs lazily
    const loadUrls = async () => {
      const sorted: LocalImageCategory = {};
      
      for (const [folder, imgs] of Object.entries(categorized)) {
        sorted[folder] = await Promise.all(
          imgs.map(async (img) => ({
            ...img,
            url: await modules[img.url](),
          }))
        );
      }
      
      setData(sorted);
    };

    loadUrls();
  }, [type]);

  return data;
}