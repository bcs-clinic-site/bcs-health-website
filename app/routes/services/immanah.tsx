import React from "react";
import type { Route } from "../+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Immanah - BCS Free Health Clinic" },
    { name: "description", content: "BCS Free Health Clinic" },
  ];
}

export default function Immanah() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 px-8 py-20">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-8 tracking-wide">
        IMMANAH: MENTAL HEALTH CLINIC
      </h1>

      {/* Subtitle / Description */}
      <p className="text-xl md:text-2xl text-center max-w-3xl leading-relaxed text-gray-700">
        More details on our mental health program to come in October 2026,
        <span className="italic"> In’Sha Allah!</span>
      </p>
    </main>
  );
}
