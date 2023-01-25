import Image from "next/future/image";
import { useEffect, useState } from "react";
import useDeviceDetect from "../../../utils/useDeviceDetect";
import { ShootingStar } from "./ShootingStar";
import { Stars } from "./Stars";

export const ParallaxArt = ({ selectedTheme }: { selectedTheme: string }) => {
	const { isMobile } = useDeviceDetect();

	const [offSetY, setOffSetY] = useState(0);
	const handleScroll = () => {
		// Stop rendering once parallax is off screen
		if (window.pageYOffset < 2000) {
			setOffSetY(window.pageYOffset);
		}
	};

	useEffect(() => {
		const handleScrollAnimation = () => {
			handleScroll();
			window.requestAnimationFrame(handleScrollAnimation);
		};
		handleScrollAnimation();
		return () => {
			window.cancelAnimationFrame(handleScrollAnimation as any);
		};
	}, []);

	const style: any = {
		// any because of a known type issue with nextJS Image
		outerContainer: {
			height: isMobile ? "35vh" : "69vh",
		},
		innerContainer: {
			position: "absolute",

			width: "100%",
			height: isMobile ? "35vh" : "69vh",
			overflow: "hidden",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
		},
		backgroundColor: {
			zIndex: -9,
			width: "100%",
			height: isMobile ? "35vh" : "69vh",
			backgroundColor: selectedTheme === "dark" ? "#01579b" : "#a3dcf9",
		},
		layer: {
			position: "inherit",
			height: isMobile ? "35vh" : "69vh",
			width: "auto",
			overflow: "hidden",
		},
	};

	return (
		<div style={style.outerContainer}>
			<div style={style.innerContainer}>
				<div style={style.backgroundColor} />

				<Image
					src={`/homepage/parallax/dark/17 Sun Moon.svg`}
					alt='Sun/Moon'
					width='0'
					height='0'
					style={{
						...style.layer,
						zIndex: -8,
						transform: `translateY(${offSetY * 0.6}px)`,
					}}
				/>
				<Image
					src={`/homepage/parallax/dark/16 Stars Some 2.svg`}
					alt='Minor amount of stars'
					width='0'
					height='0'
					style={{
						...style.layer,
						zIndex: -7,
						transform: `translateY(${offSetY * 0.8 - 50}px)`,
					}}
				/>
				<Image
					src={`/homepage/parallax/dark/15 Stars Some.svg`}
					alt='Moderate amount of stars'
					width='0'
					height='0'
					style={{
						...style.layer,
						zIndex: -7,
						transform: `translateY(${offSetY * 0.84 - 50}px)`,
					}}
				/>
				<Image
					src={`/homepage/parallax/dark/14 Stars Most.svg`}
					alt='Significant amount of stars'
					width='0'
					height='0'
					style={{
						...style.layer,
						zIndex: -7,
						transform: `translateY(${offSetY * 0.88 - 20}px)`,
					}}
				/>
				<Image
					src={`/homepage/parallax/dark/13 Shooting Star.svg`}
					alt='Shooting Star'
					width='0'
					height='0'
					style={{
						...style.layer,
						zIndex: -6,
						transform: `translateY(${offSetY * 0.1}px)`,
					}}
				/>
				<Image
					src={`/homepage/parallax/dark/12 Star Destroyer Close.svg`}
					alt='Star Destroyer nearby'
					width='0'
					height='0'
					style={{
						...style.layer,
						zIndex: -6,
						transform: `translateY(${offSetY * 0.5}px)`,
					}}
				/>
				<Image
					src={`/homepage/parallax/dark/11 Star Destroyer Far.svg`}
					alt='Star Destroyer far away'
					width='0'
					height='0'
					style={{
						...style.layer,
						zIndex: -7,
						transform: `translateY(${offSetY * 0.7}px)`,
					}}
				/>

				<Image
					src={`/homepage/parallax/dark/10 Mountain Far.svg`}
					alt='Farthest Mountain'
					width='0'
					height='0'
					style={{
						...style.layer,
						zIndex: -6,
						transform: `translateY(${offSetY * 0.5}px)`,
					}}
				/>
				<Image
					src={`/homepage/parallax/dark/9 Train.svg`}
					alt='Train'
					width='0'
					height='0'
					style={{
						...style.layer,
						zIndex: -5,
						transform: `translateY(${offSetY * 0.4}px)`,
					}}
				/>
				<Image
					src={`/homepage/parallax/dark/8 Clouds Far.svg`}
					alt='Far clouds'
					width='0'
					height='0'
					style={{
						...style.layer,
						zIndex: -6,
						transform: `translateY(${offSetY * 0.45}px)`,
					}}
				/>
				<Image
					src={`/homepage/parallax/dark/7 Mountains Middle.svg`}
					alt='Mid Mountains'
					width='0'
					height='0'
					style={{
						...style.layer,
						zIndex: -5,
						transform: `translateY(${offSetY * 0.4}px)`,
					}}
				/>
				<Image
					src={`/homepage/parallax/dark/6 Mountains Close.svg`}
					alt='Nearest Mountain'
					width='0'
					height='0'
					style={{
						...style.layer,
						zIndex: -4,
						transform: `translateY(${offSetY * 0.35}px)`,
					}}
				/>
				<Image
					src={`/homepage/parallax/dark/5 Clouds Near.svg`}
					alt='Close low clouds'
					width='0'
					height='0'
					style={{
						...style.layer,
						zIndex: -3,
						transform: `translateY(${offSetY * 0.25}px)`,
					}}
				/>
				<Image
					src={`/homepage/parallax/dark/4 City.svg`}
					alt='Farthest City'
					width='0'
					height='0'
					style={{
						...style.layer,
						zIndex: -3,
						transform: `translateY(${offSetY * 0.2}px)`,
					}}
				/>
				<Image
					src={`/homepage/parallax/dark/3 Plane.svg`}
					alt='Closest City'
					width='0'
					height='0'
					style={{
						...style.layer,
						zIndex: -2,
						transform: `translateY(${offSetY * 0.005}px)`,
					}}
				/>
				<Image
					src={`/homepage/parallax/dark/2 Town.svg`}
					alt='Closest City'
					width='0'
					height='0'
					style={{
						...style.layer,
						zIndex: -2,
						transform: `translateY(${offSetY * 0.1}px)`,
					}}
				/>

				<Image
					src={`/homepage/parallax/dark/1 Motherboard.svg`}
					alt='Motherboard I/O'
					width='0'
					height='0'
					style={{
						...style.layer,
						zIndex: -1,
					}}
				/>
			</div>
		</div>
	);
};
