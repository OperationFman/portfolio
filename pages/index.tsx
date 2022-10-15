import type { NextPage } from "next";
import Head from "next/head";
import { Homepage } from "../src/homepage/Homepage";

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
			<Homepage />
		</>
	);
};

export default Home;
