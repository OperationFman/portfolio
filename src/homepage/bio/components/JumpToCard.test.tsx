import { render } from "@testing-library/react";
import { JumpToCard } from "./JumpToCard";

describe("JumpToCard", () => {
  it("Renders JumpToCard with correct title", () => {
    const { getByText } = render(<JumpToCard text={"test title"} />);

    expect(getByText("test title")).toBeDefined();
  });
});
