"use client"

import React from "react";
import appImg from '../../images/symposium/Applications Photo.jpg'
import type { Route } from "../+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Symposium Applications - BCS Free Health Clinic" },
    { name: "description", content: "BCS Free Health Clinic" },
  ];
}

export default function Applications() {
  return (
    <div className="px-4 md:px-8 pb-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl text-primary mt-8 md:mt-12 mx-4 md:mx-32 font-[Bebas_Neue] text-center">
          Applications
        </h1>
        
        <img
            src={appImg}
            alt={"Applications Image"}
            className="w-full sm:w-4/5 md:w-3/4 lg:w-1/2 mx-auto mt-8 md:mt-10 mb-8 md:mb-10 h-64 sm:h-80 md:h-96 lg:h-[400px] object-cover rounded-md"
        />

        <p className="mx-4 sm:mx-8 md:mx-32 lg:mx-48 mt-4 text-primary text-base sm:text-lg max-w-7xl">
            Applications for the <strong>Threads of Knowledge Symposium</strong> open during the Spring semester each year. At that time, full details regarding eligibility, submission guidelines, and deadlines will be available here.
            <br /><br />Please check back in the spring for updated application information.
        </p>
    </div>
  );
}