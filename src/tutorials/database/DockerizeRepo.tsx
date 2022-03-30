import { Button } from "@mui/material";
import {
  Languages,
  Tags,
  Topic,
  TutorialContentItem,
  TutorialMetaData,
} from "../types";

const metaData: TutorialMetaData = {
  title: "How To Dockerize Your Repo",
  link: `dockerize-your-repo`,
  created: 1639982631,
  thumbnail: "/tutorials/test.png",
  subTitle: "Understand and build containers that run your app anywhere",
  topic: Topic.Infrastructure,
  languages: [Languages.Docker],
  tags: [Tags.StepByStep],
};

const pageContent = (): JSX.Element => {
  return (
    <>
      <h1>Test Test test</h1>
      <Button>Hello World</Button>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    </>
  );
};

export const DockerizeRepo: TutorialContentItem = {
  metaData,
  pageContent,
};
