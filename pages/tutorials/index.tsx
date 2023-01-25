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
import { Footer } from "../../utils/Footer";

const Transition = slideTransition("right");

const Tutorials: NextPage = () => {
	const [sortBy, setSortBy] = useState<SortOptions>(SortOptions.Newest);
	const [topicFilter, setTopicFilter] = useState<Topic | undefined>(undefined);
	const [languagesFilter, setFilteredLanguages] = useState([] as Languages[]);
	const [tagsFilter, setTagsFilter] = useState([] as Tags[]);
	const [metaData, setMetaData] = useState(
		filterAndSortMetaData(sortBy, topicFilter, languagesFilter, tagsFilter),
	);

	useEffect(() => {
		const preparedMetaData = filterAndSortMetaData(
			sortBy,
			topicFilter,
			languagesFilter,
			tagsFilter,
		);
		setMetaData(preparedMetaData);
	}, [sortBy, topicFilter, languagesFilter, tagsFilter]);

	const [showFilterMenu, setShowFilterMenu] = React.useState(false);


	return (
		<div>
			<Head>
				<title>Tutorials - Franklin V Moon</title>
				<meta
					name='Tutorials'
					content='Comprehensive training, guides and useful code snippets'
				/>
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
				)}
			</Dialog>

			<PageContainer>
				<div style={{ display: "flex", margin: "10px 30px", gap: "15px" }}>
					<SortButton setSortMetaDataBy={setSortBy} />
					<FilterButton setShowFilterMenu={setShowFilterMenu} />
				</div>

				<Grid container spacing={3} justifyContent='center'>
					{metaData.map((dataItem, index) => {
						return (
							<Fade
								in={true}
								key={dataItem.title}
								style={{ transitionDelay: `${index}20ms` }}
								unmountOnExit>
								<Grid item>
									<TutorialCard cardData={dataItem} accentColor={"#ce93d8"} />
								</Grid>
							</Fade>
						);
					})}
				</Grid>
			</PageContainer>
			<Footer />
		</div>
	);
};

export default Tutorials;
