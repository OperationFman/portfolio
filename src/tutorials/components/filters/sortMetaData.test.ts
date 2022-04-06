import { testMetaData } from "../../testhelpers/tutorialMetaData";
import { SortOptions } from "../../types";
import { sortMetaData } from "./sortMetaData";

describe("sortMetaData", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  const setState = jest.fn();
  const expectedNewest = [
    {
      created: 1642762915,
      languages: ["Typescript"],
      link: "/programming/quickly-setup-next-js-with-typescript",
      notionPage: "c4ca92237cc4434cbc30119b104e9e87",
      subTitle:
        "Get up-and-running with a cleaned up but ready to go repo using nextJs. Includes setting up TS properly, clearing boilerplate, structuring components, routing, setting up an API and SEO consideration",
      tags: ["How To"],
      thumbnail: "TBD",
      title: "Quickly Setup NextJs ES6 with Typescript",
      topic: "Programming",
    },
    {
      created: 1640257315,
      languages: ["Typescript"],
      link: "/programming/try-catch-by-type",
      notionPage: "c4ca92237cc4434cbc30119b104e9e87",
      subTitle:
        "Simple technique ff you ever need to handle a thrown error differently because it has a type. Use case: It might be an error you'd like the user to see.",
      tags: ["Snippet"],
      thumbnail: "TBD",
      title: "Try & Catch by a Type",
      topic: "Programming",
    },
    {
      created: 1639982632,
      languages: ["Docker", "Terraform"],
      link: "/deploy-to-aws-ec2-using-terraform-and-docker",
      notionPage: "c4ca92237cc4434cbc30119b104e9e87",
      subTitle:
        "Step-by-step instructions to dockerize your repo and use terraform to spin up AWS and host your project from scratch",
      tags: ["Essay"],
      thumbnail: "TBD",
      title: "Deploy to AWS EC2 using Terraform and Docker ",
      topic: "Infrastructure",
    },
  ];
  const expectedOldest = [
    {
      created: 1639982632,
      languages: ["Docker", "Terraform"],
      link: "/deploy-to-aws-ec2-using-terraform-and-docker",
      notionPage: "c4ca92237cc4434cbc30119b104e9e87",
      subTitle:
        "Step-by-step instructions to dockerize your repo and use terraform to spin up AWS and host your project from scratch",
      tags: ["Essay"],
      thumbnail: "TBD",
      title: "Deploy to AWS EC2 using Terraform and Docker ",
      topic: "Infrastructure",
    },
    {
      created: 1640257315,
      languages: ["Typescript"],
      link: "/programming/try-catch-by-type",
      notionPage: "c4ca92237cc4434cbc30119b104e9e87",
      subTitle:
        "Simple technique ff you ever need to handle a thrown error differently because it has a type. Use case: It might be an error you'd like the user to see.",
      tags: ["Snippet"],
      thumbnail: "TBD",
      title: "Try & Catch by a Type",
      topic: "Programming",
    },
    {
      created: 1642762915,
      languages: ["Typescript"],
      link: "/programming/quickly-setup-next-js-with-typescript",
      notionPage: "c4ca92237cc4434cbc30119b104e9e87",
      subTitle:
        "Get up-and-running with a cleaned up but ready to go repo using nextJs. Includes setting up TS properly, clearing boilerplate, structuring components, routing, setting up an API and SEO consideration",
      tags: ["How To"],
      thumbnail: "TBD",
      title: "Quickly Setup NextJs ES6 with Typescript",
      topic: "Programming",
    },
  ];
  const expectedAlphabetical = [
    {
      created: 1639982632,
      languages: ["Docker", "Terraform"],
      link: "/deploy-to-aws-ec2-using-terraform-and-docker",
      notionPage: "c4ca92237cc4434cbc30119b104e9e87",
      subTitle:
        "Step-by-step instructions to dockerize your repo and use terraform to spin up AWS and host your project from scratch",
      tags: ["Essay"],
      thumbnail: "TBD",
      title: "Deploy to AWS EC2 using Terraform and Docker ",
      topic: "Infrastructure",
    },
    {
      created: 1642762915,
      languages: ["Typescript"],
      link: "/programming/quickly-setup-next-js-with-typescript",
      notionPage: "c4ca92237cc4434cbc30119b104e9e87",
      subTitle:
        "Get up-and-running with a cleaned up but ready to go repo using nextJs. Includes setting up TS properly, clearing boilerplate, structuring components, routing, setting up an API and SEO consideration",
      tags: ["How To"],
      thumbnail: "TBD",
      title: "Quickly Setup NextJs ES6 with Typescript",
      topic: "Programming",
    },
    {
      created: 1640257315,
      languages: ["Typescript"],
      link: "/programming/try-catch-by-type",
      notionPage: "c4ca92237cc4434cbc30119b104e9e87",
      subTitle:
        "Simple technique ff you ever need to handle a thrown error differently because it has a type. Use case: It might be an error you'd like the user to see.",
      tags: ["Snippet"],
      thumbnail: "TBD",
      title: "Try & Catch by a Type",
      topic: "Programming",
    },
  ];

  it.each([
    [SortOptions.Newest, expectedNewest],
    [SortOptions.Oldest, expectedOldest],
    [SortOptions.Alphabetical, expectedAlphabetical],
  ])(
    "returns sorted metaData array for each SortOption",
    (sortOption, expectedResult) => {
      sortMetaData(testMetaData, sortOption, setState);

      expect(setState).toHaveBeenLastCalledWith(expectedResult);
    }
  );
});
