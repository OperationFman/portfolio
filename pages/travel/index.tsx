import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/future/image";
import { PageContainer } from "../../src/global/PageContainer";
import { Footer } from "../../utils/footer/Footer";
import PlayArrowTwoToneIcon from "@mui/icons-material/PlayArrowTwoTone";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import styles from "../../src/travel/index.module.scss";
import { Grid } from "@mui/material";
import { travelVideoMetaData } from "../../src/datasources/TravelMetaData";
import ScrollAnimation from "react-animate-on-scroll";
import { groupVideosByYear } from "../../src/travel/travelDataService";
import router from "next/router";

const Travel: NextPage = () => {
	const description =
		"Travel related content including completion map and travel videos, some public and some private of my experiences.";

	const metaDataGroupedByYear = groupVideosByYear(travelVideoMetaData);

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
				{metaDataGroupedByYear.map((metaData, groupIndex) => {
					{
						return (
							<>
								<h2 className={styles.yearHeading}>{metaData[0].year}</h2>
								<Grid container className={styles.gridContainer}>
									{metaData.map((dataItem, videoIndex) => {
										return (
											<ScrollAnimation
												animateIn='fadeIn'
												animateOnce
												key={videoIndex}
												delay={(groupIndex + videoIndex) * 50}>
												<Grid item>
													<div
														className={styles.videoCardContainer}
														onClick={() => {
															if (!dataItem.restricted) {
																router.push(`travel/${dataItem.link}`);
															}
														}}>
														{dataItem.restricted ? (
															<LockOutlinedIcon
																className={styles.videoButton}
															/>
														) : (
															<PlayArrowTwoToneIcon
																className={`${styles.videoButton} ${styles.videoButtonBigger}`}
															/>
														)}
														<Image
															src={`/travel/posters/${dataItem.slug}.png`}
															alt={`${dataItem.title} poster`}
															height='300'
															width='200'
															className={styles.videoCardImage}
														/>
													</div>
												</Grid>
											</ScrollAnimation>
										);
									})}
								</Grid>
							</>
						);
					}
				})}
			</PageContainer>
			<Footer />
		</div>
	);
};

export default Travel;
