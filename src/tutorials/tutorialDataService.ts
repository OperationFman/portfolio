import { TutorialContentItem, TutorialMetaData } from "./types";

import { DockerizeRepo } from "./database/DockerizeRepo";
import { TSNextJSSetup } from "./database/TSNextJSSetup";
import { TryCatchType } from "./database/TryCatchType";
import { ProjectWall } from "./database/ProjectWall.tsx";
import { TerraformDockerAWS } from "./database/TerraformDockerAWS";

// TODO: Iterate over the files and do this automatically
export const TutorialContent: TutorialContentItem[] = [
  DockerizeRepo,
  TSNextJSSetup,
  TryCatchType,
  ProjectWall,
  TerraformDockerAWS,
];

export const getTutorialMetaData = (): TutorialMetaData[] => {
  return TutorialContent.map((item) => item.metaData);
};
