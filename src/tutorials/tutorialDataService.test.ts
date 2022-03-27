import { getTutorialMetaData, tutorialContent } from "./tutorialDataService";
import { Topic } from "./types";

describe("tutorialDataService", () => {
  describe("getTutorialMetaData", () => {
    const tutorialContent = [
      {
        dataBaseItem: {
          metaData: {
            title: "Meta Data Item 1",
            link: `/`,
            created: 1639982631,
            thumbnail: "/tutorials/test.png",
            subTitle: "Meta Data Item 1 Sub Title",
            topic: Topic.Infrastructure,
          },
          pageContent: () => {},
        },
      },
      {
        dataBaseItem2: {
          metaData: {
            title: "Meta Data Item 2",
            link: `/`,
            created: 1639982631,
            thumbnail: "/tutorials/test.png",
            subTitle: "Meta Data Item 2 Sub Title",
            topic: Topic.Infrastructure,
          },
          pageContent: () => {},
        },
      },
    ];
    it("returns an array of tutorialMetaData objects", () => {
      // TODO: Mock tutorialContent data
    });
  });
});
