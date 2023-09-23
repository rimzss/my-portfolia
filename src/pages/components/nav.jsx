import React from "react";
import Link from "next/link";
import BasicMenu from "./menu";

const Nav = () => {
  return (
    <div
      id="home"
      className="flex w-full justify-between md:w-6/12  p-4 text-white"
    >
      <h1 className="text-4xl">BILGUUN BATTUGS</h1>
      <ul className="hidden gap-5 font-sans font-thin md:flex">
        <Link className="view" href="https://my-portfolia-one.vercel.app/">
          Home
        </Link>
        <Link className="view" href="../about">
          About
        </Link>
        <Link className="view" href="../contact">
          Contact
        </Link>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="view"
          href="https://www.facebook.com/bekub.bilguun/"
        >
          <li>Facebook</li>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="view"
          href="https://www.instagram.com/rimzss/"
        >
          <li>Instagram</li>
        </a>
      </ul>
      <li className="block md:hidden">
        <BasicMenu />
      </li>
    </div>
  );
};
export default Nav;
