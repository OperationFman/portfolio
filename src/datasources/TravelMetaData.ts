import { TravelVideoMetaData } from "../travel/types";

const publicUrl = "d3atatnx15erez.cloudfront.net/";

export const travelVideoMetaData: TravelVideoMetaData[] = [
	{
		title: "China",
		year: 2017,
		link: `${publicUrl}china.mp4`,
		thumbnail: "/travel/ChinaPoster.png",
		created: 1,
		restricted: false,
	},
	{
		title: "Sri Lanka",
		year: 2022,
		link: `${publicUrl}srilanka.mp4`,
		subtitles: `${publicUrl}srilanka.srt`,
		thumbnail: "/travel/SriLankaPoster.png",
		created: 2,
		restricted: true,
	},
	{
		title: "United Arab Emirates",
		year: 2022,
		link: `${publicUrl}uae.mp4`,
		subtitles: `${publicUrl}uae.srt`,
		thumbnail: "/travel/UAEPoster.png",
		created: 3,
		restricted: false,
	},
	{
		title: "Cambodia, Laos and Vietnam",
		year: 2023,
		link: `${publicUrl}cambodialaosvietnam.mp4`,
		subtitles: `${publicUrl}cambodialaosvietnam.srt`,
		thumbnail: "/travel/CambodiaLaosVietnamPoster.png",
		created: 4,
		restricted: true,
	},
];
