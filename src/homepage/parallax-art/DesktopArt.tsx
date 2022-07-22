/* eslint-disable @next/next/no-img-element */
import { Box } from "@mui/material";
import { ParallaxLayer } from "@react-spring/parallax";
import { animated, easings, useSpring } from "react-spring";
import { ParallaxArtProps } from "./types";

export const DesktopArt = (props: ParallaxArtProps) => {
	const { windowHeight, selectedTheme, parallaxBackground } = props;

	const styles = {
		centerImage: {
			display: "grid",
			alignItems: "center",
			justifyContent: "center",
		},
	};

	// TODO: Convert to wrapper and create folder of animation - Twinkling stars, hovering balloons/plane, building lights on and off, police weewoos, shooting stars, extra birds
	const clouds = () => {
		const animation = useSpring({
			to: { x: 3000 },
			from: { x: -200 },
			loop: { reverse: true },
			config: {
				duration: 200000,
				easing: easings.easeInOutSine,
			},
		});

		return (
			<animated.div style={animation}>
				<div style={styles.centerImage}>
					<img
						src={`/homepage/parallax/desktop/${selectedTheme}/2.svg`}
						alt='Light2'
						height={`${windowHeight}px`}
					/>
				</div>
			</animated.div>
		);
	};

	return (
		<>
			<ParallaxLayer offset={0} speed={0.1}>
				<div style={styles.centerImage}>
					<img
						src={`/homepage/parallax/desktop/${selectedTheme}/1.svg`}
						alt='Light1'
						height={`${windowHeight}px`}
					/>
				</div>
			</ParallaxLayer>
			<ParallaxLayer offset={0} speed={0.1}>
				{clouds()}
			</ParallaxLayer>
			<ParallaxLayer offset={0} speed={0.1}>
				<div style={styles.centerImage}>
					<img
						src={`/homepage/parallax/desktop/${selectedTheme}/3.svg`}
						alt='Light3'
						height={`${windowHeight}px`}
					/>
				</div>
			</ParallaxLayer>
			<ParallaxLayer offset={0} speed={0.2}>
				<div style={styles.centerImage}>
					<img
						src={`/homepage/parallax/desktop/${selectedTheme}/4.svg`}
						alt='Light4'
						height={`${windowHeight}px`}
					/>
				</div>
			</ParallaxLayer>
			<ParallaxLayer offset={0} speed={0.3}>
				<div style={styles.centerImage}>
					<img
						src={`/homepage/parallax/desktop/${selectedTheme}/5.svg`}
						alt='Light5'
						height={`${windowHeight}px`}
					/>
				</div>
			</ParallaxLayer>
			<ParallaxLayer offset={0} speed={0.4}>
				<div style={styles.centerImage}>
					<img
						src={`/homepage/parallax/desktop/${selectedTheme}/6.svg`}
						alt='Light6'
						height={`${windowHeight}px`}
					/>
				</div>
			</ParallaxLayer>
			<ParallaxLayer offset={0} speed={0.5}>
				<div style={styles.centerImage}>
					<img
						src={`/homepage/parallax/desktop/${selectedTheme}/7.svg`}
						alt='Light7'
						height={`${windowHeight}px`}
					/>
				</div>
				<div style={{ height: "500px", backgroundColor: parallaxBackground }} />
			</ParallaxLayer>

			<ParallaxLayer offset={-0.1}>
				<div style={styles.centerImage}>
					<img
						src={`/homepage/parallax/desktop/${selectedTheme}/8.svg`}
						alt='Light8'
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
				</div>
			</ParallaxLayer>
		</>
	);
};
