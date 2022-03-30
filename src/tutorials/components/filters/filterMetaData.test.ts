import { Languages, Tags, Topic } from "../../types";
import { testMetaData } from "../../testhelpers/tutorialMetaData";
import { filterMetaData } from "./filterMetaData";

describe("sortMetaData", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  const setState = jest.fn();

  const expectedMetaData = {
    topic: [
      {
        created: 1642762915,
        languages: ["Typescript"],
        link: "/programming/quickly-setup-next-js-with-typescript",
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
        subTitle:
          "Simple technique ff you ever need to handle a thrown error differently because it has a type. Use case: It might be an error you'd like the user to see.",
        tags: ["Code Block"],
        thumbnail: "TBD",
        title: "Try & Catch by a Type",
        topic: "Programming",
      },
    ],
    singleLanguage: [
      {
        created: 1642762915,
        languages: ["Typescript"],
        link: "/programming/quickly-setup-next-js-with-typescript",
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
        subTitle:
          "Simple technique ff you ever need to handle a thrown error differently because it has a type. Use case: It might be an error you'd like the user to see.",
        tags: ["Code Block"],
        thumbnail: "TBD",
        title: "Try & Catch by a Type",
        topic: "Programming",
      },
    ],
    multipleLanguages: [
      {
        created: 1642762915,
        languages: ["Typescript"],
        link: "/programming/quickly-setup-next-js-with-typescript",
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
        subTitle:
          "Simple technique ff you ever need to handle a thrown error differently because it has a type. Use case: It might be an error you'd like the user to see.",
        tags: ["Code Block"],
        thumbnail: "TBD",
        title: "Try & Catch by a Type",
        topic: "Programming",
      },
    ],
    singleTag: [
      {
        created: 1640257315,
        languages: ["Typescript"],
        link: "/programming/try-catch-by-type",
        subTitle:
          "Simple technique ff you ever need to handle a thrown error differently because it has a type. Use case: It might be an error you'd like the user to see.",
        tags: ["Code Block"],
        thumbnail: "TBD",
        title: "Try & Catch by a Type",
        topic: "Programming",
      },
    ],
    multipleTags: [
      {
        created: 1642762915,
        languages: ["Typescript"],
        link: "/programming/quickly-setup-next-js-with-typescript",
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
        subTitle:
          "Simple technique ff you ever need to handle a thrown error differently because it has a type. Use case: It might be an error you'd like the user to see.",
        tags: ["Code Block"],
        thumbnail: "TBD",
        title: "Try & Catch by a Type",
        topic: "Programming",
      },
    ],
    multipleLanguagesAndFilters: [
      {
        created: 1642762915,
        languages: ["Typescript"],
        link: "/programming/quickly-setup-next-js-with-typescript",
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
        subTitle:
          "Simple technique ff you ever need to handle a thrown error differently because it has a type. Use case: It might be an error you'd like the user to see.",
        tags: ["Code Block"],
        thumbnail: "TBD",
        title: "Try & Catch by a Type",
        topic: "Programming",
      },
    ],
  };

  it("returns filtered metaData array for parsed topic", () => {
    filterMetaData(testMetaData, Topic.Programming, [], [], setState);

    expect(setState).toHaveBeenLastCalledWith(expectedMetaData.topic);
  });

  it.each([
    [
      expectedMetaData.multipleLanguagesAndFilters,
      [Languages.Typescript, Languages.Terraform],
      [Tags.CodeBlock, Tags.StepByStep],
    ],
    [
      expectedMetaData.multipleLanguages,
      [Languages.Typescript, Languages.Terraform],
      [],
    ],
    [expectedMetaData.singleLanguage, [Languages.Typescript], []],
    [expectedMetaData.singleTag, [], [Tags.CodeBlock]],
    [expectedMetaData.multipleTags, [], [Tags.CodeBlock, Tags.StepByStep]],
  ])(
    "returns filtered metaData array for each applied language and/or tag",
    (expectedResult, languageFilter, tagsFilter) => {
      filterMetaData(
        testMetaData,
        Topic.Programming,
        languageFilter,
        tagsFilter,
        setState
      );

      expect(setState).toHaveBeenLastCalledWith(expectedResult);
    }
  );
});
