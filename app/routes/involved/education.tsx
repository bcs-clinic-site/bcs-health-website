"use client"

import React from "react";
import absImg from '../../images/about/providers/unknown.jpg'
import type { Route } from "../+types/home";
import { Button } from "~/components/ui/button"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Education - BCS Free Health Clinic" },
    { name: "description", content: "BCS Free Health Clinic" },
  ];
}

export default function Education() {
  return (
    <div>
        <div className="flex items-center pt-16 -space-x-10">
            <img
                src={absImg}
                alt="Abstract Image"
                className="w-1/4 h-auto rounded-md ml-30"
            />
            <div className="pl-16">
                <h1 className="text-6xl text-primary mt-16 mx-32 font-[Bebas_Neue] text-center">Education Reports</h1>
                <p className="text-lg text-primary text-center max-w-4xl mx-auto mt-6">
                We believe in transparency and accountability by sharing the impact of our education initiatives. Each event is documented in a detailed report highlighting activities, outcomes, and community impact.<br /> <br />You can browse all past reports through our Google Folder or view the most recent report for each event using the buttons below.

                </p>
                <div className="flex justify-center gap-8 mt-10">
                    <a href="https://drive.google.com/drive/folders/1kkpFTyETH75C6VxcjKqN2jhVylI_RZWZ?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" variant="secondary" className="text-lg px-40 py-7 w-56 bg-primary text-white rounded-lg  hover:bg-[#dd73b5] transition-all duration-200 cursor-pointer">
                            All Education Reports
                        </Button>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className = "pointer-events-none opacity-50">
                        <Button size="lg" variant="secondary" className="text-lg px-40 py-7 w-56 bg-primary text-white rounded-lg hover:bg-[#dd73b5] transition-all duration-200 cursor-pointer">
                        Latest Education Report
                        </Button>
                    </a>
                </div>
            </div>
        </div>

        <h1 className="text-6xl text-primary mt-24 mx-32 font-[Bebas_Neue] text-center">
        Education Photo Gallery
      </h1>

      <p className="text-lg text-primary text-center mx-auto mt-6">
                We are working diligently to gather our education gallery. Please come back at a later time to view our photos!
        </p>
    </div>
  );
}
