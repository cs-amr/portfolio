import React from "react";

export default function Nav({ menuOpen, setMenuOpen }) {
  return (
    <div
      className={`absolute flex md:hidden bg-gray-100 w-screen h-screen z-20 -top-2 -left-0 flex-col duration-500 ${
        menuOpen ? "translate-x-0" : "-translate-x-[100vw]"
      }`}
    >
      <div
        className="ml-auto text-3xl my-8 mr-8"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          className="bi bi-x-lg"
          viewBox="0 0 16 16"
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
        </svg>
      </div>
      <nav>
        <ul
          className="font-semibold text-2xl mt-10 "
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          <li className="hover:text- mx-auto w-fit mb-10">
            <a href="#home"></a>home
          </li>
          <li className="hover:text- mx-auto w-fit mb-10">
            <a href="#about"></a>About
          </li>
          <li className="hover:text- mx-auto w-fit mb-10">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text- mx-auto w-fit mb-10">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
