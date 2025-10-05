import React from "react";
// Import all necessary images (Ensure these paths and names match your project structure)
import EventImg from "../assets/services.png"; // For the main banner
import PhotoImg from "../assets/Wedding Photography.jpg"; 
import PreWeddingImg from "../assets/PreWeddingImg.jpg";
import FilmImg from "../assets/FilmImg.jpg";
import HighlightImg from "../assets/Image10.jpg";

// Define the services as an array of objects, including title, description, and the unique image source
const servicesData = [
  {
    title: "Wedding Photography",
    description: "Capture the raw emotion and timeless moments of your wedding day with high-resolution, artistic photographs.",
    image: PhotoImg, // Unique image for this card
  },
  {
    title: "Pre-Wedding Photography",
    description: "A fun and relaxed shoot before the big day, creating beautiful, candid memories in a location of your choice.",
    image: PreWeddingImg, // Unique image for this card
  },
  {
    title: "Cinematic Full Wedding Film",
    description: "A comprehensive, feature-length film that tells the complete story of your wedding with professional sound and editing.",
    image: FilmImg, // Unique image for this card
  },
  {
    title: "Short Highlight Film",
    description: "A concise, fast-paced reel perfect for sharing instantly, showcasing all the best moments in under five minutes.",
    image: HighlightImg, // Unique image for this card
  },
];

// Placeholder for Footer component (Assuming it's a separate component you use)
function Footer() {
    return <footer className="bg-gray-800 text-white p-6 text-center">Your Footer Content Here</footer>;
}

function Services() {
  return (
    <div>
      {/* 1. Full-Screen Banner Image (Uses EventImg) */}
      <div
        className="w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${EventImg})` }}
      />
      
      <div className="p-4 sm:p-8">

        {/* 2. Title: Designing Exceptional Weddings */}
        <p
          className="flex justify-center mt-8 sm:mt-10 text-3xl sm:text-4xl text-center"
          style={{ fontFamily: "Allura, cursive" }}
        >
          Designing Exceptional Weddings
        </p>

        {/* 3. Main Description */}
        <div className="flex justify-center mt-8 sm:mt-10 px-2 sm:px-4">
          <p className="max-w-3xl text-center text-gray-700 leading-relaxed text-sm sm:text-base">
            We, Seraphic Wedding Planners are honored each time when you pick us.
            Experience an alluring wedding and a beautifully carved love story of
            yours with us. 2009 paved a way for us to kickstart our journey and by
            2018 Best Entrepreneur Award came in search of us. Soon after that,
            another recognition for business excellence was an award from Lexus in
            2022. Choosing us is equal to witnessing a splendid and well-oriented
            event with an exquisite touch.
          </p>
        </div>
          
        {/* 4. Services Section Title */}
        <div className="flex justify-center mt-12 sm:mt-16 text-3xl sm:text-4xl" style={{fontFamily:"Allura, cursive"}}> 
          <p> Services</p>
        </div>

        {/* 5. Services Cards Container (Responsive Grid/Stack) */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 mb-12">
          
          {servicesData.map((service, index) => (
            <div 
              key={index}
              className="w-full sm:w-80 lg:w-1/4 max-w-sm rounded-2xl shadow-2xl overflow-hidden transition duration-300 hover:shadow-xl"
            >
              {/* ✅ KEY FIX: The image background style now uses the unique service.image */}
              <div 
                className="h-40 sm:h-52 bg-center bg-cover rounded-t-2xl" 
                style={{backgroundImage:`url(${service.image})`}}
              ></div>
              
              <div className="p-4 flex flex-col items-center">
                <h1 
                  className="text-center text-xl sm:text-2xl mb-2" 
                  style={{fontFamily:"Allura, cursive"}}
                >
                  {service.title}
                </h1>
                <p className="text-center text-gray-700 text-sm leading-snug">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* 6. Footer */}
      <Footer/>
    </div>
  );
}

export default Services;