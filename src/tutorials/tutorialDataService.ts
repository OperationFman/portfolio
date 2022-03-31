import { tutorialMetaData } from "./TutorialMetaData";
import {
  Languages,
  Tags,
  Topic, TutorialMetaData
} from "./types";

export const availableTopics: Topic[] = Object.values(Topic);
export const availableLanguages: Languages[] = Object.values(Languages);
export const availableTags: Tags[] = Object.values(Tags);

export const getTutorialMetaData = (): TutorialMetaData[] => {
  return tutorialMetaData;
};

export const getTutorialMetaDataByLink = (
  link: string
): TutorialMetaData | undefined => {
  return tutorialMetaData.find((item) => {
    return item.link === link;
  });
};
