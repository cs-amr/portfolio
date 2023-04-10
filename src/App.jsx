import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Nav from "./components/Nav";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="h-screen font-poppins scroll-smooth">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main className="mt-20 ">
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
