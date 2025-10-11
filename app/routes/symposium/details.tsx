"use client"

import React from "react";
import aboutImg from '../../images/symposium/About Symposium Banner.png'
import type { Route } from "../+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Symposium Details - BCS Free Health Clinic" },
    { name: "description", content: "BCS Free Health Clinic" },
  ];
}

export default function Details() {
  return (
    <div>
        <img
            src={aboutImg}
            alt={"Threads of Knowledge"}
            className="object-cover m-auto mt-20"
            />

        <h1 className="text-5xl text-[#4a97b2] mt-20 font-[Bebas_Neue] mx-32">What is Threads of Knowledge?</h1>

        <p className = "mx-48 mt-4 text-primary text-lg max-w-7xl">
            <strong>Threads of Knowledge Symposium</strong> is <strong>BCS Free Health Clinic’s</strong> annual research symposium. Founded to showcase student-led research, the symposium provides a platform for undergraduates, graduate students, and medical trainees to present their work, foster professional growth, and engage with the community.
        </p>

        <h1 className="text-5xl text-[#4a97b2] mt-10 font-[Bebas_Neue] mx-32">Our Mission</h1>

        <ul className = "mx-53 mt-4 text-primary list-disc">
            <li className = "text-primary text-lg">Highlight student innovation across medicine, public health, and related disciplines</li>
            <li className = "text-primary text-lg">Create opportunities for professional development and mentorship</li>
            <li className = "text-primary text-lg">Recognize excellence in research with awards and publications</li>
            <li className = "text-primary text-lg">Bridge academia and community by making research accessible to all</li>
        </ul>
    </div>
  );
}
