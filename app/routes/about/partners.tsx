"use client";

import React from "react";
import type { Route } from "../+types/home";

// Metadata
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Our Partners - BCS Free Health Clinic" },
    { name: "description", content: "BCS Free Health Clinic Partners" },
  ];
}

// Import partners image
import partnersImage from "../../images/about/partners/partners.png";

export default function Partners() {
  return (
    <div className="flex flex-col space-y-8 md:space-y-12 px-4 md:px-8">
      <h1 className="text-4xl sm:text-5xl md:text-6xl text-primary mt-8 md:mt-12 mx-4 md:mx-32 font-[Bebas_Neue] text-center">
        Our Partners
      </h1>

      {/* Partners Logo Image */}
      <div className="flex justify-center max-w-6xl mx-auto">
        <img
          src={partnersImage}
          alt="Our Partners"
          className="w-full h-auto"
        />
      </div>

      {/* Partners Description */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center mb-8">
        <p className="text-sm md:text-base text-gray-700 leading-relaxed">
          Our partners play a crucial role in helping us deliver quality healthcare to the community. Through their generous support and collaboration, we can provide essential medical services, educational programs, and resources to those in need. We are deeply grateful for their commitment and contributions, which enable us to make a positive impact on the lives of many. Together, we are building a healthier and stronger community.
        </p>
      </div>

      {/* Monthly Clinics Section */}
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#0077b6] font-[Bebas_Neue] mb-6">
          MONTHLY CLINICS
        </h2>
        <ul className="space-y-4 text-sm md:text-base text-gray-700 list-disc list-inside">
          <li>
            <span className="font-semibold">The Brazos Valley Coalition</span> is made up of community service providers and healthcare professionals. They are a group of organizations that come together to work on solutions for health related issues in our community.
          </li>
          <li>
            <span className="font-semibold">Fixsys Healthcare System (EHS)</span> is bringing high-quality, low-cost healthcare to under-served communities. Every patient at EHS matters regardless of their economic status. All patients, regardless of income, insurance status, race or creed are served in a patient-centered, culturally-appropriate environment, with a continuing source of care.
          </li>
        </ul>
      </div>

      {/* Collaborations Section */}
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#0077b6] font-[Bebas_Neue] mb-6">
          COLLABORATIONS
        </h2>
        <ul className="space-y-4 text-sm md:text-base text-gray-700 list-disc list-inside">
          <li>
            <span className="font-semibold">The Nurse-Family Partnership® (NFP)</span> is a nationwide program that supports first-time mothers with free in-home nurse visits from pregnancy through their child's second birthday, ensuring healthy pregnancies, safe deliveries, and better maternal and child outcomes.
          </li>
          <li>
            <span className="font-semibold">HIPPY (Home Instruction for Parents of Preschool Youngsters)</span> at Texas A&M is a free, two-year home-based program that helps parents with limited formal education prepare their 2–5-year-old children for school. The program strengthens the bond between parents and children while building a foundation for early learning and development.
          </li>
          <li>
            <span className="font-semibold">The Rose Breast Center of Excellence</span> is dedicated to saving lives through early detection and comprehensive breast health services. From screening mammograms to biopsies, they provide a full continuum of care. Committed to accessibility, they offer free or reduced-cost screening and diagnostic mammograms to those in need. The organization also serves as a strong advocate for patients requiring further diagnostic testing or treatment, ensuring that no one faces breast health challenges alone.
          </li>
          <li>
            <span className="font-semibold">The Brenham Pregnancy Center</span> in Bryan, Texas provides professional and compassionate care to women and families—no insurance required. The center is dedicated to empowering individuals and families with the resources, guidance, and support they need during pregnancy and beyond.
          </li>
          <li>
            <span className="font-semibold">Aalifa Creation</span> brings your vision to life with elegant decor for weddings, Eid, birthdays, professional events, etc. Follow them on Instagram (@fara.aali) — your support means everything!
          </li>
          <li>
            <span className="font-semibold">Early Childhood Intervention (ECI)</span> is a statewide program that supports infants and toddlers with developmental delays, disabilities, medical diagnoses, or atypical behaviors. ECI focuses on working directly with parents and caregivers in the child's natural environment to create meaningful learning opportunities during everyday routines.
          </li>
        </ul>
      </div>
    </div>
  );
}
