import { fireEvent, render } from "@testing-library/react";
import { debug } from "console";
import Router from "next/router";
import { testTutorialMetaDataItem } from "../../test-helpers/tutorialMetaDataItem";
import { FeedCard } from "../../../global/feed/FeedCard";

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
      <FeedCard cardData={metaData} accentColor={"#ce93d8"} />
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
