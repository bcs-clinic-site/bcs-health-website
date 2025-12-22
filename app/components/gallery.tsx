import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface DriveImage {
  id: string;
  name: string;
  url: string;
}

interface DriveGalleryProps {
  data: Record<string, DriveImage[]>;
}

// Optimized Image Component with lazy loading
const LazyImage: React.FC<{
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
}> = ({ src, alt, className, onClick }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 bg-neutral-800 animate-pulse rounded-lg" />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={`${className} transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClick}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

// Lightbox component
const Lightbox: React.FC<{
  images: DriveImage[];
  index: number;
  onNavigate: (index: number) => void;
  onClose: () => void;
}> = ({ images, index, onNavigate, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && index > 0) onNavigate(index - 1);
      if (e.key === "ArrowRight" && index < images.length - 1) onNavigate(index + 1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [index, images.length, onNavigate, onClose]);

  return (
    <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:bg-white/10 p-2 rounded-full"
      >
        <X size={32} />
      </button>

      <button
        onClick={() => onNavigate(index - 1)}
        disabled={index === 0}
        className="absolute left-4 text-white hover:bg-white/10 p-2 rounded-full disabled:opacity-30"
      >
        <ChevronLeft size={48} />
      </button>

      <button
        onClick={() => onNavigate(index + 1)}
        disabled={index >= images.length - 1}
        className="absolute right-4 text-white hover:bg-white/10 p-2 rounded-full disabled:opacity-30"
      >
        <ChevronRight size={48} />
      </button>

      <img
        src={images[index].url}
        alt={images[index].name}
        className="max-h-[90vh] max-w-[90vw] object-contain"
      />

      <div className="absolute bottom-4 text-white text-sm">
        {index + 1} / {images.length}
      </div>
    </div>
  );
};

// Main Gallery Component
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

  const handleNextPage = (folder: string, totalPages: number) => {
    setPageIndex((prev) => {
      const newIndex = Math.min((prev[folder] ?? 0) + 1, totalPages - 1);
      if (newIndex !== (prev[folder] ?? 0)) {
        setDirection((prevDir) => ({ ...prevDir, [folder]: 1 }));
      }
      return { ...prev, [folder]: newIndex };
    });
  };

  const handlePrevPage = (folder: string) => {
    setPageIndex((prev) => {
      const newIndex = Math.max((prev[folder] ?? 0) - 1, 0);
      if (newIndex !== (prev[folder] ?? 0)) {
        setDirection((prevDir) => ({ ...prevDir, [folder]: -1 }));
      }
      return { ...prev, [folder]: newIndex };
    });
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-[#4a97b2] mt-4 px-4 sm:mx-auto font-[Bebas_Neue] text-center pb-10">
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
                    exit: (d: number) => ({ x: d > 0 ? -50 : 50, opacity: 0 }),
                  }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3"
                >
                  {visible.map((img, i) => (
                    <motion.div
                      key={img.id}
                      whileHover={{ scale: 1.03 }}
                      className="cursor-pointer"
                      onClick={() => openImage(folder, start + i)}
                    >
                      <LazyImage
                        src={img.url}
                        alt={img.name}
                        className="rounded-lg hover:opacity-90 object-cover w-full aspect-square"
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>

              {totalPages > 1 && (
                <>
                  <button
                    onClick={() => handlePrevPage(folder)}
                    disabled={currentPage === 0}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 p-1 text-white rounded-full disabled:opacity-30 z-10 hover:bg-black/50"
                    aria-label="Previous Page"
                  >
                    <ChevronLeft size={32} />
                  </button>

                  <button
                    onClick={() => handleNextPage(folder, totalPages)}
                    disabled={currentPage >= totalPages - 1}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 p-1 text-white rounded-full disabled:opacity-30 z-10 hover:bg-black/50"
                    aria-label="Next Page"
                  >
                    <ChevronRight size={32} />
                  </button>
                </>
              )}
            </div>
          </div>
        );
      })}

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