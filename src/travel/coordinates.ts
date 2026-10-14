export const parseTravelCoordinate = (coordinate: string) => {
	const values = coordinate.split(",").map((value) => value.trim());
	if (values.length !== 2 || !values[0] || !values[1]) return undefined;
	const [longitude, latitude] = values.map(Number);
	if (
		!Number.isFinite(longitude) ||
		!Number.isFinite(latitude) ||
		Math.abs(longitude) > 180 ||
		Math.abs(latitude) > 90
	) {
		return undefined;
	}
	return { longitude, latitude };
};
