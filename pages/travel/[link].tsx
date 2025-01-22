import Image from "next/image";
import { InstagramEmbed } from "react-social-media-embed";
import { InferGetServerSidePropsType } from "next";
import CircularProgress from "@mui/material/CircularProgress";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import Head from "next/head";
import { ErrorContent } from "../../utils/error/ErrorContent";
import { Footer } from "../../utils/footer/Footer";
import { TravelVideoMetaData } from "../../src/travel/types";
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
	travelVideoMetaData,
} from "../../src/datasources/TravelMetaData";
import { PageContainer } from "../../src/global/PageContainer";
import { VideoLibrary } from "../../src/travel/VideoLibrary";
import { Button, Grid, LinearProgress, Rating } from "@mui/material";
import { useState } from "react";
import router from "next/router";

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

	const scoreKeyToTitle: any = {
		affordability: "Affordability",
		food: "Food",
		safety: "Safety",
		accessibility: "Accessibility",
		videoOutcome: "Video",
	};

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
						<div className={styles.essentialExtrasContainer}>
							{extras.scorecard && (
								<div className={styles.scorecardContainer}>
									{Object.entries(extras.scorecard).map(([title, score]) => (
										<div className={styles.scoreItemContainer}>
											<LinearProgress
												variant='determinate'
												value={score === 10 ? 14 : score}
												className={styles.scoreBar}
												sx={{
													backgroundColor: "transparent",
													"& .MuiLinearProgress-bar": {
														background:
															"linear-gradient(to right,  #f7df07, #ffeb3b)",
														clipPath: `polygon(0 0, 100% 0, ${
															score > 97 ? 100 : 97
														}% 100%, 0 100%)`,
													},
												}}
											/>
											<h4 className={styles.scoreDigit}>{score / 10}</h4>
											<h4 className={styles.scoreTitle}>
												{scoreKeyToTitle[title]}
											</h4>
										</div>
									))}
								</div>
							)}
							{extras.tips && <div className={styles.tipsContainer}></div>}
						</div>
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
