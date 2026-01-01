"use client"

import React from "react";
import absImg from '../../images/about/providers/unknown.jpg'
import type { Route } from "../+types/home";
import { Button } from "~/components/ui/button"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Reports - BCS Free Health Clinic" },
    { name: "description", content: "BCS Free Health Clinic" },
  ];
}

export default function Reports() {
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
                  Symposium Reports
                </h1>
                <p className="text-base sm:text-lg text-primary text-center max-w-4xl mx-auto mt-6 px-4 sm:px-6">
                  The symposium reports provide a comprehensive overview of each year's event, highlighting participation, judging, award winners, and overall community impact. These reports are designed to capture not just numbers, but the stories of collaboration and engagement that make the symposium unique.<br /> <br />You can browse all past symposium reports through our Google Folder or view the most recent report for each event using the buttons below.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 md:gap-8 mt-8 md:mt-10 px-4 sm:px-8">
                    <a href="https://drive.google.com/drive/folders/1jPVgt_LVXjMMT7Z3iuUqtWk6A_LieJQP?usp=sharing" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                        <Button size="lg" variant="secondary" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 md:px-12 py-6 md:py-7 bg-primary text-white rounded-lg hover:bg-[#dd73b5] transition-all duration-200 cursor-pointer">
                            All Symposium Reports
                        </Button>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto pointer-events-none opacity-50">
                        <Button size="lg" variant="secondary" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 md:px-12 py-6 md:py-7 bg-primary text-white rounded-lg hover:bg-[#dd73b5] transition-all duration-200 cursor-pointer">
                          Latest Symposium Report (Coming soon...)
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
}