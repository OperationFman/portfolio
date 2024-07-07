import type { NextPage } from "next";
import Head from "next/head";
import { PageContainer } from "../../src/global/PageContainer";
import { Footer } from "../../utils/footer/Footer";
import styles from "../../src/travel/index.module.scss";
import { travelVideoMetaData } from "../../src/datasources/TravelMetaData";
import {
	groupVideosByYear,
	sortYears,
} from "../../src/travel/travelDataService";
import { useEffect, useState } from "react";
import { SortButton } from "../../src/tutorials/components/buttons/SortButton";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import { SortOptions } from "../../src/tutorials/types";
import { VideoLibrary } from "../../src/travel/VideoLibrary";

const Travel: NextPage = () => {
	const metaDataGroupedByYear = groupVideosByYear(travelVideoMetaData);

	const [sortBy, setSortBy] = useState<SortOptions>(SortOptions.Newest);
	const [sortedMetaData, setSortedMetaData] = useState(
		sortYears(sortBy, metaDataGroupedByYear),
	);

	const description =
		"Travel related content including completion map and travel videos, some public and some private of my experiences.";

	useEffect(() => {
		setSortedMetaData(sortYears(sortBy, metaDataGroupedByYear));
	}, [sortBy]);

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
				<SortButton setSortMetaDataBy={setSortBy} alphabetical={false} />

				{sortedMetaData.map((metaData) => {
					{
						const year = metaData[0].year;

						return (
							<div
								key={`Videos from ${year}`}
								className={styles.libraryContainer}>
								<div className={styles.yearHeadingContainer}>
									<NavigateNextRoundedIcon
										style={{ color: "yellow", height: "50px", width: "50px" }}
									/>

									<h2 className={styles.yearHeading}>{year}</h2>
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
