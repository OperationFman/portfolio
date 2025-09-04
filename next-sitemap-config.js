const stockFootageMetaData = require("./utils/sitemap-meta/AssetMetaData.json");
const siteUrl = "https://franklin-v-moon.dev";

const toISODate = (epoch) => {
	if (!epoch) return undefined;
	return new Date(epoch * 1000).toISOString();
};

const encodeFileName = (file) => {
	if (!file || typeof file !== "string") return file;
	return file
		.split("/")
		.map((part) => encodeURIComponent(part))
		.join("/");
};

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
		};
	},

	additionalPaths: async () => {
		const paths = [];

		stockFootageMetaData.forEach((collection) => {
			const pageUrl = `${siteUrl}/assets-store/${collection.hostedLink}`;

			const images = [];

			if (collection.wallpapers && collection.wallpapers.length > 0) {
				collection.wallpapers.forEach((file) => {
					const encoded = encodeFileName(file);
					if (encoded) {
						images.push({
							loc: `${siteUrl}/assets/${collection.hostedLink}/${encoded}`,
							title: `${collection.title} wallpaper`,
						});
					}
				});
			}

			if (
				collection.assetItemMetaData &&
				collection.assetItemMetaData.length > 0
			) {
				collection.assetItemMetaData.forEach((item) => {
					if (item.thumbnail) {
						const encoded = encodeFileName(item.thumbnail);
						if (encoded) {
							images.push({
								loc: `${siteUrl}/assets/${encoded}`,
								title: item.title,
							});
						}
					}
				});
			}

			let lastmod;
			if (
				collection.assetItemMetaData &&
				collection.assetItemMetaData.length > 0
			) {
				const mostRecent = Math.max(
					...collection.assetItemMetaData.map((i) => i.created || 0),
				);
				if (mostRecent > 0) lastmod = toISODate(mostRecent);
			}

			const entry = {
				loc: pageUrl,
				changefreq: "monthly",
				priority: 0.5,
				images,
			};

			if (lastmod) entry.lastmod = lastmod;

			paths.push(entry);
		});

		return paths;
	},
};
