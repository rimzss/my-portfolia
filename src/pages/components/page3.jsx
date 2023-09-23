import React, { useState } from "react";
import { images } from "../../data/images";
import Slider from "./slider";
import { motion } from "framer-motion";

const Page3 = () => {
  let [moveClass, setMoveClass] = useState("");
  const moveRight = () => {
    setMoveClass("-translate-x-full");
    console.log("working", moveClass);
    switch (moveClass) {
      case "-translate-x-full": {
        break;
      }
    }
  };
  return (
    <div id="page3" className="text-white bg-purple w-screen h-screen p-6 flex">
      <motion.div
        className="flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 500 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div className="xl:w-6/12 lg:w-3/4">
          <div className="font-mono">
            <h1 className="font-bold">02</h1>
            <h1 className="font-medium 2xl:text-5xl text-2xl text-pink-500">
              GENSUS
              <span className="font-sans font-thin text-white">
                - World class UX for cutting edge data and business teams.
              </span>
            </h1>
          </div>
          <div className="2xl:mt-16 mt-5">
            <Slider />
          </div>
          <div className="2xl:mt-20 mt-5">
            <h1 className="font-mono font-bold">
              Project:<span className="font-sans font-thin">Gensus</span>
            </h1>
            <h1 className="font-mono font-bold">
              Role:<span className="font-sans font-thin">Developer</span>
            </h1>
            <h1 className="font-mono font-bold">
              Website:<span className="font-sans font-thin">Gensus.com</span>
            </h1>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Page3;
