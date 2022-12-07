export type ColumnData = {
	heading: string;
	isDeveloping?: boolean;
	tech: string[];
};

interface BoxListing {
	heading: string;
}

interface BoxListingWithItems extends BoxListing {
	items: string[];
	blurb?: never;
}

interface BoxListingWithBlurb extends BoxListing {
	items?: never;
	blurb: string;
}

export type BoxListingMetaData = BoxListingWithItems | BoxListingWithBlurb;
