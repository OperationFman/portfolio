import { useContext, useEffect, useState } from "react";
import { DarkMode } from "../../../themes/GlobalTheme";
import { isClientSide } from "../../../utils/isClientSide";
import { DesktopArt } from "./DesktopArt";

export const ParallaxArt = () => {
	const darkMode = useContext(DarkMode);
	const selectedTheme = darkMode ? "dark" : "light";
	const clientSide = isClientSide();

	const [windowHeight, setWindowHeight] = useState(
		clientSide ? window.innerHeight : 1440, // SVGs resolution is 5120x1440
	);

	useEffect(() => {
		if (clientSide) {
			window.addEventListener("resize", () => {
				setWindowHeight(window.innerHeight);
			});
		}
	}, []);

	return (
		<DesktopArt windowHeight={windowHeight} selectedTheme={selectedTheme} />
	);
};
