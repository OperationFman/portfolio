import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import type { NextPage } from "next";
import Head from "next/head";
import { useRef } from "react";
import Image from "next/image";
import { url } from "inspector";
import moon from "../public/homepage/parallax/moon.png";
import land from "../public/homepage/parallax/land.png";

const Home: NextPage = () => {
  const ref = useRef();

  if (!ref) {
    return <h1>memes</h1>;
  }

  return (
    <>
      <div>
        <Parallax pages={6} ref={ref}>
          <ParallaxLayer
            offset={0}
            speed={1}
            factor={2}
            style={{
              backgroundImage: `url(${moon.src})`,
              backgroundSize: "cover",
            }}
          />

          <ParallaxLayer
            offset={2}
            speed={1}
            factor={4}
            style={{
              backgroundImage: `url(${land.src})`,
              backgroundSize: "cover",
            }}
          />

          <ParallaxLayer offset={0.2} speed={0.05}>
            <h2>Parallax Text 1</h2>
          </ParallaxLayer>

          <ParallaxLayer offset={3} speed={2}>
            <h2>Parallax Text 2</h2>
          </ParallaxLayer>

          <ParallaxLayer offset={6} speed={1}>
            <h1>Rest of page</h1>
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  );
};

export default Home;
