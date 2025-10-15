import React from "react";
import { Outlet } from "react-router";

export default function Services() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>

      {/* 👇 This is where /services/irshad and others will render */}
      <Outlet />
    </main>
  );
}
