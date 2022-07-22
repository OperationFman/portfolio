/* eslint-disable @next/next/no-img-element */
import { Box } from "@mui/material";
import { ParallaxLayer } from "@react-spring/parallax";
import { useContext, useEffect, useState } from "react";
import { DarkMode } from "../../../themes/GlobalTheme";
import { isClientSide } from "../../../utils/isClientSide";

export const ParallaxArt = () => {
	const darkMode = useContext(DarkMode);
	const selectedTheme = darkMode ? "dark" : "light";
	const parallaxBackground = darkMode ? "#01579B" : "#90CAF9";

	const [windowHeight, setWindowHeight] = useState(
		isClientSide() ? window.innerHeight : 1440, // SVGs resolution is 5120x1440px
	);

	useEffect(() => {
		window.addEventListener("resize", () => {
			setWindowHeight(window.innerHeight);
		});
	}, []);

	const styles = {
		centerImage: {
			display: "grid",
			alignItems: "center",
			justifyContent: "center",
		},
	};

	return (
		<>
			<ParallaxLayer offset={0} speed={0.1}>
				<div style={styles.centerImage}>
					<img
						src={`/homepage/parallax/${selectedTheme}/1.svg`}
						alt='Light1'
						height={`${windowHeight}px`}
					/>
				</div>
			</ParallaxLayer>
			<ParallaxLayer offset={0} speed={0.1}>
				<div style={styles.centerImage}>
					<img
						src={`/homepage/parallax/${selectedTheme}/2.svg`}
						alt='Light2'
						height={`${windowHeight}px`}
					/>
				</div>
			</ParallaxLayer>
			<ParallaxLayer offset={0} speed={0.1}>
				<div style={styles.centerImage}>
					<img
						src={`/homepage/parallax/${selectedTheme}/3.svg`}
						alt='Light3'
						height={`${windowHeight}px`}
					/>
				</div>
			</ParallaxLayer>
			<ParallaxLayer offset={0} speed={0.2}>
				<div style={styles.centerImage}>
					<img
						src={`/homepage/parallax/${selectedTheme}/4.svg`}
						alt='Light4'
						height={`${windowHeight}px`}
					/>
				</div>
			</ParallaxLayer>
			<ParallaxLayer offset={0} speed={0.3}>
				<div style={styles.centerImage}>
					<img
						src={`/homepage/parallax/${selectedTheme}/5.svg`}
						alt='Light5'
						height={`${windowHeight}px`}
					/>
				</div>
			</ParallaxLayer>
			<ParallaxLayer offset={0} speed={0.4}>
				<div style={styles.centerImage}>
					<img
						src={`/homepage/parallax/${selectedTheme}/6.svg`}
						alt='Light6'
						height={`${windowHeight}px`}
					/>
				</div>
			</ParallaxLayer>
			<ParallaxLayer offset={0} speed={0.5}>
				<div style={styles.centerImage}>
					<img
						src={`/homepage/parallax/${selectedTheme}/7.svg`}
						alt='Light7'
						height={`${windowHeight}px`}
					/>
				</div>
				<div style={{ height: "500px", backgroundColor: parallaxBackground }} />
			</ParallaxLayer>

			<ParallaxLayer offset={-0.1}>
				<div style={styles.centerImage}>
					<img
						src={`/homepage/parallax/${selectedTheme}/8.svg`}
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
