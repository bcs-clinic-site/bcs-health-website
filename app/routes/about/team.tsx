"use client";

import React from "react";
import type { Route } from "../+types/home";
import Lightbox from "../../components/lightbox";

// Metadata
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Our Team - BCS Free Health Clinic" },
    { name: "description", content: "BCS Free Health Clinic" },
  ];
}

// Import all images dynamically
const images = import.meta.glob('../../images/about/team/*.{png,jpg,jpeg,svg,JPEG,JPG}', { eager: true }) as Record<string, { default: string }>;

// Map filenames to URLs
const imageMap: Record<string, string> = {};
Object.keys(images).forEach(path => {
  const parts = path.split('/');
  const filename = parts[parts.length - 1];
  imageMap[filename] = images[path].default;
});

// Team members
type Member = { filename: string; name: string; title: string };
const topLineTeam: Member[] = [
  { filename: "Huda.jpg", name: "Dr. Huda Naeem", title: "Medical Director" },
  { filename: "Malak.jpg", name: "Malak Ezzat", title: "Clinical Manager" },
  { filename: "Zoya Kareem.jpg", name: "Zoya Kareem", title: "Clinic Manager Assistant" },
  { filename: "Ameera.jpg", name: "Ameera Chan", title: "Finance Director" },
];

const bottomLineTeam: Member[] = [
  { filename: "Ahmed Saleh.jpg", name: "Ahmed Saleh", title: "Community Outreach Director" },
  { filename: "Mahmoud Rashid.jpg", name: "Mahmoud Rashid", title: "Logistics Director" },
  { filename: "Lola Sheims.png", name: "Lola Sheims", title: "Administrative Director" },
];

// Volunteer co-coordinators (displayed separately)
const volunteerCoordinators: Member[] = [
  { filename: "Sidrat-ul Muntaha.jpg", name: "Sidrat-ul Muntaha", title: "Volunteer Co-coordinator" },
  { filename: "Doha Shehta.png", name: "Doha Shehta", title: "Volunteer Co-coordinator" },
];

// Marketing co-directors (displayed separately)
const marketingCoDirectors: Member[] = [
  { filename: "Maryam Ahmed.jpg", name: "Maryam Pennino", title: "Marketing Co-Director" },
  { filename: "Hadeeqah Qazi.jpg", name: "Hadeeqah Qazi", title: "Marketing Co-Director" },
];

export default function Team() {
  const [lightboxIndex, setLightboxIndex] = React.useState<number | null>(null);

  // Build a master image list for the lightbox
  const allImages = [...topLineTeam, ...bottomLineTeam, ...volunteerCoordinators, ...marketingCoDirectors].map(m => ({ id: m.filename, url: imageMap[m.filename], name: m.name }));

  const handleImageClick = (memberFilename: string) => {
    const index = allImages.findIndex(img => img.id === memberFilename);
    setLightboxIndex(index);
  };

  const renderRow = (members: Member[]) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 lg:gap-20 justify-items-center max-w-7xl mx-auto">
      {members.map((member, i) => (
        <div key={i} className="flex flex-col items-center">
          <img
            src={imageMap[member.filename] ?? ""}
            alt={member.name}
            className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 object-cover cursor-pointer transform transition-transform duration-300 hover:scale-105"
            onClick={() => handleImageClick(member.filename)}
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
  );

  const renderBottomRow = (members: Member[]) => (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 lg:gap-20 justify-items-center">
        {members.map((member, i) => (
          <div key={i} className="flex flex-col items-center">
            <img
              src={imageMap[member.filename] ?? ""}
              alt={member.name}
              className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 object-cover cursor-pointer transform transition-transform duration-300 hover:scale-105"
              onClick={() => handleImageClick(member.filename)}
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

  const renderDuoSectionNew = (members: Member[], title: string) => (
    <div className="flex flex-col items-center">
      {/* Title at top */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#4a97b2] font-[Bebas_Neue] mb-8 md:mb-12">
        {title}
      </h2>

      {/* Photos side by side */}
      <div className="flex justify-center gap-6 md:gap-12 lg:gap-20 mb-6 md:mb-8">
        {members.map((member, i) => (
          <img
            key={i}
            src={imageMap[member.filename] ?? ""}
            alt={member.name}
            className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 object-cover cursor-pointer transform transition-transform duration-300 hover:scale-105"
            onClick={() => handleImageClick(member.filename)}
          />
        ))}
      </div>

      {/* Names below photos */}
      <div className="text-center mb-3 md:mb-4">
        <div className="font-[Bebas_Neue] text-primary text-lg md:text-xl">
          {members.map(m => m.name).join(" & ")}
        </div>
      </div>

      {/* Titles at bottom */}
      <div className="text-center">
        <div className="text-sm md:text-base text-[#075a77]">
          {members[0]?.title}
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col space-y-12 md:space-y-16 px-4 md:px-8">
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

      {/* Top Row - 4 people (Huda, Malak, Zoya, Ameera) */}
      {renderRow(topLineTeam)}

      {/* Bottom Row - 3 people (Ahmed, Mahmoud, Lola) */}
      {renderBottomRow(bottomLineTeam)}

      {/* Volunteer Co-Coordinators Section */}
      {renderDuoSectionNew(volunteerCoordinators, "VOLUNTEER CO-COORDINATORS")}

      {/* Marketing Co-Directors Section */}
      {renderDuoSectionNew(marketingCoDirectors, "MARKETING CO-DIRECTORS")}
    </div>
  );
}
