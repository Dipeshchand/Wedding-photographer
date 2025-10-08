import React from "react";
import { FcLike } from "react-icons/fc";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6">
      {/* Services Section */}
      <div className="flex flex-col items-center text-center md:flex-row md:justify-center md:items-start gap-4 md:gap-10 px-4 md:px-0">
        <div className="font-semibold text-white underline">Services</div>
        <div className="hover:underline cursor-pointer">Wedding Photography</div>
        <div className="hover:underline cursor-pointer">Pre-Wedding Photography</div>
        <div className="hover:underline cursor-pointer">Wedding Teaser</div>
        <div className="hover:underline cursor-pointer">Pre Wedding Film</div>
        <div className="hover:underline cursor-pointer">Cinematic Full Wedding Film</div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-6 mx-6 md:mx-20"></div>

      {/* Copyright */}
      <div className="text-center text-sm mt-6 px-4">
        &copy; {new Date().getFullYear()} <span className="font-semibold text-white">Memories Photography</span> — All rights reserved.
        <br className="md:hidden" />
        <div className="flex justify-center items-center mt-2">
          <span>Made with</span>
          <FcLike className="mx-1 text-lg" />
          <span className="font-semibold text-white">by AddWeb</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
