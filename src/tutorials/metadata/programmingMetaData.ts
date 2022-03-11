import { Languages, Tags, Topic, TutorialMetaData } from "../types";

export const programmingMetaData: TutorialMetaData[] = [
  {
    title: "Quickly Setup NextJs ES6 with Typescript",
    link: `/programming/quickly-setup-next-js-with-typescript`,
    created: 1642762915,
    thumbnail: "TBD",
    subTitle:
      "Get up-and-running with a cleaned up but ready to go repo using nextJs. Includes setting up TS properly, clearing boilerplate, structuring components, routing, setting up an API and SEO consideration",
    topic: Topic.Programming,
    languages: [Languages.Typescript],
    tags: [Tags.StepByStep],
  },
  {
    title: "Try & Catch by a Type",
    link: "/programming/try-catch-by-type",
    created: 1640257315,
    thumbnail: "TBD",
    subTitle:
      "Simple technique ff you ever need to handle a thrown error differently because it has a type. Use case: It might be an error you'd like the user to see.",
    topic: Topic.Programming,
    languages: [Languages.Typescript],
    tags: [Tags.StepByStep],
  },
];
