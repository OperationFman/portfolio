import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { isClientSide } from "../utils/useClientSideDetect";

const Home: NextPage = () => {
	const [windowHeight, setWindowHeight] = useState(
		isClientSide() ? window.innerHeight : 1440,
	);

	useEffect(() => {
		window.addEventListener("resize", () => {
			setWindowHeight(window.innerHeight);
		});
	}, []);

	return (
		<Parallax pages={6}>
			<ParallaxLayer offset={0} speed={0.1}>
				<div
					style={{
						display: "grid",
						alignItems: "center",
						justifyContent: "center",
					}}>
					<img
						src='/homepage/parallax/light/Light1.svg'
						alt='Light1'
						height={`${windowHeight}px`}
					/>
				</div>
			</ParallaxLayer>
			<ParallaxLayer offset={0} speed={0.1}>
				<div
					style={{
						display: "grid",
						alignItems: "center",
						justifyContent: "center",
					}}>
					<img
						src='/homepage/parallax/light/Light2.svg'
						alt='Light1'
						height={`${windowHeight}px`}
					/>
				</div>
			</ParallaxLayer>
			<ParallaxLayer offset={0} speed={0.1}>
				<div
					style={{
						display: "grid",
						alignItems: "center",
						justifyContent: "center",
					}}>
					<img
						src='/homepage/parallax/light/Light3.svg'
						alt='Light1'
						height={`${windowHeight}px`}
					/>
				</div>
			</ParallaxLayer>
			<ParallaxLayer offset={0} speed={0.2}>
				<div
					style={{
						display: "grid",
						alignItems: "center",
						justifyContent: "center",
					}}>
					<img
						src='/homepage/parallax/light/Light4.svg'
						alt='Light1'
						height={`${windowHeight}px`}
					/>
				</div>
			</ParallaxLayer>
			<ParallaxLayer offset={0} speed={0.3}>
				<div
					style={{
						display: "grid",
						alignItems: "center",
						justifyContent: "center",
					}}>
					<img
						src='/homepage/parallax/light/Light5.svg'
						alt='Light1'
						height={`${windowHeight}px`}
					/>
				</div>
			</ParallaxLayer>
			<ParallaxLayer offset={0} speed={0.4}>
				<div
					style={{
						display: "grid",
						alignItems: "center",
						justifyContent: "center",
					}}>
					<img
						src='/homepage/parallax/light/Light6.svg'
						alt='Light1'
						height={`${windowHeight}px`}
					/>
				</div>
			</ParallaxLayer>
			<ParallaxLayer offset={0} speed={0.5}>
				<div
					style={{
						display: "grid",
						alignItems: "center",
						justifyContent: "center",
					}}>
					<img
						src='/homepage/parallax/light/Light7.svg'
						alt='Light1'
						height={`${windowHeight}px`}
					/>
				</div>
				<div style={{ height: "2000px", backgroundColor: "#1565C0" }} />
			</ParallaxLayer>

			<ParallaxLayer offset={-0.1}>
				<div
					style={{
						display: "grid",
						alignItems: "center",
						justifyContent: "center",
					}}>
					<img
						src='/homepage/parallax/light/Light8.svg'
						alt='Light1'
						height={`${windowHeight}px`}
					/>
				</div>
				<div style={{ height: "2000px", backgroundColor: "#01579B" }} />
			</ParallaxLayer>

			<ParallaxLayer
				offset={1}
				factor={1}
				style={{
					backgroundColor: "#01579B",
				}}>
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
				}}>
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
				}}>
				<h1>Work Experience</h1>
				<p>Use LinkedIn API / List experience</p>
			</ParallaxLayer>
			<ParallaxLayer
				offset={4}
				style={{
					backgroundColor: "blue",
				}}>
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
				}}>
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
