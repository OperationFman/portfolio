import Image from "next/image";
import { InferGetServerSidePropsType } from "next";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import Head from "next/head";
import { ErrorContent } from "../../utils/error/ErrorContent";
import { Footer } from "../../utils/footer/Footer";
import { Advisory, TravelVideoMetaData } from "../../src/travel/types";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import FastForwardIcon from "@mui/icons-material/FastForward";
import LaunchIcon from "@mui/icons-material/Launch";
import {
	getTravelMetaDataIndex,
	addToWatchedVideosStorage,
	videoEnabled,
	hasRestrictionBypass,
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
import { Button, LinearProgress } from "@mui/material";
import router from "next/router";
import { ProgressBar } from "../../src/travel/components/ProgressBar";
import { useRef } from "react";

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
		backupLink,
		extras,
	} = metaData as TravelVideoMetaData;

	const playerRef = useRef<ReactPlayer | null>(null);

	const adviceKeyData: any = {
		travelLength: "Trip Duration",
		currency: "Currencies Used",
		season: "Best Months",
		dailyBudget: "Daily Budget",
	};

	const upNextMetaData = upNext as TravelVideoMetaData[];

	const scoreCardArray = extras?.scorecard
		? Object.entries(extras?.scorecard)
		: [];

	const adviceArray = extras?.advice ? Object.entries(extras?.advice) : [];

	const adviceColors = {
		[Advisory.Level1]: "#5cbc60",
		[Advisory.Level2]: "#f9d34e",
		[Advisory.Level3]: "#f6902d",
		[Advisory.Level4]: "#f44041",
	};

	if (!metaData) {
		return <ErrorContent />;
	}

	if (metaData.backupLink) {
		addToWatchedVideosStorage(metaData.link);
	}

	const skipTo = (timecode: number) => {
		if (playerRef.current) {
			playerRef.current.seekTo(timecode, "seconds");
		}
	};

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

				{hasRestrictionBypass() || !metaData.restricted ? (
					<>
						<ReactPlayer
							url={`${publicCDNVideoUrl}${slug}.mp4`}
							controls
							pip
							ref={playerRef}
							playing={true}
							volume={0.3}
							height='100%'
							width='100%'
						/>
						<div className={styles.subVideoInteraction}>
							<div className={styles.skipToContainer}>
								{extras && extras.highlights && (
									<>
										<h5 className={styles.skipToText}>
											Highlight{extras.highlights.length > 1 ? "s" : ""}:
										</h5>
										<div>
											{extras.highlights.map((item) => (
												<Button
													variant='outlined'
													color='inherit'
													key={`Button to skip to ${item}`}
													startIcon={<FastForwardIcon />}
													className={styles.skipToButton}
													onClick={() => skipTo(item.timecode)}>
													{item.title}
												</Button>
											))}
										</div>
									</>
								)}
							</div>
							<div className={styles.backupLink}>
								<Button
									variant='text'
									sx={{ fontWeight: "bold" }}
									color='inherit'
									size='small'
									onClick={() => window.open(backupLink, "_blank")}>
									Downloads
								</Button>
							</div>
						</div>
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
						<div className={styles.protectedVideoContainer}>
							<h5 className={styles.restrictedVideo}>
								Video Locked, Know The Password?
							</h5>
							<h5
								onClick={() => videoEnabled(metaData)}
								className={styles.loginButton}>
								Click Here
							</h5>
						</div>
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
									<div className={styles.finalScoreDiv} />
									<div className={styles.finalScoreContainer}>
										<h4
											className={`${styles.scoreTitle} ${styles.finalScoreTitle}`}>
											Final Score
										</h4>

										<LinearProgress
											variant='determinate'
											value={
												extras.finalScore === 1 ? 16 : extras.finalScore * 10
											}
											className={`${styles.scoreBar} ${styles.finalScore}`}
											sx={{
												"& .MuiLinearProgress-bar": {
													background:
														"linear-gradient(to right,  #f7df07,rgb(254, 222, 93))",
													borderRadius: "20px",
													borderTop: "1.9px solid white",
												},
											}}
										/>

										{extras.finalScore > 1 && (
											<h4
												className={styles.finalScoreDigit}
												style={{
													paddingLeft: `${(extras.finalScore * 5) / 2}%`,
												}}>
												{extras.finalScore} / 10
											</h4>
										)}
									</div>
								</div>
							)}
						</div>

						<div className={styles.extrasContainer}>
							<div className={styles.extraInfoContainer}>
								<>
									{extras.advice && (
										<>
											<h2 style={{ margin: "0 0 -10px 0" }}>Advice</h2>
											{adviceArray.map(([adviceTitle, adviceValue]) => (
												<div key={adviceTitle} className={styles.adviceWrapper}>
													<h4 className={styles.adviceHeader}>
														{adviceKeyData[adviceTitle]}
													</h4>
													<p className={styles.adviceParagraph}>
														{adviceValue}
													</p>
												</div>
											))}
										</>
									)}
									{extras.travelAdvisory && (
										<div className={styles.adviceWrapper}>
											<h4 className={styles.adviceHeader}>
												Official Travel Advice
											</h4>
											<a
												href={extras.travelAdvisory.link}
												className={styles.dfatSubtext}
												target='_blank'>
												From the Australian DFAT Smartraveller
											</a>
											<div
												className={styles.advisoryContainer}
												style={{
													backgroundColor:
														adviceColors[extras.travelAdvisory.advice],
												}}>
												<h4>{extras.travelAdvisory.advice}</h4>
											</div>
										</div>
									)}
								</>
							</div>

							<div className={styles.extraInfoContainer}>
								{extras.challenges && (
									<>
										<h2 style={{ margin: "0" }}>Challenges</h2>
										{extras.challenges.map((challengeItem) => (
											<div
												className={styles.doDontIconContainer}
												key={challengeItem}>
												<HeartBrokenIcon
													style={{
														color: "ffeb3b",
														fontSize: 30,
														margin: "0 0 0 -4px",
													}}
												/>
												<p className={styles.doDontText}>{challengeItem}</p>
											</div>
										))}
									</>
								)}
								{extras.dos && (
									<>
										<h2 style={{ margin: "40px 0 0 0" }}>Do</h2>
										{extras.dos.map((doItem) => (
											<div className={styles.doDontIconContainer} key={doItem}>
												<ThumbUpIcon style={{ color: "66bb6a" }} />
												<p className={styles.doDontText}>{doItem}</p>
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
												<p className={styles.doDontText}>{dontItem}</p>
											</div>
										))}
									</>
								)}
							</div>
						</div>

						{extras.extraVideos && (
							<div className={styles.extraVideos}>
								<h2>Bonus Videos</h2>
								<div className={styles.videoCardsContainer}>
									{extras.extraVideos.map((linkItem) => (
										<div key={linkItem.title} className={styles.videoCard}>
											<h4 className={styles.videoCardTitle}>
												{linkItem.title}
											</h4>
											<ReactPlayer
												url={`${publicCDNVideoUrl}${linkItem.hostedLink}.mp4`}
												controls
												pip
												playing={false}
												volume={0.3}
												height='100%'
												width='100%'
											/>
										</div>
									))}
								</div>
							</div>
						)}

						<div className={styles.extrasContainer}>
							{extras.music && (
								<div className={styles.extraInfoContainer}>
									<div className={styles.songsContainer}>
										<h2 className={styles.extraInfoHeading}>Music Used</h2>
										{extras.music.map((song) => (
											<div key={song.title} className={styles.songItem}>
												<a
													className={styles.musicItem}
													href={song.link}
													target='_blank'>
													♫ ‎ {song.title}
												</a>
											</div>
										))}
									</div>
								</div>
							)}
							{extras.extraLinks && (
								<div className={styles.extraInfoContainer}>
									<>
										<h2 className={styles.extraInfoHeading}>Links</h2>
										{extras.extraLinks.map((linkItem) => (
											<div
												key={linkItem.title}
												className={styles.extraLinksWrapper}>
												<h4 className={styles.extraLinkItem}>
													{linkItem.title}
												</h4>
												<a
													className={styles.extraLinkItemLink}
													href={linkItem.link}
													target='_blank'>
													{linkItem.link}
												</a>
											</div>
										))}
									</>
								</div>
							)}
						</div>
					</>
				)}

				<div className={styles.upNextContainer}>
					{upNextMetaData.length >= 1 ? (
						<>
							<h2>Up Next...</h2>
							<VideoLibrary
								videoMetaData={[...upNextMetaData].slice(0, 5).reverse()}
							/>
						</>
					) : (
						<>
							<h2>From The Start...</h2>
							<VideoLibrary
								videoMetaData={[...travelVideoMetaData].slice(0, 5).reverse()}
							/>
						</>
					)}
				</div>
			</PageContainer>
			<Footer />
		</>
	);
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
