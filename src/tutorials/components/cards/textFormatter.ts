export const subTitleShortener = (text: string): string => {
  const maximumCharacters = 80;
  if (text.length < maximumCharacters) {
    return text;
  }
  const arr = text.split("");
  arr.length = maximumCharacters;
  return `${arr.join("")}...`;
};

export const titleFormatter = (text: string): string => {
  const minimumLength = 20;
  const maximumLength = 40;
  const idealLength = 30;

  if (text.length < minimumLength) {
    return `${text} ㅤ ㅤ ㅤ ㅤ ㅤ`;
  }
  if (text.length > maximumLength) {
    const arr = text.split("");
    arr.length = idealLength;
    return `${arr.join("")}...`;
  }
  return text;
};
