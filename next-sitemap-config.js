const stockFootageMetaData = require("./utils/sitemap-meta/AssetMetaData.json");
const siteUrl = "https://franklin-v-moon.dev";

module.exports = {
	siteUrl,
	generateRobotsTxt: true,
	changefreq: "weekly",
	robotsTxtOptions: {
		policies: [{ userAgent: "*", allow: "/" }],
	},

	transform: async (config, path) => {
		let priority = 0.6;

		if (path === "/") {
			priority = 1.0;
		} else if (path.startsWith("/travel")) {
			priority = 0.9;
		} else if (path.startsWith("/assets-store")) {
			priority = 0.8;
		} else if (path.startsWith("/guides")) {
			priority = 0.7;
		}

		return {
			loc: path,
			changefreq: config.changefreq,
			priority,
			lastmod: new Date().toISOString(),
		};
	},

	additionalPaths: async () => {
		const paths = [];

		stockFootageMetaData.forEach((collection) => {
			const pageUrl = `${siteUrl}/assets-store/${collection.hostedLink}`;

			const images = [];

			if (collection.wallpapers && collection.wallpapers.length > 0) {
				collection.wallpapers.forEach((file) => {
					images.push({
						loc: `${siteUrl}/assets/${collection.hostedLink}/${file}`,
						title: `${collection.title} wallpaper`,
					});
				});
			}

			if (
				collection.assetItemMetaData &&
				collection.assetItemMetaData.length > 0
			) {
				collection.assetItemMetaData.forEach((item) => {
					if (item.thumbnail) {
						images.push({
							loc: `${siteUrl}/assets/${item.thumbnail}`,
							title: item.title,
						});
					}
				});
			}

			paths.push({
				loc: pageUrl,
				changefreq: "monthly",
				priority: 0.5,
				lastmod: new Date().toISOString(),
				images,
			});
		});

		return paths;
	},
};
