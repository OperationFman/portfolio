import { Button } from "@mui/material";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Parallax pages={6}>
      <ParallaxLayer
        offset={0}
        speed={0.05}
        style={{
          backgroundColor: "blue",
        }}
      />
      <ParallaxLayer
        offset={0.1}
        speed={0.1}
        style={{
          backgroundColor: "green",
        }}
      />
      <ParallaxLayer
        offset={0.1}
        speed={0.2}
        style={{
          backgroundColor: "red",
        }}
      />
      <ParallaxLayer
        offset={0.22}
        speed={0.3}
        style={{
          backgroundColor: "pink",
        }}
      />

      <ParallaxLayer
        offset={0.3}
        speed={0.5}
        style={{
          backgroundColor: "grey",
        }}
      />
      <ParallaxLayer
        offset={0.4}
        speed={0.7}
        style={{
          backgroundColor: "cyan",
        }}
      />
      <ParallaxLayer
        offset={0.5}
        speed={0.8}
        style={{
          backgroundColor: "yellow",
        }}
      />
      <ParallaxLayer
        offset={0.7}
        factor={1.3}
        style={{
          backgroundColor: "purple",
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

export default Home;
