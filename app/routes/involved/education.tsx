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
    <div className="px-4 md:px-8 pb-12">
        <div className="flex flex-col md:flex-row items-center pt-8 md:pt-16 gap-6 md:gap-0 md:-space-x-10">
            <img
                src={absImg}
                alt="Abstract Image"
                className="w-48 h-48 sm:w-64 sm:h-64 md:w-1/4 md:h-auto rounded-md md:ml-30 object-cover"
            />
            <div className="w-full md:pl-16">
                <h1 className="text-4xl sm:text-5xl md:text-6xl text-primary mt-4 md:mt-16 mx-4 md:mx-32 font-[Bebas_Neue] text-center">
                  Education Reports
                </h1>
                <p className="text-base sm:text-lg text-primary text-center max-w-4xl mx-auto mt-6 px-4 sm:px-6">
                  We believe in transparency and accountability by sharing the impact of our education initiatives. Each event is documented in a detailed report highlighting activities, outcomes, and community impact.<br /> <br />You can browse all past reports through our Google Folder or view the most recent report for each event using the buttons below.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 md:gap-8 mt-8 md:mt-10 px-4 sm:px-8">
                    <a href="https://drive.google.com/drive/folders/1kkpFTyETH75C6VxcjKqN2jhVylI_RZWZ?usp=sharing" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                        <Button size="lg" variant="secondary" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 md:px-12 py-6 md:py-7 bg-primary text-white rounded-lg hover:bg-[#dd73b5] transition-all duration-200 cursor-pointer">
                            All Education Reports
                        </Button>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto pointer-events-none opacity-50">
                        <Button size="lg" variant="secondary" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 md:px-12 py-6 md:py-7 bg-primary text-white rounded-lg hover:bg-[#dd73b5] transition-all duration-200 cursor-pointer">
                          Latest Education Report
                        </Button>
                    </a>
                </div>
            </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl text-primary mt-16 md:mt-24 mx-4 md:mx-32 font-[Bebas_Neue] text-center">
          Education Photo Gallery
        </h1>

        <p className="text-base sm:text-lg text-primary text-center mx-auto mt-6 px-4 sm:px-6">
          We are working diligently to gather our education gallery. Please come back at a later time to view our photos!
        </p>
    </div>
  );
}