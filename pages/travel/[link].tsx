import Image from "next/image";
import { InstagramEmbed } from "react-social-media-embed";
import { InferGetServerSidePropsType } from "next";
import CircularProgress from "@mui/material/CircularProgress";
import Head from "next/head";
import { ErrorContent } from "../../utils/error/ErrorContent";
import { Footer } from "../../utils/footer/Footer";
import { TravelVideoMetaData } from "../../src/travel/types";
import {
	getTravelMetaDataIndex,
	videoEnabled,
	filterTravelVideosWithBackupLink,
} from "../../src/travel/travelDataService";
import styles from "../../src/travel/index.module.scss";
import ReactPlayer from "react-player";
import {
	publicCDNVideoUrl,
	travelVideoMetaData,
} from "../../src/datasources/TravelMetaData";
import { PageContainer } from "../../src/global/PageContainer";
import { VideoLibrary } from "../../src/travel/VideoLibrary";
import { Grid } from "@mui/material";
import { useState } from "react";

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
	} = metaData as TravelVideoMetaData;

	const [isLoading, setIsLoading] = useState(true);

	setTimeout(() => {
		setIsLoading(false);
	}, 5000);

	const upNextMetaData = filterTravelVideosWithBackupLink(
		upNext as TravelVideoMetaData[],
	);

	if (!metaData) {
		return <ErrorContent />;
	}

	if (videoEnabled(metaData)) {
		return (
			<>
				<Head>
					<title>
						{title} - {year} - Franklin V Moon
					</title>
					<meta name={title} content={title} />
					<link rel='icon' href='/favicon-yellow.ico' />
				</Head>

				<PageContainer>
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

							<div className={styles.errorContainer}>
								<h5
									onClick={() => window.open(backupLink, "_blank")}
									className={styles.backupLink}>
									Alternative Video Link
								</h5>
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

							<h2>Video Coming Soon</h2>
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
