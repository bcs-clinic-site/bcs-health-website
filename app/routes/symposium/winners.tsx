"use client"

import React from "react";
import aboutImg from '../../images/symposium/About Symposium Banner.png'
import type { Route } from "../+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Previous Winners - BCS Free Health Clinic" },
    { name: "description", content: "BCS Free Health Clinic" },
  ];
}

export default function Winners() {
  return (
    <div>
        <h1 className="text-6xl text-primary mt-16 mx-32 font-[Bebas_Neue] text-center">Past Winners</h1>
        <h1 className="text-5xl text-[#4a97b2] mt-20 font-[Bebas_Neue] mx-32">2025</h1>


        <p className = "mx-48 mt-4 text-primary text-lg max-w-7xl">
            <strong>First Place: </strong>Fahim Usshihab Mobin (Biomedical Engineering Graduate Student)
        </p>
        <ul className = "mx-60 mt-4 text-primary list-disc">
            <li className = "text-primary text-lg"><strong>Poster:</strong> <i>Development of a multi-modal artificial intelligence model to detect degrees of hemorrhage</i></li>
        </ul>

        <p className = "mx-48 mt-4 text-primary text-lg max-w-7xl">
            <strong>Second Place: </strong>Safa Fatima (Psychology Major, Texas A&M University)
        </p>
        <ul className = "mx-60 mt-4 text-primary list-disc">
            <li className = "text-primary text-lg"><strong>Poster:</strong> <i>Potential Microbial Inhibitors of Staphylococcus epidermidis Colonization in Acute Myeloid Leukemia Patients</i></li>
        </ul>


        <p className = "mx-48 mt-4 text-primary text-lg max-w-7xl">
            <strong>Third Place: </strong>Malak Ezzat (Third-Year Medical Student)
        </p>
        <ul className = "mx-60 mt-4 text-primary list-disc">
            <li className = "text-primary text-lg"><strong>Poster:</strong> <i> Arterial Access in Peripheral Interventions (PVIs)</i></li>
        </ul>
    </div>
  );
}
