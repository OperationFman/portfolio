/* eslint-disable @next/next/no-img-element */
import { Box } from "@mui/material";
import { ParallaxLayer } from "@react-spring/parallax";
import { useContext, useEffect, useState } from "react";
import { DarkMode } from "../../../themes/GlobalTheme";
import { isClientSide } from "../../../utils/isClientSide";
import useDeviceDetect from "../../../utils/useDeviceDetect";
import { DesktopArt } from "./DesktopArt";
import { MobileArt } from "./MobileArt";

export const ParallaxArt = () => {
	const darkMode = useContext(DarkMode);
	const { isMobile } = useDeviceDetect();
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

	return isMobile ? (
		<MobileArt
			windowHeight={windowHeight}
			selectedTheme={selectedTheme}
			parallaxBackground={parallaxBackground}
		/>
	) : (
		<DesktopArt
			windowHeight={windowHeight}
			selectedTheme={selectedTheme}
			parallaxBackground={parallaxBackground}
		/>
	);
};
