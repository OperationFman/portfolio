import type { NextPage } from "next";
import Head from "next/head";
import { Homepage } from "../src/homepage/Homepage";
import { Footer } from "../utils/Footer";

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
			<Homepage />
			<Footer margin={false} />
		</>
	);
};

export default Home;
