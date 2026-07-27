// ============================================
// home.tsx
// ============================================
import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Header } from "~/components/header";
import { Button } from "~/components/ui/button"

import myImg from '../images/home/Top Graphic.png'
import logo from '../images/home/Clinic Logo.png';
import QuoteCarousel from "~/components/quotes";

import welcomeImg from '../images/home/IMG_1128.JPG'
import chairs from '../images/home/IMG_1185.JPG'
import table from '../images/home/IMG_9856.jpg'
import volunteering from '../images/home/IMG_9867.jpg'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home - BCS Free Health Clinic" },
    { name: "description", content: "BCS Free Health Clinic" },
  ];
}

export default function Home() {
  return <div>

    <div className="relative w-full">
      <img src={myImg} alt="Main" className="w-full h-auto" />

      {/* Button container overlay */}
      <div className="absolute bottom-0 left-1/2 scale-75 md:scale-100 transform -translate-x-1/2 translate-y-3/5 md:translate-y-1/2 flex flex-row flex-wrap md:flex-nowrap justify-center gap-2 md:gap-4 font-[Arial_MT_Pro] px-4 md:px-0 w-full md:w-auto max-w-md md:max-w-none">
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
        <a href="https://www.paypal.com/donate/?hosted_button_id=F3K522QF32P5L" target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[calc(50%-0.25rem)] md:min-w-0 md:flex-none md:w-auto">
          <Button size="lg" variant="secondary" className="bg-primary text-white hover:bg-[#dd73b5] w-full md:w-52 h-14 md:h-24 text-xs md:text-lg cursor-pointer">
            Donate
          </Button>
        </a>
      </div>
    </div>

    <div id="About">
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-primary mt-24 sm:mt-24 md:mt-24 mx-4 sm:mx-12 md:mx-36 font-[Bebas_Neue]">
        About BCS FHC
      </h1>
      <div className="mt-6 sm:mt-8 mx-4 sm:mx-8 md:mx-12 lg:mx-24 mb-16 sm:mb-24 text-base sm:text-lg md:text-xl lg:text-[1.7rem] font-[Arial_MT_Pro] text-primary px-4 sm:px-8 md:px-12 lg:px-24">
        <p>Our mission at the <strong>Bryan-College Station Free Health Clinic</strong> is to embody the values of compassion, generosity, and service exemplified in Islamic teachings. We recognize our free clinic as a form of charity (sadaqah) and view it as a manifestation of this principle.
        <br /><br />
        We aim to promote <strong>health equity</strong> and <strong>dignity for all</strong>, regardless of background or circumstances. We seek to foster understanding, empathy, and solidarity within the BCS community creating a healthier and more inclusive society for generations to come.
        <br /><br />
        We strive to provide holistic healthcare services integrated with social support programs, thereby fulfilling the <strong>prophetic tradition of caring for the sick and needy.</strong></p>
      </div>
    </div>

    <div id="Services">
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-primary mt-16 sm:mt-20 md:mt-24 mx-4 sm:mx-12 md:mx-36 font-[Bebas_Neue]">
        Our Services
      </h1>
      <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 mx-auto max-w-7xl px-4 sm:px-4 md:px-8 lg:px-16 mt-8">
        {/* Monthly Clinics */}
        <div className="flex flex-col items-center h-full">
          <div className="w-full aspect-square overflow-hidden rounded">
            <img src={welcomeImg} alt="Monthly Clinics" className="w-full h-full object-cover" />
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
            <img src={chairs} alt="Bait ul Naeem" className="w-full h-full object-cover" />
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
            <img src={table} alt="Irshad Al Aafiyah" className="w-full h-full object-cover" />
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
            <img src={volunteering} alt="Amanah" className="w-full h-full object-cover" />
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
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-primary mx-4 sm:mx-12 md:mx-36 font-[Bebas_Neue] text-center">
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
}
