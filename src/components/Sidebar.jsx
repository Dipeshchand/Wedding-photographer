import React, { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";

import { Link, NavLink } from "react-router-dom";

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

      {/* 🔘 Mobile Toggle Button */}

      <button

        onClick={() => setIsOpen(true)}

        className="fixed top-4 right-4 z-50 p-2 text-white bg-black/60 rounded-md shadow-md hover:bg-black/80 transition sm:hidden"

      >

        <FaBars size={22} />

      </button>



      {/* 🔲 Mobile Overlay */}

      {isOpen && (

        <div

          onClick={() => setIsOpen(false)}

          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 sm:hidden"

        />

      )}



      {/* 🧭 Sidebar */}

      <div

        className={`fixed top-0 right-0 h-full w-3/4 bg-black text-white shadow-lg transform transition-transform duration-300 z-50

          ${isOpen ? "translate-x-0" : "translate-x-full"}

          sm:translate-x-0 sm:static sm:h-auto sm:w-auto sm:bg-transparent sm:shadow-none`}

      >

        {/* ❌ Close Button (Mobile only) */}

        <div className="flex justify-end p-4 sm:hidden">

          <button

            onClick={() => setIsOpen(false)}

            className="text-gray-300 hover:text-white transition"

          >

            <FaTimes size={22} />

          </button>

        </div>



        {/* 📱 Social Icons & Contact */}

        <div className="flex flex-col items-start gap-3 px-6 mt-4 sm:flex-row sm:items-center sm:gap-6 sm:px-0">

          <div className="flex gap-3">

            <IoLogoInstagram className="size-5 hover:text-pink-400 cursor-pointer" />

            <FaWhatsapp className="size-5 hover:text-green-400 cursor-pointer" />

            <CiFacebook className="size-5 hover:text-blue-400 cursor-pointer" />

          </div>



          <div className="flex items-center space-x-2 mt-2 sm:mt-0">

            <MdOutlinePhone className="size-5" />

            <span className="font-medium">9347645827</span>

          </div>



          <span className="text-sm text-gray-300 mt-1 sm:mt-0">

            memoriesphotographyktm@gmail.com

          </span>

        </div>



        {/* 🧩 Navigation Links */}

        <ul className="flex flex-col mt-126 space-y-2 font-bold px-6 sm:flex-row sm:space-y-0 sm:space-x-6 sm:px-0">

          {navItems.map((item, index) => (

            <li

              key={index}

              className="px-3 py-2 rounded hover:bg-gray-700 sm:hover:bg-transparent sm:hover:text-yellow-400 transition"

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