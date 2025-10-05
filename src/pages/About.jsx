import React from "react";
import { Link } from "react-router-dom";


function About() {
  return (
    <div className="px-4 md:px-8 lg:px-16 py-8 bg-gray-50">
      {/* About Us Heading */}
      <div className="flex justify-center flex-col items-center mt-4">
        <p
          className="text-2xl sm:text-3xl md:text-4xl font-semibold"
          style={{ fontFamily: "Allura, cursive" }}
        >
          About Us
        </p>
      </div>

      {/* Celebrating Love */}
      <div className="flex justify-center flex-col items-center mt-10 md:mt-14 space-y-2">
        <p
          className="text-lg sm:text-xl md:text-2xl"
          style={{ fontFamily: "Allura, cursive" }}
        >
          Celebrating Love
        </p>
        <p
          className="text-xl sm:text-2xl md:text-3xl"
          style={{ fontFamily: "Allura, cursive" }}
        >
          Through the Lens Since 2022
        </p>
      </div>

      {/* About Text Box */}
      <div className="mt-8 flex justify-center">
        <div className="w-full sm:w-11/12 md:w-3/4 lg:w-2/3 px-6 py-10 md:py-12 shadow-xl rounded-2xl bg-white">
          <p className="text-center text-gray-800 leading-relaxed md:text-lg">
            <b>Memories Photography</b> began its journey in 2022 in the serene
            and picturesque state of <b>Uttarakhand.</b> Since then, we have
            been passionate about capturing life’s most precious moments and
            turning them into timeless stories. Our dedication to creativity,
            precision, and an artistic eye has allowed us to beautifully frame
            weddings, portraits, cultural celebrations, and much more.
            <br />
            <br />
            With years of experience behind the lens,{" "}
            <b>Memories Photography</b> has grown into a trusted name for those
            who want their moments preserved with authenticity and elegance. For
            us, every picture is more than just an image — it’s a memory to be
            cherished forever.
          </p>

          {/* Beliefs / Green Tick List */}
          <div className="mt-8 bg-red-50 rounded-2xl px-6 py-6 sm:px-8">
            <p className="text-xl sm:text-2xl font-bold text-red-500 mb-4">
              ✨ What We Believe In
            </p>
            <ul className="list-none space-y-3">
              <li className="flex items-center">
                <span className="text-green-500 text-xl mr-3">✔</span>
                <span className="text-gray-800 text-base sm:text-lg">
                  Capturing unique and timeless moments
                </span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 text-xl mr-3">✔</span>
                <span className="text-gray-800 text-base sm:text-lg">
                  Turning emotions into beautiful memories
                </span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 text-xl mr-3">✔</span>
                <span className="text-gray-800 text-base sm:text-lg">
                  Creativity, artistry, and attention to detail
                </span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 text-xl mr-3">✔</span>
                <span className="text-gray-800 text-base sm:text-lg">
                  Framing your story in every shot
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
