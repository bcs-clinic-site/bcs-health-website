"use client"

import React from "react";
import partnersImg from '../../images/about/partners/partners.png'
import type { Route } from "../+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Partners - BCS Free Health Clinic" },
    { name: "description", content: "BCS Free Health Clinic" },
  ];
}

export default function Partners() {
  return (
    <div>
        <h1 className="text-6xl text-primary mt-16 mx-32 font-[Bebas_Neue] text-center">Our Partners</h1>
        <img
            src={partnersImg}
            alt={"Partners"}
            className="object-cover scale-[0.85] m-auto -mt-20"
            />
        <p className = "text-primary px-70 text-lg">Our partners play a crucial role in helping us deliver quality healthcare to the community. Through their generous support and collaboration, we can provide essential medical services, educational programs, and resources to those in need. We are deeply grateful for their commitment and contributions, which enable us to make a positive impact on the lives of many. Together, we are building a healthier and stronger community.</p>
        <h1 className="text-5xl text-[#4a97b2] mt-20 font-[Bebas_Neue] mx-32">Monthly Clinics</h1>

        <ul className = "mx-48 mt-4 text-primary list-disc">
            <li className = "text-primary text-lg">The <strong>Brazos Valley Coalition</strong> is made up of community service providers and healthcare professionals. They are a group of organizations that come together to work on solutions for health related issues in our community.</li>
            <li className = "text-primary text-lg"><strong>Eixsys Healthcare System (EHS)</strong> is bringing high-quality, low-cost healthcare to under-served communities. Every patient at EHS matters regardless of their economic status. All patients, regardless of income, insurance status, race or creed are served in a patient-centered, culturally-appropriate environment, with a continuing source of care.</li>
        </ul>

        <h1 className="text-5xl text-[#4a97b2] mt-20 font-[Bebas_Neue] mx-32">Collaborations</h1>

        <ul className = "mx-48 mt-4 text-primary list-disc">
            <li className = "text-primary text-lg">
    <strong>The Nurse-Family Partnership® (NFP)</strong> is a nationwide program that supports first-time mothers with free in-home nurse visits 
    from pregnancy through their child’s second birthday, ensuring healthy pregnancies, safe deliveries, and better maternal and child outcomes.
  </li>

  <li className = "text-primary text-lg">
    <strong>HIPPY (Home Instruction for Parents of Preschool Youngsters)</strong> at Texas A&amp;M is a free, two-year home-based program 
    that helps parents with limited formal education prepare their 2–5-year-old children for school. The program strengthens the bond between 
    parents and children while building a foundation for early learning and development.
  </li>

  <li className = "text-primary text-lg">
    <strong>The Rose Breast Center of Excellence</strong> is dedicated to saving lives through early detection and comprehensive breast health services. 
    From screening mammograms to biopsies, they provide a full continuum of care. Committed to accessibility, they offer free or reduced-cost 
    screening and diagnostic mammograms to those in need. The organization also serves as a strong advocate for patients requiring further diagnostic 
    testing or treatment, ensuring that no one faces breast health challenges alone.
  </li>

  <li className = "text-primary text-lg">
    <strong>The Brenham Pregnancy Center</strong> in Bryan, Texas provides professional and compassionate care to women and families—no insurance required. 
    The center is dedicated to empowering individuals and families with the resources, guidance, and support they need during pregnancy and beyond.
  </li>

  <li className = "text-primary text-lg">
    <strong>Aalifa Creation</strong> brings your vision to life with elegant décor for weddings, Eid, birthdays, professional events, etc. 
    Follow them on Instagram <strong>(@fara.aali)</strong> — your support means everything!
  </li>

  <li className = "text-primary text-lg">
    <strong>Early Childhood Intervention (ECI)</strong> is a statewide program that supports infants and toddlers with developmental delays, disabilities, 
    medical diagnoses, or atypical behaviors. ECI focuses on working directly with parents and caregivers in the child’s natural environment to create 
    meaningful learning opportunities during everyday routines.
  </li>
        </ul>
    </div>
  );
}
