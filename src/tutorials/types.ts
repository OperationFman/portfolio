export enum Topic {
  Programming = "Programming",
  Agile = "Agile",
  Infrastructure = "Infrastructure",
}

export enum Languages {
  Javascript = "Javascript",
  Typescript = "Typescript",
  Docker = "Docker",
  Terraform = "Terraform",
}

export enum Tags {
  StepByStep = "How To",
  CodeBlock = "Code Block",
  Essay = "Essay",
  Story = "Story",
}

export type TutorialMetaData = {
  title: string;
  link: string;
  notionPage: string;
  created: number;
  thumbnail: string;
  subTitle: string;
  topic: Topic;
  languages?: Languages[];
  tags?: Tags[];
};

export enum SortOptions {
  Newest = "newest",
  Oldest = "oldest",
  Alphabetical = "alphabetical",
}

export type TutorialContentItem = {
  metaData: TutorialMetaData;
  pageContent: () => Promise<JSX.Element>;
};
