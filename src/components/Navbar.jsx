import React from "react";
import Nav from "./Nav";

export default function ({ menuOpen, setMenuOpen }) {
  return (
    <header className="px-10 py-6 bg-white fixed top-0 flex justify-between border w-screen font-poppins shadow z-10">
      <h1 className=" text-primary font-semibold text-2xl">
        <a href="#home ">Amr.dev</a>
      </h1>
      <nav>
        <ul className="hidden md:flex gap-4 text-xl font-semibold">
          <li className="hover:text-sec">
            {" "}
            <a href="#home ">Home</a>
          </li>
          <li className="hover:text-sec">
            {" "}
            <a href="#about">About</a>
          </li>
          <li className="hover:text-sec">
            {" "}
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text-sec">
            {" "}
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div
        className="md:hidden "
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-7 cursor-pointer"
        >
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
      </div>
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </header>
  );
}
