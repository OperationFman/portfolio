import { useContext } from "react";
import { DarkMode } from "../../themes/GlobalTheme";
import { PageContainer } from "../global/PageContainer";
import { Biography } from "../homepage/bio/Biography";
import { ParallaxArt } from "./parallax-art/ParallaxArt";

export const Homepage = () => {
	const darkMode = useContext(DarkMode);
	const selectedTheme = darkMode ? "dark" : "light";

	return (
		<>
			<ParallaxArt selectedTheme={selectedTheme} />

			<PageContainer>
				<Biography />
			</PageContainer>
		</>
	);
};

// Layer in-front moves faster
