import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";


const Navbar = () => {
  const [showLink, setShowLink] = useState(true);
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLink(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 text-black m-15 py-5 px-8 shadow-custom-shadow z-50"
      style={{ backgroundColor: "rgb(0, 72, 37)" }}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Title */}
        {showLink ? (
          <Link to="/" className="text-4xl text-gray-300 font-oxanium font-semibold pl-15 animate-blink">
            DE-SPACE 1.O
            <h1 className="text-lg text-light ease-in">by Hackerspace MSIT</h1>
          </Link>
        ) : (
          <div className="text-4xl text-gray-300 font-oxanium font-semibold pl-15">
            DE-SPACE 1.O
            <h1 className="text-lg text-light ease-in">by Hackerspace MSIT</h1>
          </div>
        )}

        {/* Navigation Links for Desktop */}
        <div className="hidden min-[1024px]:flex space-x-10 pr-20 font-oxanium text-gray-300">
          <a href="#home" className="relative group text-2xl hover:transition duration-300">
             Home
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#5dffa2] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#prizes" className="relative group text-2xl hover:transition duration-300">
          Prizes
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#5dffa2] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <Link to="/guides" className="relative group text-2xl hover:transition duration-300">
            Guides
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#5dffa2] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/community" className="relative group text-2xl hover:transition duration-300">
            Community
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#5dffa2] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`min-[1024px]:hidden text-xl focus:outline-none text-white transition-transform duration-300 ${
            isOpen ? "rotate-90 text-white" : "text-white"
          }`}
          onClick={toggleMenu}
        >
          {isOpen ? <IoClose /> : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`min-[1024px]:hidden min-h-[14rem] min-w-screen bg-[#004734] text-white mt-[2rem] space-y-2 py-8 px-5 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <Link to="/about" className="relative block px-6 font-oxanium text-xl hover:transition duration-300 group">
          &gt; About
          <span className="absolute left-[25px] bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-[5rem]"></span>
        </Link>
        <Link to="/organizers" className="relative block px-6 font-oxanium text-xl hover:transition duration-300 group">
          &gt; Organizers
          <span className="absolute left-[25px] bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-[7.5rem]"></span>
        </Link>
        <a href="#prizes" className="relative block px-6 font-oxanium text-xl hover:transition duration-300 group">
          &gt; Prizes
          <span className="absolute left-[25px] bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-[4.8rem]"></span>
        </a>
        <Link to="/guides" className="relative block px-6 font-oxanium text-xl hover:transition duration-300 group">
          &gt; Guides
          <span className="absolute left-[25px] bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-[5rem]"></span>
        </Link>
        <Link to="/community" className="relative block px-6 font-oxanium text-xl hover:transition duration-300 group">
          &gt; Community
          <span className="absolute left-[25px] bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-[7.8rem]"></span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
