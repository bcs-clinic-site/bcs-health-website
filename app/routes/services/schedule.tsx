import React from "react";
import type { Route } from "../+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Schedule - BCS Free Health Clinic" },
    { name: "description", content: "BCS Free Health Clinic" },
  ];
}

export default function Schedule() {
  return (
    <div>
      <h1 className="text-4xl sm:text-5xl md:text-6xl text-primary mt-12 mx-32 font-[Bebas_Neue] text-center">
        Google Calendar
      </h1>

      <div className="flex justify-center mt-10">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=c_83ffed25b11da3ba07bde172418c02218857c61ea8fc57600732255b0d86281a%40group.calendar.google.com&ctz=America%2FChicago"
          style={{ border: 0 }}
          width="800"
          height="600"
          frameBorder="0"
          scrolling="no"
        />
      </div>
    </div>
  );
}
