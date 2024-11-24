import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import About from "./components/About";
import Prizes from "./components/Prizes"
import Navbar from "./components/Navbar";
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
      <div className="min-h-screen bg-[#004825] flex items-center justify-center px-6">
        <div className="text-center text-2xl font-bold text-[#004825] p-10">
          <h1 className="text-8xl font-oxanium font-bold text-gray-300 mb-10 leading-tight">
            Registration is On
          </h1>
          <p className="text-slate-400 text-lg mb-8 font-normal">
            Join us in making the world a better place through code! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Hic ipsa animi fugit
            asperiores quae, commodi dolor quisquam praesentium, accusamus enim
            excepturi provident! Molestiae voluptates cum minima, ex, beatae
            dolorem totam necessitatibus ut, commodi nisi ab eum inventore modi
            quas et.
          </p>
          <button
            onClick={handleLogin}
            className="bg-[#008217] text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-[#00a05a] hover:text-black transition duration-300"
          >
            Participate
          </button>
        </div>
      </div>
      <About />

      <Prizes/>
      <Footer />
    </>
  );
};

export default LandingPage;
