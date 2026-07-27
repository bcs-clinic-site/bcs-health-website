"use client"

import React from "react";
import type { Route } from "../+types/home";
import { Button } from "~/components/ui/button"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Outreach - BCS Free Health Clinic" },
    { name: "description", content: "BCS Free Health Clinic" },
  ];
}

export default function Outreach() {
  return (
    <div className="px-4 md:px-8 pb-12">
        <div className="flex flex-col md:flex-row items-center pt-8 md:pt-16 gap-6 md:gap-0 md:-space-x-10">
            <div className="w-full md:pl-16">
                <h1 className="text-4xl sm:text-5xl md:text-6xl text-primary mt-4 md:mt-16 mx-4 md:mx-32 font-[Bebas_Neue] text-center">
                  Community Outreach Reports
                </h1>
                <p className="text-base sm:text-lg text-primary text-center max-w-4xl mx-auto mt-6 px-4 sm:px-6">
                  Coming soon!
                </p>
                <div className="flex justify-center mt-8 md:mt-10 px-4 sm:px-8">
                    <Button size="lg" variant="secondary" className="text-base sm:text-lg px-6 sm:px-8 md:px-12 py-6 md:py-7 bg-primary text-white rounded-lg hover:bg-[#dd73b5] transition-all duration-200 cursor-pointer">
                        Reports Coming Soon
                    </Button>
                </div>
            </div>
        </div>
    </div>
  );
}
