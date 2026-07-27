"use client";

import React from "react";
import type { Route } from "../+types/home";
import Lightbox from "../../components/lightbox";

// Metadata
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Our Providers - BCS Free Health Clinic" },
    { name: "description", content: "BCS Free Health Clinic Providers" },
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

type Provider = { filename: string; name: string; title: string };
type ProviderSection = { title: string; providers: Provider[] };

const providerSections: ProviderSection[] = [
  {
    title: "MONTHLY CLINICS",
    providers: [
      { filename: "Huda Naeem.jpg", name: "Dr. Huda Naeem", title: "ER Medicine, Wilderness Medicine Fellowship" },
      { filename: "Adnanul Karim.jpg", name: "Dr. Adnanul Karim", title: "Internal Medicine, Pulmonology, Critical Care" },
      { filename: "Shafia Naeem.jpg", name: "PA. Shafia Naeem", title: "Urgent Care" },
      { filename: "Malak.jpg", name: "Malak Ezzat", title: "Student Doctor" },
      { filename: "Tazeen Abbas.png", name: "Dr. Tazeen Abbas", title: "TBD" },
    ],
  },
  {
    title: "BAIT UL NAEEM: HOUSE OF EASE",
    providers: [
      { filename: "Sarah Kakwan.png", name: "Sarah Kakwan", title: "Co-Lead" },
      { filename: "Zuha Aijaz.png", name: "Zuha Aijaz", title: "Co-Lead" },
    ],
  },
  {
    title: "IRSHAD AL-AAFIYAH",
    providers: [
      { filename: "Irshad.jpg", name: "Dr. Fariha Irshad", title: "Nutritionist and Food Scientist" },
    ],
  },
  {
    title: "AMANAH",
    providers: [
      { filename: "Maryam Ahmed.jpg", name: "Dr. Maryam Ahmed", title: "Licensed Professional Counselor" },
    ],
  },
];

export default function Providers() {
  const [lightboxIndex, setLightboxIndex] = React.useState<number | null>(null);
  const [lightboxSection, setLightboxSection] = React.useState<number | null>(null);

  const currentSection = lightboxSection !== null ? providerSections[lightboxSection] : null;
  const allImages = currentSection
    ? currentSection.providers.map(p => ({ id: p.filename, url: imageMap[p.filename], name: p.name }))
    : [];

  const handleImageClick = (sectionIndex: number, providerIndex: number) => {
    setLightboxSection(sectionIndex);
    setLightboxIndex(providerIndex);
  };

  return (
    <div className="flex flex-col space-y-8 md:space-y-12 px-4 md:px-8">
      {/* Lightbox */}
      {lightboxIndex !== null && currentSection && (
        <Lightbox
          images={allImages}
          index={lightboxIndex}
          onClose={() => {
            setLightboxIndex(null);
            setLightboxSection(null);
          }}
          onNavigate={(newIndex) => setLightboxIndex(newIndex)}
        />
      )}

      <h1 className="text-4xl sm:text-5xl md:text-6xl text-primary mt-8 md:mt-12 mx-4 md:mx-32 font-[Bebas_Neue] text-center">
        Our Providers
      </h1>

      {/* Note */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
        <p className="text-sm md:text-base text-[#0077b6] italic">
          <span className="font-semibold">Please note:</span> Provider availability at Monthly Clinics may vary. For more information on which providers will be available at the next clinic, visit our{" "}
          <a href="/services/schedule" className="underline hover:text-primary">
            Schedule/News page
          </a>
          .
        </p>
      </div>

      {/* Provider Sections */}
      <div className="space-y-12 md:space-y-16">
        {providerSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="flex flex-col items-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#4a97b2] font-[Bebas_Neue] mb-8 md:mb-12">
              {section.title}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 justify-items-center max-w-6xl">
              {section.providers.map((provider, providerIndex) => (
                <div key={providerIndex} className="flex flex-col items-center">
                  <img
                    src={imageMap[provider.filename] ?? ""}
                    alt={provider.name}
                    className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 object-cover cursor-pointer transform transition-transform duration-300 hover:scale-105"
                    onClick={() => handleImageClick(sectionIndex, providerIndex)}
                  />
                  <div className="mt-3 font-[Bebas_Neue] text-primary text-lg md:text-xl text-center">
                    {provider.name}
                  </div>
                  <div className="text-xs sm:text-sm text-[#075a77] max-w-48 text-center">
                    {provider.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
