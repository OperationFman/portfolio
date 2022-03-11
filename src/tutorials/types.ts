export const Topic = {
  Programming: "programming",
  Agile: "agile",
  Infrastructure: "infrastructure",
};

export const Languages = {
  Javascript: "javascript",
  Typescript: "typescript",
  Docker: "docker",
  Terraform: "terraform",
  AWS: "aws",
};

export const Tags = {
  StepByStep: "howTo",
  CodeBlock: "rawCode",
  Essay: "essay",
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
