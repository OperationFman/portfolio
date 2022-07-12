import { Grid } from "@mui/material";
import { ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import useDeviceDetect from "../../../utils/useDeviceDetect";
import { PageContainer } from "../../global/PageContainer";
import { JumpToCard } from "./JumpToCard";
import { TitleSection } from "./TitleSection";

export const Biography = () => {
  const { isMobile } = useDeviceDetect();

  const Headshot = () => {
    return (
      <Image
        src="/homepage/placeholder.png"
        width="612"
        height="408"
        alt="Head shot"
      />
    );
  };

  const MobileBiography = () => {
    return (
      <>
        <TitleSection />
        <br />
        <Headshot />
      </>
    );
  };

  const DesktopBiography = () => {
    return (
      <>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            style={{
              width: "50%",
              marginTop: "auto",
            }}
          >
            <TitleSection />
          </div>
          <div style={{ width: "50%" }}>
            <Headshot />
          </div>
        </div>
        <div style={{ marginTop: "100px" }}>
          <Grid container spacing={3} justifyContent="center">
            <JumpToCard text={"Education"} />
            <JumpToCard text={"Experience"} />
            <JumpToCard text={"Expectations"} />
          </Grid>
        </div>
      </>
    );
  };

  return (
    <ParallaxLayer offset={1} factor={1}>
      <PageContainer>
        {isMobile ? <MobileBiography /> : <DesktopBiography />}
      </PageContainer>
    </ParallaxLayer>
  );
};
