export const Languages = {
  Javascript: "javascript",
  Typescript: "typescript",
};

export const Tags = {
  StepByStep: "howTo",
  CodeBlock: "rawCode",
};

export const Topic = {
  Programming: "programming",
};

export type TutorialMetaData = {
  title: string;
  link: string;
  created: number;
  thumbnail: string;
  subTitle: string;
  topic: string[];
  languages?: string[];
  tags?: string[];
};

export const tutorialMetaData: TutorialMetaData[] = [
  {
    title: "Quickly Setup NextJs ES6 with Typescript",
    link: `/quickly-setup-next-js-with-typescript`,
    created: 1642762915,
    thumbnail: "TBD",
    subTitle:
      "Get up-and-running with a cleaned up but ready to go repo using nextJs. Includes setting up TS properly, clearing boilerplate, structuring components, routing, setting up an API and SEO consideration",
    topic: [Topic.Programming],
    languages: [Languages.Typescript],
    tags: [Tags.StepByStep],
  },
  {
    title: "Try & Catch by a Type",
    link: "/try-catch-by-type",
    created: 1640257315,
    thumbnail: "TBD",
    subTitle:
      "Simple technique ff you ever need to handle a thrown error differently because it has a type. Use case: It might be an error you'd like the user to see.",
    topic: [Topic.Programming],
    languages: [Languages.Typescript],
    tags: [Tags.StepByStep],
  },
];
