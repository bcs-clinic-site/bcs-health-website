"use client"

import {useState, useEffect} from "react";
import aboutImg from '../../images/symposium/About Symposium Banner.png'
import Gallery, { type DriveImage } from "../../components/gallery";
import type { Route } from "../+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Symposium Gallery - BCS Free Health Clinic" },
    { name: "description", content: "BCS Free Health Clinic" },
  ];
}

export default function SympGallery() {
   const [images, setImages] = useState<DriveImage[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/images?letter=A")
      .then((res) => res.json())
      .then((data: DriveImage[]) => setImages(data))
      .catch((err) => console.error("Failed to load images:", err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-6xl text-primary mt-16 mx-32 font-[Bebas_Neue] text-center pb-10">Threads of Knowledge 2025</h1>
      <Gallery images={images} />
    </div>
  );
}
