"use client"

import React from "react";
import Heirarchy from '../../about/team/Heirarchy Chart Picture.png'
import type { Route } from "../+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Providers - BCS Free Health Clinic" },
    { name: "description", content: "BCS Free Health Clinic" },
  ];
}

// Import all images dynamically
const images = import.meta.glob('../../about/providers/*.{png,jpg,jpeg,svg}', { eager: true }) as Record<string, { default: string }>;

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
  { filename: "Website Redesign (3).png", name: "Dr. Huda Naeem", title: "ER Medicine, Wilderness Medicine Fellowship" },
  { filename: "Website Redesign (4).png", name: "Dr. Adnanul Karim", title: "Internal Medicine, Pulmonology, Critical Care" },
  { filename: "Website Redesign (5).png", name: "Pa. Shafia Naeem", title: "Urgent Care" },
  { filename: "Website Redesign (6).png", name: "Malak Ezzat", title: "Student Doctor" },
];

// Bottom row: groups
const secondRow: Member[] = [
  { filename: "Website Redesign (7).png", name: "Dr. Habibah Lami Jiwo", title: "Women Health Assistant Lead" },
  { filename: "Website Redesign (8).png", name: "Dr. Nagat Shigidi", title: "Women Health Lead" },
  { filename: "unknown.jpg", name: "To Be Revealed...", title: "To be revealed..." }
];

const thirdRowA: Member[] = [
    {filename: "Website Redesign (9).png", name: "Dr. Fariha Irshad", title: "Nutritionist and Food Scientist"}
]

const thirdRowB: Member[] = [
    { filename: "unknown.jpg", name: "Dr. Maryam Ahmed", title: "To be revealed..." }
]
export default function Providers() {
  return (
    <div className="flex flex-col space-y-12 ">
        <h1 className="text-6xl text-primary mt-16 mx-32 font-[Bebas_Neue] text-center">Our Providers</h1>
        <p className = "text-[#075a77] text-center text-xl px-48"><i><strong>Please note</strong>: Provider availability at Monthly Clinics may vary. For more information on which providers
 will be available at the next clinic, visit our <strong>Schedule/News</strong> page. REPLACE SCHEDULE/NEWS WITH A HYPERLINK</i></p>
      {/* Top Row */}

      <h1 className="text-5xl text-[#4a97b2] mt-4 mx-32 font-[Bebas_Neue] text-center">Monthly Clinics</h1>
      <div className="flex justify-center gap-20">
        {topRow.map((member, i) => (
          <div key={i} className="flex flex-col items-center">
            <img
              src={imageMap[member.filename] ?? ""}
              alt={member.name}
              className="w-40 h-40 object-cover"
              
            />
            <div className="mt-2 font-[Bebas_Neue] text-primary text-2xl">{member.name}</div>
            <div className="text-sm text-[#075a77] max-w-48 text-center">{member.title}</div>
          </div>
        ))}
      </div>

      <h1 className="text-5xl text-[#4a97b2] mt-4 mx-32 font-[Bebas_Neue] text-center">Bait Ul Naeem: House of Ease</h1>
      {/* Bottom Row */}
    <div className="flex justify-center gap-21">
        {secondRow.map((member, i) => (
          <div key={i} className="flex flex-col items-center">
            <img
              src={imageMap[member.filename] ?? ""}
              alt={member.name}
              className="w-40 h-40 object-cover"
              
            />
            <div className="mt-2 font-[Bebas_Neue] text-primary text-2xl">{member.name}</div>
            <div className="text-sm text-[#075a77] max-w-48 text-center">{member.title}</div>
          </div>
        ))}
    </div>

    <div className="flex justify-center gap-32">
  {/* Group 1 */}
  <div className="flex flex-col items-center">
    <h1 className="text-5xl text-[#4a97b2] mt-4 mb-6 font-[Bebas_Neue] text-center">
      Irshad Al-aafiyah
    </h1>
    <div className="flex gap-8 flex-wrap justify-center">
      {thirdRowA.map((member, i) => (
        <div key={i} className="flex flex-col items-center">
          <img
            src={imageMap[member.filename] ?? ""}
            alt={member.name}
            className="w-40 h-40 object-cover"
          />
          <div className="mt-2 font-[Bebas_Neue] text-primary text-2xl">
            {member.name}
          </div>
          <div className="text-sm text-[#075a77] max-w-48 text-center">
            {member.title}
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Group 2 */}
  <div className="flex flex-col items-center">
    <h1 className="text-5xl text-[#4a97b2] mt-4 mb-6 font-[Bebas_Neue] text-center">
      Immanah
    </h1>
    <div className="flex gap-8 flex-wrap justify-center">
      {thirdRowB.map((member, i) => (
        <div key={i} className="flex flex-col items-center">
          <img
            src={imageMap[member.filename] ?? ""}
            alt={member.name}
            className="w-40 h-40 object-cover"
          />
          <div className="mt-2 font-[Bebas_Neue] text-primary text-2xl">
            {member.name}
          </div>
          <div className="text-sm text-[#075a77] max-w-48 text-center">
            {member.title}
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

    </div>
  );
}
