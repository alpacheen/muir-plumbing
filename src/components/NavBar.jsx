import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "Services", to: "/services" },
  { name: "Contact", to: "/contact" },
];

const mobileVariants = {
  open: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.45,
      staggerDirection: -2,
    },
  },
};

const itemVariants = {
  open: {
    y: -10,
    opacity: 1,
    transition: {
      duration: 1.25,
      delay: 1,
      ease: easeInOut,
    },
  },
  closed: {
    y: 0,
    opacity: 0,
    transition: {
      duration: 1,
      ease: [0.65, 0, 0.35, 1],
    },
  },
};

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const hasAnimated = sessionStorage.getItem("navAnimated") === "true";

  useEffect(() => {
    if (!sessionStorage.getItem("navAnimated")) {
      sessionStorage.setItem("navAnimated", "true");
    }
  }, []);

  const handleClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={hasAnimated ? false : { y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="fixed top-0 w-full border-b border-neon-blue text-2xl text-creme-fraiche bg-primary backdrop-blur-sm z-30"
        style={{ fontFamily: "var(--font-superwater)" }}
        aria-label="Main Navigation"
        id="nav-bar"
      >
        {/* Desktop  */}
        <div className="hidden items-center justify-center mx-auto space-x-8 md:flex lg:flex py-4 ">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className="px-3 py-2 hover:text-[#48dafe] transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>
        {/* {Mobile} */}
        <button
          className="absolute top-4 right-4 focus:outline-none md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
          aria-expanded={isMenuOpen}
        >
          <div>
            {isMenuOpen ? (
              <img
                src="/images/waterdrop.svg"
                alt="Close Menu"
                className="w-8 h-8 cursor-pointer"
              />
            ) : (
              <img
                src="/images/tap.svg"
                alt="Open Menu"
                className="w-8 h-8 cursor-pointer"
              />
            )}
          </div>
        </button>
      </motion.nav>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="menu"
            initial={{ y: "-100%" }}
            animate={{ y: 0, opacity: 1, delay: .5 }}
            exit={{ y: "-100%", opacity: 1 }}
            transition={{ type: "tween", duration: 1.5, ease: "easeInOut" }}
            className="wave fixed top-0 h-screen w-full border-l border-neon-blue z-50 bg-primary md:hidden"
            
          >
            <div className="flex justify-end p-4">
              <button onClick={() => setIsMenuOpen(false)}>
                <img
                  src="/images/waterdrop.svg"
                  alt="Close Menu"
                  className="w-8 h-8 cursor-pointer "
                />
              </button>
            </div>
            <motion.div
              className="flex flex-col items-center h-full space-y-12 px-8 pt-12"
              variants={mobileVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={itemVariants}>
                  <Link
                    to={link.to}
                    onClick={handleClick}
                    style={{ fontFamily: "var(--font-superwater)" }}
                    className=" text-5xl text-creme-fraiche hover:text-neon-blue transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default NavBar;
