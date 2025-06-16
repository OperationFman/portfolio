import { AssetCollectionMetaData, AssetItemMetaData } from "../types";

export const getFeaturedItems = (
	collections: AssetCollectionMetaData[],
): AssetItemMetaData[] => {
	const selectedAssetItems: AssetItemMetaData[] = [];
	const selectedWallpaperItems: AssetItemMetaData[] = [];

	const allAssetItems: { item: AssetItemMetaData; collectionTitle: string }[] =
		[];
	collections.forEach((collection) => {
		collection.assetItemMetaData.forEach((item) => {
			allAssetItems.push({
				item: { ...item },
				collectionTitle: collection.title,
			});
		});
	});

	const allWallpapers: {
		wallpaper: string;
		collection: AssetCollectionMetaData;
	}[] = [];
	collections.forEach((collection) => {
		collection.wallpapers.forEach((wallpaper) => {
			allWallpapers.push({ wallpaper, collection });
		});
	});

	for (let i = 0; i < 3; i++) {
		if (allAssetItems.length === 0) break;
		const randomIndex = Math.floor(Math.random() * allAssetItems.length);
		const { item, collectionTitle } = allAssetItems.splice(randomIndex, 1)[0];
		selectedAssetItems.push({ ...item, title: collectionTitle });
	}

	for (let i = 0; i < 3; i++) {
		if (allWallpapers.length === 0) break;
		const randomIndex = Math.floor(Math.random() * allWallpapers.length);
		const { wallpaper, collection } = allWallpapers.splice(randomIndex, 1)[0];
		selectedWallpaperItems.push({
			title: collection.title,
			hostedLink: collection.hostedLink,
			price: null,
			thumbnail: wallpaper,
			link: collection.hostedLink,
			tags: [],
		});
	}

	return [...selectedAssetItems, ...selectedWallpaperItems];
};
