import React, { useState } from "react";
import { images } from "../../data/images";
import Slider from "./slider";
import { motion, useScroll } from "framer-motion";

const Page2 = () => {
  const style = "xl:w-6/12 lg:w-3/4";
  const { scrollYProgress } = useScroll({
    offset: ["70vh", "100vh"],
  });
  return (
    <section>
      <div id="page2" className="panel bg-white w-screen h-screen p-6 flex ">
        <motion.div
          className="flex flex-col items-center justify-center"
          style={{ opacity: scrollYProgress }}
        >
          <div className="xl:w-6/12 lg:w-3/4">
            <div className="font-mono">
              <h1 className="font-bold">01</h1>
              <h1 className="font-medium 2xl:text-5xl text-2xl text-blue-200">
                ALLOY HEALTH
                <span className="font-sans font-thin text-black">
                  {" "}
                  - Empowering physicians to provide the best care.
                </span>
              </h1>
            </div>
            <div className="2xl:mt-16 mt-5">
              <Slider />
            </div>
            <div className="2xl:mt-20 mt-5">
              <h1 className="font-mono font-bold">
                Project:
                <span className="font-sans font-thin">Alloy Health</span>
              </h1>
              <h1 className="font-mono font-bold">
                Role:<span className="font-sans font-thin">Designer</span>
              </h1>
              <h1 className="font-mono font-bold">
                Website:
                <span className="font-sans font-thin">Alloy.health</span>
              </h1>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Page2;
