import { travelVideoMetaData } from "../datasources/TravelMetaData";
import { TravelVideoMetaData } from "./types";

export const getTravelMetaDatByLink = (
	link: string,
	metaData: TravelVideoMetaData[] = travelVideoMetaData,
): TravelVideoMetaData | undefined => {
	return metaData.find((item) => {
		return item.link === link;
	});
};
