import { testDataTutorialContentItems } from "./testhelpers/tutorialContentItems";
import {
  getTutorialContentByLink,
  getTutorialMetaData,
} from "./tutorialDataService";
import { Languages, Tags, Topic } from "./types";

describe("tutorialDataService", () => {
  describe("getTutorialMetaData", () => {
    it("returns an array of tutorialMetaData objects", () => {
      const initialData = testDataTutorialContentItems();
      const expected = [
        {
          title: "Try & Catch by a Type",
          link: "try-catch-by-type",
          created: 1640257315,
          thumbnail: "/tutorials/try-catch.png",
          subTitle:
            "Simple technique if you ever need to handle a thrown error differently because it has a type. Use case: It might be an error you'd like the user to see.",
          topic: Topic.Programming,
          languages: [],
          tags: [],
        },
        {
          title: "First Item",
          link: "desired-item-link",
          created: 1640257315,
          thumbnail: "/tutorials/test.png",
          subTitle: "First Item Subtitle",
          topic: Topic.Programming,
          languages: ["Typescript"],
          tags: ["How To"],
        },
        {
          title: "Deploy to AWS EC2 using Terraform and Docker ",
          link: "deploy-to-aws-ec2-using-terraform-and-docker",
          created: 1639982632,
          thumbnail: "/tutorials/docker-aws-terraform.jpeg",
          subTitle:
            "Step-by-step instructions to dockerize your repo and use terraform to spin up AWS and host your project from scratch",
          topic: Topic.Agile,
          languages: [],
          tags: [],
        },
      ];

      const result = getTutorialMetaData(initialData);
      expect(result).toEqual(expected);
    });
  });

  describe("getTutorialContentByLink", () => {
    it("returns the metaData and pageContent of a passed in link string", () => {
      const initialData = testDataTutorialContentItems();
      const expected = {
        metaData: {
          title: "First Item",
          link: "desired-item-link",
          created: 1640257315,
          thumbnail: "/tutorials/test.png",
          subTitle: "First Item Subtitle",
          topic: Topic.Programming,
          languages: [Languages.Typescript],
          tags: [Tags.StepByStep],
        },
        pageContent: (): JSX.Element => {
          return (
            <>
              <h1>Desired Item Page Content</h1>
            </>
          );
        },
      };

      const result = getTutorialContentByLink("desired-item-link", initialData);

      // TODO: Shouldn't need to stringify
      expect(JSON.stringify(result)).toEqual(JSON.stringify(expected));
    });
  });
});
