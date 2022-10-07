import { useContext } from "react";
import { DarkMode } from "../../../themes/GlobalTheme";
import { DesktopArt } from "./DesktopArt";

export const ParallaxArt = () => {
	const darkMode = useContext(DarkMode);
	const selectedTheme = darkMode ? "dark" : "light";

	return <DesktopArt selectedTheme={selectedTheme} />;
};
