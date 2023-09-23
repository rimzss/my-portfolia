import React from "react";
import { BiLogoSteam } from "react-icons/bi";
import { BiLogoDiscordAlt } from "react-icons/bi";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="text-white p-3 flex md:flex-row flex-col w-2/4 justify-between items-center">
      <div className="font-sans">
        <h4>Ulaanbaatar, Mongolia</h4>
        <h4>©2023 Battugs Bilguun</h4>
      </div>
      <div className="flex text-3xl gap-6 p-2">
        <a
          className="view"
          target="_blank"
          rel="noopener noreferrer"
          href="https://steamcommunity.com/id/rimzss"
        >
          <BiLogoSteam />
        </a>
        <BiLogoDiscordAlt />
      </div>
    </footer>
  );
};

export default Footer;
