import React, { useEffect, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Image4 from "../assets/Image4.jpg";
import Image9 from "../assets/Image9.jpg";
import Image13 from "../assets/Image13.jpg";
import Image17 from "../assets/Image7.jpg";


const images = [Image4, Image9, Image13,Image17];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // change every 3 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-full h-[90vh] bg-cover bg-center flex items-center justify-center transition-all duration-1000 relative"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      {/* Social icons */}
      <div className="absolute bottom-5 right-5 flex gap-4 text-white text-2xl md:text-3xl">
        <AiFillInstagram className="hover:text-pink-500 transition-colors duration-300" />
        <FaFacebook className="hover:text-blue-500 transition-colors duration-300" />
      </div>
    </div>
  );
};

export default Hero;
