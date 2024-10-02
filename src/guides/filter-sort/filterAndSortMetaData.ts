import { SortOptions } from "../types";
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
import { Languages, Tags, Topic, GuideMetaData } from "../types";
import { getGuideMetaData } from "../guideDataService";

export const filterAndSortMetaData = (
	sortMetaDataBy: SortOptions,
	topicFilter: Topic | undefined,
	languagesFilter: Languages[],
	tagsFilter: Tags[],
): GuideMetaData[] => {
	let filteredData = getGuideMetaData();

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
