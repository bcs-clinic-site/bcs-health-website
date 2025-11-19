import React from "react";
import IrshadPost from "../../images/services/Irshad_Post.png";
import IrshadLogo from "../../images/services/Irshad_Logo.png";
import type { Route } from "../+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ishrad Al-Aafiyah - BCS Free Health Clinic" },
    { name: "description", content: "BCS Free Health Clinic" },
  ];
}

export default function Irshad() {
  return (
    <main className="min-h-screen flex flex-col items-center px-8 py-20 bg-white text-gray-800">
      {/* Logo */}
      <img
        src={IrshadLogo}
        alt="Irshad Al-Aafiyah Logo"
        className="w-[460px] mb-14"
      />

      {/* Two-column layout */}
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-14 items-start text-left">
        {/* Flyer on the left */}
        <div className="flex justify-center">
          <img
            src={IrshadPost}
            alt="Irshad Al-Aafiyah Flyer"
            className="rounded-md shadow-md max-w-md"
          />
        </div>

        {/* Text on the right */}
        <div className="text-[23px] leading-relaxed">
          <p className="mb-6">
            At <strong>BCS Free Health Clinic</strong>, we are committed to helping
            our community make informed dietary choices for better health. Through{" "}
            <strong>Irshad Al-Aafiyah</strong>, we provide customized nutritional
            counseling designed to support individuals and families in managing
            their health through evidence-based guidance. This program empowers
            patients to adopt sustainable and practical dietary strategies that
            promote long-term wellness, insha’Allah.
          </p>

          <h2 className="text-[30px] font-extrabold mb-4 text-gray-900 uppercase tracking-wide">
            Appointments
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-[21px]">
            <li>Services are available by appointment only.</li>
            <li>
              To book an appointment, text:{" "}
              <strong>(281) 790-2019</strong>.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
