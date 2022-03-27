import { Dispatch } from "react";
import {
  sortByAlphabetical,
  sortByNewest,
  sortByOldest,
} from "../../filterAndSort";
import { TutorialMetaData, SortOptions } from "../../types";

export const sortMetaData = (
  startingData: TutorialMetaData[],
  sortBy: SortOptions,
  setSortedMetaData: Dispatch<React.SetStateAction<TutorialMetaData[]>>
): void => {
  switch (sortBy) {
    case SortOptions.Newest:
      setSortedMetaData(sortByNewest(startingData));
      break;
    case SortOptions.Oldest:
      setSortedMetaData(sortByOldest(startingData));
      break;
    case SortOptions.Alphabetical:
      setSortedMetaData(sortByAlphabetical(startingData));
      break;
  }
};
