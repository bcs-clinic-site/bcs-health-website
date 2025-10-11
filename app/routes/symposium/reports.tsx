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

export default function Abstracts() {
  return (
    <div>
        <div className="flex items-center pt-16 -space-x-10">
            <img
                src={absImg}
                alt="Abstract Image"
                className="w-1/4 h-auto rounded-md ml-30"
            />
            <div className="pl-16">
                <h1 className="text-6xl text-primary mt-16 mx-32 font-[Bebas_Neue] text-center">Symposium Reports</h1>
                <p className="text-lg text-primary text-center max-w-4xl mx-auto mt-6">
                The symposium reports provide a comprehensive overview of each year’s event, highlighting participation, judging, award winners, and overall community impact. These reports are designed to capture not just numbers, but the stories of collaboration and engagement that make the symposium unique.<br /> <br />You can browse all past symposium reports through our Google Folder or view the most recent report for each event using the buttons below.
                </p>
                <div className="flex justify-center gap-8 mt-10">
                    <a href="https://drive.google.com/drive/folders/1jPVgt_LVXjMMT7Z3iuUqtWk6A_LieJQP?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" variant="secondary" className="text-lg px-40 py-7 w-56 bg-primary text-white rounded-lg  hover:bg-[#dd73b5] transition-all duration-200 cursor-pointer">
                            All Symposium Reports
                        </Button>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className = "pointer-events-none opacity-50">
                        <Button size="lg" variant="secondary" className="text-lg px-40 py-7 w-56 bg-primary text-white rounded-lg hover:bg-[#dd73b5] transition-all duration-200 cursor-pointer">
                        Latest Symposium Report
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
}
