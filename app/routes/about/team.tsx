"use client";

import React from "react";
import Heirarchy from '../../images/about/team/Heirarchy Chart Picture.png';
import type { Route } from "../+types/home";
import Lightbox from "../../components/lightbox"; // adjust path if needed
import { motion, AnimatePresence } from "framer-motion";

// Metadata
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Team - BCS Free Health Clinic" },
    { name: "description", content: "BCS Free Health Clinic" },
  ];
}

// Import all images dynamically
const images = import.meta.glob('../../images/about/team/*.{png,jpg,jpeg,svg}', { eager: true }) as Record<string, { default: string }>;

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
  { filename: "Huda.png", name: "Dr. Huda Naeem", title: "Medical Director" },
  { filename: "Malak.jpg", name: "Malak Ezzat", title: "Clinic Manager" },
  { filename: "Ameera.jpg", name: "Ameera Chan", title: "Finance Director" },
  { filename: "Ryme.jpg", name: "Ryme Elboukhani", title: "Admin Director" },
  { filename: "Aniyah.jpg", name: "Aniyah Zaman", title: "Volunteer Coordinator" },
];

// Bottom row: groups
type Group = { filenames: string[]; names: string[]; title: string };
const bottomRow: Group[] = [
  { filenames: ["Asad.jpg"], names: ["Asad Ansari"], title: "Logistics Director" },
  { filenames: ["Ahmed.png", "Zoya.jpg"], names: ["Ahmed Saleh", "Zoya Kareem"], title: "Community Outreach Directors" },
  { filenames: ["Jessica.jpg", "Radwa.jpg"], names: ["Jessica Lan-Anh", "Radwa Eman"], title: "Marketing Directors" },
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
    <div className="flex flex-col space-y-12 ">
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
      <h1 className="text-6xl text-primary mt-12 mx-32 font-[Bebas_Neue] text-center">Our Team</h1>

      {/* Top Row */}
      <div className="flex justify-center gap-10">
        {topRow.map((member, i) => (
          <div key={i} className="flex flex-col items-center">
            <img
              src={imageMap[member.filename] ?? ""}
              alt={member.name}
              className="w-32 h-32 object-cover cursor-pointer"
              onClick={() => {
                const index = allImages.findIndex(img => img.id === member.filename);
                setLightboxIndex(index);
              }}
            />
            <div className="mt-2 font-[Bebas_Neue] text-primary text-2xl">{member.title}</div>
            <div className="text-sm text-[#075a77]">{member.name}</div>
          </div>
        ))}
      </div>

      {/* Bottom Row */}
      <div className="flex justify-center gap-8">
        {bottomRow.map((group, gIndex) => (
          <div key={gIndex} className="flex flex-col items-center gap-2">
            <div className={`flex ${group.filenames.length > 1 ? "gap-2" : "gap-0"}`}>
              {group.filenames.map((filename, i) => (
                <img
                  key={i}
                  src={imageMap[filename] ?? ""}
                  alt={group.names[i]}
                  className="w-32 h-32 object-cover cursor-pointer"
                  onClick={() => {
                    const index = allImages.findIndex(img => img.id === filename);
                    setLightboxIndex(index);
                  }}
                />
              ))}
            </div>

            <div className="mt-2 font-[Bebas_Neue] text-primary text-2xl">{group.title}</div>

            <div className="text-sm text-[#075a77]">
              {group.filenames.length > 1 ? group.names.join(" & ") : group.names[0]}
            </div>
          </div>
        ))}
      </div>

      {/* Hierarchy Section */}
      <div>
        <h1 className="text-6xl text-primary mt-5 mx-32 font-[Bebas_Neue] text-center">Clinic Management System</h1>
        <img
          src={Heirarchy}
          alt="Heirarchy"
          className="object-cover scale-[0.95] cursor-pointer"
          onClick={() => {
            const index = allImages.findIndex(img => img.id === "Heirarchy");
            setLightboxIndex(index);
          }}
        />
      </div>
    </div>
  );
}
