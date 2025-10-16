"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface DriveImage {
  id: string;
  name: string;
  url: string;
}

interface DriveGalleryProps {
  data: Record<string, DriveImage[]>; // subfolder name -> images
}

const Gallery: React.FC<DriveGalleryProps> = ({ data }) => {
  const [pageIndex, setPageIndex] = useState<Record<string, number>>({});
  const [selectedImage, setSelectedImage] = useState<DriveImage | null>(null);
  const [direction, setDirection] = useState<Record<string, number>>({}); // -1 for left, +1 for right

  const IMAGES_PER_PAGE = 6;

  const handlePrev = (folder: string) => {
    setPageIndex((prev) => {
      const newPage = Math.max((prev[folder] ?? 0) - 1, 0);
      setDirection((dir) => ({ ...dir, [folder]: -1 }));
      return { ...prev, [folder]: newPage };
    });
  };

  const handleNext = (folder: string, total: number) => {
    setPageIndex((prev) => {
      const newPage = Math.min(
        (prev[folder] ?? 0) + 1,
        Math.floor((total - 1) / IMAGES_PER_PAGE)
      );
      setDirection((dir) => ({ ...dir, [folder]: 1 }));
      return { ...prev, [folder]: newPage };
    });
  };

  const openImage = (img: DriveImage) => setSelectedImage(img);
  const closeImage = () => setSelectedImage(null);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? -50 : 50,
      opacity: 0,
    }),
  };

  return (
    <div className="space-y-12 max-w-6xl mx-auto px-4">
      {Object.entries(data).map(([folder, images]) => {
        const totalPages = Math.ceil(images.length / IMAGES_PER_PAGE);
        const currentPage = pageIndex[folder] ?? 0;
        const start = currentPage * IMAGES_PER_PAGE;
        const visible = images.slice(start, start + IMAGES_PER_PAGE);
        const dir = direction[folder] ?? 1;

        return (
          <div key={folder}>
            {/* Folder Header */}
            <h1 className="text-5xl text-[#4a97b2] mt-4 mx-32 font-[Bebas_Neue] text-center pb-10">
              {folder}
            </h1>

            {/* Image Grid */}
            <div className="relative bg-neutral-900/10 p-4 rounded-xl overflow-hidden">
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={currentPage}
                  variants={variants}
                  custom={dir}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3"
                >
                  {visible.map((img) => (
                    <motion.img
                      key={img.id}
                      src={img.url}
                      alt={img.name}
                      onClick={() => openImage(img)}
                      className="rounded-lg cursor-pointer hover:opacity-90 transition object-cover w-full aspect-square"
                      whileHover={{ scale: 1.03 }}
                      loading="lazy"
                    />
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* Pagination Arrows */}
              {totalPages > 1 && (
                <>
                  <button
                    onClick={() => handlePrev(folder)}
                    disabled={currentPage === 0}
                    className={`absolute top-1/2 left-2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-1 rounded-full transition disabled:opacity-30 ${currentPage == 0 ? "cursor-not-allowed" : "cursor-pointer"}`}
                  >
                    <ChevronLeft size={32} />
                  </button>
                  <button
                    onClick={() => handleNext(folder, images.length)}
                    disabled={currentPage >= totalPages - 1}
                    className={`absolute top-1/2 right-2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-1 rounded-full transition disabled:opacity-30 ${currentPage >= totalPages - 1 ? "cursor-not-allowed" : "cursor-pointer"}`} 
                  >
                    <ChevronRight size={32} />
                  </button>
                </>
              )}
            </div>
          </div>
        );
      })}

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeImage}
          >
            <motion.img
              src={selectedImage.url}
              alt={selectedImage.name}
              className="max-h-[90vh] max-w-[90vw] rounded-xl object-contain"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            />
            <button
              onClick={closeImage}
              className="absolute top-6 right-6 text-white hover:text-gray-300"
            >
              <X size={36} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
