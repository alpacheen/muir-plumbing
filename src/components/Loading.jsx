import React from "react";
import MuirSVG from "./Muirsvg";
import TapSVG from "./TapSvg";
import WaterdropSVG from "./WaterdropSvg";
import { motion } from "framer-motion";
import RollingBanner from "./UI/RollingBanner";



const Loading = () => {
  return (
    <div className=" min-h-screen w-full bg-primary">
      <div className=" flex flex-col min-h-screen w-full items-center justify-center ">
       <TapSVG />
        <WaterdropSVG />
        <MuirSVG />
        <div className="max-w-4xl mx-auto text-center px-6 ">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 3 }}
            className="text-xl md:text-3xl text-creme-fraiche mb-4 font-carter-one"
          >
            Professional Plumbing Services
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 3.1 }}
            className="space-x-4 text-lg font-carter-one"
          >
            <button className="btn-primary">
              Get Quote
            </button>
            <button className="btn-secondary">
              Emergency Service
            </button>
          </motion.div>
        </div>
      
      </div>
    </div>
  );
};

export default Loading;
