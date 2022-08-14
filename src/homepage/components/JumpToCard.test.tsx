import { render } from "@testing-library/react";
import { JumpToCard } from "./JumpToCard";

describe("JumpToCard", () => {
  it("Renders JumpToCard with correct title", () => {
    const scrollTo = jest.fn();

    const { getByText } = render(
      <JumpToCard text={"test title"} scrollToPage={0} scrollTo={scrollTo} />
    );

    expect(getByText("test title")).toBeDefined();
  });
});
