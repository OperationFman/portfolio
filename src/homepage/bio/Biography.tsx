import { Grid } from "@mui/material";
import { ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import { PageContainer } from "../../global/PageContainer";
import { JumpToCard } from "./JumpToCard";
import { TitleSection } from "./TitleSection";

export const Biography = () => {
  return (
    <ParallaxLayer offset={1} factor={1}>
      {/* <h1>Name & Role(s) (Changing)</h1>
      <ul>
        <li>Headshot</li>
        <li>Quick bio, indigenous, who I am, where I am</li>
        <li>Education</li>
        <li>
          Goals (immigration and volunteering) - include nicely animated map
          bits
        </li>
        <li>Vague interests</li>
      </ul> */}
      <PageContainer>
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
            <Image
              src="/homepage/placeholder.png"
              width="612"
              height="408"
              alt="Head shot"
            />
          </div>
        </div>
        <div style={{ marginTop: "100px" }}>
          <Grid container spacing={3} justifyContent="center">
            <JumpToCard text={"Education"} />
            <JumpToCard text={"Experience"} />
            <JumpToCard text={"Expectations"} />
          </Grid>
        </div>
      </PageContainer>
    </ParallaxLayer>
  );
};
