import React from 'react'
import c2main from '../assets/c2main.jpg'
import cmain from '../assets/cmain.JPG'
import camera from '../assets/camera.png'
import image from '../assets/hashtag.png'
import heart from '../assets/heart.png'
import flower from '../assets/flower.png'
import speaker from '../assets/speaker.png'

function Contact() {
  return (
    <div className="mt-20 px-4">
      {/* About Us Heading */}
      <p 
        className="flex justify-center text-3xl text-center" 
        style={{ fontFamily: "Allura, cursive" }}
      >
        Contact Us
      </p>  

      {/* Underline */}
      <div className="flex justify-center">
        <span className="border-b-4 border-yellow-500 w-20 md:w-36 mt-2"></span>
      </div>  

      {/* Images Section */}
      <div className="bg-cover p-4 mt-10">
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <img 
            src={c2main} 
            alt="c2main" 
            className="w-full md:w-1/2 h-auto object-cover rounded-lg" 
          />
          <img 
            src={cmain} 
            alt="cmain" 
            className="w-full md:w-1/2 h-auto object-cover rounded-lg" 
          />
        </div>
      </div>

      {/* Sub-heading */}
      <div id="sub-heading" className="mt-6 text-center md:text-left">
        <p>
          Welcome to the first step in getting us onboard. Fill this form and get one step closer to making the best decision of your life! Not kidding.
        </p>
        <br />
        <p>
          We would love to schedule a call and know more about your wedding once we have all the details as mentioned below.
        </p>
      </div>

      {/* Section Heading */}
      <div className="flex justify-center items-center flex-col mt-10 font-bold text-2xl text-center" style={{ fontFamily: "Allura, cursive" }}>
        <p>What Makes Us the</p>
        <p>Frame-Worthy Choice ?</p>
      </div>

      {/* Reusable Feature Section */}
      {[
        {
          icon: camera,
          title: "Our Style of Photography",
          desc: "We have a strong documentary approach to wedding photography with a strong emphasis on lighting and capturing fine details. The photographs speak for themselves and reflect the passion and love with which we make them."
        },
        {
          icon: image,
          title: "The Whole Story",
          desc: "Our wedding photography is not about a few award-winning photos, but about the whole photo-story. Head over to our wedding-stories section to see them in full glory."
        },
        {
          icon: heart,
          title: "Moments with Emotions",
          desc: "We capture raw emotions, real smiles, and genuine love so that every photo feels alive even years later."
        },
        {
          icon: flower,
          title: "We Shoot Both Sides",
          desc: "Our team takes care of photography for both bride and groom sides so that we get the whole story and to the couples, we are the one-stop solution for all their photography needs."
        },
        {
          icon: speaker,
          title: "Professional & Transparent",
          desc: "If you have any query or concern at any stage, you can always reach out to us anytime. We deliver what we promise under strict timelines."
        }
      ].map((item, index) => (
        <div key={index} className="mt-10 flex flex-col md:flex-row items-center md:items-start gap-6">
          <img 
            src={item.icon} 
            alt={item.title}
            className="w-24 md:w-40 h-auto object-contain mx-auto md:mx-0"
          />
          <div className="text-center md:text-left">
            <p className="font-semibold text-xl" style={{ fontFamily: "Allura, cursive" }}>
              {item.title}
            </p>
            <div className="flex justify-center md:justify-start">
              <span className="border-b-4 border-yellow-500 w-16 md:w-24 mt-2"></span>
            </div>
            <p className="mt-3">{item.desc}</p>
          </div>
        </div>
      ))}

      <div className="my-20"></div>
    </div>
  )
}

export default Contact
