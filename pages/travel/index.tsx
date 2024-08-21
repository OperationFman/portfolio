import type { NextPage } from "next";
import Head from "next/head";
import { PageContainer } from "../../src/global/PageContainer";
import VideocamOffRoundedIcon from "@mui/icons-material/VideocamOffRounded";
import VideocamRoundedIcon from "@mui/icons-material/VideocamRounded";
import { Footer } from "../../utils/footer/Footer";
import styles from "../../src/travel/index.module.scss";
import { travelVideoMetaData } from "../../src/datasources/TravelMetaData";
import {
	filterTravelVideosWithBackupLink,
	groupVideosByYear,
	sortYears,
} from "../../src/travel/travelDataService";
import Zoom from "@mui/material/Zoom";
import { useEffect, useState } from "react";
import { SortButton } from "../../src/tutorials/components/buttons/SortButton";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import { SortOptions } from "../../src/tutorials/types";
import { VideoLibrary } from "../../src/travel/VideoLibrary";
import { Button, Tooltip } from "@mui/material";

const Travel: NextPage = () => {
	const [videoReadyOnly, setVideoReadyOnly] = useState(true);

	const filteredTravelVideos = videoReadyOnly
		? filterTravelVideosWithBackupLink(travelVideoMetaData)
		: travelVideoMetaData;

	const metaDataGroupedByYear = groupVideosByYear(filteredTravelVideos);

	const [sortBy, setSortBy] = useState<SortOptions>(SortOptions.Newest);
	const [sortedMetaData, setSortedMetaData] = useState(
		sortYears(sortBy, metaDataGroupedByYear),
	);

	const description =
		"Travel related content including completion map and travel videos, some public and some private of my experiences.";

	useEffect(() => {
		setSortedMetaData(sortYears(sortBy, metaDataGroupedByYear));
	}, [sortBy, videoReadyOnly]);

	return (
		<div>
			<Head>
				<title>Travel - Franklin V Moon</title>
				<meta name='Travel' content={description} />
				<link rel='icon' href='/favicon-yellow.ico' />
				<meta name='description' content={description} />
				<meta property='og:title' content='Franklin Von Moon Travel' />
				<meta property='og:description' content={description} />
				<meta
					property='og:image'
					content='https://github.com/OperationFman/portfolio/assets/42459707/6bbbbd0c-0ef1-460a-9a4a-cf71b7c5a813'
				/>
				<meta
					property='og:url'
					content='https://www.franklin-v-moon.dev/travel'
				/>
				<meta property='og:type' content='website' />
			</Head>

			<PageContainer>
				{sortedMetaData.map((metaData, index) => {
					{
						const year = metaData[0].year;

						return (
							<div
								key={`Videos from ${year}`}
								className={styles.libraryContainer}
								style={{
									animation: `fadeIn ${index}00ms ease-in-out`,
									opacity: 1,
								}}>
								<div className={styles.yearHeadingContainer}>
									<div className={styles.yearHeading}>
										<NavigateNextRoundedIcon
											style={{
												color: "yellow",
												height: "2.5rem",
												width: "2.5rem",
											}}
										/>
										<h2 className={styles.yearHeadingText}>{year}</h2>
									</div>
									{index === 0 && (
										<div className={styles.sortToggleContainer}>
											<Tooltip
												TransitionComponent={Zoom}
												title='Show all countries, including those without videos'>
												<Button
													className={styles.videoToggleContainer}
													onClick={() => setVideoReadyOnly(!videoReadyOnly)}>
													{videoReadyOnly ? (
														<VideocamRoundedIcon />
													) : (
														<VideocamOffRoundedIcon />
													)}
												</Button>
											</Tooltip>
											<SortButton
												setSortMetaDataBy={setSortBy}
												alphabetical={false}
											/>
										</div>
									)}
								</div>
								<VideoLibrary videoMetaData={metaData} />
							</div>
						);
					}
				})}
			</PageContainer>
			<Footer />
		</div>
	);
};

export default Travel;
