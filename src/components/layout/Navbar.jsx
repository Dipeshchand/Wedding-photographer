import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full px-6 py-3 md:px-10 md:py-4 z-50
  bg-white/40 backdrop-blur-2xl border-b border-white/20
  flex items-center justify-between">
      
      {/* Logo */}
      <h1 className="text-2xl md:text-4xl font-serif font-bold tracking-wide">
        RC
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10 text-lg font-light">
        <Link to="/" className="hover:opacity-70">Home</Link>
        <Link to="/about" className="hover:opacity-70">About</Link>
        <Link to="/portfolio" className="hover:opacity-70">Portfolio</Link>
        <Link to="/testimonials" className="hover:opacity-70">Wedding Films</Link>
        <Link to="/contact" className="hover:opacity-70">Contact Us</Link>
      </ul>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-3xl font-bold"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✖" : "☰"}
      </button>

      {/* Mobile Dropdown */}
      <div
  className={`absolute left-0 w-full bg-white/70 backdrop-blur-xl 
    md:hidden transition-all duration-500 ease-out overflow-hidden
    rounded-3xl border-b border-white/40
    ${menuOpen ? "max-h-40 opacity-100 top-16" : "max-h-0 opacity-0 top-12"}
  `}
>
  <ul className="flex flex-row flex-wrap justify-center items-center gap-6 text-lg font-medium py-4 px-5">
    <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
    <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
    <Link to="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</Link>
    <Link to="/testimonials" onClick={() => setMenuOpen(false)}>Wedding Films</Link>
    <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
  </ul>
</div>
    </nav>
  );
}
