import React from "react";
import topPhoto from '../../images/services/monthly/Top Photo.png'
import { Button } from "~/components/ui/button"
import type { Route } from "../+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Appointments - BCS Free Health Clinic" },
    { name: "description", content: "BCS Free Health Clinic" },
  ];
}

const images = import.meta.glob('../../images/services/monthly/grid/*.{png,jpg,jpeg,svg}', { eager: true }) as Record<string, { default: string }>;

  // Map filenames to URLs
  const imageMap: Record<string, string> = {};
  Object.keys(images).forEach((path, i) => {
    const parts = path.split('/');
    let filename = parts[parts.length - 1];
    filename = filename.replace(/\_/g, '#');
    imageMap[filename] = images[path].default;
    
  });



export default function Appointments() {
  return (
    <div className = "mt-16">
        <h1 className="text-6xl text-primary mb-16 mx-32 font-[Bebas_Neue] text-center">Monthly Clinic Registration</h1>

        <img
                src={topPhoto}
                alt={"Top Photo"}
                className="object-cover m-auto mt-10"
            />
        <p className = "mx-48 mt-4 text-primary text-lg max-w-7xl">
            At BCS Free Health Clinic, we make it easy for you to receive the quality care you deserve from our compassionate and highly qualified doctors. Appointments must be scheduled online to see our physicians and specialists.
            <br /> <br />
            <strong>Important Appointment Details:</strong>
            <ul className="mx-12 mt-4 text-primary list-disc">
                <li className="text-primary text-lg">
                    <strong>We do not accept walk-ins.</strong> Deadlines for monthly clinic appoints close 
                    <strong> the Friday before the clinic date at 5PM.</strong> Please schedule your appointments accordingly.
                </li>
                <li className="text-primary text-lg">
                    Patients should arrive <strong>15 minutes before their scheduled appointment time.</strong>
                </li>
                <li className="text-primary text-lg">
                    When you enter, please make sure to enter through the <strong>sister’s entrance on the right side of the building.</strong> 
                    Look for the clinic banner and signs if needed.
                </li>
            </ul>
            <br />
            For any concerns or to cancel an appointment, please text (469)-988-3494.
            <div className="flex justify-center pt-12">
                <a href="https://provider.click4md.com/schedule/OTNEb2NaODFRMXJPRUVUZWN4R2RpUT09" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" variant="secondary" className="text-lg px-40 py-7 w-56 bg-primary text-white rounded-lg hover:bg-[#dd73b5] transition-all duration-200 cursor-pointer">
                        Book an Appointment
                    </Button>
                </a>
            </div>


        </p>

        <div className="flex flex-wrap justify-center gap-6 mx-32 mt-16">
  {Object.entries(imageMap).map(([filename, src]) => (
    <figure key={filename} className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)]">
      <img
        src={src}
        alt={filename}
        className="rounded-lg shadow-md object-cover w-full h-64"
      />
      <figcaption className="text-center text-primary text-md mt-2">
        {filename.replace(/\.(png|jpg|jpeg|svg)$/i, "")}
      </figcaption>
    </figure>
  ))}
</div>

    </div>
  );
}
