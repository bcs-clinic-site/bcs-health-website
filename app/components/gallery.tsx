"use client";

import React, { useState, type MouseEvent } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface DriveImage {
  id: string;
  name: string;
  url: string;
}

interface DriveGalleryProps {
  images: DriveImage[];
}

const Gallery: React.FC<DriveGalleryProps> = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openImage = (index: number): void => setSelectedIndex(index);
  const closeImage = (): void => setSelectedIndex(null);

  const nextImage = (e: MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    setSelectedIndex((prev) =>
      prev === null ? 0 : (prev + 1) % images.length
    );
  };

  const prevImage = (e: MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    setSelectedIndex((prev) =>
      prev === null ? 0 : (prev - 1 + images.length) % images.length
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* --- Masonry Collage --- */}
      <div
        className="
          columns-2 sm:columns-3 md:columns-4
          gap-3
          [column-fill:_balance]
        "
      >
        {images.map((img, index) => (
          <motion.img
            key={img.id}
            src={img.url}
            alt={img.name}
            onClick={() => openImage(index)}
            className="
              mb-3
              w-full
              rounded-xl
              cursor-pointer
              hover:opacity-90
              transition
              break-inside-avoid
            "
            whileHover={{ scale: 1.02 }}
            loading="lazy"
          />
        ))}
      </div>

      {/* --- Lightbox --- */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeImage}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <motion.img
                src={images[selectedIndex].url}
                alt={images[selectedIndex].name}
                className="max-h-[90vh] max-w-[90vw] rounded-xl object-contain"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
              />

              {/* Close button */}
              <button
                onClick={closeImage}
                className="absolute top-6 right-6 text-white hover:text-gray-300"
              >
                <X size={36} />
              </button>

              {/* Prev/Next buttons */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-6 text-white hover:text-gray-300"
                  >
                    <ChevronLeft size={48} />
                  </button>

                  <button
                    onClick={nextImage}
                    className="absolute right-6 text-white hover:text-gray-300"
                  >
                    <ChevronRight size={48} />
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
