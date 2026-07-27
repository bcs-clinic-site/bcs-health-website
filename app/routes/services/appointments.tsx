"use client";

import React from "react";
import topPhoto from '../../images/services/monthly/Top Photo.png';
import { Button } from "~/components/ui/button";
import type { Route } from "../+types/home";
import Lightbox from "../../components/lightbox"; // adjust path if needed

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Appointments - BCS Free Health Clinic" },
    { name: "description", content: "BCS Free Health Clinic" },
  ];
}

// Import all images dynamically
const images = import.meta.glob('../../images/services/monthly/grid/*.{png,jpg,jpeg,svg}', { eager: true }) as Record<string, { default: string }>;

// Map filenames to URLs
const imageMap: Record<string, string> = {};
Object.keys(images).forEach((path) => {
  const parts = path.split('/');
  const filename = parts[parts.length - 1];
  imageMap[filename] = images[path].default;
});


export default function Appointments() {
  const [lightboxIndex, setLightboxIndex] = React.useState<number | null>(null);

  // Build an array of images for Lightbox
  const allImages = Object.entries(imageMap).map(([filename, src]) => ({
    id: filename,
    url: src,
    name: filename.replace(/\.(png|jpg|jpeg|svg)$/i, ""),
  }));

  return (
    <div className="mt-16">
      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={allImages}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(newIndex) => setLightboxIndex(newIndex)}
        />
      )}

      {/* FIX 1 APPLIED: Replaced mx-32 with responsive padding for the title */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl text-primary mb-16 px-4 sm:px-8 md:px-16 font-[Bebas_Neue] text-center">Monthly Clinic Registration</h1>

      <img
        src={topPhoto}
        alt={"Top Photo"}
        className="object-cover m-auto mt-10"
        onClick={() => {
          // Add topPhoto to lightbox dynamically if needed
          const index = allImages.findIndex(img => img.url === topPhoto);
          if (index >= 0) setLightboxIndex(index);
        }}
      />

      <div className="flex justify-center px-4 sm:px-6 lg:px-8 mt-4">
  <div className="max-w-4xl w-full">
    <p className="text-primary text-lg">
      At BCS Free Health Clinic, we make it easy for you to receive the quality care you deserve from our compassionate and highly qualified doctors. Appointments must be scheduled online to see our physicians and specialists.
      <br /><br />
      <strong>Important Appointment Details:</strong>
      <ul className="ml-6 mt-4 text-primary list-disc space-y-2">
        <li className="text-primary text-lg">
          <strong>We do not accept walk-ins.</strong> Deadlines for monthly clinic appoints close 
          <strong> the Friday before the clinic date at 5PM.</strong> Please schedule your appointments accordingly.
        </li>
        <li className="text-primary text-lg">
          Patients should arrive <strong>15 minutes before their scheduled appointment time.</strong>
        </li>
        <li className="text-primary text-lg">
          When you enter, please make sure to enter through the <strong>sister's entrance on the right side of the building.</strong> 
          Look for the clinic banner and signs if needed.
        </li>
      </ul>
      <br />
      For any concerns or to cancel an appointment, please text (979)-481-8881.
    </p>
    <div className="flex justify-center pt-12">
      <a href="https://provider.click4md.com/schedule/OTNEb2NaODFRMXJPRUVUZWN4R2RpUT09" target="_blank" rel="noopener noreferrer">
        <Button size="lg" variant="secondary" className="text-lg px-40 py-7 w-56 bg-primary text-white rounded-lg hover:bg-[#dd73b5] transition-all duration-200 cursor-pointer">
          Book an Appointment
        </Button>
      </a>
    </div>
  </div>
</div>

      {/* FIX 2 APPLIED: Responsive margin on the grid container */}
      <div className="flex flex-wrap justify-center gap-6 px-4 sm:px-8 md:mx-32 mt-16">
        {allImages.map((img, i) => (
          <figure key={img.id} className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] cursor-pointer">
            <img
              src={img.url}
              alt={img.name}
              className="rounded-lg shadow-md object-contain w-full h-auto transform transition-transform duration-300 hover:scale-105"
              onClick={() => setLightboxIndex(i)}
            />
            <figcaption className="text-center text-primary text-md mt-2">
              {img.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
