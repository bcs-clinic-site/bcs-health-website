"use client";

import { useState, useEffect } from "react";
import aboutImg from "../../images/symposium/About Symposium Banner.png";
import Gallery, { type DriveImage } from "../../components/gallery";
import type { Route } from "../+types/home";
import getPictures
 from "~/components/getPictures";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Symposium Gallery - BCS Free Health Clinic" },
    { name: "description", content: "BCS Free Health Clinic" },
  ];
}

export default function SympGallery() {
  // updated type: Record<string, DriveImage[]>
  const images = getPictures("symposium");
  if (!images) return (
    <div className="">
      <h1 className="text-6xl text-primary mt-12 mx-32 font-[Bebas_Neue] text-center mb-10">Symposium Gallery</h1>
      <p className="mx-48 mt-4 text-primary text-lg max-w-7xl text-center">
            Loading Gallery, please wait...
        </p>
    </div>
  )
  return (
    <div className="">
      <h1 className="text-6xl text-primary mt-12 mx-32 font-[Bebas_Neue] text-center mb-10">Symposium Gallery</h1>
      {/* New gallery takes structured folder data */}
      <Gallery data={images} />
    </div>
  );
}
