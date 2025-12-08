import React from "react";
import type { Route } from "../+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Volunteer - BCS Free Health Clinic" },
    { name: "description", content: "BCS Free Health Clinic" },
  ];
}

export default function Volunteer() {
  return (
    <div className="px-4 md:px-8 pb-12">
      <h1 className="text-4xl sm:text-5xl md:text-6xl text-primary mt-8 md:mt-12 mx-4 md:mx-32 font-[Bebas_Neue] text-center">
        Clinic Volunteer
      </h1>

      <p className="mx-4 sm:mx-8 md:mx-24 lg:mx-40 mt-4 text-primary text-base sm:text-lg max-w-7xl">
        BCS Free Health Clinic relies on volunteers to provide free healthcare checkups and follow-ups. We seek team members who are adaptable and enthusiastic—our work is only possible through your support. <strong>Volunteers must be able to make a one-year commitment.</strong>
      </p>

      <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#4a97b2] mt-12 md:mt-20 font-[Bebas_Neue] mx-4 sm:mx-8 md:mx-24 lg:mx-40">
        Volunteer Terms
      </h1>
      <ul className="mx-8 sm:mx-12 md:mx-32 lg:mx-54 mt-4 text-primary list-disc text-base sm:text-lg space-y-2">
        <li className="text-primary">
          Fall & Spring terms available
          <ul className="list-disc ml-6 sm:ml-8 mt-2 space-y-1">
            <li>
              Volunteers who initiated their position in fall will continue until the 
              <strong> May </strong> or <strong> August.</strong>
            </li>
            <li>
              Volunteers who initiated their positions in spring will continue until <strong>December.</strong>
            </li>
          </ul>
        </li>
      </ul>

      <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#4a97b2] mt-8 md:mt-12 font-[Bebas_Neue] mx-4 sm:mx-8 md:mx-24 lg:mx-40">
        Positions Available
      </h1>
      <ul className="mx-8 sm:mx-12 md:mx-32 lg:mx-54 mt-4 text-primary list-disc text-base sm:text-lg space-y-1">
        <li>Medical Assistants</li>
        <li>Medical Scribes</li>
        <li>Patient Registration</li>
        <li>Clinic Flow</li>
        <li>Pharmacy/Lab</li>
        <li>Patient Checkout</li>
        <li>Inventory (Open to high school students)</li>
        <li>Resources</li>
      </ul>

      <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#4a97b2] mt-8 md:mt-12 font-[Bebas_Neue] mx-4 sm:mx-8 md:mx-24 lg:mx-40">
        Position Requirements
      </h1>
      <ul className="mx-8 sm:mx-12 md:mx-32 lg:mx-54 mt-4 text-primary list-disc text-base sm:text-lg space-y-2">
        <li>Must be 18 or older (except high school inventory volunteers)</li>
        <li>Medical Scribes</li>
        <li>Open to all community members — not limited to Texas A&M students</li>
        <li>
          Complete the application form by deadlines; this is non-negotiable
          <ul className="list-disc ml-6 sm:ml-8 mt-2 space-y-1">
            <li>
              Fall apps open <strong>early August</strong>, Spring apps open <strong>early January</strong> (subject to change)
            </li>
            <ul className="list-disc ml-6 sm:ml-8 mt-1">
              <li>
                <strong>Fall 2025 applications are now closed. Please check back in early January 2026 for Spring applications.</strong>
              </li>
            </ul>
          </ul>
        </li>
      </ul>

      {/* Core Team Intern */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl text-primary mt-16 md:mt-24 mx-4 md:mx-32 font-[Bebas_Neue] text-center">
        Core Team Intern
      </h1>

      <p className="mx-4 sm:mx-8 md:mx-24 lg:mx-40 mt-4 text-primary text-base sm:text-lg max-w-7xl">
        BCS Free Health Clinic offers Core Team Intern positions each Spring semester to support the leadership and operations of the clinic. Interns gain valuable experience in administration, coordination, and community outreach. Our work relies on motivated individuals who are adaptable and enthusiastic about serving the community.
      </p>

      <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#4a97b2] mt-12 md:mt-20 font-[Bebas_Neue] mx-4 sm:mx-8 md:mx-24 lg:mx-40">
        Volunteer Terms
      </h1>
      <ul className="mx-8 sm:mx-12 md:mx-32 lg:mx-54 mt-4 text-primary list-disc text-base sm:text-lg space-y-2">
        <li>Available during the <strong>Spring</strong> semester</li>
        <li>Interns transfer to full Core Team roles in <strong>June</strong></li>
      </ul>

      <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#4a97b2] mt-8 md:mt-12 font-[Bebas_Neue] mx-4 sm:mx-8 md:mx-24 lg:mx-40">
        Positions Available
      </h1>
      <ul className="mx-8 sm:mx-12 md:mx-32 lg:mx-54 mt-4 text-primary list-disc text-base sm:text-lg space-y-2">
        <li>
          Core Team Intern positions vary depending on current clinic needs, but may include:
          <ul className="list-disc ml-6 sm:ml-8 mt-2 space-y-1">
            <li>Finance Intern</li>
            <li>Administrative Intern</li>
            <li>Volunteer Coordinator Intern</li>
            <li>Logistics Intern</li>
            <li>Community Outreach Intern</li>
            <li>Marketing Intern</li>
          </ul>
        </li>
      </ul>

      <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#4a97b2] mt-8 md:mt-12 font-[Bebas_Neue] mx-4 sm:mx-8 md:mx-24 lg:mx-40">
        Position Requirements
      </h1>
      <ul className="mx-8 sm:mx-12 md:mx-32 lg:mx-54 mt-4 text-primary list-disc text-base sm:text-lg space-y-2">
        <li>Must be 18 years or older</li>
        <li>Open to all community members — not limited to Texas A&M students</li>
        <li>
          Complete the application form by deadlines; this is non-negotiable
          <ul className="list-disc ml-6 sm:ml-8 mt-2 space-y-1">
            <li>
              Applications typically open in <strong>early January</strong> (subject to change)
            </li>
          </ul>
        </li>
        <li>Must have volunteered with BCS Free Health Clinic at least once in any capacity</li>
      </ul>

      {/* Community Outreach */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl text-primary mt-16 md:mt-24 mx-4 md:mx-32 font-[Bebas_Neue] text-center">
        Community Outreach Team
      </h1>

      <p className="mx-4 sm:mx-8 md:mx-24 lg:mx-40 mt-4 text-primary text-base sm:text-lg max-w-7xl">
        The Community Outreach Team is a small, dedicated group that leads and supports meaningful projects throughout the year. Members have the opportunity to spearhead one self-developed project of their choice while also collaborating on other initiatives that strengthen community health and engagement. Team members must be able to make a <strong>one-year commitment.</strong>
      </p>

      <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#4a97b2] mt-12 md:mt-20 font-[Bebas_Neue] mx-4 sm:mx-8 md:mx-24 lg:mx-40">
        Volunteer Terms
      </h1>
      <ul className="mx-8 sm:mx-12 md:mx-32 lg:mx-54 mt-4 text-primary list-disc text-base sm:text-lg space-y-2">
        <li className="text-primary">
          Runs Fall through Spring each school year <strong>(August–May)</strong>
        </li>
      </ul>

      <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#4a97b2] mt-8 md:mt-12 font-[Bebas_Neue] mx-4 sm:mx-8 md:mx-24 lg:mx-40">
        Position Requirements
      </h1>
      <ul className="mx-8 sm:mx-12 md:mx-32 lg:mx-54 mt-4 text-primary list-disc text-base sm:text-lg space-y-2">
        <li>Must be 18 years or older</li>
        <li>Open to all community members — not limited to Texas A&M students</li>
        <li>
          Complete the application form by deadlines; this is non-negotiable
          <ul className="list-disc ml-6 sm:ml-8 mt-2 space-y-1">
            <li>
              Applications typically open in <strong>early August</strong> (subject to change)
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}