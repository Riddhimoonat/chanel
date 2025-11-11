import React from "react";
import "remixicon/fonts/remixicon.css";
import "./navbar.css"; // we'll create this next

const Navbar = () => {
  const menuLinks = [
    "HAUTE COUTURE",
    "FASHION",
    "HIGH JEWELLERY",
    "FINE JEWELLERY",
    "WATCHES",
    "EYEWEAR",
    "FRAGRANCE",
    "MAKEUP",
    "SKINCARE",
    "ABOUT CHANEL",
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 border-b border-gray-200">
      {/* Upper Section */}
      <div className="flex justify-between items-center px-10 py-5">
        <div className="w-10"></div>

        {/* Center Logo */}
        <div className="text-2xl font-semibold tracking-[0.3em] text-black">
          CHANEL
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-6 text-black text-xl">
          <i className="ri-search-line hover:text-gray-700 hover:scale-110 transition-transform duration-300 cursor-pointer"></i>
          <i className="ri-user-line hover:text-gray-700 hover:scale-110 transition-transform duration-300 cursor-pointer"></i>
          <i className="ri-star-line hover:text-gray-700 hover:scale-110 transition-transform duration-300 cursor-pointer"></i>
          <i className="ri-shopping-bag-line hover:text-gray-700 hover:scale-110 transition-transform duration-300 cursor-pointer"></i>
        </div>
      </div>

      {/* Lower Menu */}
      <nav className="flex justify-center gap-10 pb-5 text-[0.85rem] tracking-wider font-medium text-black">
        {menuLinks.map((link, index) => (
         <a
  key={index}
  href="#"
  className="nav-link relative text-neutral-800 hover:text-neutral-900 transition-all duration-300"
>
  <span className="mirror-text">{link}</span>
</a>

        ))}
      </nav>
    </header>
  );
};

export default Navbar;
