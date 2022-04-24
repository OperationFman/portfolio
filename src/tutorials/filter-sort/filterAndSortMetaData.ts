import { SortOptions } from "../types";
import {
  filterForLanguages,
  filterForTags,
  filterForTopic,
} from "./metaDataFilters";
import {
  sortByAlphabetical,
  sortByNewest,
  sortByOldest
} from "./metaDataSorts";
import { Languages, Tags, Topic, TutorialMetaData } from "../types";
import { getTutorialMetaData } from "../tutorialDataService";

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
