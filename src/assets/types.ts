export type AssetCollectionMetaData = {
	title: string;
	thumbnail: string;
	hostedLink: string;
	assetItemMetaData: AssetItemMetaData[];
	wallpapers: string[];
};

export type AssetItemMetaData = {
	title: string;
	price: number | null;
	thumbnail: string;
	link: string;
	created?: number;
	length?: number;
	tags: string[];
	location?: string;
	isPack?: boolean;
};
