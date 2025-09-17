import React, { useState } from "react";
import PageLayout from "../components/Layout/PageLayout";
import { motion } from "framer-motion";
import { services } from "../data/services.js";
import { MdPlumbing } from "react-icons/md";

const Services = () => {
  const [onClickIndex, setOnClickIndex] = useState(null);

  return (
    <PageLayout
      title="Services"
      ariaLabel="services-section"
      svgProps={{
        fillColor: "lightblue",
        strokeColor: "lightblue",
        opacity: 0.2,
      }}
    >
      <div className="mx-auto flex flex-col justify-center items-center">
        {services.map((service, index) => (
          <motion.li
            key={service.id}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="service-card "
          >
            <motion.h2
              className="service-title"
              style={{ fontFamily: "var(--font-superwater)" }}
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
              className="overflow-hidden"
            >
              <ul className="service-content">
                {service.list.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="service-item "
                  >
                    <MdPlumbing className="text-primary mr-2 flex-shrink-0 text-2xl" />
                    {item}
                  </motion.li>
                ))}
              </ul>

              {service.description && (
                <p className="text-primary bg-winter-sky border-4 border-primary rounded-2xl font-carter-one mt-4 md:text-2xl mx-auto p-2">
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
                alt="expand service details"
                className="w-6 h-6 brightness-0"
              />
            </motion.div>
          </motion.li>
        ))}
      </div>
    </PageLayout>
  );
};

export default Services;
