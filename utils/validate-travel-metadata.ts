import worldAtlas from "world-atlas/countries-50m.json";
import {
	travelVideoMetaData,
	worldMapOnlyDots,
} from "../src/datasources/TravelMetaData";
import { parseTravelCoordinate } from "../src/travel/coordinates";

type CountryTopology = {
	objects: {
		countries: {
			geometries: { id: string | number }[];
		};
	};
};

const countryTopology = worldAtlas as unknown as CountryTopology;
const mapCountryIds = new Set(
	countryTopology.objects.countries.geometries.map((country) => Number(country.id)),
);
const errors: string[] = [];

const validateDots = (name: string, dots: string[]) => {
	dots.forEach((dot, index) => {
		if (!parseTravelCoordinate(dot)) {
			errors.push(`${name}: dot ${index + 1} must be valid longitude, latitude coordinates`);
		}
	});
};

worldMapOnlyDots.forEach(({ country, dots }) => {
	validateDots(country.name, dots);
});

travelVideoMetaData.forEach((video) => {
	const countries = video.extras?.countries ?? [];
	validateDots(video.link, video.extras?.dots ?? []);
	countries.forEach((country) => {
		if (!mapCountryIds.has(country.id)) {
			errors.push(`${video.link}: ${country.name} has no matching map feature for ID ${country.id}`);
		}
	});

	const scorecard = video.extras?.scorecard;
	if (!scorecard) return;
	if (countries.length === 0) {
		errors.push(`${video.link}: scorecard has no countries`);
		return;
	}

	Object.entries(scorecard).forEach(([category, scores]) => {
		if (scores.length !== countries.length) {
			errors.push(
				`${video.link}: ${category} has ${scores.length} scores for ${countries.length} countries`,
			);
		}
	});
});

if (errors.length > 0) {
	console.error("Travel metadata validation failed:");
	errors.forEach((error) => console.error(`- ${error}`));
	process.exitCode = 1;
} else {
	console.log(`Validated coordinates, country IDs, and score ordering in ${travelVideoMetaData.length} travel records.`);
}
