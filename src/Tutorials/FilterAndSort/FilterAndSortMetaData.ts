import {
  filterForLanguages,
  filterForTags,
  filterForTopic,
} from "./metaDataFilters";
import {
  sortByAlphabetical,
  sortByNewest,
  sortByOldest,
} from "./metaDataSorts";
import { getTutorialMetaData } from "../tutorialDataService";
import {
  Languages,
  SortOptions,
  Tags,
  Topic,
  TutorialMetaData,
} from "../types";

export const filterAndSortMetaData = (
  sortMetaDataBy: SortOptions,
  topicFilter: Topic | undefined,
  languagesFilter: Languages[],
  tagsFilter: Tags[]
): TutorialMetaData[] => {
  let filteredData = getTutorialMetaData();

  if (topicFilter) {
    filteredData = filterForTopic(filteredData, topicFilter);
  }

  if (languagesFilter.length) {
    filteredData = filterForLanguages(filteredData, languagesFilter);
  }

  if (tagsFilter.length) {
    filteredData = filterForTags(filteredData, tagsFilter);
  }

  if (sortMetaDataBy === SortOptions.Newest) {
    return sortByNewest(filteredData);
  }

  if (sortMetaDataBy === SortOptions.Oldest) {
    return sortByOldest(filteredData);
  }

  if (sortMetaDataBy === SortOptions.Alphabetical) {
    return sortByAlphabetical(filteredData);
  }

  return filteredData;
};
