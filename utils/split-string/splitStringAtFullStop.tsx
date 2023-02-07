export const splitStringAtFullStop = (str: string) => {
	let splitStrings = str.split(".");

	return splitStrings.map((splitString, index) => {
		if (index === splitStrings.length - 1) {
			return splitString;
		} else {
			return splitString + ".";
		}
	});
};
