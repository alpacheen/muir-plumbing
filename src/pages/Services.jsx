import React, { useState } from "react";
import FullSvg from "../components/FullSvg";
import { motion } from "framer-motion";
import { services } from "../data/services.js";
import { MdPlumbing } from "react-icons/md";
import TapSVG from "../components/TapSvg.jsx";


const Services = () => {
  // const [hoveredIndex, setHoveredIndex] = useState(null);
  const [onClickIndex, setOnClickIndex] = useState(null);

  return (
    <section
      className="min-h-screen w-full bg-primary text-creme-fraiche pt-32 mx-auto"
      aria-label="services-section"
    >
      <h1
        className="text-8xl text-center"
        style={{ fontFamily: "var(--font-superwater)" }}
        id="services-heading"
        aria-labelledby="services-heading"
      >
        Services
      </h1>
      <div className="mx-auto flex flex-col justify-center items-center ">
        {services.map((service, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-secondary/75  bg-opacity-50 rounded-lg p-4 md:p-6 lg:p-6 border-0 w-3/4 md:w-3/4 lg:w-1/2
            text-xl md:text-2xl lg:text-2xl my-4
            cursor-pointer text-creme-fraiche transition-colors duration-300 text-center"
          >
            <motion.h2
              className="md:text-4xl lg:text-4xl text-2xl   cursor-pointer transition-colors duration-300 hover:text-secondary bg-winter-sky/75 p-2 text-shadow-lg text-shadow-primary border-4 border-primary block rounded-xl"
              style={{ fontFamily: "var(--font-superwater)" }}
              // onHoverStart={() => setHoveredIndex(index)}
              // onHoverEnd={() => setHoveredIndex(null)}
              onClick={() =>
                setOnClickIndex(onClickIndex === index ? null : index)
              }
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {service.title}
            </motion.h2>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={
                onClickIndex === index
                  ? { height: "auto", opacity: 1 }
                  : { height: 0, opacity: 0 }
              }
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden "
            >
              <ul className="text-primary text-lg font-carter-one md:text-xl bg-winter-sky rounded-xl border-4 border-primary ">
                {service.list.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center text-xl md:text-2xl lg:text-2xl p-1"
                  >
                    <MdPlumbing className="text-primary mr-2 flex-shrink-0 text-2xl" />
                    {item}
                  </motion.li>
                ))}
              </ul>
              {service.description && (
                <p className="text-primary bg-winter-sky border-4 border-primary rounded-2xl  font-carter-one mt-4 md:text-2xl text-nowrapwrap mx-auto p-2">
                  {service.description}
                </p>
              )}
            </motion.div>
            <motion.div
              className="flex justify-center mt-2 transition-opacity duration-300"
              animate={{ opacity: onClickIndex === index ? 0 : 0.5 }}
            >
              <img 
  src="src/assets/waterdrop.svg"
  alt="tap icon"
  className="w-6 h-6 brightness-0" black
/>
            </motion.div>
          </motion.li>
        ))}
      </div>
      <div
        style={{ opacity: 0.2 }}
        className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none"
      >
        <FullSvg
          fillColor="lightblue"
          strokeColor="lightblue"
          showAnimation={false}
          showButtons={false}
        />
      </div>
    </section>
  );
};

export default Services;
