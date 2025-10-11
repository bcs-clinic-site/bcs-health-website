"use client"

import {useState} from "react";
import type { Route } from "./+types/home";
import { Button } from "~/components/ui/button"
import insta from '../images/contact/Instagram_icon.png'
import linkedin from '../images/contact/LinkedIn_logo_initials.png'
import { ChevronDown, ChevronUp } from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact - BCS Free Health Clinic" },
    { name: "description", content: "BCS Free Health Clinic" },
  ];
}

export default function Contact() {
    // emails
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        // For now, just log the values. Integrate real backend later.
        console.log({ name, email, message })
        // Simple UX feedback
        setName("")
        setEmail("")
        setMessage("")
        alert("Thanks — your message was submitted (demo).")
    }

    // FAQ
    const [openIndices, setOpenIndices] = useState<number[]>([]);

  const faqs = [
    {
      question: "Question blalaniaocabaoabc abdoabcoabco aonaodboabd daoa?",
      answer:
        "Answer here oncaonoaneo... (your actual answer text here).",
    },
    {
      question: "Question blalaniaocabaoabc abdoabcoabco aonaodboabd daoa?",
      answer:
        "Another answer example text goes here.",
    },
    {
      question: "Question blalaniaocabaoabc abdoabcoabco aonaodboabd daoa?",
      answer:
        "And another example answer goes here.",
    },
  ];

  function toggleIndex(i: number) {
    setOpenIndices((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    );
  }
  return (
    <div>
        <h1 className="text-6xl text-primary mt-16 mx-32 font-[Bebas_Neue] text-center">Want To Contact Us?</h1>

        <p className = "text-primary text-center mt-8 text-lg">Email us at admin@bcs.org or fill out the form below. We will be in touch with you as soon as possible!</p>
        <div className="flex justify-center items-center bg-transparent">
            <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-xl text-center">
                <div>
                    <label htmlFor="footer-name" className="block text-sm font-medium text-white">
                        Name
                    </label>
                    <input
                        id="footer-name"
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1 block w-full rounded-md border border-primary bg-white px-3 py-2 text-primary"
                        required
                    />
                    </div>

                    <div>
                    <label htmlFor="footer-email" className="block text-sm font-medium text-white">
                        Email
                    </label>
                    <input
                        id="footer-email"
                        type="email"
                        placeholder = "Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 block w-full rounded-md border border-primary bg-white px-3 py-2 text-primary"
                        required
                    />
                    </div>

                    <div>
                    <label htmlFor="footer-message" className="block text-sm font-medium text-white">
                        Message
                    </label>
                    <textarea
                        id="footer-message"
                        value={message}
                        placeholder = "Message"
                        onChange={(e) => setMessage(e.target.value)}
                        className="mt-1 block w-full rounded-md border border-primary bg-white px-3 py-2 text-primary"
                        rows={4}
                        required
                    />
                    </div>

                    <div className="flex justify-center">
                    <Button type="submit" className="border border-white text-white hover:bg-[#dd73b5] px-40 py-7 rounded-xl text-lg">
                        Submit
                    </Button>
                </div>
            </form>
        </div>

        <h1 className="text-6xl text-primary mt-16 mx-32 font-[Bebas_Neue] text-center">Want to join our listserv for weekly announcements?</h1>
        <p className = "text-primary text-center mt-8 text-lg">Fill out the form below or use the <a href="https://docs.google.com/forms/d/e/1FAIpQLSceezCBHgCzvnFgMgBC9ltGBqzQlFWWFcoz4u9Gv1KZ3O2X7g/viewform" target="_blank" rel="noopener noreferrer"><u><strong>hyperlink</strong></u></a> here and we will add you to our Listserv as soon as possible!</p>
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

        <h1 className="text-6xl text-primary mt-16 mx-32 font-[Bebas_Neue] text-center">Want to connect with us?</h1>
        <p className = "text-primary text-center mt-8 text-lg">Follow us on LinkedIn and Instagram <strong>(@bcsfreehealthclinic)</strong>. Click the icons below to access our profiles directly.</p>

        <div className="flex justify-center items-center gap-12 mt-12">
        <a href="https://www.instagram.com/bcsfreehealthclinic/" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
            <img src={insta} alt="Instagram" className="w-24 h-24" />
        </a>
        <a href="https://www.linkedin.com/company/bcsfreehealthclinic/" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
            <img src={linkedin} alt="LinkedIn" className="w-24 h-24" />
        </a>
        </div>

        <h1 className="text-6xl text-primary mt-16 mx-32 font-[Bebas_Neue] text-center">Frequently Asked Questions</h1>
        <div className="max-w-5xl mx-auto mt-12 border border-gray-400 rounded-md overflow-hidden">
      {faqs.map((faq, i) => (
        <div key={i} className="border-b border-gray-400">
          <button
            onClick={() => toggleIndex(i)}
            className="w-full flex justify-between items-center bg-[#bcd0d9] px-4 py-3 text-left font-semibold text-gray-800 hover:bg-[#a8c3ce] transition-colors"
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
