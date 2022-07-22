/* eslint-disable @next/next/no-img-element */
import { Box } from "@mui/material";
import { ParallaxLayer } from "@react-spring/parallax";
import { useContext, useEffect, useState } from "react";
import { isClientSide } from "../../../utils/isClientSide";
import { useDarkMode } from "../../../utils/useDarkMode";
import { DesktopLight } from "./DesktopLight";
import { DesktopDark } from "./DesktopDark";
import { DarkMode2 } from "../../../pages/_app";

export const ParallaxArt = () => {
	// const { darkMode } = useDarkMode();
	const darkMode2 = useContext(DarkMode2);

	const [windowHeight, setWindowHeight] = useState(
		isClientSide() ? window.innerHeight : 1440, // SVGs resolution is 5120x1440px
	);

	useEffect(() => {
		window.addEventListener("resize", () => {
			setWindowHeight(window.innerHeight);
		});
		console.log("rerender");
	}, []);

	console.log({ darkMode2 });

	return <></>;
	//   darkMode ? (
	// 	<DesktopDark windowHeight={windowHeight} />
	// ) : (
	// 	<DesktopLight windowHeight={windowHeight} />
	// ))
};
