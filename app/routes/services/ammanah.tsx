import React from "react";
import Logo from "../../images/services/Amanah Logo.jpg";
import Flyer from "../../images/services/Amanah Post.png";
import type { Route } from "../+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ammanah - BCS Free Health Clinic" },
    { name: "description", content: "BCS Free Health Clinic" },
  ];
}

export default function Ammanah() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 md:px-10 lg:px-14 py-4">
      {/* Logo */}
      <header className="flex flex-col items-center text-center">
        <img
          src={Logo}
          alt="Ammanah Logo"
          className="w-1/2 max-w-full"
        />
      </header>

      {/* Intro two-column section */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-[400px_1fr] gap-12 lg:gap-16 items-start">
        {/* Flyer on the left */}
        <div className="flex justify-center">
          <img
            src={Flyer}
            alt="Ammanah Flyer"
            className="rounded-md shadow-md w-full max-w-md h-auto"
          />
        </div>

        {/* Right column */}
        <div className="leading-relaxed">
          <p className="mb-10 text-[19px] text-primary">
            At <strong>BCS Free Health Clinic</strong> we are commited to supporting our community's emotional
            and mental well-being as part of holistic health. Through <strong>Ammanah: Mental Health & Wellness</strong>,
            we offer compassionate, appointment-based mental health support in a safe and supportive environment
          </p>

          {/* HOW TO APPLY section */}
          <div className="mb-6 w-full">
            <div className="flex flex-nowrap items-center justify-between gap-4 mb-4 w-full">
              <h2 className="font-[Bebas_Neue] text-5xl text-primary uppercase tracking-wide leading-tight">
                Program Details & Appointments
              </h2>
  
            </div>

            <ul className="list-disc ml-6 space-y-2 text-[18px]">
              <li>
                Four appointment slots available at each monthly clinic
              </li>
              <li>
                30-minute sessions during clinic hours
              </li>
            </ul>
            <div className="flex justify-center mt-12">
              <a
                href="http://bit.ly/amanahbcsfhc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full px-24 bg-primary hover:bg-[#dd73b5] text-white py-4 text-sm font-semibold shadow-md transition whitespace-nowrap"
              >
                Apply Here
              </a>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
