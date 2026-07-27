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

const monthlyClinic: Provider[] = [
  { filename: "Huda Naeem.jpg", name: "Dr. Huda Naeem", title: "ER Medicine, Wilderness Medicine Fellowship" },
  { filename: "Adnanul Karim.jpg", name: "Dr. Adnanul Karim", title: "Internal Medicine, Pulmonology, Critical Care" },
  { filename: "Shafia Naeem.JPG", name: "PA. Shafia Naeem", title: "Urgent Care" },
  { filename: "Malak.jpg", name: "Malak Ezzat", title: "Student Doctor" },
  { filename: "Tazeen Abbas.png", name: "Dr. Tazeen Abbas", title: "TBD" },
];

const baitUlNaeemCoLeads: Provider[] = [
  { filename: "Sarah Kakwan.png", name: "Sarah Kakwan", title: "Co-Lead" },
  { filename: "Zuha Aijaz.png", name: "Zuha Aijaz", title: "Co-Lead" },
];

const irshadAlAafiyah: Provider[] = [
  { filename: "Irshad.jpg", name: "Dr. Fariha Irshad", title: "Nutritionist and Food Scientist" },
];

const amanah: Provider[] = [
  { filename: "Maryam Ahmed.jpg", name: "Maryam Ahmed", title: "Licensed Professional Counselor" },
];

export default function Providers() {
  const [lightboxIndex, setLightboxIndex] = React.useState<number | null>(null);
  const [lightboxSection, setLightboxSection] = React.useState<string | null>(null);

  const getSectionImages = (section: string) => {
    let providers: Provider[] = [];
    if (section === "monthly") providers = monthlyClinic;
    else if (section === "bait") providers = baitUlNaeemCoLeads;
    else if (section === "irshad") providers = irshadAlAafiyah;
    else if (section === "amanah") providers = amanah;
    return providers.map(p => ({ id: p.filename, url: imageMap[p.filename], name: p.name }));
  };

  const currentImages = lightboxSection ? getSectionImages(lightboxSection) : [];

  const handleImageClick = (section: string, providerIndex: number) => {
    setLightboxSection(section);
    setLightboxIndex(providerIndex);
  };

  const ProviderCard = ({ provider, onClick }: { provider: Provider; onClick: () => void }) => (
    <div className="flex flex-col items-center">
      <img
        src={imageMap[provider.filename] ?? ""}
        alt={provider.name}
        className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 object-cover cursor-pointer transform transition-transform duration-300 hover:scale-105"
        onClick={onClick}
      />
      <div className="mt-3 font-[Bebas_Neue] text-primary text-lg md:text-xl text-center">
        {provider.name}
      </div>
      <div className="text-xs sm:text-sm text-[#075a77] max-w-48 text-center">
        {provider.title}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col space-y-12 md:space-y-16 px-4 md:px-8">
      {/* Lightbox */}
      {lightboxIndex !== null && lightboxSection && (
        <Lightbox
          images={currentImages}
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
          <span className="font-semibold">Please note:</span> Provider availability at Monthly Clinics may vary. For more information on which providers will be available at the next clinic, visit our
          <a href="/services/schedule" className="underline hover:text-primary">
            {" "}Schedule/News page
          </a>
          .
        </p>
      </div>

      {/* Monthly Clinics Section - 3 top, 2 centered bottom */}
      <div className="flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#4a97b2] font-[Bebas_Neue] mb-8 md:mb-12">
          MONTHLY CLINICS
        </h2>

        {/* Top 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 lg:gap-20 justify-items-center mb-8 md:mb-12">
          {monthlyClinic.slice(0, 3).map((provider, idx) => (
            <ProviderCard
              key={idx}
              provider={provider}
              onClick={() => handleImageClick("monthly", idx)}
            />
          ))}
        </div>

        {/* Bottom 2 - Centered */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-12 lg:gap-20 justify-items-center">
            {monthlyClinic.slice(3, 5).map((provider, idx) => (
              <ProviderCard
                key={idx + 3}
                provider={provider}
                onClick={() => handleImageClick("monthly", idx + 3)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bait Ul Naeem Co-Leads Section */}
      <div className="flex flex-col items-center space-y-6 mt-8 md:mt-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-[Bebas_Neue] text-[#4a97b2] uppercase">
          Bait Ul Naeem: House of Ease
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-12 lg:gap-20 justify-items-center">
          {baitUlNaeemCoLeads.map((provider, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <img
                src={imageMap[provider.filename] ?? ""}
                alt={provider.name}
                className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 object-cover cursor-pointer transform transition-transform duration-300 hover:scale-105"
                onClick={() => handleImageClick("bait", idx)}
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

      {/* Irshad Al-Aafiyah and Amanah on same line - Centered */}
      <div className="flex flex-col lg:flex-row justify-center gap-12 lg:gap-24 items-start">
        {/* Irshad Al-Aafiyah */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#4a97b2] font-[Bebas_Neue] mb-8 md:mb-12">
            IRSHAD AL-AAFIYAH
          </h2>
          <div className="flex justify-center">
            <div className="flex gap-6 md:gap-12 lg:gap-20 flex-wrap justify-center">
              {irshadAlAafiyah.map((provider, idx) => (
                <ProviderCard
                  key={idx}
                  provider={provider}
                  onClick={() => handleImageClick("irshad", idx)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Amanah */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#4a97b2] font-[Bebas_Neue] mb-8 md:mb-12">
            AMANAH
          </h2>
          <div className="flex justify-center">
            <div className="flex gap-6 md:gap-12 lg:gap-20 flex-wrap justify-center">
              {amanah.map((provider, idx) => (
                <ProviderCard
                  key={idx}
                  provider={provider}
                  onClick={() => handleImageClick("amanah", idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
