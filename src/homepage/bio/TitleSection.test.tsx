import { render } from "@testing-library/react";
import { timeWorked, pluralTime, TitleSection } from "./TitleSection";

describe("Title Section", () => {
  describe("plural time", () => {
    it("adds and returns an s when unit of time when it is 1", () => {
      const result = pluralTime("year", 1);

      expect(result).toEqual("1 year");
    });

    it("adds and returns an s when unit of time when it is NOT 1", () => {
      const result = pluralTime("year", 2);

      expect(result).toEqual("2 years");
    });

    it("returns 0 and plural unit of time when value is undefined", () => {
      const result = pluralTime("year", undefined);

      expect(result).toEqual("0 years");
    });
  });

  it("renders Title Section correctly", () => {
    const { getByText, findByText } = render(<TitleSection />);

    expect(getByText("Franklin")).toBeDefined();
    expect(getByText("Moon")).toBeDefined();
    expect(findByText("software developer")).toBeDefined();
    expect(findByText("Practicing professional")).toBeDefined();
  });
});