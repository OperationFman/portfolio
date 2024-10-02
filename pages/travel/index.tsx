import type { NextPage } from "next";
import Head from "next/head";
import { PageContainer } from "../../src/global/PageContainer";
import ExtensionOffOutlinedIcon from "@mui/icons-material/ExtensionOffOutlined";
import ExtensionOffIcon from "@mui/icons-material/ExtensionOff";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import { Footer } from "../../utils/footer/Footer";
import styles from "../../src/travel/index.module.scss";
import { tierTitles } from "../../src/datasources/TravelMetaData";
import {
	filterTravelVideosWithBackupLink,
	groupVideosByRanked,
	groupVideosByYear,
	hasAtLeastOneMissingVideoLink,
	sortYears,
	enhancedTravelVideoMetaData,
} from "../../src/travel/travelDataService";
import Zoom from "@mui/material/Zoom";
import { useEffect, useState } from "react";
import { SortButton } from "../../src/guides/components/buttons/SortButton";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import { SortOptions } from "../../src/guides/types";
import { VideoLibrary } from "../../src/travel/VideoLibrary";
import { Button, Tooltip } from "@mui/material";
import { setDark } from "../../utils/configureCss/configureCss";

const Travel: NextPage = () => {
	const [videoReadyOnly, setVideoReadyOnly] = useState(true);
	const [rankedVideos, setRankedVideos] = useState(false);

	const enhancedMetaData = enhancedTravelVideoMetaData();

	const filteredTravelVideos = videoReadyOnly
		? filterTravelVideosWithBackupLink(enhancedMetaData)
		: enhancedMetaData;

	const metaDataGroupedByYear = groupVideosByYear(filteredTravelVideos);

	const [sortBy, setSortBy] = useState<SortOptions>(SortOptions.Newest);
	const [sortedMetaData, setSortedMetaData] = useState(
		sortYears(sortBy, metaDataGroupedByYear),
	);

	const description =
		"Travel related content including completion map and travel videos, some public and some private of my experiences.";

	useEffect(() => {
		const searchParams = new URLSearchParams(window.location.search);
		const rankedParam = searchParams.get("ranked");
		const showAllParam = searchParams.get("ShowAll");
		setRankedVideos(rankedParam === "true");
		setVideoReadyOnly(showAllParam !== "true");
	}, []);

	useEffect(() => {
		setSortedMetaData([]);
		setTimeout(() => {
			if (rankedVideos) {
				setSortedMetaData(groupVideosByRanked());
			} else {
				setSortedMetaData(sortYears(sortBy, metaDataGroupedByYear));
			}
		}, 50);
	}, [videoReadyOnly, sortBy, rankedVideos]);

	useEffect(() => {
		setSortedMetaData(sortYears(sortBy, metaDataGroupedByYear));
	}, [videoReadyOnly, sortBy]);

	const toggleRanked = () => {
		setRankedVideos(!rankedVideos);
		setVideoReadyOnly(true);
		const searchParams = new URLSearchParams(window.location.search);
		if (rankedVideos) {
			searchParams.delete("ranked");
		} else {
			searchParams.delete("ShowAll");
			searchParams.set("ranked", "true");
		}
		window.history.replaceState(
			null,
			"",
			`${window.location.pathname}?${searchParams.toString()}`,
		);
	};

	const toggleShowAll = () => {
		setVideoReadyOnly(!videoReadyOnly);
		const searchParams = new URLSearchParams(window.location.search);
		if (!videoReadyOnly) {
			searchParams.delete("ShowAll");
		} else {
			searchParams.set("ShowAll", "true");
		}
		window.history.replaceState(
			null,
			"",
			`${window.location.pathname}?${searchParams.toString()}`,
		);
	};

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
					content='https://private-user-images.githubusercontent.com/42459707/367673150-764558d9-5f59-4574-9268-728ad7498b2f.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjY0NzE5OTYsIm5iZiI6MTcyNjQ3MTY5NiwicGF0aCI6Ii80MjQ1OTcwNy8zNjc2NzMxNTAtNzY0NTU4ZDktNWY1OS00NTc0LTkyNjgtNzI4YWQ3NDk4YjJmLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA5MTYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwOTE2VDA3MjgxNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWNiMGU4YTc5OTkwMGZhZTZjYzkwY2YxNTBkZTI0ZTBiOTEzODUwMTBmMWRlNmIzOWJjOGNiOTJlODhiNmE1NmQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.VCNSD5LCx1ES3Cko_u28azndr9Jps0Z7ATg0hwsIVXQ'
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
										<h2 className={styles.yearHeadingText}>
											{rankedVideos ? tierTitles[index] : year}
										</h2>
									</div>
									{index === 0 && (
										<div className={styles.sortToggleContainer}>
											<Tooltip
												TransitionComponent={Zoom}
												title='Ranked Best to Worst'>
												<Button
													className={styles.videoToggleContainer}
													onClick={() => toggleRanked()}>
													{rankedVideos ? (
														<EmojiEventsIcon className={styles.defaultYellow} />
													) : (
														<EmojiEventsOutlinedIcon />
													)}
												</Button>
											</Tooltip>
											<div className={styles.sortToggleContainer}>
												{hasAtLeastOneMissingVideoLink() && (
													<Tooltip
														TransitionComponent={Zoom}
														title='Show Incomplete Videos'>
														<Button
															className={styles.videoToggleContainer}
															onClick={() => toggleShowAll()}>
															{videoReadyOnly ? (
																<ExtensionOffOutlinedIcon />
															) : (
																<ExtensionOffIcon
																	className={styles.defaultYellow}
																/>
															)}
														</Button>
													</Tooltip>
												)}
												<div className={styles.sortContainer}>
													<SortButton
														setSortMetaDataBy={
															rankedVideos ? () => {} : setSortBy
														}
														alphabetical={false}
													/>
												</div>
												{rankedVideos && (
													<div className={setDark(styles, "greyout")} />
												)}
											</div>
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
