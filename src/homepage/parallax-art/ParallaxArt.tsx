import { useContext, useEffect, useState } from "react";
import { DarkMode } from "../../../themes/GlobalTheme";
import { isClientSide } from "../../../utils/isClientSide";
import useDeviceDetect from "../../../utils/useDeviceDetect";
import { DesktopArt } from "./DesktopArt";

export const ParallaxArt = () => {
	const darkMode = useContext(DarkMode);
	const { isMobile } = useDeviceDetect();
	const selectedTheme = darkMode ? "dark" : "light";
	const parallaxBackground = darkMode ? "#01579B" : "#90CAF9";

	const [windowHeight, setWindowHeight] = useState(
		isClientSide() ? window.innerHeight : 1440, // SVGs resolution is 5120x1440
	);

	useEffect(() => {
		window.addEventListener("resize", () => {
			setWindowHeight(window.innerHeight);
		});
	}, []);

	return isMobile ? (
		<h1>You're using mobile ey</h1>
	) : (
		<DesktopArt windowHeight={windowHeight} selectedTheme={selectedTheme} />
	);
};
