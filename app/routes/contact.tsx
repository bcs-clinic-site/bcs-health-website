"use client";

import { useState, type FormEvent } from "react";
import type { Route } from "./+types/home";
import { Button } from "~/components/ui/button";
import insta from "../images/contact/Instagram_icon.png";
import linkedin from "../images/contact/LinkedIn_logo_initials.png";
import { ChevronDown, ChevronUp } from "lucide-react";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact - BCS Free Health Clinic" },
    { name: "description", content: "BCS Free Health Clinic" },
  ];
}

interface FormspreeError {
  field?: string;
  message: string;
}

function getFriendlyErrorMessage(err: FormspreeError) {
  if (err.field === "email") {
    return "Please enter a valid email address (e.g., name@example.com).";
  }
  if (err.message.toLowerCase().includes("required")) {
    return "All fields are required.";
  }
  return "Something went wrong — please check your inputs.";
}

export default function Contact() {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const formspreeUrl = import.meta.env.VITE_FORMSPREE_URL;

  // Handle submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch(formspreeUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        return;
      }

      if (response.status === 403) {
        setStatus(
          "⚠️ Your message couldn't be sent right now. Please wait a bit and try again."
        );
        return;
      }

      if (data.errors && Array.isArray(data.errors)) {
        const friendlyErrors = data.errors
          .map((err: FormspreeError) => getFriendlyErrorMessage(err))
          .join(" ");
        setStatus(`❌ ${friendlyErrors}`);
      } else {
        setStatus("❌ Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      setStatus(
        "⚠️ Network error. Please check your connection and try again."
      );
    }
  };

  // FAQ
  const [openIndices, setOpenIndices] = useState<number[]>([]);
  const faqs = [
    {
      question: "When does your clinic operate?",
      answer:
        "We operate on the last Saturday of each month from 10AM to 12PM. Patients are asked to arrive at least 15 minutes before their scheduled appointment time to allow for check-in and ensure the clinic runs smoothly.",
    },
    {
      question: "Where do we park and enter?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna vel tincidunt blandit, justo justo elementum sapien, et lacinia felis nisi a nibh.",
    },
    {
      question:
        "Do I need insurance for your clinic? What do I do if I don’t have insurance?",
      answer:
        "You do not need insurance to be seen at our clinic. Our clinic accepts all patients regardless of whether they are insured or uninsured!",
    },
    {
      question: "Do I need to pay for the clinic?",
      answer:
        "You do not have to pay for the clinic, however we greatly appreciate any donations to help our clinic run and achieve our mission of providing compassionate and affordable care.",
    },
    {
      question: "When do the appointment portals close for each month?",
      answer:
        "The appointment portal for booking appointments closes at 5PM the day before each clinic. After this time, no new appointments can be scheduled or modified to allow our team to finalize the clinic schedule and prepare accordingly. Please make sure to book your slot before the deadline to ensure your appointment is confirmed.",
    },
    {
      question: "Where are you located?",
      answer:
        "We are located at 417 Stasney Street, College Station, TX 77840, the Islamic Community of Bryan-College Station. Our clinic runs inside the gym.",
    },
    {
      question: "Is the clinic wheelchair accessible?",
      answer:
        "Yes, our clinic is wheelchair accessible with parking accommodations as well.",
    },
    {
      question:
        "If I need a prescription refill, can I get that done at the clinic?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna vel tincidunt blandit, justo justo elementum sapien, et lacinia felis nisi a nibh.",
    },
    {
      question:
        "If I need a referral to a specialist, can I get that done at the clinic?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna vel tincidunt blandit, justo justo elementum sapien, et lacinia felis nisi a nibh.",
    },
    {
      question: "What services do you provide?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna vel tincidunt blandit, justo justo elementum sapien, et lacinia felis nisi a nibh.",
    },
    {
      question: "Where do I park and where is the entrance?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna vel tincidunt blandit, justo justo elementum sapien, et lacinia felis nisi a nibh.",
    },
  ];

  function toggleIndex(i: number) {
    setOpenIndices((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    );
  }

  return (
    <div>
      <h1 className="text-6xl text-primary mt-16 mx-32 font-[Bebas_Neue] text-center">
        Want To Contact Us?
      </h1>

      <p className="text-primary text-center mt-8 text-lg">
        Email us at admin@bcs.org or fill out the form below. We will be in
        touch with you as soon as possible!
      </p>

      {/* Contact Form */}
      <div className="flex justify-center items-center bg-transparent">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 w-full max-w-xl text-center"
        >
          <div>
            <label
              htmlFor="footer-name"
              className="block text-sm font-medium text-white"
            >
              Name
            </label>
            <input
              id="footer-name"
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="mt-1 block w-full rounded-md border border-primary bg-white px-3 py-2 text-primary"
              required
            />
          </div>

          <div>
            <label
              htmlFor="footer-email"
              className="block text-sm font-medium text-white"
            >
              Email
            </label>
            <input
              id="footer-email"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="mt-1 block w-full rounded-md border border-primary bg-white px-3 py-2 text-primary"
              required
            />
          </div>

          <div>
            <label
              htmlFor="footer-message"
              className="block text-sm font-medium text-white"
            >
              Message
            </label>
            <textarea
              id="footer-message"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="mt-1 block w-full rounded-md border border-primary bg-white px-3 py-2 text-primary"
              rows={4}
              required
            />
          </div>

          <div className="flex flex-col items-center">
            <Button
              type="submit"
              className="border border-white text-white hover:bg-[#dd73b5] px-40 py-7 rounded-xl text-lg cursor-pointer"
            >
              Submit
            </Button>
            {status && (
              <p className="mt-4 text-sm text-primary bg-transparent">{status}</p>
            )}
          </div>
        </form>
      </div>

      {/* Listserv Section */}
      <h1 className="text-6xl text-primary mt-16 mx-32 font-[Bebas_Neue] text-center">
        Want to join our listserv for weekly announcements?
      </h1>
      <p className="text-primary text-center mt-8 text-lg">
        Fill out the form below or use the{" "}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSceezCBHgCzvnFgMgBC9ltGBqzQlFWWFcoz4u9Gv1KZ3O2X7g/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          <u>
            <strong>hyperlink</strong>
          </u>
        </a>{" "}
        here and we will add you to our Listserv as soon as possible!
      </p>
      <div className="flex justify-center mt-8">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSceezCBHgCzvnFgMgBC9ltGBqzQlFWWFcoz4u9Gv1KZ3O2X7g/viewform?embedded=true"
          width="640"
          height="600"
          frameBorder="0"
          className="w-full max-w-2xl rounded-xl shadow-lg"
        >
          Loading…
        </iframe>
      </div>

      {/* Social Media */}
      <h1 className="text-6xl text-primary mt-16 mx-32 font-[Bebas_Neue] text-center">
        Want to connect with us?
      </h1>
      <p className="text-primary text-center mt-8 text-lg">
        Follow us on LinkedIn and Instagram <strong>(@bcsfreehealthclinic)</strong>. Click the icons below to access our profiles directly.
      </p>

      <div className="flex justify-center items-center gap-12 mt-12">
        <a
          href="https://www.instagram.com/bcsfreehealthclinic/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-110"
        >
          <img src={insta} alt="Instagram" className="w-24 h-24" />
        </a>
        <a
          href="https://www.linkedin.com/company/bcsfreehealthclinic/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-110"
        >
          <img src={linkedin} alt="LinkedIn" className="w-24 h-24" />
        </a>
      </div>

      {/* FAQ */}
      <h1 className="text-6xl text-primary mt-16 mx-32 font-[Bebas_Neue] text-center">
        Frequently Asked Questions
      </h1>
      <div className="max-w-5xl mx-auto mt-12 border border-gray-400 rounded-md overflow-hidden">
        {faqs.map((faq, i) => (
          <div key={i} className="border-b border-gray-400">
            <button
              onClick={() => toggleIndex(i)}
              className="w-full flex justify-between items-center bg-[#bcd0d9] px-4 py-3 text-left font-semibold text-gray-800 hover:bg-[#a8c3ce] transition-colors cursor-pointer"
            >
              {faq.question}
              {openIndices.includes(i) ? <ChevronUp /> : <ChevronDown />}
            </button>
            {openIndices.includes(i) && (
              <div className="bg-white px-4 py-3 text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
