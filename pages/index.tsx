import type { NextPage } from "next";
import Image from "next/future/image";
import Head from "next/head";
import { useContext } from "react";
import { PageContainer } from "../src/global/PageContainer";
import { Biography } from "../src/homepage/biography/Biography";
import { Contact } from "../src/homepage/contact/Contact";
import { Experience } from "../src/homepage/experience/Experience";
import { ForYou } from "../src/homepage/foryou/ForYou";
import { ParallaxArt } from "../src/homepage/parallax-art/ParallaxArt";
import { Qualifications } from "../src/homepage/qualifications/Qualifications";
import { Salary } from "../src/homepage/salary/Salary";
import { DarkMode } from "../themes/GlobalTheme";
import { Footer } from "../utils/Footer";

const Home: NextPage = () => {
	const darkMode = useContext(DarkMode);
	const selectedTheme = darkMode ? "dark" : "light";

	return (
		<>
			<Head>
				<title>Homepage - Franklin V Moon</title>
				<meta
					name='Homepage'
					content="This guys name is Franklin and he's a full-stack software developer with a passion for user centric design, volunteering globally and advocating for social change"
				/>
			</Head>
			<ParallaxArt selectedTheme={selectedTheme} />
			<PageContainer>
				<Biography />
				<ForYou />
				<Experience />
				<Qualifications />
				<Salary />
				<Contact />
			</PageContainer>
			<div className='flex justify-center overflow-hidden'>
				<Image
					src={"/homepage/moon-footer.svg"}
					alt='Moon and Astronaut'
					width={1920}
					height={720}
				/>
			</div>
			<Footer margin={false} />
		</>
	);
};

export default Home;
