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
	scorecard?: {
		affordability: number;
		food: number;
		safety: number;
		accessibility: number;
		video: number;
	};
	tips?: {
		dos?: string[];
		donts?: string[];
		currency?: string;
		travelAdvisoryISO3166?: string;
	};
	bio?: string[];
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
	extraVideos?: string[];
	imageStrip?: string;
};
