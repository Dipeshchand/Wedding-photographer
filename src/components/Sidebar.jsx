import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { IoLogoInstagram } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { MdOutlinePhone } from "react-icons/md";

const RightSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <div className="relative">
      {/* ☰ Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 right-4 z-50 p-2 text-white bg-black/70 rounded-md shadow-md hover:bg-black transition"
      >
        <FaBars size={22} />
      </button>

      {/* Overlay when sidebar is open */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-black text-white shadow-lg transform transition-transform duration-300 z-50
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* ❌ Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-300 hover:text-white transition"
          >
            <FaTimes size={22} />
          </button>
        </div>

        {/* 📱 Social Icons & Contact */}
        <div className="flex flex-col items-start gap-3 px-6 mt-2">
          <div className="flex gap-3">
            <IoLogoInstagram className="size-5 hover:text-pink-400 cursor-pointer" />
            <FaWhatsapp className="size-5 hover:text-green-400 cursor-pointer" />
            <CiFacebook className="size-5 hover:text-blue-400 cursor-pointer" />
          </div>

          <div className="flex items-center space-x-2 mt-2">
            <MdOutlinePhone className="size-5" />
            <span className="font-medium">9347645827</span>
          </div>

          <span className="text-sm text-gray-300">
            memoriesphotographyktm@gmail.com
          </span>
        </div>

        {/* 🧭 Navigation Links */}
        <ul className="flex flex-col mt-8 space-y-3 font-semibold px-6">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="px-3 py-2 rounded hover:bg-gray-800 transition"
            >
              <NavLink
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-400 underline"
                    : "text-white hover:text-yellow-400 hover:underline"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RightSidebar;
