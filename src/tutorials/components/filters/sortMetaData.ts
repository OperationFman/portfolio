import { Dispatch } from "react";
import {
  orderByAlphabetical,
  orderByNewest,
  orderByOldest,
} from "../../filterAndOrdering";
import { TutorialMetaData, SortOptions } from "../../types";

export const sortMetaData = (
  startingData: TutorialMetaData[],
  sortBy: SortOptions,
  setSortedMetaData: Dispatch<React.SetStateAction<TutorialMetaData[]>>
): void => {
  switch (sortBy) {
    case SortOptions.Newest:
      setSortedMetaData(orderByNewest(startingData));
      break;
    case SortOptions.Oldest:
      setSortedMetaData(orderByOldest(startingData));
      break;
    case SortOptions.Alphabetical:
      setSortedMetaData(orderByAlphabetical(startingData));
      break;
  }
};
