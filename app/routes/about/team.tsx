  "use client"

  import React from "react";
  import Heirarchy from '../../images/about/team/Heirarchy Chart Picture.png'
  import type { Route } from "../+types/home";

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
    { filenames: ["Asad.jpg"], names: ["Asad Ansari"], title: "Logistics Director" }, // single
    { filenames: ["Ahmed.png", "Zoya.jpg"], names: ["Ahmed Saleh", "Zoya Kareem"], title: "Community Outreach Directors" }, // group of 2
    { filenames: ["Jessica.jpg", "Radwa.jpg"], names: ["Jessica Lan-Anh", "Radwa Eman"], title: "Marketing Directors" }, // group of 2
  ];

  export default function Team() {
    return (
      <div className="flex flex-col space-y-12 ">
          <h1 className="text-6xl text-primary mt-16 mx-32 font-[Bebas_Neue] text-center">Our Team</h1>
        {/* Top Row */}
        <div className="flex justify-center gap-10">
          {topRow.map((member, i) => (
            <div key={i} className="flex flex-col items-center">
              <img
                src={imageMap[member.filename] ?? ""}
                alt={member.name}
                className="w-32 h-32 object-cover"
                
              />
              <div className="mt-2 font-[Bebas_Neue] text-primary text-2xl">{member.title}</div>
              <div className="text-sm text-[#075a77]">{member.name}</div>
            </div>
          ))}
        </div>

        {/* Bottom Row */}
  <div className="flex justify-center gap-8">
    {bottomRow.map((group, gIndex) => (
      <div
        key={gIndex}
        className="flex flex-col items-center gap-2" // consistent spacing
      >
        {/* Images */}
        <div className={`flex ${group.filenames.length > 1 ? "gap-2" : "gap-0"}`}>
          {group.filenames.map((filename, i) => (
            <img
              key={i}
              src={imageMap[filename] ?? ""}
              alt={group.names[i]}
              className="w-32 h-32 object-cover"
            />
          ))}
        </div>

        
        {/* Shared title */}
        <div className="mt-2 font-[Bebas_Neue] text-primary text-2xl">{group.title}</div>

        {/* Names */}
        <div className="text-sm text-[#075a77]">
          {group.filenames.length > 1 ? group.names.join(" & ") : group.names[0]}
        </div>
        
      </div>
    ))}


  </div>

      <div>
          <h1 className="text-6xl text-primary mt-5 mx-32 font-[Bebas_Neue] text-center">Clinic Management System</h1>
          <img
              src={Heirarchy}
              alt={"Heirarchy"}
              className="object-cover scale-[0.95]"
              />
      </div>
      </div>
    );
  }
