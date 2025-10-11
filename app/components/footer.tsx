"use client"

import { useState } from "react"
import { Button } from "./ui/button"

export function Footer() {
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
                <label htmlFor="footer-name" className="block text-sm font-medium">Name</label>
                <input
                  id="footer-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full rounded-md border border-primary bg-white px-3 py-2 text-primary"
                  required
                />
              </div>

              <div>
                <label htmlFor="footer-email" className="block text-sm font-medium">Email</label>
                <input
                  id="footer-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full rounded-md border border-primary bg-white px-3 py-2 text-primary"
                  required
                />
              </div>

              <div>
                <label htmlFor="footer-message" className="block text-sm font-medium">Message</label>
                <textarea
                  id="footer-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-1 block w-full rounded-md border border-primary bg-white px-3 py-2 text-primary"
                  rows={4}
                  required
                />
              </div>

              <div>
                <Button type="submit" className="border border-white text-white hover:bg-[#dd73b5]">Submit</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
