import { ParallaxLayer } from "@react-spring/parallax";

export const Biography = () => {
  return (
    <ParallaxLayer
      offset={1}
      factor={1}
      style={{
        backgroundColor: "#01579B",
      }}
    >
      <h1 style={{ paddingTop: "100px" }}>Name & Role(s) (Changing)</h1>
      <ul>
        <li>Quick bio</li>
        <li>Who I am (+ mob)</li>
        <li>Where I am</li>
      </ul>
    </ParallaxLayer>
  );
};
