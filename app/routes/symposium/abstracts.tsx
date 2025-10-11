"use client"

import React from "react";
import absImg from '../../images/symposium/Abstract Booklet Photo.png'
import type { Route } from "../+types/home";
import { Button } from "~/components/ui/button"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Abstract Booklets - BCS Free Health Clinic" },
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
                <h1 className="text-6xl text-primary mt-16 mx-32 font-[Bebas_Neue] text-center">Abstract Booklets</h1>
                <p className="text-lg text-primary text-center max-w-4xl mx-auto mt-6">
                Each year, the Threads of Knowledge Symposium brings together students across disciplines to share their research, insights, and innovations. These presentations are compiled into an annual abstract booklet, preserving the breadth of scholarship and creativity showcased at the event.<br /> <br />You can browse all past abstract booklets through our Google Folder or view the most recent report for each event using the buttons below.
                </p>
                <div className="flex justify-center gap-8 mt-10">
                    <a href="https://drive.google.com/drive/folders/1o9KyngYRWdy5YuRGCmbTw-A_vXyBJT9L?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" variant="secondary" className="text-lg px-40 py-7 w-56 bg-primary text-white rounded-lg  hover:bg-[#dd73b5] transition-all duration-200 cursor-pointer">
                            All Abstract Booklets
                        </Button>
                    </a>
                    <a href="https://drive.google.com/file/d/1Fy6NynTCOCD_P1FVyXJayPxCsZXiEGNF/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" variant="secondary" className="text-lg px-40 py-7 w-56 bg-primary text-white rounded-lg hover:bg-[#dd73b5] transition-all duration-200 cursor-pointer">
                        2025 Abstract Booklet
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
}
