import React, { useState } from "react";
import { images } from "../../data/images";
import Slider from "./slider";

const Page2 = ({ active }) => {
  const style = "w-6/12";
  let [moveClass, setMoveClass] = useState("");
  const moveRight = () => {
    setMoveClass("-translate-x-full");
  };
  const moveLeft = () => {
    setMoveClass("");
  };
  console.log(active);
  return (
    <section>
      <div
        id="page2"
        className="panel bg-white w-screen h-screen md:p-6 2xl:p-20 p-6 flex flex-col items-center"
      >
        <div className={`${style} ${active}`}>
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
              Project:<span className="font-sans font-thin">Alloy Health</span>
            </h1>
            <h1 className="font-mono font-bold">
              Role:<span className="font-sans font-thin">Designer</span>
            </h1>
            <h1 className="font-mono font-bold">
              Website:<span className="font-sans font-thin">Alloy.health</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page2;
