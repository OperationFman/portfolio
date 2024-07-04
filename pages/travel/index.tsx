import type { NextPage } from "next";
import Head from "next/head";
import { PageContainer } from "../../src/global/PageContainer";
import { Footer } from "../../utils/footer/Footer";

import styles from "../../src/travel/index.module.scss";
import { Grid } from "@mui/material";
import { travelVideoMetaData } from "../../src/datasources/TravelMetaData";
import ScrollAnimation from "react-animate-on-scroll";

const Travel: NextPage = () => {
	const description =
		"Travel related content including completion map and travel videos, some public and some private of my experiences.";

	const metaData = travelVideoMetaData;

	return (
		<div>
			<Head>
				<title>Travel - Franklin V Moon</title>
				<meta name='Travel' content={description} />
				<link rel='icon' href='/favicon-red.ico' />
				<meta name='description' content={description} />
				<meta property='og:title' content='Franklin Von Moon Travel' />
				<meta property='og:description' content={description} />
				<meta
					property='og:image'
					content='https://user-images.githubusercontent.com/42459707/217668169-6b20fc51-78f9-448c-adc2-84a498b779f6.png'
				/>
				<meta
					property='og:url'
					content='https://www.franklin-v-moon.dev/travel'
				/>
				<meta property='og:type' content='website' />
			</Head>

			<PageContainer>
				<Grid container className={styles.gridContainer}>
					{metaData.map((dataItem, index) => {
						return (
							<ScrollAnimation
								animateIn='fadeIn'
								animateOnce
								key={index}
								delay={index * 50}>
								<Grid item>
									<h1>{dataItem.title}</h1>
								</Grid>
							</ScrollAnimation>
						);
					})}
				</Grid>
			</PageContainer>
			<Footer />
		</div>
	);
};

export default Travel;
