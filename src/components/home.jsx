// import React from "react";
// import bgImage from "../assets/vadim-kaipov-8ZELrodSvTc-unsplash.jpg"; // put your hero background image here
// import { Link } from "react-router-dom";

// const Home = () => {
//   return (
//     <div
//       className="relative h-screen w-full bg-cover bg-center"
//       style={{ backgroundImage: `url(${bgImage})` }}
//     >
//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/50"></div>

//       {/* Navbar */}
//       <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-8 py-6 z-20">
//         {/* Logo */}
//         <div className="flex items-center text-white font-semibold text-lg">
//           <img src="/batman.png" alt="logo" className="h-10 w-18 mr-2" /> 
          
//           URBAN JUNGLE CO.
//         </div>

//         {/* Menu */}
//         <div className="flex items-center space-x-8 text-white font-medium">

//         <Link to="/"> <a href="#home" className="hover:text-green-400">Home</a></Link> 
//         <Link to="/shop">  <a href="#shop" className="hover:text-green-400">Shop</a></Link>
//         <Link to="/about"> <a href="#about" className="hover:text-green-400">About</a></Link>
//         <Link to='/contact'>  <a href="#contact" className="hover:text-green-400">Contact</a></Link>

//           {/* Social Icons */}
//           <div className="flex items-center space-x-4 text-lg">
//             <i className="fab fa-facebook cursor-pointer hover:text-green-400"></i>
//             <i className="fab fa-instagram cursor-pointer hover:text-green-400"></i>
//             <i className="fab fa-youtube cursor-pointer hover:text-green-400"></i>
//             <i className="fab fa-x-twitter cursor-pointer hover:text-green-400"></i>
//           </div>

//           {/* Cart */}
//           <div className="relative cursor-pointer">
//             <i className="fas fa-shopping-bag"></i>
//             <span className="absolute -top-2 -right-2 bg-white text-black text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
//               0
//             </span>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
//         <h4 className="uppercase tracking-widest text-sm md:text-base">
//           Welcome to Urban Jungle Co.
//         </h4>
//         <h1 className="text-3xl md:text-6xl font-extrabold leading-tight mt-4">
//           Discover the Beauty of <br /> Nature at Your Fingertips
//         </h1>
//         <button className="mt-8 px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full shadow-lg transition duration-300">
//           Shop Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Home;


import React from "react";
import bgImage from "../assets/vadim-kaipov-8ZELrodSvTc-unsplash.jpg";

import Hero from "./hero";

const Home = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Navbar */}
    

      {/* Hero Section */}
      <Hero />
    </div>
  );
};

export default Home;

