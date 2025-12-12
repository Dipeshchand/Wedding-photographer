import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="w-full bg-[#F6F3EC] py-16 px-6 border-t border-gray-300">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT SIDE — BRAND & HEADING */}
        <div>
          <h2 className="text-3xl md:text-4xl flex justify-center font-serif font-semibold text-black mb-4">
            Resources
          </h2>

          <p className="text-gray-700 text-sm leading-relaxed max-w-md">
            Explore our portfolio, learn more about our creative process, and get in touch to 
            capture your timeless love story.
          </p>
        </div>

        {/* RIGHT SIDE — LINKS */}
        <div className="flex flex-col space-y-3 text-gray-900 text-lg items-center">

          <a href="/" className="hover:opacity-70 transition">Home</a>
          <a href="/about" className="hover:opacity-70 transition">About Us</a>
          <a href="/portfolio" className="hover:opacity-70 transition">Portfolio</a>
          <a href="/testimonials" className="hover:opacity-70 transition">Youtube</a>
          <a href="/about" className="hover:opacity-70 transition font-bold">About</a>
          <a href="/contact" className="hover:opacity-70 transition">Contact Us</a>
          <a href="/privacy" className="hover:opacity-70 transition">Privacy Policy</a>
        </div>
      </div>

          <div className="flex gap-4 justify-center mt-6 ">
            <FaInstagram  size={25}/>
            <FaYoutube   size={25}/>
            <FaWhatsapp   size={25}/>
          </div>
      {/* COPYRIGHT */}
      <div className="text-center text-gray-600 text-sm mt-10">
        Copyright © 2025 WeFoundALoveStory.
      </div>
    </footer>
  );
}
