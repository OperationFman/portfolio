import { ParallaxLayer } from "@react-spring/parallax";

export const SalaryExpectation = () => {
  return (
    <ParallaxLayer
      offset={4}
      style={{
        backgroundColor: "blue",
      }}
    >
      <h1>Compensation Expectation</h1>
      <h1 style={{ paddingTop: "30px" }}>$100,000k</h1>
      <ul>
        <li>Hybrid/Remote</li>
        <li>Social Awareness</li>
        <li>Global Travel</li>
        <li>Work/Life Balance</li>
      </ul>
    </ParallaxLayer>
  );
};
