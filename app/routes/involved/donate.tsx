import React from "react";
import type { Route } from "../+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Donate - BCS Free Health Clinic" },
    { name: "description", content: "BCS Free Health Clinic" },
  ];
}

export default function Donate() {

  return (
    <div>
      {/* Title: Changed mx-32 to flexible px-4 padding */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl text-primary mt-12 px-4 sm:px-8 md:px-16 font-[Bebas_Neue] text-center">
        Donations
      </h1>

      {/* Paragraph: Changed mx-40 to responsive container styling */}
      <div className="max-w-3xl mx-auto px-7 sm:px-8 mt-4 text-primary text-lg">
        <p>
          Supporting your local free health clinic can make a profound difference…
          <br /><br />
          Have you or someone you know donated… 
          Email us at{" "}
          <a
            href="mailto:admin@bcsclinic.org"
            className="hover:text-[#dd73b5] hover:underline cursor-pointer"
          >
            <strong>admin@bcsclinic.org</strong>
          </a>
          <br /><br />
          <strong>Zelle Donation:</strong> admin@bcsclinic.org
          <br /><br />
        </p>
      </div>

      {/* Zeffy donation form embed */}
      <div
        className="w-full flex justify-center mb-8"
        style={{
          maxWidth: "500px",
          margin: "0 auto 2rem",
          overflow: "hidden",
          minHeight: "400px",
        }}
      >
        <iframe
          src="https://www.zeffy.com/en-US/embed/donation-form/donate-to-the-free-health-clinic"
          title="Zeffy Donation Form"
          scrolling="no"
          frameBorder="0"
          width="100%"
          height="100%"
          style={{
            maxHeight: "none",
          }}
        ></iframe>
      </div>
    </div>
  );
}