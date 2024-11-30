import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import About from "./components/About";
import Prizes from "./components/Prizes";
import Navbar from "./components/Navbar";
import { FaGithub } from "react-icons/fa";
import Organizers from "./components/Organizers";
import { Reveal } from "./components/Reveal";

import { FaExclamation } from "react-icons/fa";

const LandingPage = () => {
  const originalText = "❗Registration is Live";
  const randomWords = [
    "📝Sign Up Now",
    "🚀 Join Us Today",
    "✅ Secure Your Spot",
    "🎉 Don't Miss Out",
    "🔔 Act Fast!",
  ];

  const [displayText, setDisplayText] = useState(randomWords[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let interval;

    const updateText = () => {
      if (randomWords.length <= currentIndex) setDisplayText(originalText);
      else {
        setDisplayText(randomWords[currentIndex]);
      }
      setCurrentIndex((prevIndex) => prevIndex + 1); // Loop through the array
    };

    // Update the text every second
    interval = setInterval(updateText, 1000);

    // Cleanup on component unmount
    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, randomWords]);

  const handleLogin = () => {
    window.location.href =
      "https://github.com/login/oauth/authorize?client_id=Ov23liJXs3PPaCWpwZsh&scope=user";
  };

  return (
    <>
      <Navbar />
      <div
        className="min-h-screen bg-[#004825] flex items-center justify-center px-6 relative top-[5rem]"
        id="home"
      >
        <div className="text-center text-2xl font-bold text-[#004825] p-10">
          <h1 className="text-8xl font-oxanium font-bold text-gray-300 mb-10 max-[712px]:leading-[0.5rem]">
            {/* <span className="text-8xl font-poppins font-bold animate-ping">
            {displayText}
          </span> */}
            <Reveal>
              {randomWords.length < currentIndex ? (
                <>
                  <span className="text-8xl font-oxanium font-bold animate-ping max-[712px]:text-[2.75rem]">
                    ❗
                  </span>
                  <span className="text-8xl font-oxanium font-bold max-[712px]:text-6xl max-[712px]:text-[2.75rem]">
                    Registration is Live
                  </span>
                </>
              ) : (
                <span className="text-8xl font-oxanium font-bold max-[712px]:text-6xl max-[712px]:text-[2.75rem]">
                  {displayText}
                </span>
              )}
            </Reveal>
          </h1>
          <p className="text-slate-400 text-lg mb-8 font-normal text-wrap">
            <Reveal>
              Are you ready to unleash your creativity and coding skills? <br />
              Join us for an exhilarating open-source project competition where
              developers, designers, and tech enthusiasts come together to
              innovate and collaborate! <br />
              🌟Sign Up Now!🌟
            </Reveal>
          </p>
          <Reveal>
            <button
              onClick={handleLogin}
              className="bg-[#008217] text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-[#00a05a] hover:text-black transition duration-300"
            >
              <FaGithub
                className="inline-block mr-2 relative bottom-1 left-2"
                size={20}
              />{" "}
              Authorize
            </button>
          </Reveal>
        </div>
      </div>
      <About />
      <div id="prizes">
        <Prizes />
      </div>
      <div id="organizers">
        <Organizers />
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
