import { GuideMetaData } from "../types";

export const sortByNewest = (metaData: GuideMetaData[]): GuideMetaData[] => {
	return metaData.sort((a, b) => b.created - a.created);
};

export const sortByOldest = (metaData: GuideMetaData[]): GuideMetaData[] => {
	return metaData.sort((a, b) => a.created - b.created);
};

export const sortByAlphabetical = (
	metaData: GuideMetaData[],
): GuideMetaData[] => {
	return metaData.sort((a, b) =>
		a.title.toLowerCase().localeCompare(b.title.toLowerCase()),
	);
};
