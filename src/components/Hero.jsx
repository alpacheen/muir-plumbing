import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MuirSVG from "./Muirsvg";
import TapSVG from "./TapSvg";
import WaterdropSVG from "./WaterdropSvg";

const Hero = () => {
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited) {
      setShowLoading(true);
    }

    return () => {
      localStorage.setItem("hasVisited", "true");
      setShowLoading(false);
    };
  }, []);

  return (
    <section className="h-screen w-full bg-black pb-10">
      <div className=" min-h-screen flex flex-col items-center justify-center mb-6">
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
            Professional Plumbing Services You Can Trust
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 4 }}
            className="space-x-4"
          >
            <button className="bg-[#00a5fe] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#edece7] transition-colors">
              Get Quote
            </button>
            <button className="border border-[#09D5FE] text-[#09D5FE] px-8 py-4 rounded-lg font-semibold hover:bg-[#09D5FE] hover:text-black transition-colors">
              Emergency Service
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
