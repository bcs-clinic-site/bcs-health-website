import React from "react";
import type { Route } from "../+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Schedule - BCS Free Health Clinic" },
    { name: "description", content: "BCS Free Health Clinic" },
  ];
}

export default function Schedule() {
  return (
    <div>
      <h1 className="text-4xl sm:text-5xl md:text-6xl text-primary mt-12 mx-32 font-[Bebas_Neue] text-center">
        Schedule
      </h1>

      <div className="flex justify-center items-center mt-10">
        <p className="text-2xl md:text-4xl text-primary font-[Bebas_Neue]">
          Coming Soon
        </p>
      </div>
    </div>
  );
}
