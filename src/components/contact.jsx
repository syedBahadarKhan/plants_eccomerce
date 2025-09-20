import React from "react";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <div className="w-full">
      {/* Top Banner */}
      <div
        className="h-64 md:h-110 bg-cover bg-center flex flex-col items-center justify-center text-white text-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 px-4">
          <p className="uppercase tracking-wide text-xs md:text-sm">Contact Us</p>
          <h2 className="text-2xl md:text-4xl font-bold mt-2">Let’s Connect</h2>
        </div>
      </div>

      {/* Contact Info + Form */}
      <div className="container mx-auto px-4 py-12 md:py-16 flex flex-col md:flex-row items-start md:space-x-12">
        {/* Left - Info */}
        <div className="md:w-1/2 space-y-8">
          <h3 className="text-xl md:text-2xl font-semibold">Send us Message</h3>

          {/* Phone */}
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-green-100 flex items-center justify-center rounded-full text-green-600 text-lg">
              📞
            </div>
            <div>
              <h4 className="font-medium">Phone</h4>
              <p className="text-gray-600 text-sm md:text-base">0300-429166989</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-green-100 flex items-center justify-center rounded-full text-green-600 text-lg">
              ✉️
            </div>
            <div>
              <h4 className="font-medium">Email</h4>
              <p className="text-gray-600 text-sm md:text-base">bahadardeveloper@gmail.com</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-green-100 flex items-center justify-center rounded-full text-green-600 text-lg">
              📍
            </div>
            <div>
              <h4 className="font-medium">Address</h4>
              <p className="text-gray-600 text-sm md:text-base">
                street 2 Hayataabad Phase 2
              </p>
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <div className="md:w-1/2 mt-10 md:mt-0 w-full">
          <form className="space-y-6">
            <div>
              <label className="block mb-1 font-medium text-sm md:text-base">
                Name *
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm md:text-base focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-sm md:text-base">
                Email *
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm md:text-base focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-sm md:text-base">
                Phone *
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm md:text-base focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-sm md:text-base">
                Message *
              </label>
              <textarea
                rows="4"
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm md:text-base focus:ring-2 focus:ring-green-500 outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-2 bg-green-600 text-white rounded-md shadow hover:bg-green-700 transition text-sm md:text-base"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Social Section */}
      <div className="bg-green-100 py-8 text-center px-4">
        <p className="mb-4 font-medium text-sm md:text-base">
          Follow us @Happy Leaves
        </p>
        <div className="flex justify-center space-x-6 text-lg text-gray-600">
          <i className="fab fa-facebook hover:text-blue-500 cursor-pointer"></i>
          <i className="fab fa-instagram hover:text-red-500 cursor-pointer"></i>
          <i className="fab fa-youtube hover:text-red-500 cursor-pointer"></i>
          <i className="fab fa-twitter hover:text-blue-black cursor-pointer"></i>
        </div>
      </div>

      {/* Call to Action */}
      <div
        className="h-64 md:h-72 bg-cover bg-center flex flex-col items-center justify-center text-white text-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 px-4">
          <h2 className="text-xl md:text-3xl font-bold mb-4">
            Ready to Find your Perfect Plant?
          </h2>
          <p className="mb-6 text-gray-200 text-sm md:text-base">
            Browse our online store or visit us in person to experience the
            beauty of nature.
          </p>
         <Link
  to="/shop"
  className="px-6 py-2 bg-green-600 text-white rounded-md shadow hover:bg-green-700 transition text-sm md:text-base inline-block"
>
  Shop Now
</Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
