"use client";

import React from "react";
import Heirarchy from '../../images/about/team/Heirarchy Chart Picture.png';
import type { Route } from "../+types/home";
import Lightbox from "../../components/lightbox";
import { motion, AnimatePresence } from "framer-motion";

// Metadata
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Team - BCS Free Health Clinic" },
    { name: "description", content: "BCS Free Health Clinic" },
  ];
}

// Import all images dynamically
const images = import.meta.glob('../../images/about/team/*.{png,jpg,jpeg,svg,JPG}', { eager: true }) as Record<string, { default: string }>;

// Map filenames to URLs
const imageMap: Record<string, string> = {};
Object.keys(images).forEach(path => {
  const parts = path.split('/');
  const filename = parts[parts.length - 1];
  imageMap[filename] = images[path].default;
});

// Top row: individual members
type Member = { filename: string; name: string; title: string };
const topRow: Member[] = [
  { filename: "Huda.jpg", name: "Dr. Huda Naeem", title: "Medical Director" },
  { filename: "Malak.jpg", name: "Malak Ezzat", title: "Clinic Manager" },
  { filename: "Ameera.jpg", name: "Ameera Chan", title: "Finance Director" },
  { filename: "Ryme.JPG", name: "Ryme Elboukhani", title: "Admin Director" },
  { filename: "Aniyah.jpg", name: "Aniyah Zaman", title: "Volunteer Coordinator" },
];

// Bottom row: groups
type Group = { filenames: string[]; names: string[]; title: string };
const bottomRow: Group[] = [
  { filenames: ["Asad.jpg"], names: ["Asad Ansari"], title: "Logistics Director" },
  { filenames: ["Ahmed.jpg", "Zoya.jpg"], names: ["Ahmed Saleh", "Zoya Kareem"], title: "Community Outreach Directors" },
  { filenames: ["Jessica.jpg"], names: ["Jessica Lan-Anh"], title: "Marketing Director" },
];

export default function Team() {
  // Lightbox state
  const [lightboxIndex, setLightboxIndex] = React.useState<number | null>(null);

  // Build one master list of images for the lightbox
  const allImages = [
    ...topRow.map(m => ({
      id: m.filename,
      url: imageMap[m.filename],
      name: m.name
    })),
    ...bottomRow.flatMap(g =>
      g.filenames.map((f, i) => ({
        id: f,
        url: imageMap[f],
        name: g.names[i]
      }))
    ),
    {
      id: "Heirarchy",
      url: Heirarchy,
      name: "Clinic Management System"
    }
  ];

  return (
    <div className="flex flex-col space-y-8 md:space-y-12 px-4 md:px-8">
      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={allImages}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(newIndex) => setLightboxIndex(newIndex)}
        />
      )}

      {/* Page Header */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl text-primary mt-8 md:mt-12 mx-4 md:mx-32 font-[Bebas_Neue] text-center">
        Our Team
      </h1>

      {/* Top Row - Responsive Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-10 justify-items-center max-w-6xl mx-auto">
        {topRow.map((member, i) => (
          <div key={i} className="flex flex-col items-center">
            <img
              src={imageMap[member.filename] ?? ""}
              alt={member.name}
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover cursor-pointer transform transition-transform duration-300 hover:scale-105"
              onClick={() => {
                const index = allImages.findIndex(img => img.id === member.filename);
                setLightboxIndex(index);
              }}
            />
            <div className="mt-2 font-[Bebas_Neue] text-primary text-lg sm:text-xl md:text-2xl text-center">
              {member.title}
            </div>
            <div className="text-xs sm:text-sm text-[#075a77] text-center">
              {member.name}
            </div>
          </div>
        ))}
        
        {/* Logistics Director - appears here on mobile only */}
        <div className="flex flex-col items-center lg:hidden">
          <img
            src={imageMap[bottomRow[0].filenames[0]] ?? ""}
            alt={bottomRow[0].names[0]}
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover cursor-pointer transform transition-transform duration-300 hover:scale-105"
            onClick={() => {
              const index = allImages.findIndex(img => img.id === bottomRow[0].filenames[0]);
              setLightboxIndex(index);
            }}
          />
          <div className="mt-2 font-[Bebas_Neue] text-primary text-lg sm:text-xl md:text-2xl text-center">
            {bottomRow[0].title}
          </div>
          <div className="text-xs sm:text-sm text-[#075a77] text-center">
            {bottomRow[0].names[0]}
          </div>
        </div>
      </div>

      {/* Bottom Row - Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center max-w-5xl mx-auto">
        {/* Logistics Director - appears here on desktop only */}
        <div className="hidden lg:flex flex-col items-center gap-2">
          <div className="flex gap-0">
            <img
              src={imageMap[bottomRow[0].filenames[0]] ?? ""}
              alt={bottomRow[0].names[0]}
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover cursor-pointer transform transition-transform duration-300 hover:scale-105"
              onClick={() => {
                const index = allImages.findIndex(img => img.id === bottomRow[0].filenames[0]);
                setLightboxIndex(index);
              }}
            />
          </div>
          <div className="mt-2 font-[Bebas_Neue] text-primary text-lg sm:text-xl md:text-2xl text-center">
            {bottomRow[0].title}
          </div>
          <div className="text-xs sm:text-sm text-[#075a77] text-center">
            {bottomRow[0].names[0]}
          </div>
        </div>
        
        {/* Other groups - skip first item since it's rendered above */}
        {bottomRow.slice(1).map((group, gIndex) => (
          <div key={gIndex} className="flex flex-col items-center gap-2">
            <div className={`flex ${group.filenames.length > 1 ? "gap-2" : "gap-0"}`}>
              {group.filenames.map((filename, i) => (
                <img
                  key={i}
                  src={imageMap[filename] ?? ""}
                  alt={group.names[i]}
                  className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover cursor-pointer transform transition-transform duration-300 hover:scale-105"
                  onClick={() => {
                    const index = allImages.findIndex(img => img.id === filename);
                    setLightboxIndex(index);
                  }}
                />
              ))}
            </div>

            <div className="mt-2 font-[Bebas_Neue] text-primary text-lg sm:text-xl md:text-2xl text-center">
              {group.title}
            </div>

            <div className="text-xs sm:text-sm text-[#075a77] text-center">
              {group.filenames.length > 1 ? group.names.join(" & ") : group.names[0]}
            </div>
          </div>
        ))}
      </div>

      {/* Hierarchy Section */}
      <div className="w-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl text-primary mt-5 mx-4 md:mx-32 font-[Bebas_Neue] text-center">
          Clinic Management System
        </h1>
        <img
          src={Heirarchy}
          alt="Heirarchy"
          className="w-full object-contain md:scale-95 cursor-pointer transform transition-transform duration-300 hover:scale-100 md:hover:scale-100"
          onClick={() => {
            const index = allImages.findIndex(img => img.id === "Heirarchy");
            setLightboxIndex(index);
          }}
        />
      </div>
    </div>
  );
}