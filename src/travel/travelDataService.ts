import { isClientSide } from "../../utils/isClientSide";
import {
	rankedTravelVideos,
	insecureRestrictionKey,
	travelVideoMetaData,
} from "../datasources/TravelMetaData";
import { Advisory, TravelVideoMetaData } from "./types";
import { SortOptions } from "../guides/types";

export const enhancedTravelVideoMetaData = () => {
	// Add any data that all sorts might need here
	if (!isClientSide()) return travelVideoMetaData;

	const watchedVideos = JSON.parse(
		localStorage.getItem("watchedVideos") || "[]",
	) as string[];

	const enhancedMetaData = travelVideoMetaData.map((item) => ({
		...item,
		previouslyWatched: watchedVideos.includes(item.link),
	}));

	return enhancedMetaData;
};

export const hasRestrictionBypass = () => {
	if (isClientSide()) {
		return localStorage.getItem("restriction-bypass") === "true";
	}
	return false;
};

export const videoEnabled = (videoMetaData: TravelVideoMetaData) => {
	if (!isClientSide()) {
		return false;
	}

	if (hasRestrictionBypass() || !videoMetaData.restricted) {
		return true;
	} else {
		const prompt = window.prompt(
			"This video is restricted \nEnter the password to unlock all content:",
			"",
		);

		if (prompt === insecureRestrictionKey) {
			localStorage.setItem("restriction-bypass", "true");

			return true;
		} else {
			window.alert("Password Incorrect");
			return false;
		}
	}
};

export const addToWatchedVideosStorage = (link: string) => {
	if (!isClientSide()) return false;

	const watchedVideos = JSON.parse(
		localStorage.getItem("watchedVideos") || "[]",
	) as string[];

	if (!watchedVideos.includes(link)) {
		watchedVideos.push(link);
		localStorage.setItem("watchedVideos", JSON.stringify(watchedVideos));
	}
};

export const getTravelMetaDataIndex = (
	link: string,
	metaData: TravelVideoMetaData[] = travelVideoMetaData,
): number => {
	return metaData.findIndex((item) => item.link === link);
};

// ~~~~~~~~~~~~~~~~
// Premixed Filters:
// ~~~~~~~~~~~~~~~~

export const allNewestFirst = () => {
	const groupedVideos: { [year: number]: TravelVideoMetaData[] } = {};

	for (const video of enhancedTravelVideoMetaData()) {
		const year = video.year;

		if (!groupedVideos[year]) {
			groupedVideos[year] = [];
		}
		groupedVideos[year].push(video);
	}

	const result = Object.entries(groupedVideos).map(([year, grouping]) => ({
		heading: year,
		grouping: grouping,
	}));

	return result.reverse();
};

export const allOldestFirst = () => {
	return allNewestFirst().reverse();
};

export const allByBest = () => {
	const tierGroups: { heading: string; grouping: TravelVideoMetaData[] }[] = [];

	const tierRanges: { heading: string; range: number[] }[] = [
		{ heading: "🥇 S Tier", range: [9, 10] },
		{ heading: "🥈 A Tier", range: [7, 8] },
		{ heading: "🥉 B Tier", range: [5, 6] },
		{ heading: "C Tier", range: [3, 4] },
		{ heading: "💩 F Tier", range: [1, 2] },
	];

	for (const tier of tierRanges) {
		const grouping: TravelVideoMetaData[] = [];

		for (const video of enhancedTravelVideoMetaData()) {
			const finalScore = video.extras?.finalScore;

			if (finalScore == null) {
				continue;
			}

			if (tier.range.includes(finalScore)) {
				grouping.push(video);
			}
		}

		if (grouping.length > 0) {
			tierGroups.push({ heading: tier.heading, grouping });
		}
	}

	return tierGroups;
};

export const allByWorst = () => {
	return allByBest().reverse();
};

export const allByFood = () => {
	const foodScoreGroups: {
		heading: string;
		grouping: TravelVideoMetaData[];
	}[] = [];

	const foodScoreRanges: { heading: string; range: number[] }[] = [
		{ heading: "Delicious", range: [9, 10] },
		{ heading: "Enjoyable", range: [7, 8] },
		{ heading: "Tasty", range: [5, 6] },
		{ heading: "Edible", range: [3, 4] },
		{ heading: "Disgusting", range: [1, 2] },
	];

	for (const scoreRange of foodScoreRanges) {
		const grouping: TravelVideoMetaData[] = [];

		for (const video of enhancedTravelVideoMetaData()) {
			const foodScores = video.extras?.scorecard?.food;

			if (!foodScores || foodScores.length === 0) {
				continue;
			}

			const averageFoodScore =
				foodScores.reduce((sum, score) => sum + score, 0) / foodScores.length;

			if (scoreRange.range.includes(Math.round(averageFoodScore))) {
				grouping.push(video);
			}
		}

		if (grouping.length > 0) {
			foodScoreGroups.push({ heading: scoreRange.heading, grouping });
		}
	}

	return foodScoreGroups;
};

export const allByDanger = () => {
	const advisoryGroups: { heading: string; grouping: TravelVideoMetaData[] }[] =
		[];

	const advisoryLevels: { heading: string; level: Advisory }[] = [
		{ heading: "Safe", level: Advisory.Level1 },
		{ heading: "Be Alert", level: Advisory.Level2 },
		{ heading: "Unsafe", level: Advisory.Level3 },
		{ heading: "Dangerous", level: Advisory.Level4 },
	];

	for (const advisory of advisoryLevels) {
		const grouping: TravelVideoMetaData[] = [];

		for (const video of enhancedTravelVideoMetaData()) {
			const advice = video.extras?.travelAdvisory?.advice;

			if (advice === advisory.level) {
				grouping.push(video);
			}
		}

		if (grouping.length > 0) {
			advisoryGroups.push({ heading: advisory.heading, grouping });
		}
	}

	return advisoryGroups;
};
