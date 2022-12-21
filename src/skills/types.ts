export enum Proficiency {
	Learning = "Learning",
	Capable = "Capable",
	Proficient = "Proficient",
	HighlyProficient = "Highly Proficient",
}

export type Payload = {
	heading: string;
	knowledge: string;
	proficiency: Proficiency;
	description: string;
};

export type ColumnData = {
	heading: string;
	knowledge: string;
	proficiency: Proficiency;
	description: string;
	isDeveloping?: boolean;
	tech: Tech[];
};

export type Tech = {
	title: string;
	knowledge: string;
	proficiency: Proficiency;
	description: string;
};

export type ConvictionsRow = {
	heading: string;
	blurb: string;
};

export type Skills = {
	heading: string;
	items: string[];
};
