import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "Services", to: "/services" },
  { name: "Contact", to: "/contact" },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 3.7 }}
        className="fixed top-0 w-full border-b border-[#09d5fe] text-2xl text-[#Edecd7] bg-primary backdrop-blur-sm z-30"
        style={{ fontFamily: "var(--font-superwater)" }}
        aria-label="Main Navigation"
        id="nav-bar"
      >
        {/* Desktop  */}
        <div className="hidden items-center justify-center mx-auto space-x-8 md:hidden lg:flex py-4 ">
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
          className="absolute top-4 right-4 focus:outline-none lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
          aria-expanded={isMenuOpen}
        >
          <div>
            {isMenuOpen ? (
              <img
                src="/src/assets/waterdrop.svg"
                alt="Close Menu"
                className="w-8 h-8 cursor-pointer"
              />
            ) : (
              <img
                src="/src/assets/tap.svg"
                alt="Open Menu"
                className="w-8 h-8 cursor-pointer"
              />
            )}
          </div>
        </button>
      </motion.nav>
      {/* Mobile Overlay */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="md:hidden fixed inset-0 bg-primary z-40 h-screen"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      {/* Mobile Menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isMenuOpen ? 0 : "100%", opacity: isMenuOpen ? 0.85 : 0 }}
        transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 h-screen w-screen border-l border-[#09d5fe] space-y-4 z-50 bg-primary backdrop-blur-md lg:hidden"
      >
        <div className="flex justify-end p-4">
          <button>
            <img
              src="/src/assets/waterdrop.svg"
              alt="Close Menu"
              className="w-8 h-8 cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            />
          </button>
        </div>
        <div className="flex flex-col h-full space-y-12 px-8 pt-12">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: isMenuOpen ? 1 : 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Link
                to={link.to}
                onClick={handleClick}
                style={{ fontFamily: "var(--font-superwater)" }}
                className="text-5xl text-[#EDECD7] hover:text-[#48dafe] transition-colors duration-300"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default NavBar;
