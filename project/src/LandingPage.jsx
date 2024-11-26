import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import About from "./components/About";
import Prizes from "./components/Prizes"
import Navbar from "./components/Navbar";
import { FaGithub } from "react-icons/fa";
import Organizers from "./components/Organizers";
const LandingPage = () => {
  //const [rerender, setRerender] = useState(false);

  // useEffect(() => {
  //   const queryString = window.location.search;
  //   const urlParams = new URLSearchParams(queryString);
  //   const codeParam = urlParams.get("code");
  //   console.log(codeParam);

  //   if (codeParam && localStorage.getItem("accessToken") == null) {
  //     const getAccessToken = async () => {
  //       try {
  //         const response = await fetch(
  //           "https://localhost:4000/getAccessToken?code=" + codeParam,
  //           {
  //             method: "GET",
  //           }
  //         );
  //         const data = await response.json();
  //         console.log(data);
  //         if (data.access_token) {
  //           localStorage.setItem("accessToken", data.access_token);
  //           setRerender((prev) => !prev);
  //         }
  //       } catch (error) {
  //         console.error("Error fetching access token:", error);
  //       }
  //     };
  //     getAccessToken();
  //   }
  // }, []);

  // const CLIENT_ID = "Ov23liUEauW3cy5AfWej";

  const handleLogin = () => {
    window.location.href = 'https://github.com/login/oauth/authorize?client_id=Ov23liJXs3PPaCWpwZsh&scope=user'
}

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-[#004825] flex items-center justify-center px-6 relative top-[5rem]">
        <div className="text-center text-2xl font-bold text-[#004825] p-10">
          <h1 className="text-8xl font-oxanium font-bold text-gray-300 mb-10">
          <span className="text-8xl font-bold text-red-500 animate-ping">
              !
            </span>
            <span className="absolute top-0 left-0 rounded-full animate-ping bg-red-500"></span>
            Registration is Live
          </h1>
          <p className="text-slate-400 text-lg mb-8 font-normal">
          Are you ready to unleash your creativity and coding skills? <br />Join us for
          an exhilarating open-source project competition where developers, designers, and 
          tech enthusiasts come together to innovate and collaborate! <br />
          🌟Sign Up Now!🌟
          </p>
          <button
            onClick={handleLogin}
            className="bg-[#008217] text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-[#00a05a] hover:text-black transition duration-300"
          >
            <FaGithub className="inline-block mr-2 relative bottom-1 left-2" size={20} />{" "}
            Authorize
          </button>
        </div>
      </div>
      <About />
      {/* <Organizers /> */}

      <div id="prizes">
      <Prizes />
    </div>
      <Footer />
    </>
  );
};

export default LandingPage;
