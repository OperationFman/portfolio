export type StockFootageCollection = {
	title: string;
	thumbnail: string;
	cover: string;
	collectionItems: StockFootageMetaData[];
};

export type StockFootageMetaData = {
	file: string;
	price: number;
	thumbnail: string;
	created: string;
	country: string;
	location: string;
	mapMarker?: string;
	cameraUsed: CameraName;
    links?: string[];
	filters: SFFilters[];
	description: string;
	keywords: string[];
};

export enum SFFilters {
	UHD = "4K",
	HD = "1080p",
}

export type CameraSpec = {
	model: string;
	lens: string;
	type: string;
};

export enum CameraName {
	DJIPocket3 = "DJIPocket3",
	Pixel6ProTelephoto = "Pixel6ProTelephoto",
}

export const cameraSpecs: Record<CameraName, CameraSpec> = {
	[CameraName.DJIPocket3]: {
		model: "DJI Pocket 3",
		lens: "64MP 1-inch CMOS 35mm",
		type: "Gimbal",
	},
	[CameraName.Pixel6ProTelephoto]: {
		model: "Pixel 6 Pro",
		lens: "48MP Telephoto 104mm 4x Optical Zoom",
		type: "Phone",
	},
};
