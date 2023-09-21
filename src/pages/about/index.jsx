import React from "react";
import Head from "next/head";
import { Typewriter } from "react-simple-typewriter";

import Nav from "../components/nav";

const about = () => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&display=swap"
          rel="stylesheet"
        />
        <title>@Rimzss·About</title>
      </Head>
      <main>
        <Nav />
        <div className=" text-white w-screen h-screen border-t border-neutral-500 flex flex-col items-center">
          <div className="2xl:w-9/12 h-screen 2xl:pt-80 xl:pt-60 pt-20 2xl:pl-0 pl-3">
            <h1 className="text-5xl font-bold">
              I'M A{" "}
              <span className="font-mono md:text-6xl text-3xl">
                <Typewriter
                  words={["FRONTEND.", "BACKEND.", "DESIGNER.", "GAMER."]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={100}
                  deleteSpeed={80}
                  delaySpeed={1000}
                />
              </span>
            </h1>
            <div className="md:w-6/12">
              <h3 className="font-sans font-thin md:text-2xl text-xl animate-slidein-delay">
                I'm a full stack developer stundent, front-end tinkerer. I love
                video games, movies and codes. I'm interested in building
                beautiful, functional digital experiences that make people's
                lives easier.
              </h3>
            </div>
            <div className="flex gap-10 animate-slidein-delay mt-20">
              <div>
                <h3 className="text-black">EDUCATION</h3>
                <p className="font-sans">HIGHSCHOOL: Mongeni Complex</p>
                <p className="font-sans">
                  UNIVERSITY: Massachusetts Institute of Technology
                </p>
                <p className="font-sans">Other: Pinecone Academy Leap</p>
              </div>
              <div>
                <h3 className="text-black">EXPERIENCE</h3>
                <p className="font-sans">COMPANYS: APPLE INC</p>
                <p className="font-sans">YEARS:</p>
              </div>
              <div>
                <h3 className="text-black">SKILLS</h3>
                <p className="font-sans">HTML</p>
                <p className="font-sans">CSS</p>
                <p className="font-sans">Javascipt</p>
                <p className="font-sans">React.js</p>
                <p className="font-sans">Next.js</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default about;
