import { Languages, Tags, Topic, TutorialMetaData } from "./types";

export const sortByNewest = (
  metaData: TutorialMetaData[]
): TutorialMetaData[] => {
  return metaData.sort((a, b) => b.created - a.created);
};

export const sortByOldest = (
  metaData: TutorialMetaData[]
): TutorialMetaData[] => {
  return metaData.sort((a, b) => a.created - b.created);
};

export const sortByAlphabetical = (
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

// TODO: Update so it returns only meta data that has ALL passed in languages
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
