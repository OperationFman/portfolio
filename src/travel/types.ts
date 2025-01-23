export type TravelVideoMetaData = {
	title: string;
	year: number;
	hostedLink?: string;
	link: string;
	backupLink?: string;
	restricted: boolean;
	reelLinks?: string[];
	instagramLinks?: string[];
	newestVideo?: boolean;
	previouslyWatched?: boolean;
	extras?: Extras;
};

export enum Advisory {
	Level1 = "Exercise normal safety precautions",
	Level2 = "Exercise a high degree of caution",
	Level3 = "Reconsider your need to travel",
	Level4 = "Do not travel",
}

export type Extras = {
	countries?: string[];
	scorecard?: {
		affordability: number[];
		food: number[];
		safety: number[];
		accessibility: number[];
		video: number[];
	};
	finalScore?: number;
	summary?: string[];
	challenges?: string[];
	dos?: string[];
	donts?: string[];
	advice?: {
		travelLength: string;
		currency: string;
		season: string;
		dailyBudget: string;
	};
	travelAdvisory?: {
		link: string;
		advice: Advisory;
	};
	music: {
		title: string;
		link: string;
	}[];
	extraLinks?: {
		title: string;
		link: string;
	}[];
	extraVideos?: { title: string; hostedLink: string }[];
};
