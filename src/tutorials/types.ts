export enum Topic {
  Programming = "programming",
  Agile = "agile",
  Infrastructure = "infrastructure",
}

export enum Languages {
  Javascript = "javascript",
  Typescript = "typescript",
  Docker = "docker",
  Terraform = "terraform",
  AWS = "aws",
}

export enum Tags {
  StepByStep = "howTo",
  CodeBlock = "rawCode",
  Essay = "essay",
  Story = "story",
}

export type TutorialMetaData = {
  title: string;
  link: string;
  created: number;
  thumbnail: string;
  subTitle: string;
  topic: Topic;
  languages?: Languages[];
  tags?: Tags[];
};
