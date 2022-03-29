import {
  Languages,
  Tags,
  Topic,
  TutorialContentItem,
  TutorialMetaData,
} from "../types";

const metaData: TutorialMetaData = {
  title: "Short Title (<30 Characters",
  link: "/desired-link",
  created: 1639982631,
  thumbnail: "/tutorials/test.png",
  subTitle: "Short explaining of content, or summary or sales pitch",
  topic: Topic.Programming,
  languages: [],
  tags: [],
};

const pageContent = (): JSX.Element => {
  return (
    <>
      <h1>Empty Page</h1>
    </>
  );
};

export const _TEMPLATE: TutorialContentItem = {
  metaData,
  pageContent,
};
