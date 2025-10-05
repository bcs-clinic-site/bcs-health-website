import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Header } from "~/components/header";
import { Button } from "~/components/ui/button"

import myImg from '../home/Top Graphic.png'
import logo from '../home/Clinic Logo.png';
import QuoteCarousel from "~/components/quotes";

import welcomeImg from '../home/IMG_1128.jpg'
import chairs from '../home/IMG_1185.jpg'
import table from '../home/IMG_9856.jpg'
import volunteering from '../home/IMG_9867.jpg'

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
  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 flex flex-nowrap justify-center gap-4 font-[Arial_MT_Pro]">
    <Button size="lg" variant="secondary" className="bg-primary text-white hover:bg-[#dd73b5] w-52 h-24 text-lg cursor-pointer">
      Contact Us
    </Button>
    <a href = "https://provider.click4md.com/schedule/OTNEb2NaODFRMXJPRUVUZWN4R2RpUT09" target = "_blank" rel = "noopener noreferrer">
      <Button size="lg" variant="secondary" className="bg-primary text-white hover:bg-[#dd73b5] w-52 h-24 text-lg cursor-pointer">
        Book An Appointment
      </Button>
    </a>
    <Button size="lg" variant="secondary" className="bg-primary text-white hover:bg-[#dd73b5] w-52 h-24 text-lg cursor-pointer">
      Volunteer
    </Button>
    <a href = "https://www.paypal.com/donate/?hosted_button_id=F3K522QF32P5L" target = "_blank" rel="noopener noreferrer">
      <Button size="lg" variant="secondary" className="bg-primary text-white hover:bg-[#dd73b5] w-52 h-24 text-lg cursor-pointer">
        Donate
      </Button>
    </a>

    
  </div>
  
</div>
<div id = "About">
  <h1 className="text-5xl text-primary mt-48 mx-36 font-[Bebas_Neue]">About BCS FHC</h1>
  <div className="mt-8 mx-12 mb-24 text-[1.7rem] font-[Arial_MT_Pro] text-primary pl-24 pr-24">
    <p>Our mission at the <strong>Bryan-College Station Free Health Clinic</strong> is to embody the values of compassion, generosity, and service exemplified in Islamic teachings. We recognize our free clinic as a form of charity (sadaqah) and view it as a manifestation of this principle.
    <br /><br />
    We aim to promote <strong>health equity</strong> and <strong>dignity for all</strong>, regardless of background or circumstances. We seek to foster understanding, empathy, and solidarity within the BCS community creating a healthier and more inclusive society for generations to come.
    <br /><br />
    We strive to provide holistic healthcare services integrated with social support programs, thereby fulfilling the <strong>prophetic tradition of caring for the sick and needy.</strong></p>
  </div>
</div>

<div id="Services">
  <h1 className="text-5xl text-primary mt-24 mx-36 font-[Bebas_Neue]">Our Services</h1>
  <div className="flex mx-18 mt-8 pl-16 pr-16 items-stretch">
    <div className="w-1/4 p-[5px] flex flex-col items-center">
      <img src={welcomeImg}  className="w-full" />
      <h1 className="text-5xl text-[#075a77] mt-24 text-center font-[Bebas_Neue]">Monthly Clinics</h1>
      <div className="mt-8 ml-8 mr-8 text-4 font-[Arial_MT_Pro] text-primary text-center flex-1">
        Held on the final Saturday of each month, the Monthly Clinic offers scheduled appointments for a range of primary health care needs.
      </div>
      <Button
        size="sm"
        variant="secondary"
        className="mt-6 bg-primary text-white hover:bg-[#dd73b5] w-64 h-12 text-sm justify-center"
      >
        Learn More
      </Button>
    </div>
    <div className="w-1/4 p-[5px] flex flex-col items-center">
      <img src={chairs}  className="w-full" />
      <h1 className="text-5xl text-[#075a77] mt-24 text-center font-[Bebas_Neue]">Bait ul naeem</h1>
      <div className="mt-8 ml-8 mr-8 text-4 font-[Arial_MT_Pro] text-primary text-center flex-1">
        A dedicated women & maternal health program designed to support our sisters through pregnancy and early motherhood.
      </div>
      <Button
        size="sm"
        variant="secondary"
        className="mt-6 bg-primary text-white hover:bg-[#dd73b5] w-64 h-12 text-sm justify-center"
      >
        Learn More
      </Button>
    </div>
    <div className="w-1/4 p-[5px] flex flex-col items-center">
      <img src={table}  className="w-full" />
      <h1 className="text-5xl text-[#075a77] mt-24 text-center font-[Bebas_Neue]">irshad al aafiyah</h1>
      <div className="mt-8 ml-8 mr-8 text-4 font-[Arial_MT_Pro] text-primary text-center flex-1">
        Customized nutritional counseling to help our community make informed dietary choices for better health.
      </div>
      <Button
        size="sm"
        variant="secondary"
        className="mt-6 bg-primary text-white hover:bg-[#dd73b5] w-64 h-12 text-sm justify-center"
      >
        Learn More
      </Button>
    </div>

    <div className="w-1/4 p-[5px] flex flex-col items-center">
      <img src={volunteering}  className="w-full" />
      <h1 className="text-5xl text-[#075a77] mt-24 text-center font-[Bebas_Neue]">Immanah</h1>
      <div className="mt-8 ml-8 mr-8 text-4 font-[Arial_MT_Pro] text-primary text-center flex-1">
        More details coming on our new mental health program in October 2026, In’Sha Allah.
      </div>
      <Button
        size="sm"
        variant="secondary"
        className="mt-6 bg-primary text-white hover:bg-[#dd73b5] w-64 h-12 text-sm justify-center"
      >
        Coming soon...
      </Button>
    </div>
  </div>

  <QuoteCarousel />

  <div id = "review">
    <h1 className="text-5xl text-primary mt-24 mx-36 font-[Bebas_Neue] text-center">Want to leave us a review?</h1>
    <div className="mt-8 ml-8 mr-8 text-16 font-[Arial_MT_Pro] text-primary text-center">
        Use any of the three buttons below to leave a personal review, Google Review, or Yelp Review! Any feedback would be greatly appreciated!
    <br />
    <Button
        size="lg"
        variant="secondary"
        className="mt-6 bg-primary text-white hover:bg-[#dd73b5] w-128 h-20 text-lg pt-1 justify-center rounded-4xl"
      >
        Access our Feedback Form Here
    </Button>
    <br />
    <Button
        size="lg"
        variant="secondary"
        className="mt-6 bg-primary text-white hover:bg-[#dd73b5] w-128 h-20 text-lg pt-1 justify-center rounded-4xl"
      >
        Access our Google Reviews Here
    </Button>
    <br />
    <Button
        size="lg"
        variant="secondary"
        className="mt-6 bg-primary text-white hover:bg-[#dd73b5] w-128 h-20 text-lg pt-1 justify-center rounded-4xl"
      >
        Access our Yelp Here
    </Button>
    </div>
    


      
  </div>
</div>
</div>


}
