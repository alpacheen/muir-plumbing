import React from "react";
import MuirSVG from "./Muirsvg";
import TapSVG from "./TapSvg";
import WaterdropSVG from "./WaterdropSvg";
import { motion } from "framer-motion";



const Loading = () => {
  return (
    <div className=" min-h-screen w-full bg-[#231f20]">
      <div className=" flex flex-col min-h-screen w-full items-center justify-center ">
       <TapSVG />
        <WaterdropSVG />
        <MuirSVG />
        <div className="max-w-4xl mx-auto text-center px-6 ">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 3.7 }}
            className="text-xl md:text-3xl text-[#edece7] mb-4 "
          >
            Professional Plumbing Services
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 4 }}
            className="space-x-4"
          >
            <button className="bg-[#00a5fe] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#edece7] transition-colors ">
              Get Quote
            </button>
            <button className="border border-[#09D5FE] text-[#09D5FE] px-8 py-4 rounded-lg font-semibold hover:bg-[#09D5FE] hover:text-black transition-colors ">
              Emergency Service
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
