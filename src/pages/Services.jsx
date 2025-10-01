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
      containerClassName="section-padding"
      titleClassName="page-title-responsive"
      svgProps={{
        fillColor: "lightblue",
        strokeColor: "lightblue",
        opacity: 0.2,
      }}
    >
      <div className="mx-auto flex flex-col justify-center items-center px-4">
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
              role="button"
              tabIndex={0}
              aria-expanded={onClickIndex === index}
              aria-controls={`service-content-${service.id}`}
              onKeyDown={(e) => {
                if(e.key === 'Enter' || e.key === ' '){
                  e.preventDefault();
                  setOnClickIndex(onClickIndex === index ? null : index)
                }
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* <span className="mr-2 text-2xl">{service.icon}</span> */}
              {service.title}
            </motion.h2>

            <motion.div
            id={`service-content-${service.id}`}
            role="region"
            aria-labelledby={`service-title-${service.id}`}
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
                    <MdPlumbing className="text-primary mr-2 flex-shrink-0 text-lg md:text-xl lg:text-2xl" />
                    {item}
                  </motion.li>
                ))}
              </ul>

              {service.description && (
                <p className="text-primary bg-winter-sky border-2 sm:border-3 lg:border-4 border-primary rounded-2xl font-carter-one mt-4 text-sm sm:text-base md:text-2xl lg:text-2xl mx-auto p-2 sm:p-3 lg:p-4">
                  {service.description}
                </p>
              )}
            </motion.div>

            <motion.div
              className="flex justify-center mt-2 transition-opacity duration-300"
              animate={{ opacity: onClickIndex === index ? 0 : 0.5 }}
            >
              <img
                src="images/waterdrop.svg"
                alt="expand service details"
                className="w-6 h-6 brightness-0"
              />
              <svg 
                className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-creme-fraiche"
                fill="currentColor" 
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </motion.div>
          </motion.li>
        ))}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-body-responsive mb-6">
            Need help with any of these services?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0712345678" className="btn-primary">
              Call (07) 1234-5678
            </a>
            <a href="/contact" className="btn-secondary">
              Get Free Quote
            </a>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Services;
