"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import feedback from "../images/home/Feedback Background.png"

export default function QuoteCarousel() {
  const [quotes, setQuotes] = useState<string[]>([])
  const [index, setIndex] = useState(0)

  // Fetch quotes from the text file
  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const res = await fetch("/content/reviews.txt")
        const text = await res.text()
        const lines = text
          .split("\n")
          .map((line) => line.trim())
          .filter((line) => line.length > 0) // remove empty lines
        setQuotes(lines)
      } catch (err) {
        console.error("Failed to fetch quotes:", err)
      }
    }
    fetchQuotes()
  }, [])

  const prevQuote = () => setIndex((prev) => (quotes.length ? (prev === 0 ? quotes.length - 1 : prev - 1) : 0))
  const nextQuote = () => setIndex((prev) => (quotes.length ? (prev === quotes.length - 1 ? 0 : prev + 1) : 0))

  const getTextSize = (text: string) => {
  const len = text.length
  if (len > 300) return "text-lg sm:text-xl lg:text-2xl"
  if (len > 200) return "text-xl sm:text-2xl lg:text-3xl"
  if (len > 100) return "text-2xl sm:text-3xl lg:text-4xl"
  return "text-2xl sm:text-3xl lg:text-5xl"
}


  if (!quotes.length) {
    return (
      <div className="relative w-full mt-16 min-h-[300px] sm:min-h-[400px] md:min-h-[500px] flex items-center justify-center">
        <p className="text-white text-2xl sm:text-3xl lg:text-5xl">Loading reviews...</p>
      </div>
    )
  }

  return (
    <div className="relative w-full mt-16 min-h-[300px] sm:min-h-[400px] md:min-h-[500px]">
      <img src={feedback || "/placeholder.svg"} alt="Feedback" className="w-full h-6/7 object-cover absolute inset-0" />

      <div className="absolute inset-0 text-center mt-10 sm:mt-10">
        {/* Fixed Title */}
        <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-[Bebas_Neue] pt-12 sm:pt-16">
          PATIENT REVIEWS
        </h1>

        {/* Centered Quote */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.2 }}
              className={`text-white font-[Arial_MT_Pro] italic max-w-3xl 
                ${getTextSize(quotes[index])}
                max-h-[40vh]`}
            >
              "{quotes[index]}"
            </motion.p>
          </AnimatePresence>
        </div>
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
