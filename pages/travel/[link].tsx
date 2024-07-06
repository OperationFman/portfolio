import { InstagramEmbed } from "react-social-media-embed";
import { InferGetServerSidePropsType } from "next";
import { ErrorContent } from "../../utils/error/ErrorContent";
import { Footer } from "../../utils/footer/Footer";
import { TravelVideoMetaData } from "../../src/travel/types";
import { getTravelMetaDataIndex } from "../../src/travel/travelDataService";
import styles from "../../src/travel/index.module.scss";
import ReactPlayer from "react-player";
import {
	publicCDNVideoUrl,
	travelVideoMetaData,
} from "../../src/datasources/TravelMetaData";
import { PageContainer } from "../../src/global/PageContainer";
import { VideoLibrary } from "../../src/travel/VideoLibrary";
import { Grid } from "@mui/material";
import { setDark } from "../../utils/configureCss/configureCss";

type ServerSideContext = {
	params: { link: string | string[] | undefined };
};

const VideoContent = ({
	metaData,
	upNext,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const { title, year, slug, instagramLinks, reelLinks } =
		metaData as TravelVideoMetaData;

	const upNextMetaData = upNext as TravelVideoMetaData[];

	if (!metaData) {
		return <ErrorContent />;
	}

	return (
		<>
			<PageContainer>
				<h1 className={styles.title}>{title}</h1>
				<h2 className={styles.year}>{year}</h2>

				<ReactPlayer
					url={`${publicCDNVideoUrl}${slug}.mp4`}
					controls
					pip
					playing={true}
					volume={0.3}
					height='100%'
					width='100%'
				/>

				{(instagramLinks || reelLinks) && (
					<div className={styles.socialContainer}>
						<h2>Instagram</h2>
						<Grid container className={styles.gridContainer}>
							{reelLinks &&
								reelLinks.map((reel) => {
									return (
										<Grid item key={reel} className={styles.embeddedPost}>
											<div className={styles.reelWrapper}>
												<InstagramEmbed url={reel} width={370} captioned />
											</div>
										</Grid>
									);
								})}

							{instagramLinks &&
								instagramLinks.map((link) => {
									return (
										<Grid item key={link} className={styles.embeddedPost}>
											<InstagramEmbed url={link} width={520} />
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
								videoMetaData={[...travelVideoMetaData].reverse()}
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
