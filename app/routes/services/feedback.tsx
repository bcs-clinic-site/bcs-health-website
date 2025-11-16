import React from "react";
import qr from "../../images/services/Feedback Form QR Code.png"
import { Button } from "~/components/ui/button"

export default function Feedback() {
  return (
    <div>
      <h1 className="text-6xl text-primary mt-12 mx-32 font-[Bebas_Neue] text-center">
        Feedback
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-center mx-64 mt-16">
  
    {/* Left Text */}
    <div className="md:w-1/2 text-primary text-2xl leading-relaxed">
        We value your feedback at our free health clinic and are always looking for ways to improve our services.
        Please take a moment to share your thoughts and suggestions on your recent visit. Whether it’s about the 
        quality of care, the efficiency of our processes, or any other aspect of your experience, your comments are 
        invaluable to us. Your input will help us enhance our services and better meet the needs of our community.
    </div>

    {/* Right QR Image */}
    <div className="md:w-1/2 flex justify-center">
        <img
        src={qr}
        alt="Feedback QR Code"
        className="w-96 h-96 object-contain"
        />
    </div>

    </div>

    <div className="flex justify-center gap-8 mt-10">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSe9W3QBPBOrKzf_HFPVtY4skczE0fAuWUxuCpSOQLzIjaAfZQ/viewform" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" variant="secondary" className="text-lg px-40 py-7 w-56 bg-primary text-white rounded-lg  hover:bg-[#dd73b5] transition-all duration-200 cursor-pointer">
                            Leave Feedback Here
                        </Button>
                    </a>
                    <a href="https://g.page/r/CRBpGPgmdW1HEBM/review" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" variant="secondary" className="text-lg px-40 py-7 w-56 bg-primary text-white rounded-lg  hover:bg-[#dd73b5] transition-all duration-200 cursor-pointer">
                            Access our Google Reviews Here
                        </Button>
                    </a>
                    <a href="https://www.yelp.com/biz/bryan-college-station-free-health-clinic-college-station" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" variant="secondary" className="text-lg px-40 py-7 w-56 bg-primary text-white rounded-lg  hover:bg-[#dd73b5] transition-all duration-200 cursor-pointer">
                            Access our Yelp Page Here
                        </Button>
                    </a>
                </div>
    </div>
  );
}
