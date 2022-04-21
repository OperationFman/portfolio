import { render } from "@testing-library/react";
import { testTutorialMetaDataItem } from "../../tutorials/test-helpers/tutorialMetaDataItem";
import { tutorialFeedCardFormatting } from "../../tutorials/tutorialFeedCardStyle";
import { FeedCard } from "./FeedCard";

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
      <FeedCard formatting={tutorialFeedCardFormatting} cardData={metaData} />
    );

    expect(getByText("Programming")).toBeTruthy();
    expect(getByText("Quickly Setup NextJs ES6 with Typescript")).toBeTruthy();
    expect(
      getByText(
        "Get up-and-running with a cleaned up but ready to go repo using nextJs. Includes settin..."
      )
    ).toBeTruthy();
  });
});
