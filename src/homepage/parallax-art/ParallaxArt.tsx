/* eslint-disable @next/next/no-img-element */
import { useContext, useEffect, useState } from "react";
import { DarkMode } from "../../../themes/GlobalTheme";
import { isClientSide } from "../../../utils/isClientSide";
import { DesktopDark } from "./DesktopDark";
import { DesktopLight } from "./DesktopLight";

export const ParallaxArt = () => {
	const darkMode = useContext(DarkMode);

	const [windowHeight, setWindowHeight] = useState(
		isClientSide() ? window.innerHeight : 1440, // SVGs resolution is 5120x1440px
	);

	useEffect(() => {
		window.addEventListener("resize", () => {
			setWindowHeight(window.innerHeight);
		});
	}, []);

	return darkMode ? (
		<DesktopDark windowHeight={windowHeight} />
	) : (
		<DesktopLight windowHeight={windowHeight} />
	);
};
