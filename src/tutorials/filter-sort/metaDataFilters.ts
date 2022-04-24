import { Languages, Tags, Topic, TutorialMetaData } from "../types";

export const filterForTopic = (
  metaData: TutorialMetaData[],
  topic: Topic
): TutorialMetaData[] => {
  return metaData.filter((data) => {
    return data.topic === topic;
  });
};

export const filterForLanguages = (
  metaData: TutorialMetaData[],
  languages: Languages[]
): TutorialMetaData[] => {
  return metaData.filter((data) => {
    if (!data.languages) {
      return false;
    }

    return data.languages.some((lang) => languages.indexOf(lang) >= 0);
  });
};

export const filterForTags = (
  metaData: TutorialMetaData[],
  tags: Tags[]
): TutorialMetaData[] => {
  return metaData.filter((data) => {
    if (!data.tags) {
      return false;
    }

    return data.tags.some((tag) => tags.indexOf(tag) >= 0);
  });
};
