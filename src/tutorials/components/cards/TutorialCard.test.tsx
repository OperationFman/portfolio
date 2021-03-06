import { render } from "@testing-library/react";
import { testTutorialMetaDataItem } from "../../test-helpers/tutorialMetaDataItem";
import { TutorialCard } from "./TutorialCard";

jest.mock("next/router", () => ({
  useRouter: () => ({ query: { abcd: "3" } }),
}));

describe("TutorialCard", () => {
  const metaData = testTutorialMetaDataItem;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Renders TutorialCard with correct title and shortened subtitle", () => {
    const { getByText } = render(
      <TutorialCard cardData={metaData} accentColor={"#ce93d8"} />
    );

    expect(getByText("Programming")).toBeDefined();
    expect(getByText("Quickly Setup NextJs ES6 with Typescript")).toBeDefined();
    expect(
      getByText(
        "Get up-and-running with a cleaned up but ready to go repo using nextJs. Includes settin..."
      )
    ).toBeDefined();
  });
});
