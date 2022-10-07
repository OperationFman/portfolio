import Image from "next/future/image";
import { useEffect, useState } from "react";
import { isClientSide } from "../../../utils/isClientSide";
import { ShootingStar } from "./animations/ShootingStar";
import { TwinklingStars } from "./animations/TwinklingStars";
import { ParallaxArtProps } from "./types";

export const DesktopArt = (props: ParallaxArtProps) => {
	const { selectedTheme } = props;

	const layerStyle: any = {
		// Type issue with absolute positioning when passed to NextJS Image Component
		position: "absolute",
		width: "auto",
		height: `100vh`,
	};

	// Refactor this to use spring so it's smoother
	// Add 'first time' to local storage to do a nice animation up
	const [offSetY, setOffSetY] = useState(0);
	const handleScroll = () => {
		setOffSetY(window.pageYOffset);
	};

	// Weird phantom scroll bar appearing, why? Assuming not spring animate

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div
			style={{
				overflowX: "hidden",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}>
			<Image
				src={`/homepage/parallax/desktop/${selectedTheme}/1.svg`}
				alt='Moon'
				width='0'
				height='0'
				style={{
					...layerStyle,
					zIndex: -8,
					transform: `translateY(${offSetY * -0.1}px)`,
				}}
			/>
			<ShootingStar
				selectedTheme={selectedTheme}
				styles={layerStyle}
				offSetY={offSetY}
			/>
			<TwinklingStars
				selectedTheme={selectedTheme}
				styles={layerStyle}
				offSetY={offSetY}
			/>
			<Image
				src={`/homepage/parallax/desktop/${selectedTheme}/3.svg`}
				alt='Clouds'
				width='0'
				height='0'
				style={{
					...layerStyle,
					zIndex: -6,
					transform: `translateY(${offSetY * -0.1}px)`,
				}}
			/>
			<Image
				src={`/homepage/parallax/desktop/${selectedTheme}/4.svg`}
				alt='Clouds'
				width='0'
				height='0'
				style={{
					...layerStyle,
					zIndex: -5,
					transform: `translateY(${offSetY * -0.2}px)`,
				}}
			/>
			<Image
				src={`/homepage/parallax/desktop/${selectedTheme}/5.svg`}
				alt='Clouds'
				width='0'
				height='0'
				style={{
					...layerStyle,
					zIndex: -4,
					transform: `translateY(${offSetY * -0.3}px)`,
				}}
			/>
			<Image
				src={`/homepage/parallax/desktop/${selectedTheme}/6.svg`}
				alt='Clouds'
				width='0'
				height='0'
				style={{
					...layerStyle,
					zIndex: -3,
					transform: `translateY(${offSetY * -0.4}px)`,
				}}
			/>
			<Image
				src={`/homepage/parallax/desktop/${selectedTheme}/7.svg`}
				alt='Clouds'
				width='0'
				height='0'
				style={{
					...layerStyle,
					zIndex: -2,
					transform: `translateY(${offSetY * -0.5}px)`,
				}}
			/>
			<Image
				src={`/homepage/parallax/desktop/${selectedTheme}/8.svg`}
				alt='Clouds'
				width='0'
				height='0'
				style={{
					...layerStyle,
					zIndex: -1,
					transform: `translateY(${offSetY * -0.6}px)`,
				}}
			/>
			<div style={{ height: "100vh" }} />
			{/* Will need to be the bottom color*/}
		</div>
	);
};
