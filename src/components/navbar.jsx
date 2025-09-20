// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-8 py-6 z-20">
//       {/* Logo */}
//       <div className="flex items-center text-white font-semibold text-lg">
//         <img src="/batman.png" alt="logo" className="h-10 w-18 mr-2" />
//         URBAN JUNGLE CO.
//       </div>

//       {/* Menu */}
//       <div className="flex items-center space-x-8 text-white font-medium">
//         <Link to="/" className="hover:text-green-400">Home</Link>
//         <Link to="/shop" className="hover:text-green-400">Shop</Link>
//         <Link to="/about" className="hover:text-green-400">About</Link>
//         <Link to="/contact" className="hover:text-green-400">Contact</Link>

//         {/* Social Icons */}
//         <div className="flex items-center space-x-4 text-lg">
//           <i className="fab fa-facebook cursor-pointer hover:text-green-400"></i>
//           <i className="fab fa-instagram cursor-pointer hover:text-green-400"></i>
//           <i className="fab fa-youtube cursor-pointer hover:text-green-400"></i>
//           <i className="fab fa-x-twitter cursor-pointer hover:text-green-400"></i>
//         </div>

//         {/* Cart */}
//         <div className="relative cursor-pointer">
//           <i className="fas fa-shopping-bag"></i>
//           <span className="absolute -top-2 -right-2 bg-white text-black text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
//             0
//           </span>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



// // Navbar.jsx
// import { Link, useLocation } from "react-router-dom";

// const Navbar = () => {
//   const { pathname } = useLocation();

//   // Change navbar style based on route
//   const getNavbarStyle = () => {
//     if (pathname === "/shop") {
//       return  "bg-white text-black shadow-md" ; // For shop
//     } else {
//       return  "bg-transparent text-white" ; // For other pages
//     }
//   };
 
 

//   // Function to style active links
//   const getLinkStyle = (path) => {
//     return pathname === path
//       ? "text-green-500 font-semibold border-b-2 border-green-500 pb-1"
//       : "hover:text-green-500";
//   };

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full flex items-center justify-between px-8 py-6 z-50 transition duration-300 ${getNavbarStyle()}`}
//     >
//       {/* Logo */}
//       <div className="flex items-center font-semibold text-lg">
//         <img src="/batman.png" alt="logo" className="h-10 w-18 mr-2" />
//         URBAN JUNGLE CO.
//       </div>

//       {/* Menu */}
//       <div className="flex items-center space-x-8 font-medium">
//         <Link to="/" className={getLinkStyle("/")}>
//           Home
//         </Link>
//         <Link to="/shop" className={getLinkStyle("/shop")}>
//           Shop
//         </Link>
//         <Link to="/about" className={getLinkStyle("/about")}>
//           About
//         </Link>
//         <Link to="/contact" className={getLinkStyle("/contact")}>
//           Contact
//         {</Link>
//       </div>
//     </nav>
//     );
//   };

//  export default Navbar;
// }




import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Change navbar style based on route
  const getNavbarStyle = () => {
    if (pathname === "/shop" || pathname === "/about" || pathname === "/contact") {
      return "bg-white text-black shadow-md"; // Light navbar
    } else {
      return "bg-transparent text-white"; // Transparent on Home
    }
  };

  // Function to style active links
  const getLinkStyle = (path) => {
    return pathname === path
      ? "text-green-500 font-semibold border-b-2 border-green-500 pb-1"
      : "hover:text-green-500";
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 md:px-12 py-4 z-50 transition duration-300 ${getNavbarStyle()}`}
    >
      {/* Logo */}
     <Link to="/"> <div className="flex items-center font-semibold text-lg">
        <img src="/batman.png" alt="logo" className="h-10 w-18 mr-2" />
        URBAN JUNGLE CO.
      </div></Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8 font-medium">
        <Link to="/" className={getLinkStyle("/")}>
          Home
        </Link>
        <Link to="/shop" className={getLinkStyle("/shop")}>
          Shop
        </Link>
        <Link to="/about" className={getLinkStyle("/about")}>
          About
        </Link>
        <Link to="/contact" className={getLinkStyle("/contact")}>
          Contact
        </Link>

        {/* Social Icons */}
        <div className="flex items-center space-x-4 text-lg">
          <i className="fab fa-facebook cursor-pointer hover:text-blue-500"></i>
          <i className="fab fa-instagram cursor-pointer hover:text-red-500"></i>
          <i className="fab fa-youtube cursor-pointer hover:text-red-500"></i>
          <i className="fab fa-x-twitter cursor-pointer hover:text-red-500"></i>
        </div>

        {/* Cart */}
        <div className="relative cursor-pointer">
          <i className="fas fa-shopping-bag hover:text-green-600" ></i>
          <span className="absolute -top-2 -right-2 bg-white text-black text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
            0
          </span>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          className={`absolute top-full left-0 w-full flex flex-col items-center space-y-6 py-6 font-medium ${pathname === "/" ? "bg-black/90 text-white" : "bg-white text-black shadow-md"}`}
        >
          <Link to="/" className={getLinkStyle("/")} onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/shop" className={getLinkStyle("/shop")} onClick={() => setIsOpen(false)}>
            Shop
          </Link>
          <Link to="/about" className={getLinkStyle("/about")} onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link to="/contact" className={getLinkStyle("/contact")} onClick={() => setIsOpen(false)}>
            Contact
          </Link>

          {/* Social Icons */}
          <div className="flex items-center space-x-4 text-lg">
            <i className="fab fa-facebook cursor-pointer hover:text-blue-500"></i>
            <i className="fab fa-instagram cursor-pointer hover:text-red-500"></i>
            <i className="fab fa-youtube cursor-pointer hover:text-red-500"></i>
            <i className="fab fa-x-twitter cursor-pointer hover:text-black-500"></i>
          </div>

          {/* Cart */}
          <div className="relative cursor-pointer">
            <i className="fas fa-shopping-bag"></i>
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              0
            </span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
