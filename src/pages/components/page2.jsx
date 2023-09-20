import React, { useState } from "react";
import { images } from "../../data/images";

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
        className="panel bg-white w-screen h-screen p-20 flex flex-col items-center"
      >
        <div className={`${style} ${active}`}>
          <div className="font-mono">
            <h1 className="font-bold">01</h1>
            <h1 className="font-medium md:text-5xl text-blue-200">
              ALLOY HEALTH
              <span className="font-sans font-thin text-black">
                {" "}
                - Empowering physicians to provide the best care.
              </span>
            </h1>
          </div>
          <div className="flex mt-16 relative z-0 overflow-hidden">
            {images.map((image) => {
              return <img src={image} alt="" />;
            })}
          </div>
          <div className="mt-20">
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
