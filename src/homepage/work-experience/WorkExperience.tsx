import { ParallaxLayer } from "@react-spring/parallax";

export const WorkExperience = () => {
  return (
    <ParallaxLayer
      offset={3}
      style={{
        backgroundColor: "grey",
      }}
    >
      <h1>Work Experience</h1>
      <p>Use LinkedIn API / List experience</p>
    </ParallaxLayer>
  );
};
