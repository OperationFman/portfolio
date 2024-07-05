import { travelVideoMetaData } from "../datasources/TravelMetaData";
import { TravelVideoMetaData } from "./types";

export const getTravelMetaDataIndex = (
	link: string,
	metaData: TravelVideoMetaData[] = travelVideoMetaData,
): number => {
	return metaData.findIndex((item) => item.link === link);
};
