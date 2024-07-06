import { travelVideoMetaData } from "../datasources/TravelMetaData";
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
