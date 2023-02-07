import type { NextPage } from "next";

import Head from "next/head";
import { PageContainer } from "../src/global/PageContainer";
import { Biography } from "../src/homepage/biography/Biography";
import { Contact } from "../src/homepage/contact/Contact";
import { Experience } from "../src/homepage/experience/Experience";
import { ForYou } from "../src/homepage/foryou/ForYou";
import { HomeFooterImage } from "../src/homepage/homeFooter/HomeFooterImage";
import { ParallaxArt } from "../src/homepage/parallax-art/ParallaxArt";
import { Qualifications } from "../src/homepage/qualifications/Qualifications";
import { Salary } from "../src/homepage/salary/Salary";
import { Footer } from "../utils/footer/Footer";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Homepage - Franklin V Moon</title>
				<meta
					name='Homepage'
					content="This guys name is Franklin and he's a full-stack software developer with a passion for user centric design, volunteering globally and advocating for social change"
				/>
			</Head>
			<ParallaxArt />
			<PageContainer>
				<Biography />
				<ForYou />
				<Experience />
				<Qualifications />
				<Salary />
				<Contact />
			</PageContainer>
			<HomeFooterImage />
			<Footer />
		</>
	);
};

export default Home;
