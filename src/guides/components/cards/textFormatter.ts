export const subTitleShortener = (text: string): string => {
	const maximumCharacters = 75;
	if (text.length < maximumCharacters) {
		return text;
	}
	const arr = text.split("");
	arr.length = maximumCharacters - 3;
	return `${arr.join("")}...`;
};

export const titleShortener = (text: string): string => {
	const maximumLength = 50;

	if (text.length > maximumLength) {
		const arr = text.split("");
		arr.length = maximumLength - 3;
		return `${arr.join("")}...`;
	}
	return text;
};
