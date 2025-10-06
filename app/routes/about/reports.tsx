"use client"

import React from "react";
import type { Route } from "../+types/home";

// Import all report cover images
const images = import.meta.glob('../../about/reports/*.{png,jpg,jpeg,svg}', { eager: true }) as Record<string, { default: string }>;
const imageMap: Record<string, string> = {};
Object.keys(images).forEach(path => {
  const parts = path.split('/');
  const filename = parts[parts.length - 1];
  imageMap[filename] = images[path].default;
});

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Reports - BCS Free Health Clinic" },
    { name: "description", content: "BCS Free Health Clinic Reports" },
  ];
}

// Define report structure
type Report = {
  title: string;
  filename: string;
  buttons: string[];
  links?: (string | null)[]; // some buttons might not have links
};


const reports: Report[] = [
  {
    title: "Impact Reports",
    filename: "BCS Free Health Clinic Impact Report - June 2025.png",
    buttons: ["All Monthly Impact Reports", "All Biannual Impact Reports", "Latest Monthly Impact Report", "Latest Biannual Impact Report"],
    links: [
      "https://drive.google.com/drive/folders/12A3Xzkydh_NnoY_m1DgQ3zfC4uymRCAO?usp=sharing",
      "https://drive.google.com/drive/folders/1nHAWPL65zKx764Ff4CuYPwwhTQbXZczp?usp=sharing",
      "https://drive.google.com/file/d/17iP-05ViwTYPgwXZLCy055PrzJH35UMA/view?usp=sharing",
      "https://drive.google.com/file/d/1mamnnVLMQ3vojg8LxHfZRG7TTFNcRsp1/view?usp=sharing"
    ],
  },
  {
    title: "Admin Reports",
    filename: "BCS Free Health Clinic July Report 2025.png",
    buttons: ["All Admin Reports", "Latest Admin Report"],
    links: [
      "https://drive.google.com/drive/folders/1TLayq9gbMEZh1YvGiOOdgPK_Mqtxe-MU?usp=sharing",
      null
    ],
  },
  {
    title: "Feedback Reports",
    filename: "unknown.jpg",
    buttons: ["All Feedback Reports", "Latest Feedback Report"],
    links: [
      "https://drive.google.com/drive/folders/1uM10cZ3MB7JqH1RY_V8hxwlgE3cV_mHC?usp=sharing",
      "https://drive.google.com/drive/folders/1kB1i-_EPI_DtPeIyyd1CgRmQsusdid5l?usp=sharing"
    ],
  },
  {
    title: "Education Reports",
    filename: "unknown.jpg",
    buttons: ["All Education Reports", "Latest Education Report"],
    links: [
      "https://drive.google.com/drive/folders/1kkpFTyETH75C6VxcjKqN2jhVylI_RZWZ?usp=sharing",
      null
    ],
  },
  {
    title: "Outreach Reports",
    filename: "unknown.jpg",
    buttons: ["All Outreach Reports", "Latest Outreach Report"],
    links: [
      "https://drive.google.com/drive/folders/1kB1i-_EPI_DtPeIyyd1CgRmQsusdid5l?usp=sharing",
      null
    ],
  },
  {
    title: "Yearly Finance Reports",
    filename: "BCS FHC Finance Report.png",
    buttons: ["All Finance Reports", "Latest Finance Report"],
    links: [
      "https://drive.google.com/drive/folders/1KjaW_9s9lhGcKUYExFIwN4wgy9eRenkh?usp=sharing",
      null
    ],
  },
];


export default function Reports() {
  return (
    <div className="flex flex-col items-center space-y-16 mt-16">
      <h1 className="text-6xl text-primary font-[Bebas_Neue] text-center">
        Our Reports
      </h1>

      {/* Grid of 3 rows × 2 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-48 gap-y-16">
        {reports.map((report, i) => (
          <div
            key={i}
            className="flex flex-col items-center p-6 w-80"
          >
            {/* Title */}
            <h2 className="text-4xl text-[#4a97b2] font-[Bebas_Neue] text-center mb-4 whitespace-nowrap">
              {report.title}
            </h2>

            {/* Image */}
            <img
  src={imageMap[report.filename] ?? ""}
  alt={report.title}
  className="object-contain border-primary w-64 h-96 bg-white"
/>

            {/* Buttons */}
            <div
              className={`mt-6 ${
                report.buttons.length === 4
                  ? "grid grid-cols-2 gap-3 w-96" // 2×2 grid
                  : "flex flex-col gap-3 w-full" // stacked vertically
              }`}
            >
              {report.buttons.map((btn, j) => {
                const link = report.links?.[j];
                return link ? (
                  <a
                    key={j}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <button className="w-full bg-primary text-white rounded-lg py-2 hover:bg-[#dd73b5] transition-all duration-200 cursor-pointer">
                      {btn}
                    </button>
                  </a>
                ) : (
                  <button
                    key={j}
                    disabled
                    className="w-full bg-gray-400 text-white rounded-lg py-2 cursor-not-allowed opacity-60"
                  >
                    {btn}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
