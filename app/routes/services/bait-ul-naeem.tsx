import React from "react";
import BaitLogo from "../../images/services/Bait_ul_Naeem_logo.png";
import BaitFlyer from "../../images/services/Bait_ul-Naeem_Post.png";
import type { Route } from "../+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Bait Ul Naeem - BCS Free Health Clinic" },
    { name: "description", content: "BCS Free Health Clinic" },
  ];
}

export default function BaitUlNaeem() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 md:px-10 lg:px-14 py-16">
      {/* Logo */}
      <header className="flex flex-col items-center text-center mb-12">
        <img
          src={BaitLogo}
          alt="Bait ul Naeem Logo"
          className="w-[460px] max-w-full mb-6"
        />
      </header>

      {/* Intro two-column section */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-[400px_1fr] gap-12 lg:gap-16 items-start mb-16">
        {/* Flyer on the left */}
        <div className="flex justify-center">
          <img
            src={BaitFlyer}
            alt="Bait ul Naeem Flyer"
            className="rounded-md shadow-md w-full max-w-md h-auto"
          />
        </div>

        {/* Right column */}
        <div className="leading-relaxed">
          <p className="mb-10 text-[19px]">
            <strong>Bait ul Naeem: House of Ease</strong>, is a dedicated
            women's and maternal health program designed to support women
            throughout pregnancy and early motherhood. Our goal is to provide
            compassionate, culturally sensitive care and connect mothers with
            the resources they need for a healthy and fulfilling experience.
            Through a range of partnerships and services, we are here to ensure
            that new and expectant mothers receive ongoing support for
            themselves and their children.
          </p>

          {/* HOW TO APPLY section */}
          <div className="mb-6 w-full">
            <div className="flex flex-nowrap items-center justify-between gap-4 mb-4 w-full">
              <h2 className="text-[26px] lg:text-[28px] font-extrabold text-gray-900 uppercase tracking-wide leading-tight">
                How to Apply
              </h2>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSePF5Om3pQHPFSrxh1xZKi8d6e6u_w1yrLrM62G1rKyEbED_w/viewform?pli=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 text-sm font-semibold shadow-md transition whitespace-nowrap"
              >
                Apply Here
              </a>
            </div>

            <ul className="list-disc ml-6 space-y-2 text-[18px]">
              <li>
                Fill out our interest form (scan QR code on flyer or use the
                button to the right).
              </li>
              <li>
                A program representative will contact you to connect you with
                resources.
              </li>
              <li>Referrals are available through BCS Free Health Clinic.</li>
              <li>Monthly check-ins ensure your needs are met.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Collaborations and Partners */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-normal text-[#1a3a52] uppercase text-center mb-12">
          Collaborations and Partners
        </h2>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12 text-base leading-relaxed text-black">
          {/* NFP */}
          <article>
            <h3 className="text-xl font-bold uppercase mb-3 text-[#5b9abd]">
              Nurse-Family Partnership (NFP)
            </h3>
            <p className="mb-4">
              A nationwide program supporting first-time mothers with free
              in-home nurse visits from pregnancy through their child's second
              birthday.
            </p>
            <p className="font-bold mb-2">Enrollment Qualifications:</p>
            <ul className="list-disc ml-5 space-y-1 mb-4">
              <li>First-time mother</li>
              <li>Enrolled before 28 weeks of pregnancy</li>
              <li>Low-income and receiving CHIP or Medicaid</li>
              <li>
                Reside in Brazos Valley (Brazos, Burleson, Grimes, Leon,
                Madison, Robertson, Washington counties)
              </li>
            </ul>
            <p className="font-bold mb-2">Services Provided:</p>
            <ul className="list-disc ml-5 space-y-1">
              <li>Prenatal and postnatal care</li>
              <li>
                Education on newborn care, breastfeeding, and child development
              </li>
              <li>Emotional support and mental health guidance</li>
              <li>
                Referrals to healthcare, social services, and financial support
              </li>
            </ul>
          </article>

          {/* HIPPY */}
          <article>
            <h3 className="text-xl font-bold uppercase mb-3 text-[#5b9abd]">
              HIPPY Program (Home Instruction for Parents of Preschool
              Youngsters)
            </h3>
            <p className="mb-4">
              A free, two-year home-based program through Texas A&M that helps
              parents prepare children (ages 2–5) for school while strengthening
              the parent-child bond.
            </p>
            <p className="font-bold mb-2">Qualifications:</p>
            <ul className="list-disc ml-5 space-y-1 mb-4">
              <li>Child must be 2–5 years old by September 1</li>
              <li>Must reside in Brazos County</li>
            </ul>
            <p className="font-bold mb-2">Services Provided:</p>
            <ul className="list-disc ml-5 space-y-1">
              <li>
                Weekly home visits with instructional materials and role-play
                activities for parents
              </li>
              <li>
                Six annual parent meetings on child development and family
                support
              </li>
              <li>Summer curriculum to maintain learning progress</li>
            </ul>
          </article>

          {/* The Rose Mammogram Program */}
          <article>
            <h3 className="text-xl font-bold uppercase mb-3 text-[#5b9abd]">
              The Rose Mammogram Program
            </h3>
            <p className="mb-4">
              A physician-led nonprofit organization dedicated to breast health
              through early detection and comprehensive services.
            </p>
            <p className="font-bold mb-2">Services Include:</p>
            <ul className="list-disc ml-5 space-y-1">
              <li>Free or reduced-cost mammograms (screening and diagnostic)</li>
              <li>3-D mammography, bone density testing, breast MRI</li>
              <li>Genetic testing and mobile mammography</li>
              <li>Biopsies and a full continuum of breast health care</li>
            </ul>
          </article>

          {/* Brenham Pregnancy Center */}
          <article>
            <h3 className="text-xl font-bold uppercase mb-3 text-[#5b9abd]">
              Brenham Pregnancy Center — Bryan Location
            </h3>
            <p className="mb-4">
              A free pregnancy center providing professional, compassionate care
              for women and families, no insurance required.
            </p>
            <p className="font-bold mb-2">Services Include:</p>
            <ul className="list-disc ml-5 space-y-1">
              <li>Free pregnancy testing and viability ultrasounds</li>
              <li>Parenting and childbirth classes</li>
              <li>Support and education for women, men, and families</li>
            </ul>
          </article>

          {/* ECI */}
          <article className="md:col-span-2">
            <h3 className="text-xl font-bold uppercase mb-3 text-[#5b9abd]">
              Early Childhood Intervention (ECI)
            </h3>
            <p className="mb-4">
              A statewide program supporting babies and toddlers (birth–36
              months) with developmental delays, medical diagnoses,
              disabilities, or atypical behaviors. Services are delivered in the
              child's natural environment and focus on empowering families to
              support their child's growth.
            </p>
            <p className="font-bold mb-2">Services Provided:</p>
            <ul className="list-disc ml-5 space-y-1 mb-4">
              <li>Developmental evaluations (no cost to families)</li>
              <li>Occupational, physical, and speech therapy</li>
              <li>Specialized skills training and case management</li>
              <li>Nutrition, vision, and hearing services</li>
              <li>Coaching for parents and caregivers in daily routines</li>
            </ul>
            <p className="font-bold mb-2">Coverage Area:</p>
            <p className="text-base">
              Brazos, Burleson, Fort Bend, Grimes, Harris, Leon, Liberty, Madison, Montgomery, Robertson, Walker, and Washington counties.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}