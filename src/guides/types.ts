export enum Topic {
	Programming = "Programming",
	Agile = "Agile",
	Infrastructure = "Infrastructure",
	Article = "Article",
}

export enum Languages {
	Javascript = "Javascript",
	Typescript = "Typescript",
	CSharp = "C#",
	Java = "Java",
	Docker = "Docker",
	Terraform = "Terraform",
	CloudFormation = "CloudFormation",
	Lambda = "Lambda",
	BashShell = "Bash / Shell",
	HTML = "HTML",
	CSS = "CSS",
}

export enum Tags {
	StepByStep = "How To",
	CodeBlock = "Snippet",
	QuickStart = "Quickstart",
	Essay = "Essay",
	Story = "Story",
}

export type GuideMetaData = {
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
