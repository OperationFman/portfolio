import { useContext } from "react";
import { DarkMode } from "../../themes/GlobalTheme";
import { Biography } from "./Bio/Biography";
import { ParallaxArt } from "./parallax-art/ParallaxArt";

export const Homepage = () => {
	const darkMode = useContext(DarkMode);
	const selectedTheme = darkMode ? "dark" : "light";

	return (
		<>
			<ParallaxArt selectedTheme={selectedTheme} />

			<div style={{ height: "100vh" }}></div>

			<Biography selectedTheme={selectedTheme} />
		</>
	);
};

// Layer in-front moves faster
