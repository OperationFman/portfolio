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
	const description =
		"Franklin is a full-stack software developer with a passion for user centric design, volunteering globally and advocating for social change";
	return (
		<>
			<Head>
				<title>Homepage - Franklin V Moon</title>
				<link rel='icon' href='/favicon-blue.ico' />
				<meta name='Franklin Von Moon Portfolio' content={description} />
				<meta name='description' content={description} />
				<meta property='og:title' content='Franklin Von Moon Portfolio' />
				<meta property='og:description' content={description} />
				<meta property='og:image' content='/homepage/preview.png' />
				<meta property='og:url' content='https://www.franklin-v-moon.dev/' />
				<meta property='og:type' content='website' />
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
