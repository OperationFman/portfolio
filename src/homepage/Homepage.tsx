import Image from "next/future/image";
import { useContext } from "react";
import { DarkMode } from "../../themes/GlobalTheme";
import { PageContainer } from "../global/PageContainer";
import { Biography } from "./biography/Biography";
import { Contact } from "./contact/Contact";
import { ForYou } from "./foryou/ForYou";
import { ParallaxArt } from "./parallax-art/ParallaxArt";
import { Qualifications } from "./qualifications/Qualifications";
import { Salary } from "./salary/Salary";
import { Experience } from "./experience/Experience";

export const Homepage = () => {
	const darkMode = useContext(DarkMode);
	const selectedTheme = darkMode ? "dark" : "light";

	return (
		<>
			<ParallaxArt selectedTheme={selectedTheme} />
			<PageContainer>
				<Biography />
				<ForYou />
				<Experience />
				<Qualifications />
				<Salary />
				<Contact />
			</PageContainer>
			<div className='flex justify-center'>
				<Image
					src={"/homepage/moon-footer.svg"}
					alt='Moon and Astronaut'
					width={1920}
					height={720}
				/>
			</div>
		</>
	);
};
