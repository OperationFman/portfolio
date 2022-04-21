import { TutorialMetaData } from "../../../tutorials/types";


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
  return metaData.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase())
  );
};
