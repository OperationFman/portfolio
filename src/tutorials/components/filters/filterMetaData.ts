import { Dispatch } from "react";
import {
    filterForLanguages,
    filterForTags,
    filterForTopic
} from "../../filterAndSort";
import { Languages, Tags, Topic, TutorialMetaData } from "../../types";

export const filterMetaData = (
  sortedMetaData: TutorialMetaData[],
  topicFilter: Topic | undefined,
  languagesFilter: Languages[],
  tagsFilter: Tags[],
  setFilteredData: Dispatch<React.SetStateAction<TutorialMetaData[]>>
): void => {
  let filteredData = sortedMetaData;

  if (topicFilter) {
    filteredData = filterForTopic(filteredData, topicFilter);
  }

  if (languagesFilter.length) {
    filteredData = filterForLanguages(filteredData, languagesFilter);
  }

  if (tagsFilter.length) {
    filteredData = filterForTags(filteredData, tagsFilter);
  }

  setFilteredData(filteredData);
};
