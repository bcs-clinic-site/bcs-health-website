"use client";

import React from "react";
import type { Route } from "../+types/home";

// Metadata
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Our Reports - BCS Free Health Clinic" },
    { name: "description", content: "BCS Free Health Clinic Reports" },
  ];
}

export default function Reports() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-8 px-4 md:px-8">
      <h1 className="text-4xl sm:text-5xl md:text-6xl text-primary mt-8 md:mt-12 font-[Bebas_Neue] text-center">
        Our Reports
      </h1>

      <div className="text-center max-w-2xl">
        <p className="text-xl md:text-2xl text-gray-700 font-semibold mb-4">
          Work in Progress
        </p>
        <p className="text-lg md:text-xl text-gray-600">
          Coming Soon!
        </p>
      </div>
    </div>
  );
}
