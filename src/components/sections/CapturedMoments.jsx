import React from "react";

export default function CapturedMoments() {
  const couples = [
    { 
      id: 1, 
      name: "Akhilesh & Akshaya", 
      desc: "From snowy Kashmir to forever together — their story is one of quiet strength and deep love.",
      image: "/images/couple1.jpg" 
    },
    { 
      id: 2, 
      name: "Rahul & Priya", 
      desc: "A journey of friendship that blossomed into a beautiful forever.",
      image: "/images/couple2.png" 
    },
    { 
      id: 3, 
      name: "Arjun & Divya", 
      desc: "Two hearts, one rhythm — a love story told through unspoken words.",
      image: "/images/couple3.jpg" 
    },
  ];

  return (
    <section className="w-full bg-[#F6F3EC] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-serif font-baskervville  mb-4">
          Captured Moments
        </h2>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-700 mb-12 font-baskervville ">
          Click on each couple to watch their love story unfold.
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {couples.map((c) => (
            <div key={c.id} className="cursor-pointer">
              
              {/* Image */}
              <div className="overflow-hidden rounded-lg shadow-sm group">
                <img
                  src={c.image}
                  alt={c.name}
                  className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Name */}
              <h3 className="mt-4 text-2xl font-serif ">
                {c.name}
              </h3>

              {/* Description */}
              <p className="text-gray-700 mt-2 text-sm md:text-base">
                {c.desc}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
