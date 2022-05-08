import { Button } from "@mui/material";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import type { NextPage } from "next";
import { useRef } from "react";

const Home: NextPage = () => {
  const ref = useRef();

  return (
    <>
      <div>
        {/* @ts-ignore */}
        <Parallax pages={6} ref={ref}>
          <ParallaxLayer
            offset={0}
            speed={0.05}
            factor={1}
            style={{
              backgroundColor: "blue",
            }}
          />
          <ParallaxLayer
            offset={0.2}
            speed={0.1}
            factor={1}
            style={{
              backgroundColor: "green",
            }}
          />
          <ParallaxLayer
            offset={0.4}
            speed={0.2}
            factor={1}
            style={{
              backgroundColor: "red",
            }}
          />

          <ParallaxLayer
            offset={0.5}
            speed={0.3}
            factor={1}
            style={{
              backgroundColor: "pink",
            }}
          />

          <ParallaxLayer
            offset={0.6}
            speed={0.5}
            factor={1}
            style={{
              backgroundColor: "grey",
            }}
          />

          {/*Make offset way lower, */}
          {/*bc once its a pic it'll be more convincing if its taller*/}
          <ParallaxLayer
            offset={0.7}
            speed={1}
            factor={1}
            style={{
              backgroundColor: "yellow",
            }}
          />

          <ParallaxLayer
            offset={0.8}
            speed={1.5}
            factor={1.75}
            style={{
              backgroundColor: "purple",
            }}
          >
            <Button
              onClick={() => {
                {
                  /* @ts-ignore */
                }
                ref.current.scrollTo(0.5);
              }}
            >
              Jump to profile
            </Button>
            <h3>Leave space here for image</h3>
            <h1 style={{ paddingTop: "200px" }}>Name & Role(s) (Changing)</h1>
            <ul>
              <li>Quick bio</li>
              <li>Who I am (+ mob)</li>
              <li>Where I am</li>
            </ul>

            <Button
              onClick={() => {
                {
                  /* @ts-ignore */
                }
                ref.current.scrollTo(1);
              }}
            >
              Jump to Qualifications
            </Button>
          </ParallaxLayer>

          <ParallaxLayer
            offset={1}
            speed={1}
            factor={1}
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

            <Button
              onClick={() => {
                {
                  /* @ts-ignore */
                }
                ref.current.scrollTo(2);
              }}
            >
              Jump to experience
            </Button>
          </ParallaxLayer>

          <ParallaxLayer
            offset={2}
            speed={1}
            factor={1}
            style={{
              backgroundColor: "grey",
            }}
          >
            <h1>Work Experience</h1>
            <p>Use LinkedIn API / List experience</p>
            <Button
              onClick={() => {
                {
                  /* @ts-ignore */
                }
                ref.current.scrollTo(3);
              }}
            >
              Jump to Salary & Contact
            </Button>
          </ParallaxLayer>

          <ParallaxLayer
            offset={3}
            speed={1}
            factor={1}
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

            <h1>Contact Form</h1>
            <ul>
              <li>Subject</li>
              <li>Content</li>
              <li>Checkbox: If offering a job Im including a salary range</li>
              <li>Send</li>
            </ul>
          </ParallaxLayer>
        </Parallax>
        <h3 style={{ paddingTop: "100px" }}>Picture(s)</h3>
      </div>
    </>
  );
};

export default Home;
