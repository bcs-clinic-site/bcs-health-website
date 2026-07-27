"use client";

import React from "react";
import type { Route } from "../+types/home";
import Lightbox from "../../components/lightbox";
import { Link } from "react-router";

// Metadata
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Providers - BCS Free Health Clinic" },
    { name: "description", content: "BCS Free Health Clinic" },
  ];
}

// Import all images dynamically
const images = import.meta.glob('../../images/about/providers/*.{png,jpg,jpeg,svg,JPEG,JPG}', { eager: true }) as Record<string, { default: string }>;

// Map filenames to URLs
const imageMap: Record<string, string> = {};
Object.keys(images).forEach(path => {
  const parts = path.split('/');
  const filename = parts[parts.length - 1];
  imageMap[filename] = images[path].default;
});

// Team members by role
type Member = { filename: string; name: string; title: string };

const teamMembers: Member[] = [
  { filename: "Huda Naeem.jpg", name: "Dr. Huda Naeem", title: "Medical Director" },
  { filename: "Malak.jpg", name: "Malak Ezzat", title: "Clinical Manager" },
  { filename: "Zoya Kareem.jpg", name: "Zoya Kareem", title: "Clinic Manager Assistant" },
  { filename: "Ameera Chan.jpg", name: "Ameera Chan", title: "Finance Director" },
  { filename: "Sidrat-ul Muntaha.jpg", name: "Sidrat-ul Muntaha", title: "Volunteer Co-coordinator" },
  { filename: "Doha Shehta.jpg", name: "Doha Shehta", title: "Volunteer Co-coordinator" },
  { filename: "Ahmed Saleh.jpg", name: "Ahmed Saleh", title: "Community Outreach Director" },
  { filename: "Mahmoud Rashid.jpg", name: "Mahmoud Rashid", title: "Logistics Director" },
  { filename: "Lola Sheims.jpg", name: "Lola Sheims", title: "Administrative Director" },
  { filename: "Maryam Pennino.jpg", name: "Maryam Pennino", title: "Marketing Co-Director" },
  { filename: "Hadeeqah Qazi.jpg", name: "Hadeeqah Qazi", title: "Marketing Co-Director" },
];

export default function Providers() {
  const [lightboxIndex, setLightboxIndex] = React.useState<number | null>(null);

  // Build a master image list for the lightbox
  const allImages = teamMembers.map(m => ({ id: m.filename, url: imageMap[m.filename], name: m.name }));

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

      <h1 className="text-4xl sm:text-5xl md:text-6xl text-primary mt-8 md:mt-12 mx-4 md:mx-32 font-[Bebas_Neue] text-center">
        Our Team
      </h1>
      
      <p className="text-[#075a77] text-center text-base sm:text-lg md:text-xl px-4 sm:px-8 md:px-24 lg:px-48">
        <i>
          Meet the dedicated team members of BCS Free Health Clinic who work together to provide compassionate healthcare and community support.
        </i>
      </p>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 lg:gap-20 justify-items-center max-w-7xl mx-auto">
        {teamMembers.map((member, i) => (
          <div key={i} className="flex flex-col items-center">
            <img
              src={imageMap[member.filename] ?? ""}
              alt={member.name}
              className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 object-cover cursor-pointer transform transition-transform duration-300 hover:scale-105"
              onClick={() => {
                const index = allImages.findIndex(img => img.id === member.filename);
                setLightboxIndex(index);
              }}
            />
            <div className="mt-2 font-[Bebas_Neue] text-primary text-xl md:text-2xl text-center">
              {member.name}
            </div>
            <div className="text-xs sm:text-sm text-[#075a77] max-w-48 text-center">
              {member.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
