// ============================================
// home.tsx
// ============================================
import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Header } from "~/components/header";
import { Button } from "~/components/ui/button"
import { useState } from "react";

import myImg from '../images/home/Top Graphic.png'
import logo from '../images/home/Clinic Logo.png';
import QuoteCarousel from "~/components/quotes";

import carousel1 from '../images/home/carousel 1.jpg'
import carousel2 from '../images/home/carousel 2.jpg'
import carousel3 from '../images/home/carousel 3.jpg'
import carousel4 from '../images/home/carousel 4.jpg'
import carousel5 from '../images/home/carousel 5.jpg'
import carousel6 from '../images/home/carousel 6.jpg'
import carousel7 from '../images/home/carousel 7.jpg'
import carousel8 from '../images/home/carousel 8.jpg'
import carousel9 from '../images/home/carousel 9.jpg'
import carousel10 from '../images/home/carousel 10.jpg'
import carousel11 from '../images/home/carousel 11.jpg'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home - BCS Free Health Clinic" },
    { name: "description", content: "BCS Free Health Clinic" },
  ];
}

export default function Home() {
  const carouselImages = [
    { src: myImg, alt: "BCS Free Health Clinic" },
    { src: carousel1, alt: "Clinic Image 1" },
    { src: carousel2, alt: "Clinic Image 2" },
    { src: carousel3, alt: "Clinic Image 3" },
    { src: carousel4, alt: "Clinic Image 4" },
    { src: carousel5, alt: "Clinic Image 5" },
    { src: carousel6, alt: "Clinic Image 6" },
    { src: carousel7, alt: "Clinic Image 7" },
    { src: carousel8, alt: "Clinic Image 8" },
    { src: carousel9, alt: "Clinic Image 9" },
    { src: carousel10, alt: "Clinic Image 10" },
    { src: carousel11, alt: "Clinic Image 11" },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div>
      <div className="relative w-full">
        <img src={carouselImages[currentImageIndex].src} alt={carouselImages[currentImageIndex].alt} className="w-full h-auto" />

        {/* Previous Button */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 md:p-3 rounded-full transition-all z-10"
          aria-label="Previous image"
        >
          <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 md:p-3 rounded-full transition-all z-10"
          aria-label="Next image"
        >
          <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Image Counter */}
        <div className="absolute top-4 right-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full text-sm md:text-base">
          {currentImageIndex + 1} / {carouselImages.length}
        </div>

        {/* Button container overlay */}
        <div className="absolute bottom-0 left-1/2 scale-75 md:scale-100 transform -translate-x-1/2 translate-y-3/5 md:translate-y-1/2 flex flex-row flex-wrap md:flex-nowrap justify-center gap-2 md:gap-4">
          <a href="/contact" rel="noopener noreferrer" className="flex-1 min-w-[calc(50%-0.25rem)] md:min-w-0 md:flex-none md:w-auto">
            <Button size="lg" variant="secondary" className="bg-primary text-white hover:bg-[#dd73b5] w-full md:w-52 h-14 md:h-24 text-xs md:text-lg cursor-pointer">
              Contact Us
            </Button>
          </a>
          <a href="https://provider.click4md.com/schedule/OTNEb2NaODFRMXJPRUVUZWN4R2RpUT09" target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[calc(50%-0.25rem)] md:min-w-0 md:flex-none md:w-auto">
            <Button size="lg" variant="secondary" className="bg-primary text-white hover:bg-[#dd73b5] w-full md:w-52 h-14 md:h-24 text-xs md:text-lg cursor-pointer">
              Book An Appointment
            </Button>
          </a>
          <a href="/involved/volunteer" rel="noopener noreferrer" className="flex-1 min-w-[calc(50%-0.25rem)] md:min-w-0 md:flex-none md:w-auto">
            <Button size="lg" variant="secondary" className="bg-primary text-white hover:bg-[#dd73b5] w-full md:w-52 h-14 md:h-24 text-xs md:text-lg cursor-pointer">
              Volunteer
            </Button>
          </a>
          <a href="/involved/donate" rel="noopener noreferrer" className="flex-1 min-w-[calc(50%-0.25rem)] md:min-w-0 md:flex-none md:w-auto">
            <Button size="lg" variant="secondary" className="bg-primary text-white hover:bg-[#dd73b5] w-full md:w-52 h-14 md:h-24 text-xs md:text-lg cursor-pointer">
              Donate
            </Button>
          </a>
        </div>
      </div>

      <div id="About">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-primary mt-24 sm:mt-24 md:mt-24 font-[Bebas_Neue] text-center">
          About BCS FHC
        </h1>
        <div className="mt-6 sm:mt-8 mx-4 sm:mx-8 md:mx-12 lg:mx-24 mb-16 sm:mb-24 text-base sm:text-lg md:text-xl lg:text-[1.7rem] font-[Arial_MT_Pro] text-primary px-4 sm:px-8 md:px-12 lg:px-24">
          <p>Our mission at the <strong>Bryan-College Station Free Health Clinic</strong> is to embody the values of compassion, generosity, and service exemplified in Islamic teachings. We recognize that healthcare is a fundamental human right.</p>
          <br /><br />
          We aim to promote <strong>health equity</strong> and <strong>dignity for all</strong>, regardless of background or circumstances. We seek to foster understanding, empathy, and solidarity with our community.
          <br /><br />
          We strive to provide holistic healthcare services integrated with social support programs, thereby fulfilling the <strong>prophetic tradition of caring for the sick and needy.</strong></p>
        </div>
      </div>

      <div id="Services">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-primary mt-16 sm:mt-20 md:mt-24 font-[Bebas_Neue] text-center">
          Our Services
        </h1>
        <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 mx-auto max-w-7xl px-4 sm:px-4 md:px-8 lg:px-16 mt-8">
          {/* Monthly Clinics */}
          <div className="flex flex-col items-center h-full">
            <div className="w-full aspect-square overflow-hidden rounded">
              <img src={carousel1} alt="Monthly Clinics" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#075a77] mt-6 md:mt-8 text-center font-[Bebas_Neue]">
              Monthly Clinics
            </h1>
            <div className="mt-4 md:mt-6 text-xs sm:text-sm md:text-base font-[Arial_MT_Pro] text-primary text-center flex-grow">
              Held on the final Saturday of each month, the Monthly Clinic offers scheduled appointments for a range of primary health care needs.
            </div>
            <a href="/services/appointments" rel="noopener noreferrer" className="mt-4 md:mt-6 w-full">
              <Button
                size="sm"
                className="bg-primary text-white hover:bg-[#dd73b5] w-full h-10 md:h-12 text-xs sm:text-sm justify-center cursor-pointer"
              >
                Learn More
              </Button>
            </a>
          </div>
          
          {/* Bait ul Naeem */}
          <div className="flex flex-col items-center h-full">
            <div className="w-full aspect-square overflow-hidden rounded">
              <img src={carousel2} alt="Bait ul Naeem" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#075a77] mt-6 md:mt-8 text-center font-[Bebas_Neue]">
              Bait ul naeem
            </h1>
            <div className="mt-4 md:mt-6 text-xs sm:text-sm md:text-base font-[Arial_MT_Pro] text-primary text-center flex-grow">
              A dedicated women & maternal health program designed to support our sisters through pregnancy and early motherhood.
            </div>
            <a href="/services/bait-ul-naeem" rel="noopener noreferrer" className="mt-4 md:mt-6 w-full">
              <Button
                size="sm"
                className="bg-primary text-white hover:bg-[#dd73b5] w-full h-10 md:h-12 text-xs sm:text-sm justify-center cursor-pointer"
              >
                Learn More
              </Button>
            </a>
          </div>

          {/* Irshad Al Aafiyah */}
          <div className="flex flex-col items-center h-full">
            <div className="w-full aspect-square overflow-hidden rounded">
              <img src={carousel3} alt="Irshad Al Aafiyah" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#075a77] mt-6 md:mt-8 text-center font-[Bebas_Neue]">
              irshad al aafiyah
            </h1>
            <div className="mt-4 md:mt-6 text-xs sm:text-sm md:text-base font-[Arial_MT_Pro] text-primary text-center flex-grow">
              Customized nutritional counseling to help our community make informed dietary choices for better health.
            </div>
            <a href="/services/irshad" rel="noopener noreferrer" className="mt-4 md:mt-6 w-full">
              <Button
                size="sm"
                className="bg-primary text-white hover:bg-[#dd73b5] w-full h-10 md:h-12 text-xs sm:text-sm justify-center cursor-pointer"
              >
                Learn More
              </Button>
            </a>
          </div>

          {/* Amanah */}
          <div className="flex flex-col items-center h-full">
            <div className="w-full aspect-square overflow-hidden rounded">
              <img src={carousel4} alt="Amanah" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#075a77] mt-6 md:mt-8 text-center font-[Bebas_Neue]">
              Amanah
            </h1>
            <div className="mt-4 md:mt-6 text-xs sm:text-sm md:text-base font-[Arial_MT_Pro] text-primary text-center flex-grow">
              A mental health program designed to support emotional and mental well-being as part of holistic health care.
            </div>
            <a href="/services/amanah" rel="noopener noreferrer" className="mt-4 md:mt-6 w-full">
              <Button
                size="sm"
                className="bg-primary text-white hover:bg-[#dd73b5] w-full h-10 md:h-12 text-xs sm:text-sm justify-center cursor-pointer"
              >
                Learn More
              </Button>
            </a>
          </div>
        </div>

        <QuoteCarousel />

        <div id="review">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-primary font-[Bebas_Neue] text-center">
            Want to leave us a review?
          </h1>
          <div className="mt-6 sm:mt-8 mx-4 sm:mx-8 text-sm sm:text-base font-[Arial_MT_Pro] text-primary text-center">
            Use any of the three buttons below to leave a personal review, Google Review, or Yelp Review! Any feedback would be greatly appreciated!
            <br />
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSe9W3QBPBOrKzf_HFPVtY4skczE0fAuWUxuCpSOQLzIjaAfZQ/viewform" target="_blank" rel="noopener noreferrer" className="inline-block w-full sm:w-auto">
              <Button
                size="lg"
                variant="secondary"
                className="mt-4 sm:mt-6 bg-primary text-white hover:bg-[#dd73b5] w-full sm:w-auto sm:min-w-[32rem] h-16 sm:h-20 text-sm sm:text-lg pt-1 justify-center rounded-4xl cursor-pointer"
              >
                Access our Feedback Form Here
              </Button>
            </a>
            <br />
            <a href="https://g.page/r/CRBpGPgmdW1HEBM/review" target="_blank" rel="noopener noreferrer" className="inline-block w-full sm:w-auto">
              <Button
                size="lg"
                variant="secondary"
                className="mt-4 sm:mt-6 bg-primary text-white hover:bg-[#dd73b5] w-full sm:w-auto sm:min-w-[32rem] h-16 sm:h-20 text-sm sm:text-lg pt-1 justify-center rounded-4xl cursor-pointer"
              >
                Access our Google Reviews Here
              </Button>
            </a>
            <br />
            <a href="https://www.yelp.com/biz/bryan-college-station-free-health-clinic-college-station" target="_blank" rel="noopener noreferrer" className="inline-block w-full sm:w-auto">
              <Button
                size="lg"
                variant="secondary"
                className="mt-4 sm:mt-6 bg-primary text-white hover:bg-[#dd73b5] w-full sm:w-auto sm:min-w-[32rem] h-16 sm:h-20 text-sm sm:text-lg pt-1 justify-center rounded-4xl cursor-pointer"
              >
                Access our Yelp Here
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
