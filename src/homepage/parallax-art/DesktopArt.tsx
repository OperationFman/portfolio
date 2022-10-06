import Image from "next/future/image";
import { ParallaxArtProps } from "./types";

export const DesktopArt = (props: ParallaxArtProps) => {
	const { windowHeight, selectedTheme } = props;

	const layerStyle: any = {
		// Type issue with absolute positioning when passed to NextJS Image Component
		position: "absolute",
		width: "auto",
		height: `${windowHeight}px`,
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
	};

	return (
		<div style={{ overflowX: "hidden" }}>
			<Image
				src={`/homepage/parallax/desktop/${selectedTheme}/1.svg`}
				alt='Moon'
				width='0'
				height='0'
				style={{ ...layerStyle, zIndex: -7 }}
			/>
			<Image
				src={`/homepage/parallax/desktop/${selectedTheme}/3.svg`}
				alt='Clouds'
				width='0'
				height='0'
				style={{ ...layerStyle, zIndex: -6 }}
			/>
			<Image
				src={`/homepage/parallax/desktop/${selectedTheme}/4.svg`}
				alt='Clouds'
				width='0'
				height='0'
				style={{ ...layerStyle, zIndex: -5 }}
			/>
			<Image
				src={`/homepage/parallax/desktop/${selectedTheme}/5.svg`}
				alt='Clouds'
				width='0'
				height='0'
				style={{ ...layerStyle, zIndex: -4 }}
			/>
			<Image
				src={`/homepage/parallax/desktop/${selectedTheme}/6.svg`}
				alt='Clouds'
				width='0'
				height='0'
				style={{ ...layerStyle, zIndex: -3 }}
			/>
			<Image
				src={`/homepage/parallax/desktop/${selectedTheme}/7.svg`}
				alt='Clouds'
				width='0'
				height='0'
				style={{ ...layerStyle, zIndex: -2 }}
			/>
			<Image
				src={`/homepage/parallax/desktop/${selectedTheme}/8.svg`}
				alt='Clouds'
				width='0'
				height='0'
				style={{ ...layerStyle, zIndex: -1 }}
			/>
			<div style={{ height: "100vh" }} />{" "}
			{/* Will need to be the bottom color*/}
		</div>
	);
};
