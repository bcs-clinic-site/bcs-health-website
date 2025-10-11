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
    <div>
        <h1 className="text-6xl text-primary mt-16 mx-32 font-[Bebas_Neue] text-center">Applications</h1>
        <img
            src={appImg}
            alt={"Applications Image"}
            className="w-[50%] m-auto mt-10 mb-10 h-[400px] object-cover"
            />

        <p className = "mx-48 mt-4 text-primary text-lg max-w-7xl">
            Applications for the <strong>Threads of Knowledge Symposium</strong> open during the Spring semester each year. At that time, full details regarding eligibility, submission guidelines, and deadlines will be available here
            <br /><br />Please check back in the spring for updated application information.
        </p>
    </div>
  );
}
