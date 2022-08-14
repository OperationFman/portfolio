/* eslint-disable @next/next/no-img-element */
import { Box } from "@mui/material";
import { ParallaxLayer } from "@react-spring/parallax";
import { useEffect, useState } from "react";
import { PageDownIcon } from "../components/PageDownIcon";
import { Clouds } from "./animations/Clouds";
import { EasterEgg } from "./animations/EasterEgg";
import { Hover } from "./animations/Hover";
import { ShootingStar } from "./animations/ShootingStar";
import { Train } from "./animations/Train";
import { TwinklingStars } from "./animations/TwinklingStars";
import { ParallaxArtProps } from "./types";

export const DesktopArt = (props: ParallaxArtProps) => {
  const { windowHeight, selectedTheme, parallaxBackground, scrollTo } = props;

  const styles = {
    centerImage: {
      display: "grid",
      alignItems: "center",
      justifyContent: "center",
    },
  };

  const [easterEggCounter, setEasterEggCounter] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const incrementEasterEgg = () => {
    if (selectedTheme === "dark") {
      setEasterEggCounter(easterEggCounter + 1);
    }
  };

  useEffect(() => {
    if (easterEggCounter > 2) {
      setShowEasterEgg(true);
    }
  }, [easterEggCounter]);

  return (
    <>
      <ParallaxLayer offset={0} speed={0.1}>
        <div style={styles.centerImage}>
          <img
            src={`/homepage/parallax/desktop/${selectedTheme}/1.svg`}
            alt="Background"
            height={`${windowHeight}px`}
          />
        </div>
      </ParallaxLayer>
      <ShootingStar
        selectedTheme={selectedTheme}
        windowHeight={windowHeight}
        styles={styles}
      />
      <TwinklingStars
        selectedTheme={selectedTheme}
        windowHeight={windowHeight}
        styles={styles}
      />
      {showEasterEgg ? (
        <EasterEgg
          selectedTheme={selectedTheme}
          windowHeight={windowHeight}
          styles={styles}
        />
      ) : (
        <></>
      )}
      <Clouds
        selectedTheme={selectedTheme}
        windowHeight={windowHeight}
        styles={styles}
      />
      <ParallaxLayer offset={0} speed={0.1}>
        <div style={styles.centerImage}>
          <img
            src={`/homepage/parallax/desktop/${selectedTheme}/3.svg`}
            alt="Large Mountain"
            height={`${windowHeight}px`}
          />
        </div>
      </ParallaxLayer>
      <Train
        selectedTheme={selectedTheme}
        windowHeight={windowHeight}
        styles={styles}
      />
      <ParallaxLayer offset={0} speed={0.2}>
        <div style={styles.centerImage}>
          <img
            src={`/homepage/parallax/desktop/${selectedTheme}/4.svg`}
            alt="Medium Mountain"
            height={`${windowHeight}px`}
          />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.2}>
        <Hover
          selectedTheme={selectedTheme}
          windowHeight={windowHeight}
          styles={styles}
        >
          <div style={styles.centerImage}>
            <img
              src={`/homepage/parallax/desktop/${selectedTheme}/FarBalloons.svg`}
              alt="Far balloons"
              height={`${windowHeight}px`}
            />
          </div>
        </Hover>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.3}>
        <div style={styles.centerImage}>
          <img
            src={`/homepage/parallax/desktop/${selectedTheme}/5.svg`}
            alt="Small Mountain"
            height={`${windowHeight}px`}
          />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.4}>
        <div style={styles.centerImage}>
          <img
            src={`/homepage/parallax/desktop/${selectedTheme}/6.svg`}
            alt="Sky Scrapers"
            height={`${windowHeight}px`}
          />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.4}>
        <Hover
          selectedTheme={selectedTheme}
          windowHeight={windowHeight}
          styles={styles}
        >
          <div style={styles.centerImage}>
            <img
              src={`/homepage/parallax/desktop/${selectedTheme}/NearBalloons.svg`}
              alt="Near balloons"
              height={`${windowHeight}px`}
            />
          </div>
        </Hover>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.4}>
        <Hover
          selectedTheme={selectedTheme}
          windowHeight={windowHeight}
          styles={styles}
        >
          <div style={styles.centerImage}>
            <img
              src={`/homepage/parallax/desktop/${selectedTheme}/Plane.svg`}
              alt="Plane"
              height={`${windowHeight}px`}
            />
          </div>
        </Hover>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.5}>
        <div style={styles.centerImage}>
          <img
            src={`/homepage/parallax/desktop/${selectedTheme}/7.svg`}
            alt="Town"
            height={`${windowHeight}px`}
          />
        </div>
        <div style={{ height: "500px", backgroundColor: parallaxBackground }} />
      </ParallaxLayer>
      <ParallaxLayer offset={-0.1} onClick={() => incrementEasterEgg()}>
        <div style={styles.centerImage}>
          <img
            src={`/homepage/parallax/desktop/${selectedTheme}/8.svg`}
            alt="Motherboard I/O"
            height={`${windowHeight}px`}
          />
          {/* Homepage parallax bleeds into second page when scrolling begins, this hides it */}
          <Box
            sx={{
              height: "100vh",
              backgroundColor: "background.default",
              position: "relative",
              ...styles.centerImage,
            }}
          />
        </div>
        {scrollTo && <PageDownIcon scrollTo={scrollTo} scrollToPage={1.05} />}
      </ParallaxLayer>
    </>
  );
};
