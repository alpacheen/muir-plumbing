import React from "react";
import NavBar from "./components/NavBar";
import Loading from "./components/Loading";
import Hero from "./components/Hero";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
