import { useContext } from "react";
import { DarkMode } from "../../themes/GlobalTheme";
import { PageContainer } from "../global/PageContainer";
import { Biography } from "./biography/Biography";
import { ForYou } from "./foryou/ForYou";
import { ParallaxArt } from "./parallax-art/ParallaxArt";
import { Qualifications } from "./qualifications/Qualifications";
import { Salary } from "./salary/Salary";
import { WorkExperience } from "./work-experience/WorkExperience";

export const Homepage = () => {
	const darkMode = useContext(DarkMode);
	const selectedTheme = darkMode ? "dark" : "light";

	return (
		<>
			<ParallaxArt selectedTheme={selectedTheme} />

			<PageContainer>
				<Biography />
				<ForYou />
				<WorkExperience />
				<Qualifications />
				<Salary />

				<div style={{ height: "100vh" }} />
			</PageContainer>
		</>
	);
};
