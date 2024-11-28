import React from 'react';

const Footer = () => {
  return (
    <footer className="min-h-96 bg-[#062800] text-white flex flex-col justify-between p-8 pt-10 max-[595px]:flex-col max-[595px]:text-center">
        <div className='flex flex-row space-x-10 justify-center mt-10 max-[595px]:space-x-0 max-[595px]:flex-col'>
        <div className='w-[35rem] max-[595px]:w-full'>
            <h1 className="text-2xl font-oxanium font-bold mb-4 cursor-default ">DE-SPACE 1.O</h1>
            <h2 className='text-xl mb-6 font-oxanium'>Code, Collaborate, Celebrate!</h2>
            <p className='w-2/3 max-[595px]:w-full'>It's not just about the competition; it's about building a community and celebrating the journey of innovation.</p>
        </div>

      {/* About Section */}
      <div className="mb-8 font-oxanium cursor-default max-[595px]:mt-10 max-[595px]:flex-row max-[595px]:space-x-8 flex flex-col max-[595px]:justify-center">
        <h2 className="text-xl mb-4 relative group text-xl hover:transition duration-300">About<span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#5dffa2] transition-all duration-300 group-hover:w-[60px]"></span></h2>
        <h2 className="text-xl mb-4 relative group text-xl hover:transition duration-300">Help<span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#5dffa2] transition-all duration-300 group-hover:w-[50px]"></span></h2>
        <h2 className="text-xl mb-4 relative group text-xl hover:transition duration-300">Contact<span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#5dffa2] transition-all duration-300 group-hover:w-[75px]"></span></h2>
        <h2 className="text-xl mb-4 relative group text-xl hover:transition duration-300">Timeline<span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#5dffa2] transition-all duration-300 group-hover:w-[80px]"></span></h2>
      </div>
    
      {/* Socials Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-oxanium font-bold mb-4 cursor-default">FOLLOW US</h2>
        <ul className="flex-col font-oxanium">
          <li>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="relative group text-xl hover:transition duration-300">
              Twitter (X)
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#5dffa2] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="relative group text-xl hover:transition duration-300">
              Facebook
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#5dffa2] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"  className="relative group text-xl hover:transition duration-300">
              Instagram
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#5dffa2] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="relative group text-xl hover:transition duration-300">
              GitHub
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#5dffa2] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        </ul>
      </div>
      </div>
      {/* Copyright Section */}
      <div className="text-center text-slate-600 font-oxanium">
        <p>&copy; Hackerspace 2024. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;