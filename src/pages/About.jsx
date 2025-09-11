import React from "react";
import FullSvg from "../components/FullSvg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="h-screen w-full bg-primary text-primary pt-16 mx-auto"
    aria-label="about-section">
      <div className="flex flex-col mx-auto items-center justify-center text-center  z-50 max-w-3xl">
        <h1
          className="text-8xl  text-creme-fraiche"
          style={{ fontFamily: "var(--font-superwater)" }}
          id="about-heading"
          aria-labelledby="about-heading"
        >About us</h1>
        <motion.p
         className="text-creme-fraiche text-lg font-carter-one m-6  md:text-2xl lg:text-3xl p-2 leading-12">
          Muir Plumbing is a family-owned and operated business with <span className="text-secondary text-2xl md:text-3xl ">
            over 5 years
            of experience
          </span> in the plumbing industry. We pride ourselves on delivering
          <span
          className="text-secondary text-3xl"> high-quality services </span>to both residential and commercial clients. Our
          team of licensed plumbers is dedicated to providing <span className="text-secondary text- bold text-3xl">reliable</span>,<span className="text-secondary text-3xl"> efficient</span>,
          and <span className="text-secondary text-3xl ">affordable</span> solutions for all your plumbing needs. Whether it's a
          simple repair or a complex installation, we are committed to ensuring
          <span className="text-secondary text-3xl"> customer satisfaction with every job </span>we undertake.
        </motion.p>
      </div>
  
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
