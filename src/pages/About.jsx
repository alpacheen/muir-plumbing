import React from "react";
import FullSvg from "../components/FullSvg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="h-screen w-full bg-[#231f20] text-white pt-16 mx-auto">
      <h1
        className="text-8xl text-center  z-50"
        style={{ fontFamily: "var(--font-superwater)" }}
      ></h1>
      <p className="text-[#edece7] text-lg font-mono  m-6 text-center md:text-2xl p-2 ">
        Muir Plumbing is a family-owned and operated business with over 5 years
        of experience in the plumbing industry. We pride ourselves on delivering
        high-quality services to both residential and commercial clients. Our
        team of licensed plumbers is dedicated to providing reliable, efficient,
        and affordable solutions for all your plumbing needs. Whether it's a
        simple repair or a complex installation, we are committed to ensuring
        customer satisfaction with every job we undertake.
      </p>
  
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{ top: "50%", left: "50%", transform: "translate(-50%, 25%)" }}
        className="absolute w-full h-screen flex items-center justify-center pointer-events-none z-10"
      >
        <FullSvg
          fillColor="gray"
          strokeColor="gray"
          showAnimation={false}
          showButtons={false}
        />
      </motion.div>
    </section>
  );
};

export default About;
