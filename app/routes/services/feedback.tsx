import React from "react";
import qr from "../../images/services/Feedback Form QR Code.png"
import { Button } from "~/components/ui/button"
import type { Route } from "../+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Feedback - BCS Free Health Clinic" },
    { name: "description", content: "BCS Free Health Clinic" },
  ];
}

export default function Feedback() {
  return (
    <div className="px-4 md:px-8 pb-12">
      <h1 className="text-4xl sm:text-5xl md:text-6xl text-primary mt-8 md:mt-12 mx-4 md:mx-32 font-[Bebas_Neue] text-center">
        Feedback
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mx-4 sm:mx-8 md:mx-32 lg:mx-64 mt-8 md:mt-16">
  
        {/* Left Text */}
        <div className="w-full md:w-1/2 text-primary text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
          We value your feedback at our free health clinic and are always looking for ways to improve our services.
          Please take a moment to share your thoughts and suggestions on your recent visit. Whether it's about the 
          quality of care, the efficiency of our processes, or any other aspect of your experience, your comments are 
          invaluable to us. Your input will help us enhance our services and better meet the needs of our community.
        </div>

        {/* Right QR Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={qr}
            alt="Feedback QR Code"
            className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-contain"
          />
        </div>

      </div>

      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mt-8 md:mt-10 mx-4 sm:mx-8">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSe9W3QBPBOrKzf_HFPVtY4skczE0fAuWUxuCpSOQLzIjaAfZQ/viewform" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
          <Button size="lg" variant="secondary" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 md:px-12 py-6 md:py-7 bg-primary text-white rounded-lg hover:bg-[#dd73b5] transition-all duration-200 cursor-pointer">
            Leave Feedback Here
          </Button>
        </a>
        
        <a href="https://g.page/r/CRBpGPgmdW1HEBM/review" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
          <Button size="lg" variant="secondary" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 md:px-12 py-6 md:py-7 bg-primary text-white rounded-lg hover:bg-[#dd73b5] transition-all duration-200 cursor-pointer">
            Access our Google Reviews Here
          </Button>
        </a>
        
        <a href="https://www.yelp.com/biz/bryan-college-station-free-health-clinic-college-station" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
          <Button size="lg" variant="secondary" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 md:px-12 py-6 md:py-7 bg-primary text-white rounded-lg hover:bg-[#dd73b5] transition-all duration-200 cursor-pointer">
            Access our Yelp Page Here
          </Button>
        </a>
      </div>
    </div>
  );
}