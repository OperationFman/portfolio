import { Dialog, Grid } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { PageContainer } from "../../src/global/PageContainer";
import { FilterButton } from "../../src/guides/components/buttons/FilterButton";
import { SortButton } from "../../src/guides/components/buttons/SortButton";
import { GuideCard } from "../../src/guides/components/cards/GuideCard";
import { slideTransition } from "../../src/guides/components/filter/filterAnimations";
import { FilterModal } from "../../src/guides/components/filter/FilterModal";
import { filterAndSortMetaData } from "../../src/guides/filter-sort/filterAndSortMetaData";
import { Languages, SortOptions, Tags, Topic } from "../../src/guides/types";
import { Footer } from "../../utils/footer/Footer";

import styles from "../../src/guides/index.module.scss";
import { getGuideMetaData } from "../../src/guides/guideDataService";

const Transition = slideTransition("right");

const Guides: NextPage = () => {
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
		setDisableClearAll(preparedMetaData === getGuideMetaData());
	}, [sortBy, topicFilter, languagesFilter, tagsFilter]);

	const [showFilterMenu, setShowFilterMenu] = React.useState(false);

	const description = "Comprehensive training, guides and useful code snippets";
	return (
		<>
			<div className={styles.pageContainer}>
				<Head>
					<title>Guides - Franklin V Moon</title>
					<meta name='Guides' content={description} />
					<link rel='icon' href='/favicon-green.ico' />
					<meta name='description' content={description} />
					<meta
						property='og:title'
						content='Franklin Von Moon Portfolio Guides'
					/>
					<meta property='og:description' content={description} />
					<meta
						property='og:image'
						content='https://user-images.githubusercontent.com/42459707/217668165-2975c163-f020-4a13-a8d9-3087d043f834.png'
					/>
					<meta
						property='og:url'
						content='https://www.franklin-v-moon.dev/guides'
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
								<Grid item key={index}>
									<GuideCard cardData={dataItem} />
								</Grid>
							);
						})}
					</Grid>
				</PageContainer>
			</div>
			<Footer />
		</>
	);
};

export default Guides;
