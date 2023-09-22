import React from "react";
import { motion } from "framer-motion";

const Page1 = ({ reveal }) => {
  console.log(reveal);
  return (
    <div className="panel text-white w-screen md:h-screen border-t-3 border-neutral-500  flex flex-col items-center">
      <div className="md:w-6/12 w-full h-screen pt-80 md:pl-0 md:border-l-3 border-neutral-500 p-3">
        <h1 className="text-7xl font-bold animate-slidein">
          SOLVING BIG PROBLEMS
        </h1>
        <h1 className="text-5xl font-sans animate-slidein-delay tracking-tighter">
          FAILING A LOT ALONG THE WAY
        </h1>
        <div className="md:mt-80 mt-28 font-mono border-t-3 border-neutral-500">
          <a href="#page2">
            <h3 onClick={reveal}>
              PROJECT 01:
              <span className="font-sans font-thin text-xl">Alloy Health</span>
            </h3>
          </a>
          <a href="#page3">
            <h3>
              PROJECT 02:
              <span className="font-sans font-thin text-xl">Gensus</span>
            </h3>
          </a>

          <h3>
            PROJECT 03:
            <span className="font-sans font-thin text-xl">Project name</span>
          </h3>
        </div>
      </div>
    </div>
  );
};
export default Page1;
