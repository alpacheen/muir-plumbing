import MuirSVG from "./Muirsvg";
import TapSVG from "./TapSvg";
import WaterdropSVG from "./WaterdropSvg";
import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className=" min-h-screen w-full bg-black absolute inset-0 z-50">
      <div className=" flex flex-col min-h-screen w-full items-center justify-center">
        <TapSVG />
        <WaterdropSVG />
        <MuirSVG />
      </div>
    </div>
  );
};

export default Loading;
