import router from "next/router";
import { isClientSide } from "../../utils/isClientSide";
import {
	insecureRestrictionKey,
	travelVideoMetaData,
} from "../datasources/TravelMetaData";
import { TravelVideoMetaData } from "./types";

export const getTravelMetaDataIndex = (
	link: string,
	metaData: TravelVideoMetaData[] = travelVideoMetaData,
): number => {
	return metaData.findIndex((item) => item.link === link);
};

export const groupVideosByYear = (
	metadata: TravelVideoMetaData[],
): TravelVideoMetaData[][] => {
	const groupedVideos: { [year: number]: TravelVideoMetaData[] } = {};

	for (const video of metadata) {
		const year = video.year;

		if (!groupedVideos[year]) {
			groupedVideos[year] = [];
		}
		groupedVideos[year].push(video);
	}

	return Object.values(groupedVideos);
};

export const hasRestrictionBypass = () => {
	if (isClientSide()) {
		return localStorage.getItem("restriction-bypass") === "true";
	}
	return false;
};

export const videoEnabled = (videoMetaData: TravelVideoMetaData) => {
	if (hasRestrictionBypass() || !videoMetaData.restricted) {
		return true;
	} else {
		const prompt = window.prompt("Enter password", "");

		if (prompt === insecureRestrictionKey) {
			localStorage.setItem("restriction-bypass", "true");

			return true;
		} else {
			window.alert("Password Incorrect");
			return false;
		}
	}
};
