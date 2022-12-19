export enum Proficiency {
	Unknown = "Unknown",
	Learning = "Learning",
	Capable = "Capable",
	Proficient = "Proficient",
	HighlyProficient = "Highly Proficient",
}

export type Descriptions = {
	key: Proficiency;
	description: string;
};

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
	tech: string[];
};

export type ConvictionsRow = {
	heading: string;
	blurb: string;
};

export type Skills = {
	heading: string;
	items: string[];
};
