import React, { useEffect } from "react";
import type { Route } from "../+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Donate - BCS Free Health Clinic" },
    { name: "description", content: "BCS Free Health Clinic" },
  ];
}
export default function Donate() {
  useEffect(() => {
    // Inject Donorbox script on mount
    const script = document.createElement("script");
    script.src = "https://donorbox.org/widget.js";
    script.async = true;
    script.setAttribute("paypalExpress", "false");
    document.body.appendChild(script);

    return () => {
      // optional: remove script on unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <h1 className="text-4xl sm:text-5xl md:text-6xl text-primary mt-12 mx-32 font-[Bebas_Neue] text-center">
        Donations
      </h1>

      <p className="mx-40 mt-4 text-primary text-lg max-w-7xl">
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

      {/* Donorbox iframe embed */}
      <div
        className="w-full flex justify-center"
        style={{
          maxWidth: "500px",
          margin: "0 auto 2rem",
          overflow: "",     // stops page expansion
          height: "500px",        // stable height that Donorbox will resize into
        }}
      >
        <iframe
          src="https://donorbox.org/embed/support-the-bcs-free-health-clinic?"
          name="donorbox"
          allowPaymentRequest="true"
          scrolling="no"
          frameBorder="0"
          width="100%"
          height="100%"            // matches container
          style={{
            maxHeight: "none",
          }}
        ></iframe>
      </div>
    </div>
  );
}
