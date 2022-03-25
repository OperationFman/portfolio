import { Languages, Tags, Topic, TutorialContentItem, TutorialMetaData } from "../types";

const metaData: TutorialMetaData = {
  title: "Project Wall: Single Source of Truth",
  link: `/agile/project-wall-single-source-of-truth`,
  created: 1640241832,
  thumbnail: "/tutorials/project-wall.jpeg",
  subTitle:
    "Using a visualization tool like Miro keep your team in the loop, quickly share information and bring creativity back",
  topic: Topic.Agile,
  tags: [Tags.Essay],
};

const pageContent = (): JSX.Element => {
  return (
    <>
      <h1>Empty Page</h1>
    </>
  );
};

export const ProjectWall: TutorialContentItem = {
  metaData,
  pageContent,
};
