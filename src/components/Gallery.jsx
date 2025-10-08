import React, { useState, useEffect } from "react";

// Import images (update paths as per your project)
import Image1 from "../assets/Image1.jpg";
import Image2 from "../assets/Image2.jpg";
import Image3 from "../assets/Image3.jpg";
import Image4 from "../assets/Image4.jpg";
import Image5 from "../assets/Image5.jpg";
import Image6 from "../assets/Image6.jpg";
import Image7 from "../assets/Image7.jpg";
import Image8 from "../assets/Image8.jpg";
import Image9 from "../assets/Image9.jpg";
import Image10 from "../assets/Image10.jpg";
import Image11 from "../assets/Image11.jpg";
import Image12 from "../assets/Image12.jpg";
import Image13 from "../assets/Image13.jpg";

const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10, Image11, Image12, Image13];

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Open modal
  const openModal = (index) => setSelectedIndex(index);

  // Close modal
  const closeModal = () => setSelectedIndex(null);

  // Navigate previous
  const showPrev = () => {
    const prevIndex = (selectedIndex - 1 + images.length) % images.length;
    setSelectedIndex(prevIndex);
  };

  // Navigate next
  const showNext = () => {
    const nextIndex = (selectedIndex + 1) % images.length;
    setSelectedIndex(nextIndex);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (selectedIndex !== null) {
        if (e.key === "ArrowLeft") showPrev();
        if (e.key === "ArrowRight") showNext();
        if (e.key === "Escape") closeModal();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex]);

  const isModalOpen = selectedIndex !== null;
  const selectedImage = isModalOpen ? images[selectedIndex] : null;

  return (
    <section className="w-full py-20 flex flex-col items-center px-4 sm:px-8">
      {/* --- Gallery Grid --- */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 transition-all duration-500 ${
          isModalOpen ? "filter blur-sm" : ""
        }`}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg cursor-pointer"
            onClick={() => openModal(index)}
          >
            <img
              src={img}
              alt={`Portfolio ${index + 1}`}
              className="w-full h-full object-cover transform hover:scale-105 hover:brightness-90 transition-all duration-300"
            />
          </div>
        ))}
      </div>

      {/* --- Modal/Lightbox --- */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-4xl h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-3xl font-bold p-2 rounded-full bg-black/50 hover:bg-black/75 transition-colors z-10 w-10 h-10 flex items-center justify-center"
              aria-label="Close Modal"
            >
              &times;
            </button>

            {/* Previous Button */}
            <button
              onClick={showPrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl p-3 bg-black/30 rounded-full hover:bg-black/50 transition-opacity z-10 w-14 h-14 flex items-center justify-center"
              aria-label="Previous Image"
            >
              &lt;
            </button>

            {/* Next Button */}
            <button
              onClick={showNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl p-3 bg-black/30 rounded-full hover:bg-black/50 transition-opacity z-10 w-14 h-14 flex items-center justify-center"
              aria-label="Next Image"
            >
              &gt;
            </button>

            {/* Image Counter */}
            <div className="absolute top-4 left-4 text-white text-lg font-bold z-10">
              {selectedIndex + 1} / {images.length}
            </div>

            {/* Enlarged Image */}
            <img
              src={selectedImage}
              alt={`Enlarged view ${selectedIndex + 1}`}
              className="rounded-lg shadow-2xl max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
