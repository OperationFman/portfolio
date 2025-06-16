export type AssetCollectionMetaData = {
	title: string;
	thumbnail: string;
	hostedLink: string;
	assetItemMetaData: AssetItemMetaData[];
};

export type AssetItemMetaData = {
	title: string;
	price: number | null;
	thumbnail: string;
	link: string;
	created: number;
	tags: string[];
	location?: string;
	new?: boolean;
	updated?: boolean;
	sale?: boolean;
};
