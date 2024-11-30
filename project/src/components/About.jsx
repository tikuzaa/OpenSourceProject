import React from "react";
import { Reveal } from "./Reveal";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col min-[1126px]:flex-row max-w-[69rem] w-full">
        <div className="flex-col min-[711px]:text-left m-4 pt-[6.5rem] max-[711px]:text-center items-center justify-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-oxanium font-bold text-[#004825] mb-6 max-[711px]:w-full">
            <Reveal>About</Reveal>
          </h2>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-oxanium font-bold text-[#004825] mb-6 relative bottom-[1.5rem] w-[40rem] max-[711px]:w-full">
            <Reveal>Open Source</Reveal>
          </h2>
          <Reveal>
            <p className="text-black text-base sm:text-lg mb-4 w-full font-oxanium">
              <span className="font-bold">🌍 What is Open Source?</span>
              <br />
              Open source refers to software whose source code is made available
              to the public for anyone to view, use, modify, and distribute.
              This collaborative approach fosters a community-driven environment
              where developers and enthusiasts from around the globe contribute
              their skills and ideas to create better software solutions.
            </p>
          </Reveal>
          <Reveal>
            <p className="font-bold text-black text-base sm:text-lg mb-4 w-full font-oxanium">
              🤝 Why Participate in Open Source?
            </p>
            <ul className="text-black text-base sm:text-lg mb-4 w-full font-oxanium text-left">
              <li>
                <span className="text-[#004825] font-semibold">
                  Collaborate:
                </span>{" "}
                Join a passionate community and work together on meaningful
                projects.
              </li>
              <li>
                <span className="text-[#008147] font-semibold">
                  Enhance Your Skills:
                </span>{" "}
                Gain real-world experience and learn new technologies.
              </li>
              <li>
                <span className="text-[#00a05a] font-semibold">
                  Build Your Portfolio:
                </span>{" "}
                Showcase your contributions to stand out in the job market.
              </li>
            </ul>
          </Reveal>
        </div>

        <div className="mx-5"></div>
        <Reveal>
          <div className="flex-col justify-between bg-[#5dffa2] h-full p-5 mt-10 min-[1126px]:mt-40 min-[1126px]:ml-20 rounded-lg flex-grow mb-[6.5rem]">
            {/* Text Section */}
            <div className="text-center text-black mt-5 mb-8">
              <h2 className="text-xl sm:text-2xl font-oxanium font-bold">
                Join Our Community
              </h2>
              <p className="text-base sm:text-lg">
                Connect with like-minded individuals and collaborate on exciting
                projects. <br />
                Join us on Discord to stay updated and be part of our journey!
              </p>
            </div>
            {/* Button Section */}
            <div className="flex justify-center items-center m-5">
              <a href="https://discord.gg/DU9HBZdk3m" target="blank">
                <button className="bg-[#008217] text-white w-full sm:w-48 h-12 font-oxanium font-semibold py-3 px-4 rounded-full hover:bg-[#00a05a] hover:text-black transition duration-300">
                  Join Discord
                </button>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default About;
