import { Dispatch } from "react";
import {
    filterForLanguages,
    filterForTags,
    filterForTopic
} from "../../filterAndOrdering";
import { Languages, Tags, Topic, TutorialMetaData } from "../../types";

export const filterMetaData = (
  sortedMetaData: TutorialMetaData[],
  topicFilter: Topic | undefined,
  filteredLanguages: Languages[],
  tagsFilter: Tags[],
  setFilteredData: Dispatch<React.SetStateAction<TutorialMetaData[]>>
): void => {
  let filteredData = sortedMetaData;

  if (topicFilter) {
    filteredData = filterForTopic(filteredData, topicFilter);
  }

  if (filteredLanguages.length) {
    filteredData = filterForLanguages(filteredData, filteredLanguages);
  }

  if (tagsFilter.length) {
    filteredData = filterForTags(filteredData, tagsFilter);
  }

  setFilteredData(filteredData);
};
