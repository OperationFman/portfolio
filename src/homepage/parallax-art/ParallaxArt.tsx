import Image from "next/future/image";
import { useEffect, useState } from "react";
import ShowIf from "../../../utils/ShowIf";
import useDeviceDetect from "../../../utils/useDeviceDetect";
import { ShootingStar } from "./ShootingStar";
import { Stars } from "./Stars";

export const ParallaxArt = ({ selectedTheme }: { selectedTheme: string }) => {
	const { isMobile } = useDeviceDetect();
	const platform = isMobile ? "mobile" : "desktop";

	const [offSetY, setOffSetY] = useState(0);
	const handleScroll = () => {
		setOffSetY(window.pageYOffset);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const style: any = {
		// any because of a known type issue with nextJS Image
		outerContainer: {
			height: "70vh",
		},
		innerContainer: {
			position: "absolute",
			width: "100%",
			height: `70vh`,
			overflow: "hidden",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
		},
		backgroundColor: {
			zIndex: -9,
			width: "100%",
			height: "70vh",
			backgroundColor: selectedTheme === "dark" ? "#01579b" : "#a3dcf9",
		},
		layer: {
			position: "inherit",
			height: "70vh",
			width: "auto",
			overflow: "hidden",
		},
	};

	return (
		<div style={style.outerContainer}>
			<div style={style.innerContainer}>
				<div style={style.backgroundColor} />

				<ShowIf condition={!isMobile}>
					<ShootingStar
						selectedTheme={selectedTheme}
						styleOverrides={style.layer}
						offSetY={offSetY}
					/>
					<Stars
						selectedTheme={selectedTheme}
						styleOverrides={style.layer}
						offSetY={offSetY}
					/>
					<Image
						src={`/homepage/parallax/desktop/${selectedTheme}/Plane.svg`}
						alt='Plane'
						width='0'
						height='0'
						style={{
							...style.layer,
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
							...style.layer,
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
							...style.layer,
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
							...style.layer,
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
						...style.layer,
						zIndex: -8,
						transform: `translateY(${offSetY * 0.6}px)`,
					}}
				/>
				<Image
					src={`/homepage/parallax/${platform}/${selectedTheme}/2.svg`}
					alt='Clouds'
					width='0'
					height='0'
					style={{
						...style.layer,
						zIndex: -4,
						transform: `translateY(${offSetY * 0.4}px)`,
					}}
				/>
				<Image
					src={`/homepage/parallax/${platform}/${selectedTheme}/3.svg`}
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
					src={`/homepage/parallax/${platform}/${selectedTheme}/4.svg`}
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
					src={`/homepage/parallax/${platform}/${selectedTheme}/5.svg`}
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
					src={`/homepage/parallax/${platform}/${selectedTheme}/6.svg`}
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
					src={`/homepage/parallax/${platform}/${selectedTheme}/7.svg`}
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
					src={`/homepage/parallax/${platform}/${selectedTheme}/8.svg`}
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
