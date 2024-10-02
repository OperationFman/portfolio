import { guideMetaData } from "../datasources/GuideMetaData";
import { Languages, Tags, Topic, GuideMetaData } from "./types";

export const availableTopics: Topic[] = Object.values(Topic);
export const availableLanguages: Languages[] = Object.values(Languages);
export const availableTags: Tags[] = Object.values(Tags);

export const getGuideMetaData = (): GuideMetaData[] => {
	return guideMetaData;
};

export const getGuideMetaDataByLink = (
	link: string,
	metaData: GuideMetaData[] = getGuideMetaData(),
): GuideMetaData | undefined => {
	return metaData.find((item) => {
		return item.link === link;
	});
};
