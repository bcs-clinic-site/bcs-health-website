"use client"

import { useState } from "react"
import { Button } from "./ui/button"

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormspreeError {
  code: string;
  message: string;
}

import { type ChangeEvent, type FormEvent } from "react";
export function Footer() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const getFriendlyErrorMessage = (error: FormspreeError): string => {
    const codeMap: Record<string, string> = {
      REQUIRED_FIELD: "Please fill out all required fields.",
      TYPE_EMAIL: "Please enter a valid email address (e.g. name@example.com).",
      TYPE_TEXT: "One of your text fields has invalid characters.",
      INVALID_REQUEST: "There was a problem with your submission. Please try again.",
      SERVER_ERROR: "Our server encountered an issue. Please try again later.",
    };

    // Return mapped message or the default one from Formspree
    return codeMap[error.code] || error.message || "Something went wrong. Please try again.";
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("https://formspree.io/f/mvgwlzgb", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.status === 403) {
        setStatus(
          "⚠️ Your message couldn't be sent right now. Please wait a bit and try again."
        );
        return;
      }

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else if (data.errors && Array.isArray(data.errors)) {
        const friendlyErrors = data.errors
          .map((err: FormspreeError) => getFriendlyErrorMessage(err))
          .join(" ");
        setStatus(`❌ ${friendlyErrors}`);
      } else {
        setStatus("❌ Unknown error occurred.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Network error. Please try again later.");
    }
  };


  return (
    <footer className="bg-primary text-primary-foreground mt-24 pt-12 pb-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Info */}
          <div>
            <h3 className="text-5xl mb-3 font-[Bebas_Neue]">BCS FHC</h3>
            <p className="mb-4 max-w-prose text-xl">
              Striving to provide holistic healthcare services integrated with social support programs, thereby fulfilling the prophetic tradition of caring for the sick and needy.
            </p>

            <h3 className="text-5xl mb-3 mt-14 font-[Bebas_Neue]">LOCATION</h3>
            <h4 className="mt-4 text-xl">ICBCS Gym</h4>
            <address className="not-italic text-xl">
              <div>417 Stasney St,</div>
              <div>College Station, TX 77840</div>
            </address>
          </div>

          {/* Right: Contact form */}
          <div>
      <h3 className="text-5xl mb-3 font-[Bebas_Neue]">Have a question?</h3>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label htmlFor="footer-name" className="block text-sm font-medium">
            Name
          </label>
          <input
            id="footer-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-primary bg-white px-3 py-2 text-primary"
            required
          />
        </div>

        <div>
          <label htmlFor="footer-email" className="block text-sm font-medium">
            Email
          </label>
          <input
            id="footer-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-primary bg-white px-3 py-2 text-primary"
            required
          />
        </div>

        <div>
          <label htmlFor="footer-message" className="block text-sm font-medium">
            Message
          </label>
          <textarea
            id="footer-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-primary bg-white px-3 py-2 text-primary"
            rows={4}
            required
          />
        </div>

         <div className="flex items-center gap-3">
          <Button
            type="submit"
            className="border border-white text-white hover:bg-[#dd73b5] cursor-pointer"
          >
            Submit
          </Button>
          {status && (
            <span className="text-sm text-white">{status}</span>
          )}
        </div>
      </form>
    </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
