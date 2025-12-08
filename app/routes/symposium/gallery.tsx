"use client";

import { useState, useEffect } from "react";
import aboutImg from "../../images/symposium/About Symposium Banner.png";
import Gallery, { type DriveImage } from "../../components/gallery";
import type { Route } from "../+types/home";
import getPictures from "~/components/getPictures";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Symposium Gallery - BCS Free Health Clinic" },
    { name: "description", content: "BCS Free Health Clinic" },
  ];
}

export default function SympGallery() {
  const images = getPictures("symposium");
  
  if (!images) return (
    <div className="px-4 md:px-8 pb-12">
      <h1 className="text-4xl sm:text-5xl md:text-6xl text-primary mt-8 md:mt-12 mx-4 md:mx-32 font-[Bebas_Neue] text-center mb-10">
        Symposium Gallery
      </h1>
      <p className="mx-4 sm:mx-8 md:mx-32 lg:mx-48 mt-4 text-primary text-base sm:text-lg max-w-7xl text-center">
        Loading Gallery, please wait...
      </p>
    </div>
  );
  
  return (
    <div className="px-4 md:px-8 pb-12">
      <h1 className="text-4xl sm:text-5xl md:text-6xl text-primary mt-8 md:mt-12 mx-4 md:mx-32 font-[Bebas_Neue] text-center mb-10">
        Symposium Gallery
      </h1>
      <Gallery data={images} />
    </div>
  );
}