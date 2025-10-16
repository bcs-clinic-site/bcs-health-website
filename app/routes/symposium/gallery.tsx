"use client";

import { useState, useEffect } from "react";
import aboutImg from "../../images/symposium/About Symposium Banner.png";
import Gallery, { type DriveImage } from "../../components/gallery";
import type { Route } from "../+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Symposium Gallery - BCS Free Health Clinic" },
    { name: "description", content: "BCS Free Health Clinic" },
  ];
}

export default function SympGallery() {
  // updated type: Record<string, DriveImage[]>
  const [imagesByFolder, setImagesByFolder] = useState<Record<string, DriveImage[]>>({});

  useEffect(() => {
    fetch("http://localhost:5000/images?type=outreach")
      .then((res) => res.json())
      .then((data: Record<string, DriveImage[]>) => {
        console.log("✅ Loaded image data:", data);
        setImagesByFolder(data);
      })
      .catch((err) => console.error("Failed to load images:", err));
  }, []);

  return (
    <div className="">
      <h1 className="text-6xl text-primary mt-12 mx-32 font-[Bebas_Neue] text-center mb-10">Symposium Gallery</h1>
      {/* New gallery takes structured folder data */}
      <Gallery data={imagesByFolder} />
    </div>
  );
}
