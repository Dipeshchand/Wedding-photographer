import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const RightSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative h-screen">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 right-40 z-50 p-2 text-white rounded-md shadow-lg"
      >
        <FaBars size={20} />
      </button>

      {/* Sidebar Overlay */}
      {isOpen && (
        <div
          className="fixed  bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-white shadow-lg transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)} className="text-white">
            <FaTimes size={20} />
          </button>
        </div>

        {/* Sidebar Links */}
        <ul className="flex flex-col mt-4">
          <li className="px-6 py-3 hover:bg-gray-700 rounded">
            <a href="/">Home</a>
          </li>
          <li className="px-6 py-3 hover:bg-gray-700 rounded">
            <a href="/services">Services</a>
          </li>
          <li className="px-6 py-3 hover:bg-gray-700 rounded">
            <a href="/portfolio">Portfolio</a>
          </li>
          <li className="px-6 py-3 hover:bg-gray-700 rounded">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    
    </div>
  );
};

export default RightSidebar;