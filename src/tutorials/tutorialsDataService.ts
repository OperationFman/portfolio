import { programmingMetaData } from "./metadata/programmingMetaData";
import { agileMetaData } from "./metadata/agileMetaData";
import { infrastructureMetaData } from "./metadata/infrastructureMetaData";
import { Tags, Topic, TutorialMetaData } from "./types";
import { Languages } from "./types";

export enum SortOptions {
  Newest = "newest",
  Oldest = "oldest",
  Alphabetical = "alphabetical",
}

export const tutorialMetaData: TutorialMetaData[] = [
  ...programmingMetaData,
  ...agileMetaData,
  ...infrastructureMetaData,
];

export const orderByNewest = (
  metaData: TutorialMetaData[]
): TutorialMetaData[] => {
  return metaData.sort((a, b) => b.created - a.created);
};

export const orderByOldest = (
  metaData: TutorialMetaData[]
): TutorialMetaData[] => {
  return metaData.sort((a, b) => a.created - b.created);
};

export const orderByAlphabetical = (
  metaData: TutorialMetaData[]
): TutorialMetaData[] => {
  return metaData.sort((a, b) =>
    a.title.toLowerCase().localeCompare(b.title.toLowerCase())
  );
};

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
