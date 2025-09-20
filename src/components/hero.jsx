import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
      <h4 className="uppercase tracking-widest text-sm md:text-base">
        Welcome to Happy Leaves Co.
      </h4>
      <h1 className="text-3xl md:text-6xl font-extrabold leading-tight mt-4">
        Discover the Beauty of <br /> Nature at Your Fingertips
      </h1>
     <Link to="/shop">  <button className="mt-8 px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full shadow-lg transition duration-300 cursor-pointer">
        Shop Now
      </button></Link>
    </div>
  );
};

export default Hero;
