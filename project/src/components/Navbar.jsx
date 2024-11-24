import React , { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showLink, setShowLink] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLink(false);
    }, 3000); 

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);
  return (
    <nav className="bg-[#004825] text-black m-15 py-12 px-8 shadow-custom-shadow">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        {/* <Link to="/" className="text-4xl text-gray-300 font-oxanium font-semibold pl-15 animate-blink">
          DevJam 1.O
        </Link> */}
        <>
      {showLink ? (
        <Link to="/" className="text-4xl text-gray-300 font-oxanium font-semibold pl-15 animate-blink">
          DevJam 1.O
        </Link>
      ) : (
        <div className="text-4xl text-gray-300 font-oxanium font-semibold pl-15">
          DevJam 1.O
        </div>
      )}
    </>
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-10 pr-20 font-oxanium text-gray-300">
          <Link to="/" className="relative group  text-2xl hover:transition duration-300">
            Home
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#5dffa2] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/prizes" className="relative group text-2xl hover:transition duration-300">
            Prizes
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#5dffa2] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/guides" className="relative group text-2xl hover:transition duration-300">
            Guides
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#5dffa2] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/community" className="relative group  text-2xl hover:transition duration-300">
            Community
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#5dffa2] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-xl focus:outline-none"
          onClick={() => {
            const menu = document.getElementById("mobile-menu");
            menu.classList.toggle("hidden");
          }}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className="md:hidden bg-[#5dffa2] text-black space-y-2 py-4 hidden"
      >
        <Link to="/" className="block px-6 hover:text-black">
          Home
        </Link>
        <Link to="/projects" className="block px-6 hover:text-black">
          Projects
        </Link>
        <Link to="/guides" className="block px-6 hover:text-black">
          Guides
        </Link>
        <Link to="/community" className="block px-6 hover:text-black">
          Community
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
