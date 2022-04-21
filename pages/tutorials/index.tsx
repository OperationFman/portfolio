import { Dialog, Grid } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { PageContainer } from "../../src/components/PageContainer";
import { FilterButton } from "../../src/components/buttons/FilterButton";
import { SortButton } from "../../src/components/buttons/SortButton";
import { FeedCard } from "../../src/components/feed/FeedCard";
import { FilterModal } from "../../src/tutorials/filter/filter-modal/FilterModal";
import { filterAndSortMetaData } from "../../src/tutorials/filter/filterAndSortMetaData";
import { Languages, Tags, Topic } from "../../src/tutorials/types";
import { SortOptions } from "../../src/components/feed/sort/types";
import { slideTransition } from "../../src/tutorials/filter/filter-modal/animations";
import { tutorialFeedCardFormatting } from "../../src/tutorials/tutorialFeedCardStyle";

const Transition = slideTransition("right");

const Tutorials: NextPage = () => {
  const [sortBy, setSortBy] = useState<SortOptions>(SortOptions.Newest);
  const [topicFilter, setTopicFilter] = useState<Topic | undefined>(undefined);
  const [languagesFilter, setFilteredLanguages] = useState([] as Languages[]);
  const [tagsFilter, setTagsFilter] = useState([] as Tags[]);
  const [metaData, setMetaData] = useState(
    filterAndSortMetaData(sortBy, topicFilter, languagesFilter, tagsFilter)
  );

  useEffect(() => {
    const preparedMetaData = filterAndSortMetaData(
      sortBy,
      topicFilter,
      languagesFilter,
      tagsFilter
    );
    setMetaData(preparedMetaData);
  }, [sortBy, topicFilter, languagesFilter, tagsFilter]);

  const [showFilterMenu, setShowFilterMenu] = React.useState(false);
  const handleCloseFilterMenu = () => {
    setShowFilterMenu(false);
  };

  return (
    <div>
      <Head>
        <title>Tutorials - Franklin V Moon</title>
        <meta
          name="Tutorials"
          content="Blog containing all my guides, stories and snippets"
        />
      </Head>

      <Dialog
        open={showFilterMenu}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseFilterMenu}
      >
        {FilterModal(
          topicFilter,
          setTopicFilter,
          languagesFilter,
          setFilteredLanguages,
          tagsFilter,
          setTagsFilter
        )}
      </Dialog>

      <PageContainer>
        <div style={{ display: "flex", margin: "10px 30px", gap: "15px" }}>
          <SortButton setSortMetaDataBy={setSortBy} />
          <FilterButton setShowFilterMenu={setShowFilterMenu} />
        </div>

        <Grid container spacing={3} justifyContent="center">
          {metaData.map((dataItem) => {
            return (
              <Grid item key={dataItem.title}>
                <FeedCard formatting={tutorialFeedCardFormatting} cardData={dataItem} />
              </Grid>
            );
          })}
        </Grid>
      </PageContainer>
    </div>
  );
};

export default Tutorials;
