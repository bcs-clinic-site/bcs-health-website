"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import feedback from "../images/home/Feedback Background.png"

export default function QuoteCarousel() {
  const quotes = [
    '"Thank you for doing this for the community, it means a lot."',
    '"Lorem ipsum dolor sit amet, consectetur adipiscing elit"',
    '"Sed diam nibh, scelerisque et rutrum eget, sollicitudin eget urna"',
  ]

  const [index, setIndex] = useState(0)

  const prevQuote = () => setIndex((prev) => (prev === 0 ? quotes.length - 1 : prev - 1))
  const nextQuote = () => setIndex((prev) => (prev === quotes.length - 1 ? 0 : prev + 1))

  return (
    // FIX APPLIED HERE: Added responsive minimum height classes
    <div className="relative w-full mt-16 min-h-[300px] sm:min-h-[400px] md:min-h-[500px]">
      <img src={feedback || "/placeholder.svg"} alt="Feedback" className="w-full h-full object-cover absolute inset-0" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-[Bebas_Neue]">PATIENT REVIEWS</h1>

        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.2 }}
            className="text-white font-[Arial_MT_Pro] text-2xl sm:text-3xl lg:text-5xl mt-8 sm:mt-16 max-w-2xl sm:max-w-3xl italic px-4 sm:px-0"
          >
            {quotes[index]}
          </motion.p>
        </AnimatePresence>
      </div>

      <button
        onClick={prevQuote}
        className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 text-white text-3xl sm:text-5xl lg:text-6xl hover:text-gray-300 z-10"
        aria-label="Previous review"
      >
        &lt;
      </button>
      <button
        onClick={nextQuote}
        className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 text-white text-3xl sm:text-5xl lg:text-6xl hover:text-gray-300 z-10"
        aria-label="Next review"
      >
        &gt;
      </button>
    </div>
  )
}