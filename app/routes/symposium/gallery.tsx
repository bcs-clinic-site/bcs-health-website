"use client"

import React from "react";
import aboutImg from '../../images/symposium/About Symposium Banner.png'
import type { Route } from "../+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Gallery - BCS Free Health Clinic" },
    { name: "description", content: "BCS Free Health Clinic" },
  ];
}

export default function Winners() {
  return (
    <div>
        <h1 className="text-6xl text-primary mt-16 mx-32 font-[Bebas_Neue] text-center">Threads of Knowledge 2025</h1>
        <p className = "mx-48 mt-10 text-primary text-lg text-center">
            We are working diligently to gather our symposium gallery. Please come back at a later time to view our photos!
        </p>
    </div>
  );
}
