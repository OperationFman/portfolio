import Image from "next/future/image";
import { useEffect, useState } from "react";
import ShowIf from "../../../utils/ShowIf";
import useDeviceDetect from "../../../utils/useDeviceDetect";
import { ShootingStar } from "./animations/ShootingStar";
import { TwinklingStars } from "./animations/TwinklingStars";
import { ParallaxArtProps } from "./ParallaxArt";

export const DesktopArt = (props: ParallaxArtProps) => {
	const { selectedTheme } = props;

	const { isMobile } = useDeviceDetect();
	const platform = isMobile ? "mobile" : "desktop";

	const parallaxLayerPosition: any = {
		// Type issue with absolute positioning when passed to NextJS Image Component
		position: "inherit",
		height: "100vh",
		width: "auto",
		overflow: "hidden",
	};

	// Add 'first time' to local storage to do a nice animation up
	const [offSetY, setOffSetY] = useState(0);
	const handleScroll = () => {
		setOffSetY(window.pageYOffset);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div
			style={{
				position: "absolute",
				width: "100%",
				height: `100vh`,
				overflow: "hidden",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}>
			<div
				style={{
					zIndex: -9,
					width: "100%",
					height: "100vh",
					backgroundColor: selectedTheme === "dark" ? "#01579b" : "#a3dcf9",
				}}></div>

			<ShowIf condition={!isMobile}>
				<ShootingStar
					selectedTheme={selectedTheme}
					styleOverrides={parallaxLayerPosition}
					offSetY={offSetY}
				/>
				<TwinklingStars
					selectedTheme={selectedTheme}
					styleOverrides={parallaxLayerPosition}
					offSetY={offSetY}
				/>
				<Image
					src={`/homepage/parallax/desktop/${selectedTheme}/Plane.svg`}
					alt='Plane'
					width='0'
					height='0'
					style={{
						...parallaxLayerPosition,
						zIndex: -2,
						transform: `translateY(${offSetY * 0.4}px)`,
					}}
				/>
				<Image
					src={`/homepage/parallax/desktop/${selectedTheme}/Train.svg`}
					alt='Train'
					width='0'
					height='0'
					style={{
						...parallaxLayerPosition,
						zIndex: -4,
						transform: `translateY(${offSetY * 0.4}px)`,
					}}
				/>
				<Image
					src={`/homepage/parallax/${platform}//${selectedTheme}/FarBalloons.svg`}
					alt='Far Balloon'
					width='0'
					height='0'
					style={{
						...parallaxLayerPosition,
						zIndex: -5,
						transform: `translateY(${offSetY * 0.4 + -20}px)`, // Remove + 20
					}}
				/>
				<Image
					src={`/homepage/parallax/${platform}//${selectedTheme}/NearBalloons.svg`}
					alt='Near Balloon'
					width='0'
					height='0'
					style={{
						...parallaxLayerPosition,
						zIndex: -3,
						transform: `translateY(${offSetY * 0.35}px)`,
					}}
				/>
			</ShowIf>

			<Image
				src={`/homepage/parallax/${platform}/${selectedTheme}/1.svg`}
				alt='Sun/Moon'
				width='0'
				height='0'
				style={{
					...parallaxLayerPosition,
					zIndex: -8,
					transform: `translateY(${offSetY * 0.6}px)`,
				}}
			/>
			<Image
				src={`/homepage/parallax/${platform}//${selectedTheme}/2.svg`}
				alt='Clouds'
				width='0'
				height='0'
				style={{
					...parallaxLayerPosition,
					zIndex: -4,
					transform: `translateY(${offSetY * 0.4}px)`,
				}}
			/>
			<Image
				src={`/homepage/parallax/${platform}//${selectedTheme}/3.svg`}
				alt='Farthest Mountain'
				width='0'
				height='0'
				style={{
					...parallaxLayerPosition,
					zIndex: -6,
					transform: `translateY(${offSetY * 0.5}px)`,
				}}
			/>

			<Image
				src={`/homepage/parallax/${platform}//${selectedTheme}/4.svg`}
				alt='Mid Mountains'
				width='0'
				height='0'
				style={{
					...parallaxLayerPosition,
					zIndex: -5,
					transform: `translateY(${offSetY * 0.4}px)`,
				}}
			/>
			<Image
				src={`/homepage/parallax/${platform}//${selectedTheme}/5.svg`}
				alt='Nearest Mountain'
				width='0'
				height='0'
				style={{
					...parallaxLayerPosition,
					zIndex: -4,
					transform: `translateY(${offSetY * 0.35}px)`,
				}}
			/>

			<Image
				src={`/homepage/parallax/${platform}//${selectedTheme}/6.svg`}
				alt='Farthest City'
				width='0'
				height='0'
				style={{
					...parallaxLayerPosition,
					zIndex: -3,
					transform: `translateY(${offSetY * 0.2}px)`,
				}}
			/>

			<Image
				src={`/homepage/parallax/${platform}//${selectedTheme}/7.svg`}
				alt='Closest City'
				width='0'
				height='0'
				style={{
					...parallaxLayerPosition,
					zIndex: -2,
					transform: `translateY(${offSetY * 0.1}px)`,
				}}
			/>

			<Image
				src={`/homepage/parallax/${platform}//${selectedTheme}/8.svg`}
				alt='Motherboard I/O'
				width='0'
				height='0'
				style={{
					...parallaxLayerPosition,
					zIndex: -1,
				}}
			/>
		</div>
	);
};
