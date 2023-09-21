import React from "react";
import { BiLogoSteam } from "react-icons/bi";
import { BiLogoDiscordAlt } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="text-white p-3 flex w-2/4 justify-between">
      <div className="font-sans">
        <h4>Ulaanbaatar, Mongolia</h4>
        <h4>©2023 Battugs Bilguun</h4>
      </div>
      <div className="flex text-3xl gap-6 p-2">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="hover:border-b-2"
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
