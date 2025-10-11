import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import feedback from '../images/home/Feedback Background.png'

export default function QuoteCarousel() {
  const quotes = [
    "“Thank you for doing this for the community, it means a lot.”",
    "“Lorem ipsum dolor sit amet, consectetur adipiscing elit”",
    "“Sed diam nibh, scelerisque et rutrum eget, sollicitudin eget urna”",
  ];

  const [index, setIndex] = useState(0);

  const prevQuote = () => setIndex((prev) => (prev === 0 ? quotes.length - 1 : prev - 1));
  const nextQuote = () => setIndex((prev) => (prev === quotes.length - 1 ? 0 : prev + 1));

  return (
    <div className="relative w-full mt-16">
      <img src={feedback} alt="Feedback" className="w-full" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className="text-white text-7xl font-[Bebas_Neue]">PATIENT REVIEWS</h1>

        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.2 }}
            className="text-white font-[Arial_MT_Pro] text-5xl mt-16 max-w-3xl italic"
          >
            {quotes[index]}
          </motion.p>
        </AnimatePresence>
      </div>

      <button
        onClick={prevQuote}
        className="absolute left-8 top-1/2 -translate-y-1/2 text-white text-6xl hover:text-gray-300"
      >
        &lt;
      </button>
      <button
        onClick={nextQuote}
        className="absolute right-8 top-1/2 -translate-y-1/2 text-white text-6xl hover:text-gray-300"
      >
        &gt;
      </button>
    </div>
  );
}
