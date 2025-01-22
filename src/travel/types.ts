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
	music?: [
		{
			title: string;
			link: string;
		},
	];
	extraLinks?: [
		{
			title: string;
			link: string;
		},
	];
	dos?: string[];
	donts?: string[];
	extraVideos?: string[];
};
