import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services", icon: "" },
  { name: "Contact", href: "/contact" },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className="fixed top-0 w-full border-b border-[#09d5fe] text-2xl text-[#Edecd7]"
        style={{ fontFamily: "var(--font-superwater)" }}
      >
        {/* Desktop  */}
        <div className="hidden items-center justify-center mx-auto space-x-8 md:hidden lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-3 py-2 hover:text-[#09d5fe] transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>
        {/* Mobile */}
        <button
          className=" absolute top-4 right-4 focus:outline-none lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
          aria-expanded={isMenuOpen}
        >
          <div>
            {isMenuOpen ? (
              <img
                src="src/assets/waterdrop.svg"
                alt="Close Menu"
                className="w-8 h-8 cursor-pointer"
              />
            ) : (
              <img
                src="src/assets/tap.svg"
                alt="Open Menu"
                className="w-8 h-8 cursor-pointer"
              />
            )}
          </div>
        </button>
      </nav>
      {/* Mobile Overlay */}
      {isMenuOpen && (
        <div
          initial={{ opacity: 0, }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 5 }}
          className="md:hidden fixed inset-0 bg-black z-40"
          style={{ top: "73px" }}
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      {/* Mobile Menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isMenuOpen ? 0 : "100%" }}
        transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
        className="fixed top-[73px] h-full w-screen bg-black border-l border-[#09d5fe] space-y-8 z-50"
      >
        <div className="flex flex-col h-full space-y-12 px-8">
          {navLinks.map((link) => (
            <motion.div
              key={link.name}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: isMenuOpen ? 1 : 0 }}
              transition={{ delay: 0.1 * navLinks.indexOf(link) }}
            >
              <Link
              onClick={handleClick}
              style={{ fontFamily: "var(--font-superwater)" }}
              className="text-5xl  text-[#EDECD7] hover:text-[#09d5fe] transition-colors duration-300">
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
