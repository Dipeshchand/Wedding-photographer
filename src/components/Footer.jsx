import React from 'react';
// Note: You do NOT need to import a separate CSS file when using Tailwind.

const GOOGLE_MAPS_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.218524451717!2d-122.41941568468165!3d37.77492977975876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808798150417%3A0x6b4904c965e8a56!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1628173456789!5m2!1sen!2sus"; 
// ^^^ REPLACE THIS WITH YOUR OWN GOOGLE MAPS EMBED URL ^^^

const Footer = () => {
  return (
    // Outer footer container: dark background, white text, padding
    <footer className="bg-gray-800 text-white pt-10 pb-6">
      
      {/* Container for the links:
        1. flex-col: Stack vertically by default (on mobile).
        2. md:flex-row: Switch to horizontal row on medium screens (md) and up.
        3. justify-center: Center the content horizontally.
        4. gap-5: Add space between items.
      */}
      <div className='flex flex-col md:flex-row justify-center gap-5 md:gap-8'>
        
        {/*
          Link Items:
          1. py-1: Add slight vertical padding for touch targets on mobile.
          2. text-center: Ensure text is centered when stacked vertically.
        */}
        <div className='py-1 text-center hover:underline'>Wedding Photography</div>
        <div className='py-1 text-center hover:underline'>Pre-Wedding Photography</div>
        <div className='py-1 text-center hover:underline'>Wedding Teaser</div>
        <div className='py-1 text-center hover:underline'>Pre Wedding Film</div>
        <div className='py-1 text-center hover:underline'>Cinematic Full Wedding Film</div>
      </div>
      
      {/* Optional: Add Copyright or other bottom text */}
      <div className='text-center text-sm text-gray-400 mt-6'>
          &copy; {new Date().getFullYear()} MemoriesPhotography
      </div>

    </footer>
  );
};

export default Footer;