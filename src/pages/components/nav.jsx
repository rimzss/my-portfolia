import React from "react";
import Link from "next/link";
import BasicMenu from "./menu";

const Nav = () => {
  return (
    <div id="home" className="flex justify-between w-6/12  p-4 text-white">
      <h1 className="text-4xl">BILGUUN BATTUGS</h1>
      <ul className="hidden gap-5 font-sans font-thin sm:flex">
        <Link className="hover:border-b-2" href="http://localhost:3000/">
          Home
        </Link>
        <Link className="hover:border-b-2" href="../about">
          About
        </Link>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="hover:border-b-2"
          href="https://www.facebook.com/bekub.bilguun/"
        >
          <li>Facebook</li>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="hover:border-b-2"
          href="https://www.instagram.com/rimzss/"
        >
          <li>Instagram</li>
        </a>
      </ul>
      <li className="block sm:hidden">
        <BasicMenu />
      </li>
    </div>
  );
};
export default Nav;
