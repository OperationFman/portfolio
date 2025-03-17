import { isClientSide } from "../../utils/isClientSide";
import {
	rankedTravelVideos,
	insecureRestrictionKey,
	travelVideoMetaData,
} from "../datasources/TravelMetaData";
import { TravelVideoMetaData } from "./types";
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

export const getTravelMetaDataIndex = (
	link: string,
	metaData: TravelVideoMetaData[] = travelVideoMetaData,
): number => {
	return metaData.findIndex((item) => item.link === link);
};

export const allOldestFirst = () => {
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

	return result;
};

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
