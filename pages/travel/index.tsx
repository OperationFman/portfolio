import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import { PageContainer } from "../../src/global/PageContainer";
import { Footer } from "../../utils/footer/Footer";
import styles from "../../src/travel/index.module.scss";
import {
	allByBest,
	allByDanger,
	allByFood,
	allByWorst,
	allCountriesList,
	allNewestFirst,
	allOldestFirst,
	countTotalCountries,
	funniestOnly,
	searchResult,
} from "../../src/travel/travelDataService";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import { VideoLibrary } from "../../src/travel/VideoLibrary";
import { ButtonBase, styled, Tooltip } from "@mui/material";
import { useEffect, useState } from "react";
import { SortBy } from "../../src/travel/types";
import { TravelSort } from "../../src/travel/components/TravelSort";
import { SearchBar } from "../../src/travel/components/SearchBar";
import { travelVideoMetaData } from "../../src/datasources/TravelMetaData";
import { isClientSide } from "../../utils/isClientSide";
import router from "next/router";

const Travel: NextPage = () => {
	const [sortedMetaData, setSortedMetaData] = useState(allOldestFirst());
	const [sortSelection, setSortSelection] = useState(SortBy.Newest);
	const [searchingText, setSearchingText] = useState<string>("");

	const sortFunctions = {
		[SortBy.Newest]: allNewestFirst,
		[SortBy.Oldest]: allOldestFirst,
		[SortBy.Best]: allByBest,
		[SortBy.Worst]: allByWorst,
		[SortBy.Food]: allByFood,
		[SortBy.Danger]: allByDanger,
		[SortBy.Funniest]: funniestOnly,
		[SortBy.Searching]: () => searchResult(searchingText),
	};

	useEffect(() => {
		setSortedMetaData(sortFunctions[sortSelection]());
	}, [sortSelection, searchingText]);

	useEffect(() => {
		setSortSelection(searchingText ? SortBy.Searching : SortBy.Newest);
	}, [searchingText]);

	useEffect(() => {
		if (isClientSide()) {
			const searchParams = new URLSearchParams(window.location.search);
			const sortParam = searchParams.get("SortBy");

			if (sortParam) {
				const sortEnum = Object.values(SortBy).find(
					(enumValue) => enumValue.toLowerCase() === sortParam.toLowerCase(),
				);

				if (sortEnum) {
					setSortSelection(sortEnum);
				}
			}
		}
	}, []);

	const InvisibleImageButton = styled(ButtonBase)(({ theme }) => ({
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: "transparent",
		padding: 0,
		border: "none",
		"&:hover, &.Mui-focusVisible": {
			zIndex: 1,
			"& .MuiImage-root": {
				transform: "scale(1.01)",
				transition: theme.transitions.create("transform", {
					duration: theme.transitions.duration.shortest,
				}),
			},
			"& .MuiTouchRipple-root": {
				opacity: 0.15,
			},
		},
		"& .MuiTouchRipple-root": {
			color: "rgba(255, 255, 255, 0.3)",
		},
	}));

	const handleOpenBlankPage = () => {
		router.push("/travel/world-map");
	};

	const description =
		"Travel related content including completion map and travel videos, some public and some private of my experiences.";

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
				<div style={{ position: "relative", width: "100%", height: "auto" }}>
					<Image
						src='/travel/WorldDotted.png'
						alt='A map of the world with everywhere Ive been marked'
						width={3840}
						height={1878}
						layout='responsive'
						className={styles.worldMap}
					/>
					<InvisibleImageButton
						focusRipple
						onClick={handleOpenBlankPage}
						aria-label='Open a blank page'></InvisibleImageButton>
				</div>
				<div className={styles.directoryContainer}>
					<div className={styles.countriesBeenContainer}>
						{!searchingText && (
							<>
								<p className={styles.directorySubText}>
									{travelVideoMetaData.length - 1} Videos
								</p>
								<div className={styles.directorySubtextDivider}>|</div>
								<p className={styles.directorySubText}>
									{countTotalCountries()} Countries
								</p>
							</>
						)}
					</div>

					<div className={styles.sortToggleContainer}>
						<div className={styles.searchContainer}>
							<SearchBar
								searchArray={allCountriesList()}
								searchingText={searchingText}
								setSearchingText={setSearchingText}
							/>
						</div>
						<TravelSort setSortMetaDataBy={setSortSelection} />
					</div>
				</div>

				{sortedMetaData.map((metaData, index) => {
					{
						return (
							<div
								key={`Videos from ${metaData.heading}`}
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
											{metaData.heading}
										</h2>
									</div>
								</div>
								<VideoLibrary videoMetaData={metaData.grouping} />
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
