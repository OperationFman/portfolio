import { programmingMetaData } from "./metadata/programmingMetaData";
import { agileMetaData } from "./metadata/agileMetaData";
import { infraMetaData } from "./metadata/infrastructureMetaData";
import { TutorialMetaData } from "./types";

const tutorialMetaData: TutorialMetaData[] = [
  ...programmingMetaData,
  ...agileMetaData,
  ...infraMetaData,
];

// Functions that return the above but in
//   a specific order for the tutorials page to show
