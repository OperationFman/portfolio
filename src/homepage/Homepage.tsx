import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { ParallaxArt } from "./parallax-art/ParallaxArt";

export const Homepage = () => {
  return (
    <Parallax pages={6}>
      <ParallaxArt />

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
      <ParallaxLayer
        offset={2}
        style={{
          backgroundColor: "orange",
        }}
      >
        <h1>Qualifications</h1>
        <ul>
          <li>Self taught - programming - journey to TW</li>
          <li>Designer - Abo coop</li>
          <li>Qualified - Bachelors/Masters - studies completed</li>
          <li>Volunteering - media literacy</li>
          <li>Post production</li>
          <li>Hardware - servers and repair work/goals</li>
        </ul>
      </ParallaxLayer>

      <ParallaxLayer
        offset={3}
        style={{
          backgroundColor: "grey",
        }}
      >
        <h1>Work Experience</h1>
        <p>Use LinkedIn API / List experience</p>
      </ParallaxLayer>
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
      <ParallaxLayer
        offset={5}
        style={{
          backgroundColor: "green",
        }}
      >
        <h1>Contact Form</h1>
        <ul>
          <li>Subject</li>
          <li>Content</li>
          <li>Checkbox: If offering a job Im including a salary range</li>
          <li>Send</li>
        </ul>
      </ParallaxLayer>
    </Parallax>
  );
};
