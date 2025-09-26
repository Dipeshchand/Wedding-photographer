
import React from "react";

function ReachUs() {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted!");
  };

  return (

    <div className="p-6 rounded-2xl shadow-xl max-w-lg mx-auto mb-4 ">
      
      <h4 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">Get In Touch</h4>
      
      <form onSubmit={handleSubmit} className="space-y-6">
          
          <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input 
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
              />
          </div>
          <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input 
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
              />
          </div>
          
          <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="How can we help you?"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
              />
          </div>
          <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-lg text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 transform hover:scale-[1.01]"
          >
              Send Message
          </button>

      </form>
    </div>
  );
}

export default ReachUs;


