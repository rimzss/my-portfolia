import Image from "next/image";
import { Inter } from "next/font/google";
import { motion, useScroll } from "framer-motion";
import Head from "next/head";
import Nav from "./components/nav";
import Page1 from "./components/page1";
import Page2 from "./components/page2";
import Page3 from "./components/page3";
import Footer from "./components/footer";
import { BiArrowToTop } from "react-icons/bi";
import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  const { scrollYProgress } = useScroll();

  let [active, setActive] = useState("");
  const reveal = () => {
    setActive("active");
    console.log("ACTIVE=", active);
  };
  const clear = () => {
    setActive("");
  };
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&display=swap"
          rel="stylesheet"
        />
        <title>@Rimzss·Home</title>
      </Head>
      <main>
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
        <a onClick={clear} href="#home">
          <button className="fixed text-5xl bg-white">
            <BiArrowToTop />
          </button>
        </a>
        <Nav />
        <Page1 reveal={reveal} />
        <Page2 active={active} />
        <Page3 />
        <Footer />
      </main>
    </>
  );
}
