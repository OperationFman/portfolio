/* eslint-disable @next/next/no-img-element */
import { Box } from "@mui/material";
import { ParallaxLayer } from "@react-spring/parallax";
import { Clouds } from "./animations/Clouds";
import { TwinklingStars } from "./animations/TwinklingStars";
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

	// TODO:
	// Hovering hot air balloons & Plane
	// Shooting star
	// Extra birds
	// Building lights turning on/off
	// Flying kites (day only)
	// Steam train (day on far mountain)
	// Easter egg - Reaper

	return (
		<>
			<ParallaxLayer offset={0} speed={0.1}>
				<div style={styles.centerImage}>
					<img
						src={`/homepage/parallax/desktop/${selectedTheme}/1.svg`}
						alt='Background'
						height={`${windowHeight}px`}
					/>
				</div>
			</ParallaxLayer>
			<TwinklingStars
				selectedTheme={selectedTheme}
				windowHeight={windowHeight}
				styles={styles}
			/>
			<Clouds
				selectedTheme={selectedTheme}
				windowHeight={windowHeight}
				styles={styles}
			/>
			<ParallaxLayer offset={0} speed={0.1}>
				<div style={styles.centerImage}>
					<img
						src={`/homepage/parallax/desktop/${selectedTheme}/3.svg`}
						alt='Large Mountain'
						height={`${windowHeight}px`}
					/>
				</div>
			</ParallaxLayer>
			<ParallaxLayer offset={0} speed={0.2}>
				<div style={styles.centerImage}>
					<img
						src={`/homepage/parallax/desktop/${selectedTheme}/4.svg`}
						alt='Medium Mountain'
						height={`${windowHeight}px`}
					/>
				</div>
			</ParallaxLayer>
			<ParallaxLayer offset={0} speed={0.3}>
				<div style={styles.centerImage}>
					<img
						src={`/homepage/parallax/desktop/${selectedTheme}/5.svg`}
						alt='Small Mountain'
						height={`${windowHeight}px`}
					/>
				</div>
			</ParallaxLayer>
			<ParallaxLayer offset={0} speed={0.4}>
				<div style={styles.centerImage}>
					<img
						src={`/homepage/parallax/desktop/${selectedTheme}/6.svg`}
						alt='Sky Scrapers'
						height={`${windowHeight}px`}
					/>
				</div>
			</ParallaxLayer>
			<ParallaxLayer offset={0} speed={0.5}>
				<div style={styles.centerImage}>
					<img
						src={`/homepage/parallax/desktop/${selectedTheme}/7.svg`}
						alt='Town'
						height={`${windowHeight}px`}
					/>
				</div>
				<div style={{ height: "500px", backgroundColor: parallaxBackground }} />
			</ParallaxLayer>

			<ParallaxLayer offset={-0.1}>
				<div style={styles.centerImage}>
					<img
						src={`/homepage/parallax/desktop/${selectedTheme}/8.svg`}
						alt='Motherboard I/O'
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