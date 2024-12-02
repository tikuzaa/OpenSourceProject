import { useState, useEffect } from "react";
import { getUserData, getPullRequests } from "./callback/callback";
import UserInformation from "./UserInformation";
import About from "./components/About";
import LandingPage from "./LandingPage";

function Home() {
  return (
    <>
      <LandingPage />
    </>
  );
}

export default Home;
