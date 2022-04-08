import { Dialog, Grid } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { PageContainer } from "../../src/global/PageContainer";
import { FilterButton } from "../../src/tutorials/components/buttons/FilterButton";
import { SortButton } from "../../src/tutorials/components/buttons/SortButton";
import { TutorialCard } from "../../src/tutorials/components/cards/TutorialCard";
import { FilterModal } from "../../src/tutorials/components/FilterModal";
import { filterAndSortMetaData } from "../../src/tutorials/filter-sort/filterAndSortMetaData";
import { Languages, SortOptions, Tags, Topic } from "../../src/tutorials/types";
import { slideTransition } from "../../utils/muiSpecificLogic";

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
        <title>Tutorials</title>
        <meta
          name="Tutorials Blog"
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
                <TutorialCard cardData={dataItem} accentColor={"#ce93d8"} />
              </Grid>
            );
          })}
        </Grid>
      </PageContainer>
    </div>
  );
};

export default Tutorials;
