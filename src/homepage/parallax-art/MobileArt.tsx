import Image from "next/future/image";
import { useEffect, useState } from "react";
import { ShootingStar } from "./animations/ShootingStar";
import { TwinklingStars } from "./animations/TwinklingStars";
import { ParallaxArtProps } from "./ParallaxArt";

export const MobileArt = (props: ParallaxArtProps) => {
	const { selectedTheme } = props;

	return (
		<div
			style={{
				position: "absolute",
				width: "100%",
				height: `100vh`,
				overflowX: "hidden",
				border: "2px solid pink",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}>
			<Image
				src={`/homepage/parallax/mobile/${selectedTheme}/4.svg`}
				alt='Sun/Moon'
				width='0'
				height='0'
				style={{ position: "inherit", height: "100vh", width: "auto" }}
			/>
		</div>
	);
};
