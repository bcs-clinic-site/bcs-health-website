import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Header } from "~/home/header";
import { Button } from "~/components/ui/button"

import myImg from '../home/Top Graphic.png'
export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <div>
    <Header />
    <div className="relative w-full">
  <img src={myImg} alt="Main" className="w-full h-auto" />

  {/* Button container overlay */}
  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 flex flex-nowrap justify-center gap-4 font-[Arial_MT_Pro]">
    <Button size="lg" variant="secondary" className="bg-primary text-white hover:bg-[#dd73b5] w-52 h-24 text-lg">
      Contact Us
    </Button>
    <Button size="lg" variant="secondary" className="bg-primary text-white hover:bg-[#dd73b5] w-52 h-24 text-lg">
      Book An Appointment
    </Button>
    <Button size="lg" variant="secondary" className="bg-primary text-white hover:bg-[#dd73b5] w-52 h-24 text-lg">
      Volunteer
    </Button>
    <Button size="lg" variant="secondary" className="bg-primary text-white hover:bg-[#dd73b5] w-52 h-24 text-lg">
      Donate
    </Button>

    
  </div>
  
</div>
<h1 className="text-5xl text-primary mt-48 ml-12 font-[Bebas_Neue]">About BCS FHC</h1>
<div className="mt-8 mx-12 mb-24 text-[1.7rem] font-[Arial_MT_Pro] text-primary pl-24 pr-24">
  <p>Our mission at the <strong>Bryan-College Station Free Health Clinic</strong> is to embody the values of compassion, generosity, and service exemplified in Islamic teachings. We recognize our free clinic as a form of charity (sadaqah) and view it as a manifestation of this principle.
<br /><br />
We aim to promote <strong>health equity</strong> and <strong>dignity for all</strong>, regardless of background or circumstances. We seek to foster understanding, empathy, and solidarity within the BCS community creating a healthier and more inclusive society for generations to come.
<br /><br />
We strive to provide holistic healthcare services integrated with social support programs, thereby fulfilling the <strong>prophetic tradition of caring for the sick and needy.</strong></p>
</div>
</div>

}
