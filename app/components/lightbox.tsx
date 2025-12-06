"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export interface LightboxProps {
  images: { id: string; url: string; name: string }[];
  index: number;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export default function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const img = images[index];
  const [zoomed, setZoomed] = useState(false);

  const handlePrev = () => {
    onNavigate(index - 1 < 0 ? images.length - 1 : index - 1);
    setZoomed(false); // reset zoom when navigating
  };

  const handleNext = () => {
    onNavigate((index + 1) % images.length);
    setZoomed(false); // reset zoom when navigating
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [index, images.length]);

  if (!img) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 w-screen h-screen z-50 bg-black/80 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Image */}
        <motion.img
          key={img.id}
          src={img.url}
          alt={img.name}
          className="max-h-[90vh] max-w-[90vw] rounded-xl object-contain cursor-zoom-in"
          style={{ cursor: zoomed ? "zoom-out" : "zoom-in" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: zoomed ? 2 : 1 }} // zoom effect
          exit={{ opacity: 0, scale: 1 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => { e.stopPropagation(); setZoomed(!zoomed); }}
        />

        {/* Close Button */}
        <button
          onClick={(e) => { e.stopPropagation(); onClose(); }}
          className="absolute top-6 right-6 text-white hover:text-gray-300"
        >
          <X size={36} />
        </button>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white bg-black/40 p-3 rounded-full hover:bg-black/60"
            >
              <ChevronLeft size={40} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white bg-black/40 p-3 rounded-full hover:bg-black/60"
            >
              <ChevronRight size={40} />
            </button>
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
