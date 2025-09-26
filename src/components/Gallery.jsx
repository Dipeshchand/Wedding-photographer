import React, { useState } from "react";

// Import images (Assuming these paths are correct in your project structure)
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

  const openModal = (index) => {
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };
  
  const showPrev = () => {
    const prevIndex = (selectedIndex - 1 + images.length) % images.length;
    setSelectedIndex(prevIndex);
  };

  const showNext = () => {
    const nextIndex = (selectedIndex + 1) % images.length;
    setSelectedIndex(nextIndex);
  };

  const isModalOpen = selectedIndex !== null;
  const selectedImage = isModalOpen ? images[selectedIndex] : null;

  return (
    <section className="w-full py-20 flex flex-col items-center px-4 sm:px-8">
      
      {/* --- Gallery Grid --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg cursor-pointer"
            onClick={() => openModal(index)} 
          >
            <img
              src={img}
              alt={`Portfolio ${index + 1}`}
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
      
      {/* --- Modal/Lightbox Component (Conditionally Rendered) --- */}
      {isModalOpen && (
        <div 
          // The overlay now has a semi-transparent black background for better readability of text on the image
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal} 
        >
          <div 
            className="relative w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()} 
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white text-3xl font-bold p-2 leading-none rounded-full transition-colors z-10 w-10 h-10 flex items-center justify-center bg-black/50 hover:bg-black/75"
              aria-label="Close Modal"
            >
              &times;
            </button>
            
            {/* Previous Button */}
            <button
              onClick={showPrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl p-3   bg-opacity-50 rounded-full hover:bg-opacity-75 transition-opacity z-10 w-14 h-14 flex items-center justify-center"
              aria-label="Previous Image"
            >
              &lt;
            </button>

            {/* Next Button */}
            <button
              onClick={showNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl p-3  bg-opacity-50 rounded-full hover:bg-opacity-75 transition-opacity z-10 w-14 h-14 flex items-center justify-center"
              aria-label="Next Image"
            >
              &gt;
            </button>
            
            <img
              src={selectedImage}
              alt={`Enlarged view ${selectedIndex + 1}`}
              // Ensure the image scales responsively
              className="rounded-lg shadow-2xl max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;