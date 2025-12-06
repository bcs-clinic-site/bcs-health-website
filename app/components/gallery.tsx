"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Lightbox from "./lightbox";  


export interface DriveImage { id: string; name: string; url: string; }
interface DriveGalleryProps {
  data: Record<string, DriveImage[]>;
}

const Gallery: React.FC<DriveGalleryProps> = ({ data }) => {
  const [pageIndex, setPageIndex] = useState<Record<string, number>>({});
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [direction, setDirection] = useState<Record<string, number>>({});
  const IMAGES_PER_PAGE = 6;

  const openImage = (folder: string, index: number) => {
    setSelectedFolder(folder);
    setSelectedIndex(index);
  };

  const closeImage = () => {
    setSelectedFolder(null);
  };

  const navigateImage = (newIndex: number) => {
    setSelectedIndex(newIndex);
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
            <h1 className="text-5xl text-[#4a97b2] mt-4 mx-32 font-[Bebas_Neue] text-center pb-10">
              {folder}
            </h1>

            <div className="relative bg-neutral-900/10 p-4 rounded-xl overflow-hidden">
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={currentPage}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  custom={dir}
                  variants={{
                    enter: (d: number) => ({ x: d > 0 ? 50 : -50, opacity: 0 }),
                    center: { x: 0, opacity: 1 },
                    exit: (d: number) => ({ x: d > 0 ? -50 : 50, opacity: 0 })
                  }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3"
                >
                  {visible.map((img, i) => (
                    <motion.img
                      key={img.id}
                      src={img.url}
                      alt={img.name}
                      className="rounded-lg cursor-pointer hover:opacity-90 object-cover w-full aspect-square"
                      onClick={() => openImage(folder, start + i)}
                      whileHover={{ scale: 1.03 }}
                    />
                  ))}
                </motion.div>
              </AnimatePresence>

              {totalPages > 1 && (
                <>
                  <button
                    onClick={() =>
                      setPageIndex((prev) => ({
                        ...prev,
                        [folder]: Math.max((prev[folder] ?? 0) - 1, 0),
                      }))
                    }
                    disabled={currentPage === 0}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 p-1 text-white rounded-full disabled:opacity-30"
                  >
                    <ChevronLeft size={32} />
                  </button>

                  <button
                    onClick={() =>
                      setPageIndex((prev) => ({
                        ...prev,
                        [folder]: Math.min(
                          (prev[folder] ?? 0) + 1,
                          totalPages - 1
                        ),
                      }))
                    }
                    disabled={currentPage >= totalPages - 1}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 p-1 text-white rounded-full disabled:opacity-30"
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
      {selectedFolder && (
        <Lightbox
          images={data[selectedFolder]}
          index={selectedIndex}
          onNavigate={navigateImage}
          onClose={closeImage}
        />
      )}
    </div>
  );
};

export default Gallery;
