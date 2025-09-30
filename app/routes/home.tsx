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
  return <div className = "bg-black">
  
    <Header />
    <div className="relative w-full">
  <img src={myImg} alt="Main" className="w-full h-auto" />

  {/* Button container overlay */}
  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 flex flex-nowrap justify-center gap-4 ">
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
</div>

}
