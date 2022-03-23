import { subTitleShortener, titleFormatter } from "./textFormatter";

describe("textFormatter", () => {
  describe("subTitleShortener", () => {
    it("returns unshortened string if length less than 90", () => {
      const expected = "Lizards are a widespread group of squadmate reptiles";
      const result = subTitleShortener(expected);

      expect(result).toEqual(expected);
    });

    it("returns string shortened to 100 characters with three trailing periods", () => {
      const initialData =
        "Lizards are a widespread group of squadmate reptiles, with over 6000 new species ranging across all continents except Antarctica";
      const expected =
        "Lizards are a widespread group of squadmate reptiles, with over 6000 new species rangin...";

      const result = subTitleShortener(initialData);

      expect(result).toEqual(expected);
    });
  });

  describe("titleFormatter", () => {
    it("returns unchanged string if the length is between 30 and 50", () => {
      const expected = "Lizards are squadmate reptiles";
      const result = titleFormatter(expected);

      expect(result).toEqual(expected);
    });
    it("adds 5 trailing invisible characters if the title contains less than 20 characters", () => {
      const initialData = "Lizards are";
      const expected = "Lizards are ㅤ ㅤ ㅤ ㅤ ㅤ";
      const result = titleFormatter(initialData);

      expect(result).toEqual(expected);
    });
    it("returns string shortened to 30 characters with three trailing periods", () => {
      const initialData =
        "Lizards are a widespread group of squadmate reptiles, with over 6000 new species ranging across all continents except Antarctica";
      const expected = "Lizards are a widespread group of squadmate rep...";

      const result = titleFormatter(initialData);

      expect(result).toEqual(expected);
      expect(result.length).toEqual(33);
    });
  });
});
