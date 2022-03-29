import {
  Languages,
  Tags,
  Topic,
  TutorialContentItem,
  TutorialMetaData,
} from "../types";

const metaData: TutorialMetaData = {
  title: "Quickly Setup NextJs ES6 with Typescript and more stuff",
  link: `quickly-setup-next-js-with-typescript`,
  created: 1642762915,
  thumbnail: "/tutorials/test.png",
  subTitle:
    "Get up-and-running with a cleaned up but ready to go repo using nextJs. Includes setting up TS properly, clearing boilerplate, structuring components, routing, setting up an API and SEO consideration",
  topic: Topic.Programming,
  languages: [Languages.Typescript],
  tags: [Tags.StepByStep],
};

const pageContent = (): JSX.Element => {
  return (
    <>
      <h1>Empty Page</h1>
    </>
  );
};

export const TSNextJSSetup: TutorialContentItem = {
  metaData,
  pageContent,
};
