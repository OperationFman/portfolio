/* eslint-disable @next/next/no-img-element */
import { Box } from "@mui/material";
import { ParallaxLayer } from "@react-spring/parallax";
import { useEffect, useState } from "react";
import { isClientSide } from "../../../utils/isClientSide";

export const ParallaxArt = () => {
  const [windowHeight, setWindowHeight] = useState(
    isClientSide() ? window.innerHeight : 1440 // SVGs resolution is 5120x1440px
  );

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowHeight(window.innerHeight);
    });
  }, []);

  const styles = {
    centerImage: {
      display: "grid",
      alignItems: "center",
      justifyContent: "center",
    },
  };

  return (
    <>
      <ParallaxLayer offset={0} speed={0.1}>
        <div style={styles.centerImage}>
          <img
            src="/homepage/parallax/light/Light1.svg"
            alt="Light1"
            height={`${windowHeight}px`}
          />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.1}>
        <div style={styles.centerImage}>
          <img
            src="/homepage/parallax/light/Light2.svg"
            alt="Light2"
            height={`${windowHeight}px`}
          />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.1}>
        <div style={styles.centerImage}>
          <img
            src="/homepage/parallax/light/Light3.svg"
            alt="Light3"
            height={`${windowHeight}px`}
          />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.2}>
        <div style={styles.centerImage}>
          <img
            src="/homepage/parallax/light/Light4.svg"
            alt="Light4"
            height={`${windowHeight}px`}
          />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.3}>
        <div style={styles.centerImage}>
          <img
            src="/homepage/parallax/light/Light5.svg"
            alt="Light5"
            height={`${windowHeight}px`}
          />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.4}>
        <div style={styles.centerImage}>
          <img
            src="/homepage/parallax/light/Light6.svg"
            alt="Light6"
            height={`${windowHeight}px`}
          />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.5}>
        <div style={styles.centerImage}>
          <img
            src="/homepage/parallax/light/Light7.svg"
            alt="Light7"
            height={`${windowHeight}px`}
          />
        </div>
        <div style={{ height: "500px", backgroundColor: "#1565C0" }} />
      </ParallaxLayer>

      <ParallaxLayer offset={-0.1}>
        <div style={styles.centerImage}>
          <img
            src="/homepage/parallax/light/Light8.svg"
            alt="Light8"
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
          <Box
            sx={{
              height: "100px",
              width: "100%",
              position: "absolute",
              borderRadius: "0 0 40% 40%",
              backgroundColor: "#00579b",
              ...styles.centerImage,
            }}
          />
        </div>
      </ParallaxLayer>
    </>
  );
};
