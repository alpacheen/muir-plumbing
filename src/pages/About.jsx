import React from "react";
import PageLayout from "../components/Layout/PageLayout";
import { motion } from "framer-motion";

const About = () => {
  return (
    <PageLayout
      title="About us"
      ariaLabel="about-section"
      containerClassName="text-primary section-padding"
      titleClassName="page-title-responsive"
      svgProps={{
        fillColor: "gray",
        strokeColor: "gray",
        opacity: 0.2,
      }}
      backgroundSvg={false}
    >
      <div className="flex flex-col mx-auto items-center justify-center text-center z-50 max-w-4xl px-4">
        <motion.p
        initial={{opacity:0,y:20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.8}}
        viewport={{once:true}}
         className="text-body-responsive m-4 p-4 leading-relaxed">
          Muir Plumbing is a family-owned and operated business with{" "}
          <span className="text-highlight">over 5 years of experience</span> in
          the plumbing industry. We pride ourselves on delivering{" "}
          <span className="text-highlight">high-quality services</span> to both
          residential and commercial clients.
          </motion.p>
          <motion.p
          initial={{opacity:0, y:20}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.8, delay:0.2}}
          viewport={{once:true}}
          className="text-body-responsive m-4 p-4 leading-relaxed"
          >
          Our team of licensed plumbers is
          dedicated to providing{" "}
          <span className="text-highlight">reliable</span>,{" "}
          <span className="text-highlight">efficient</span>, and{" "}
          <span className="text-highlight">affordable</span> solutions for all
          your plumbing needs. Whether it's a simple repair or a complex
          installation, we are committed to ensuring{" "}
          <span className="text-highlight">
            customer satisfaction with every job
          </span>{" "}
          we undertake.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 mt-8"
        >
          <a href="/services" className="btn-primary">
            View Our Services
          </a>
          <a href="/contact" className="btn-secondary">
            Get Free Quote
          </a>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default About;
