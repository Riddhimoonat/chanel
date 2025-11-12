import React, { useState, useEffect } from "react";
import "remixicon/fonts/remixicon.css";
import "./navbar.css";

const Navbar = () => {
  const menuLinks = [
    "BEAUTY",
    "FASHION",
    "JEWELLERY",
    "WOMEN",
    "MEN",
    "ETHNIC",
    "FRAGRANCE",
    "MAKEUP",
    "SKINCARE",
    "LONGEWEAR",
    "FOOTWEAR",
  ];

  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 200 && currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const shouldShow = isVisible || isHovered;

  return (
    <>
      {/* invisible hover zone at top */}
      <div
        className="fixed top-0 left-0 w-full h-10 z-[60]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      ></div>

      {/* navbar */}
      <header
        className={`fixed top-0 left-0 w-full bg-black border-b border-gray-800 z-50 transition-all duration-500 ${
          shouldShow ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
        }`}
      >
        <div className="flex justify-between items-center px-10 py-5">
          <div className="w-10"></div>

          <div className="text-5xl ml-20 font-bold tracking-[0.3em] text-white">
            ZUDIO
          </div>

          <div className="flex items-center gap-6 text-white text-xl">
            <i className="ri-search-line hover:text-gray-300 transition-all duration-300 cursor-pointer"></i>
            <i className="ri-user-line hover:text-gray-300 transition-all duration-300 cursor-pointer"></i>
            <i className="ri-star-line hover:text-gray-300 transition-all duration-300 cursor-pointer"></i>
            <i className="ri-shopping-bag-line hover:text-gray-300 transition-all duration-300 cursor-pointer"></i>
          </div>
        </div>

        {/* nav links */}
        <nav className="flex justify-center gap-10 pb-5 text-[0.85rem] tracking-wider font-medium text-white">
          {menuLinks.map((link, index) => (
            <a key={index} href="#" className="nav-link text-white">
              {link}
            </a>
          ))}
        </nav>
      </header>
    </>
  );
};

export default Navbar;
