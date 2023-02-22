import { Dialog, Fade, Grid } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { PageContainer } from "../../src/global/PageContainer";
import { FilterButton } from "../../src/tutorials/components/buttons/FilterButton";
import { SortButton } from "../../src/tutorials/components/buttons/SortButton";
import { TutorialCard } from "../../src/tutorials/components/cards/TutorialCard";
import { slideTransition } from "../../src/tutorials/components/filter/filterAnimations";
import { FilterModal } from "../../src/tutorials/components/filter/FilterModal";
import { filterAndSortMetaData } from "../../src/tutorials/filter-sort/filterAndSortMetaData";
import { Languages, SortOptions, Tags, Topic } from "../../src/tutorials/types";
import { Footer } from "../../utils/footer/Footer";

import styles from "../../src/tutorials/index.module.scss";
import ScrollAnimation from "react-animate-on-scroll";
import { getTutorialMetaData } from "../../src/tutorials/tutorialDataService";

const Transition = slideTransition("right");

const Tutorials: NextPage = () => {
	const [sortBy, setSortBy] = useState<SortOptions>(SortOptions.Newest);
	const [topicFilter, setTopicFilter] = useState<Topic | undefined>(undefined);
	const [languagesFilter, setFilteredLanguages] = useState([] as Languages[]);
	const [tagsFilter, setTagsFilter] = useState([] as Tags[]);
	const [metaData, setMetaData] = useState(
		filterAndSortMetaData(sortBy, topicFilter, languagesFilter, tagsFilter),
	);
	const [disableClearAll, setDisableClearAll] = useState(true);

	const handleClearAll = () => {
		setTopicFilter(undefined);
		setFilteredLanguages([]);
		setTagsFilter([]);
	};

	useEffect(() => {
		const preparedMetaData = filterAndSortMetaData(
			sortBy,
			topicFilter,
			languagesFilter,
			tagsFilter,
		);
		setMetaData(preparedMetaData);
		setDisableClearAll(preparedMetaData === getTutorialMetaData());
	}, [sortBy, topicFilter, languagesFilter, tagsFilter]);

	const [showFilterMenu, setShowFilterMenu] = React.useState(false);

	const description = "Comprehensive training, guides and useful code snippets";
	return (
		<>
			<div className={styles.pageContainer}>
				<Head>
					<title>Tutorials - Franklin V Moon</title>
					<meta name='Tutorials' content={description} />
					<link rel='icon' href='/favicon-purple.ico' />
					<meta name='description' content={description} />
					<meta
						property='og:title'
						content='Franklin Von Moon Portfolio Tutorials'
					/>
					<meta property='og:description' content={description} />
					<meta
						property='og:image'
						content='https://user-images.githubusercontent.com/42459707/217668165-2975c163-f020-4a13-a8d9-3087d043f834.png'
					/>
					<meta
						property='og:url'
						content='https://www.franklin-v-moon.dev/tutorials'
					/>
					<meta property='og:type' content='website' />
				</Head>

				<Dialog
					open={showFilterMenu}
					TransitionComponent={Transition}
					keepMounted
					onClose={() => setShowFilterMenu(false)}>
					{FilterModal(
						topicFilter,
						setTopicFilter,
						languagesFilter,
						setFilteredLanguages,
						tagsFilter,
						setTagsFilter,
						setShowFilterMenu,
						disableClearAll,
						handleClearAll,
					)}
				</Dialog>

				<PageContainer>
					<div className={styles.filterContainer}>
						<div className={styles.filters}>
							<FilterButton setShowFilterMenu={setShowFilterMenu} />
							<SortButton setSortMetaDataBy={setSortBy} />
						</div>
					</div>

					<Grid container className={styles.gridContainer}>
						{metaData.map((dataItem, index) => {
							return (
								<ScrollAnimation
									animateIn='fadeIn'
									animateOnce
									key={index}
									delay={index * 50}>
									<Grid item>
										<TutorialCard cardData={dataItem} />
									</Grid>
								</ScrollAnimation>
							);
						})}
					</Grid>
				</PageContainer>
			</div>
			<Footer />
		</>
	);
};

export default Tutorials;
