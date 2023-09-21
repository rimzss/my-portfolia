import React, { useState } from "react";
import { images } from "../../data/images";

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
    <div
      id="page3"
      className="text-white bg-purple w-screen h-screen 2xl:p-20 p-6 flex flex-col items-center"
    >
      <div className="w-6/12">
        <div className="font-mono">
          <h1 className="font-bold">02</h1>
          <h1 className="font-medium 2xl:text-5xl text-2xl text-pink-500">
            GENSUS
            <span className="font-sans font-thin text-white">
              - World class UX for cutting edge data and business teams.
            </span>
          </h1>
        </div>
        <div className="flex 2xl:mt-16 mt-5 relative z-0 overflow-hidden">
          <button
            onClick={moveRight}
            className="absolute text-6xl top-2/4 z-10"
          >
            &#60;
          </button>
          {images.map((image) => {
            return <img src={image} alt="" />;
          })}
          <button
            onClick={moveRight}
            className="absolute text-6xl right-0 top-2/4 z-10"
          >
            &#62;
          </button>
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
    </div>
  );
};

export default Page3;
