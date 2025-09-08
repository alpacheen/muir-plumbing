import MuirSVG from "./Muirsvg";
import TapSVG from "./TapSvg";
import WaterdropSVG from "./WaterdropSvg";
import React from "react";
import Hero from "./Hero";



const Loading = () => {
  return (
    <div className=" min-h-screen w-full bg-black">
      <div className=" flex flex-col min-h-screen w-full items-center justify-center ">
        <TapSVG />
        <WaterdropSVG />
        <MuirSVG />
        <Hero/>
      </div>
    </div>
  );
};

export default Loading;
