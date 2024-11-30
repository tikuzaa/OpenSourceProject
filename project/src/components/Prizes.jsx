import React from "react";
import { Reveal } from "./Reveal";
const Prizes = () => {
  return (
    <div className="min-h-screen bg-[#004734] flex items-center justify-center px-4">
      <div className="flex max-w-4xl">
        <div className="flex-1 text-left m-4">
          <h2 className="text-6xl sm:text-6xl md:text-6xl lg:text-8xl font-oxanium font-bold text-white mb-10">
            <Reveal>Prizes</Reveal>
          </h2>
          <p className="text-slate-400 text-4xl sm:text-4xl md:text-6xl lg:text-8xl mb-4 w-full">
            <Reveal>Coming Soon !!</Reveal>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
