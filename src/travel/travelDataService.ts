import { isClientSide } from "../../utils/isClientSide";
import {
	rankedTravelVideos,
	insecureRestrictionKey,
	travelVideoMetaData,
} from "../datasources/TravelMetaData";
import { TravelVideoMetaData } from "./types";
import { SortOptions } from "../guides/types";

export const enhancedTravelVideoMetaData = () => {
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

export const groupVideosByYear = () => {
	const groupedVideos: { [year: number]: TravelVideoMetaData[] } = {};

	for (const video of enhancedTravelVideoMetaData()) {
		const year = video.year;

		if (!groupedVideos[year]) {
			groupedVideos[year] = [];
		}
		groupedVideos[year].push(video);
	}

	return Object.values(groupedVideos);
};

export const sortYears = (
	sortBy: SortOptions,
	metaData: TravelVideoMetaData[][],
): TravelVideoMetaData[][] => {
	return [...metaData].sort((a, b) => {
		if (sortBy === SortOptions.Newest) {
			return b[0].year - a[0].year;
		} else {
			return a[0].year - b[0].year;
		}
	});
};

export const groupVideosByRanked = () => {
	const completeArray = [];

	for (const tier of rankedTravelVideos) {
		const tierData = [];

		for (const link of tier) {
			const travelMetaData = enhancedTravelVideoMetaData();
			const fullVideoData = travelMetaData[getTravelMetaDataIndex(link)];

			if (fullVideoData) {
				tierData.push(fullVideoData);
			}
		}
		tierData.reverse();
		completeArray.push(tierData);
	}

	return completeArray;
};

export const hasAtLeastOneMissingVideoLink = () => {
	return travelVideoMetaData.some((obj) => !obj.hasOwnProperty("backupLink"));
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
