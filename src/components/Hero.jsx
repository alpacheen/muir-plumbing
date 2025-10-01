import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import FullSvg from "./FullSvg";
import Loading from "./Loading";
import About from "../pages/About";

const Hero = () => {
  const [loading, setLoading] = useState(false);
  const [hasLoadedBefore, setHasLoadedBefore] = useState(false);

  useEffect(() => {
    const hasSeenLoading = sessionStorage.getItem("hasSeenLoading");

    if (!hasSeenLoading) {
      setLoading(true);
      setHasLoadedBefore(false);

      const timer = setTimeout(() => {
        setLoading(false);
        setHasLoadedBefore(true);
        sessionStorage.setItem("hasSeenLoading", "true");
      }, 5500);

      return () => clearTimeout(timer);
    } else {
      setLoading(false);
      setHasLoadedBefore(true);
    }
  }, []);

  return (
    <main role="main" id="main-content">
      <section
        className="h-screen w-full bg-primary pb-10"
        aria-label="Hero section"
      >
        <div className="min-h-screen flex flex-col items-center justify-center mb-0 ">
          {loading ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.001 }}
              className="scale-50 lg:scale-100 md:scale-100"
            >
              <Loading />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: hasLoadedBefore ? 1 : 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: hasLoadedBefore ? 0 : 0.001 }}
              className="scale-50 lg:scale-100 md:scale-100"
            >
              <FullSvg showButtons={true} showAnimation={false} />
            </motion.div>
          )}
        </div>
        {!loading && <About />}
      </section>
    </main>
  );
};

export default Hero;
