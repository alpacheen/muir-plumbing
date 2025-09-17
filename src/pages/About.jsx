import React from "react";
import PageLayout from "../components/Layout/PageLayout";
import { motion } from "framer-motion";

const About = () => {
  return (
    <PageLayout
      title="About us"
      ariaLabel="about-section"
      containerClassName="text-primary"
      svgProps={{
        fillColor: "gray",
        strokeColor: "gray",
        opacity: 0.2,
      }}
      backgroundSvg={false}
    >
      <div className="flex flex-col mx-auto items-center justify-center text-center z-50 max-w-3xl">
        <motion.p className="text-body-responsive m-6 p-2">
          Muir Plumbing is a family-owned and operated business with{" "}
          <span className="text-highlight">over 5 years of experience</span> in
          the plumbing industry. We pride ourselves on delivering{" "}
          <span className="text-highlight">high-quality services</span> to both
          residential and commercial clients. Our team of licensed plumbers is
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
      </div>
    </PageLayout>
  );
};

export default About;
