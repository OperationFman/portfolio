import Image from "next/image";
import { InstagramEmbed } from "react-social-media-embed";
import { InferGetServerSidePropsType } from "next";
import CircularProgress from "@mui/material/CircularProgress";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import Head from "next/head";
import { ErrorContent } from "../../utils/error/ErrorContent";
import { Footer } from "../../utils/footer/Footer";
import { TravelVideoMetaData } from "../../src/travel/types";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import {
	getTravelMetaDataIndex,
	videoEnabled,
	filterTravelVideosWithBackupLink,
	addToWatchedVideosStorage,
} from "../../src/travel/travelDataService";
import styles from "../../src/travel/index.module.scss";
import ReactPlayer from "react-player";
import {
	publicCDNVideoUrl,
	scorecardColorsPrimary,
	travelVideoMetaData,
} from "../../src/datasources/TravelMetaData";
import { PageContainer } from "../../src/global/PageContainer";
import { VideoLibrary } from "../../src/travel/VideoLibrary";
import { Button, Grid, LinearProgress, Rating, Tooltip } from "@mui/material";
import { useState } from "react";
import router from "next/router";
import { ProgressBar } from "../../src/travel/components/ProgressBar";

type ServerSideContext = {
	params: { link: string | string[] | undefined };
};

const VideoContent = ({
	metaData,
	upNext,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const {
		title,
		year,
		hostedLink: slug,
		instagramLinks,
		reelLinks,
		backupLink,
		extras,
	} = metaData as TravelVideoMetaData;

	const [isLoading, setIsLoading] = useState(true);

	setTimeout(() => {
		setIsLoading(false);
	}, 3000 + (instagramLinks?.length || 1) * 500);

	const upNextMetaData = filterTravelVideosWithBackupLink(
		upNext as TravelVideoMetaData[],
	);

	const scoreCardArray = extras?.scorecard
		? Object.entries(extras?.scorecard)
		: [];

	if (!metaData) {
		return <ErrorContent />;
	}

	if (videoEnabled(metaData)) {
		if (metaData.backupLink) {
			addToWatchedVideosStorage(metaData.link);
		}

		return (
			<>
				<Head>
					<title>
						{title} - {year} - Franklin V Moon
					</title>
					<meta name={title} content={title} />
					<link rel='icon' href='/favicon-yellow.ico' />
					<meta
						property='og:image'
						content={`/travel/posters/${metaData.hostedLink}.png`}
					/>
				</Head>

				<PageContainer>
					<div className={styles.returnContainer}>
						<Button
							variant='text'
							color='inherit'
							startIcon={<KeyboardBackspaceOutlinedIcon />}
							onClick={() => router.replace("/travel")}>
							Video Library
						</Button>
					</div>

					<h1 className={styles.title}>{title}</h1>
					<h2 className={styles.year}>{year}</h2>

					{backupLink ? (
						<>
							<ReactPlayer
								url={`${publicCDNVideoUrl}${slug}.mp4`}
								controls
								pip
								playing={true}
								volume={0.3}
								height='100%'
								width='100%'
							/>

							<h5
								onClick={() => window.open(backupLink, "_blank")}
								className={styles.backupLink}>
								Alternative Video Link
							</h5>
						</>
					) : (
						<div className={styles.comingSoon}>
							<Image
								src={"/travel/editingAstronaut.png"}
								alt={"No video placeholder image"}
								height={300}
								width={640}
								object-fit='cover'
								layout='responsive'
								className={styles.noVideoImage}
							/>

							<h2>Video Coming Soon</h2>
						</div>
					)}

					{extras && (
						<>
							<div className={styles.extrasContainer}>
								{extras.summary && (
									<div className={styles.summaryContainer}>
										<h2>Summary</h2>
										{extras.summary.map((sentence, index) => (
											<p
												key={`Paragraph ${index + 1}`}
												className={styles.summaryParagraph}>
												{sentence}
											</p>
										))}
									</div>
								)}

								{extras.scorecard && extras.finalScore && (
									<div className={styles.scorecardContainer}>
										<h2>Scores</h2>
										{extras.countries && extras.countries.length > 1 && (
											<div className={styles.scorecardLegend}>
												{extras.countries.map((country, index) => (
													<div className={styles.legendItem} key={country}>
														<h5
															style={{
																color: `${scorecardColorsPrimary[index]}`,
																padding: "0 20px 12px 0",
																margin: 0,
															}}>
															{country}
														</h5>
													</div>
												))}
											</div>
										)}
										{scoreCardArray.map(([title, scores]) => (
											<ProgressBar title={title} scores={scores} key={title} />
										))}
										<div className={styles.finalScoreContainer}>
											<LinearProgress
												variant='determinate'
												value={
													extras.finalScore === 1 ? 12 : extras.finalScore * 10
												}
												className={`${styles.scoreBar} ${styles.finalScore}`}
												sx={{
													"& .MuiLinearProgress-bar": {
														background:
															"linear-gradient(to right,  #f7df07,rgb(255, 232, 59))",
														borderRadius: "20px",
														borderTop: "0.5px solid white",
													},
												}}
											/>

											<h4 className={styles.finalScoreDigit}>
												{extras.finalScore} / 10
											</h4>

											<h4
												className={`${styles.scoreTitle} ${styles.finalScoreTitle}`}>
												Final Score
											</h4>
										</div>
									</div>
								)}
							</div>

							<div className={styles.extrasContainer}>
								<div className={styles.moneyAndAdvisoryContainer}></div>
								<div className={styles.doesAndDontsContainer}>
									{extras.dos && (
										<>
											<h2 style={{ margin: "0" }}>Do</h2>
											{extras.dos.map((doItem) => (
												<div
													className={styles.doDontIconContainer}
													key={doItem}>
													<ThumbUpIcon style={{ color: "66bb6a" }} />
													<h4 className={styles.doDontText}>{doItem}</h4>
												</div>
											))}
										</>
									)}
									{extras.donts && (
										<>
											<h2 style={{ margin: "40px 0 0 0" }}>Dont</h2>
											{extras.donts.map((dontItem) => (
												<div
													className={styles.doDontIconContainer}
													key={dontItem}>
													<ThumbDownIcon style={{ color: "f44336" }} />
													<h4 className={styles.doDontText}>{dontItem}</h4>
												</div>
											))}
										</>
									)}
								</div>
							</div>
						</>
					)}

					{(instagramLinks || reelLinks) && (
						<div className={styles.socialContainer}>
							<h2>Instagram</h2>
							{isLoading && (
								<div className={styles.loadingSpinner}>
									<CircularProgress color='inherit' />
								</div>
							)}
							<Grid
								container
								className={`${styles.gridContainer} ${
									isLoading ? styles.loadingEmbed : ""
								}`}>
								{reelLinks &&
									reelLinks.map((reel) => {
										return (
											<Grid item key={reel} className={styles.embeddedPost}>
												<div className={styles.reelWrapper}>
													<InstagramEmbed
														url={reel}
														width={350}
														placeholderSpinner={<></>}
													/>
												</div>
											</Grid>
										);
									})}

								{instagramLinks &&
									instagramLinks.map((link) => {
										return (
											<Grid item key={link} className={styles.embeddedPost}>
												<InstagramEmbed
													url={link}
													width={350}
													onLoad={() => setIsLoading(false)}
												/>
											</Grid>
										);
									})}
							</Grid>
						</div>
					)}

					<div className={styles.upNextContainer}>
						{upNextMetaData.length >= 1 ? (
							<>
								<h2>Up Next...</h2>
								<VideoLibrary videoMetaData={[...upNextMetaData].reverse()} />
							</>
						) : (
							<>
								<h2>From The Start...</h2>
								<VideoLibrary
									videoMetaData={[
										...filterTravelVideosWithBackupLink(travelVideoMetaData),
									].reverse()}
								/>
							</>
						)}
					</div>
				</PageContainer>
				<Footer />
			</>
		);
	} else {
		return <ErrorContent />;
	}
};

export const getServerSideProps = async (context: ServerSideContext) => {
	const { link } = context.params;

	if (typeof link !== "string") {
		throw new Error("Link param is invalid");
	}

	const metaDataIndex = getTravelMetaDataIndex(link);

	return {
		props: {
			metaData: travelVideoMetaData[metaDataIndex],
			upNext: travelVideoMetaData.slice(metaDataIndex + 1),
		},
	};
};

export default VideoContent;
