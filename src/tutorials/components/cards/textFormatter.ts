export const subTitleShortener = (text: string): string => {
  const maximumCharacters = 90;
  if (text.length < maximumCharacters) {
    return text;
  }
  const arr = text.split("");
  arr.length = maximumCharacters - 3;
  return `${arr.join("")}...`;
};

export const titleFormatter = (text: string): string => {
  const minimumLength = 30;
  const maximumLength = 50;

  if (text.length < minimumLength) {
    return `${text} ㅤ ㅤ ㅤ ㅤ ㅤ`;
  }
  if (text.length > maximumLength) {
    const arr = text.split("");
    arr.length = maximumLength - 3;
    return `${arr.join("")}...`;
  }
  return text;
};
