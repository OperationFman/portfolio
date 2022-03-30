import { DockerizeRepo } from "./database/DockerizeRepo";
import { ProjectWall } from "./database/ProjectWall.tsx";
import { TerraformDockerAWS } from "./database/TerraformDockerAWS";
import { TryCatchType } from "./database/TryCatchType";
import { TSNextJSSetup } from "./database/TSNextJSSetup";
import {
  Languages,
  Tags,
  Topic,
  TutorialContentItem,
  TutorialMetaData,
} from "./types";

export const availableTopics: Topic[] = Object.values(Topic);
export const availableLanguages: Languages[] = Object.values(Languages);
export const availableTags: Tags[] = Object.values(Tags);

// TODO: Iterate over the files and do this automatically
const rawTutorialContent: TutorialContentItem[] = [
  DockerizeRepo,
  TSNextJSSetup,
  TryCatchType,
  ProjectWall,
  TerraformDockerAWS,
];

export const getTutorialMetaData = (
  contentItems: TutorialContentItem[] = rawTutorialContent
): TutorialMetaData[] => {
  return contentItems.map((item) => item.metaData);
};

export const getTutorialContentByLink = (
  link: string,
  contentItems: TutorialContentItem[] = rawTutorialContent
): TutorialContentItem | undefined => {
  const tutorialMetaDataAndPage = contentItems.find((item) => {
    return item.metaData.link === link;
  });

  return tutorialMetaDataAndPage;
};
