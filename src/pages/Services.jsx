import React, { useState } from "react";
import FullSvg from "../components/FullSvg";
import { motion } from "framer-motion";
import { services } from "../data/services.js";
import { MdPlumbing } from "react-icons/md";

const Services = () => {
  // const [hoveredIndex, setHoveredIndex] = useState(null);
  const [onClickIndex, setOnClickIndex] = useState(null);

  return (
    <section className="min-h-screen w-full bg-[#231f20] text-[#edecd7] pt-32 mx-auto">
      <h1
        className="text-8xl text-center"
        style={{ fontFamily: "var(--font-superwater)" }}
      >
      Services
      </h1>
      <div className="mx-auto max-w-5xl">
        {services.map((service, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-black bg-opacity-50 rounded-lg p-6 m-6
            list-none cursor-pointer text-[#edecd7] border border-[#00a6e2] hover:border-[#09d5fe] transition-colors duration-300"
          >
            <motion.h2
              className="text-4xl   cursor-pointer transition-colors duration-300 hover:text-[#00a6e2]"
              style={{ fontFamily: "var(--font-superwater)" }}
              // onHoverStart={() => setHoveredIndex(index)}
              // onHoverEnd={() => setHoveredIndex(null)}
              onClick={() => setOnClickIndex(onClickIndex === index ? null : index)}
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
              <ul className="text-[#edece7] text-lg font-mono md:text-xl">
                {service.list.map((item,index) => (
                  <motion.li key={index} 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center text-2xl ">
                    <MdPlumbing className="text-[#00a6e2] mr-2 flex-shrink-0 text-2xl" />
                    {item}
                  </motion.li>
                ))}
              </ul>
              {service.description && (
                <p className="text-[#edece7] text-lg font-mono mt-4 md:text-xl">
                  {service.description}
                </p>
              )}
            </motion.div>
            <motion.div
              className="flex justify-center mt-2 transition-opacity duration-300"
              animate={{ opacity: onClickIndex === index ? 0 : 0.5 }}
            >
              <div className="w-8 h-0.5 bg-blue-200 rounded"></div>
            </motion.div>
          </motion.li>
        ))}
      </div>
      <div
        style={{ opacity: 0.2 }}
        className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none"
      >
        <FullSvg
          fillColor="gray"
          strokeColor="gray"
          showAnimation={false}
          showButtons={false}
        />
      </div>
    </section>
  );
};

export default Services;
