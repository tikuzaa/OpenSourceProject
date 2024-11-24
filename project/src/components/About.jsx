import React from 'react';
const About=() =>{
    return(
        <div className="min-h-screen bg-gray-200 flex items-center justify-center px-1 ">
        <div className="flex max-w-[69rem]">
          <div className="flex-1 text-left m-4">
            <h2 className="text-8xl font-oxanium font-bold text-[#004825] mb-10">About</h2>
            <h2 className="text-8xl font-oxanium font-bold text-[#004825] mb-10 w-[600px] bottom-[3rem] relative">Open Source</h2>
            <p className="text-gray-700 text-lg mb-4 w-full bottom-[3rem] relative">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Illum perferendis dolores dolorem dicta? Iure voluptatem dolorem 
              rem ullam sunt labore, assumenda impedit porro natus itaque debitis 
              cum repellat fugiat nesciunt consectetur unde sit quo dolores tempora 
              nobis.
            </p>
          </div>
          <div className="mx-5"></div>
          <div className="flex-col justify-between bg-[#5dffa2] h-full p-3 mt-40 ml-20 rounded-lg">
      {/* Text Section */}
      <div className="text-center text-black mt-5 mb-8 ">
        <h2 className="text-2xl font-oxanium font-bold">Join Our Community</h2>
        <p className="text-lg">
          Connect with like-minded individuals and collaborate on exciting projects. <br />
          Join us on Discord to stay updated and be part of our journey!
        </p>
      </div>
         {/* Button Section */}
<div className='flex justify-center items-center m-5'>
      <button className="bg-[#008217] justify-center text-white w-21 h-12 font-oxanium font-semibold py-3 px-4 rounded-full hover:bg-[#00a05a] hover:text-black transition duration-300">
  Join Discord
</button>
</div>
    </div>
        </div>
      </div>
    )
}
export default About;
