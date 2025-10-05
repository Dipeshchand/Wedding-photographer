import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const RightSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 right-4 sm:right-10 z-50 p-2 text-white bg-black/60 rounded-md shadow-md hover:bg-black/80 transition"
      >
        <FaBars size={22} />
      </button>

      {/* Sidebar Overlay - only half screen */}
      {isOpen && (
        <div
          className="fixed top-0 right-0 h-full w-1/2 bg-black bg-opacity-30 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-2/5 sm:w-64 bg-black text-white shadow-lg transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-300 hover:text-white transition"
          >
            <FaTimes size={22} />
          </button>
        </div>

        {/* Sidebar Links */}
        <ul className="flex flex-col mt-4 space-y-2">
          <li className="px-6 py-3 hover:bg-gray-700 rounded">
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li className="px-6 py-3 hover:bg-gray-700 rounded">
            <Link to="/services" onClick={() => setIsOpen(false)}>
              Services
            </Link>
          </li>
          <li className="px-6 py-3 hover:bg-gray-700 rounded">
            <Link to="/portfolio" onClick={() => setIsOpen(false)}>
              Portfolio
            </Link>
          </li>
          <li className="px-6 py-3 hover:bg-gray-700 rounded">
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
          <li className="px-6 py-3 hover:bg-gray-700 rounded">
            <Link to="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RightSidebar;
