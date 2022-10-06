import type { NextPage } from "next";
import Head from "next/head";
import { ParallaxArt } from "../src/homepage/parallax-art/ParallaxArt";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Homepage - Franklin V Moon</title>
				<meta
					name='Homepage'
					content='My Resume, Experience and Contact Form'
				/>
			</Head>
			<ParallaxArt />
		</>
	);
};

export default Home;
