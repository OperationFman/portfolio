import {
  Languages,
  Tags,
  Topic,
  TutorialContentItem,
  TutorialMetaData,
} from "../types";

const metaData: TutorialMetaData = {
  title: "Try & Catch by a Type",
  link: "try-catch-by-type",
  created: 1640257315,
  thumbnail: "/tutorials/try-catch.png",
  subTitle:
    "Simple technique if you ever need to handle a thrown error differently because it has a type. Use case: It might be an error you'd like the user to see.",
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

export const TryCatchType: TutorialContentItem = {
  metaData,
  pageContent,
};
