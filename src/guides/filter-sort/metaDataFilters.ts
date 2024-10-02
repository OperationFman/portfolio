import { Languages, Tags, Topic, GuideMetaData } from "../types";

export const filterForTopic = (
	metaData: GuideMetaData[],
	topic: Topic,
): GuideMetaData[] => {
	return metaData.filter((data) => {
		return data.topic === topic;
	});
};

export const filterForLanguages = (
	metaData: GuideMetaData[],
	languages: Languages[],
): GuideMetaData[] => {
	return metaData.filter((data) => {
		if (!data.languages) {
			return false;
		}

		return data.languages.some((lang) => languages.indexOf(lang) >= 0);
	});
};

export const filterForTags = (
	metaData: GuideMetaData[],
	tags: Tags[],
): GuideMetaData[] => {
	return metaData.filter((data) => {
		if (!data.tags) {
			return false;
		}

		return data.tags.some((tag) => tags.indexOf(tag) >= 0);
	});
};
