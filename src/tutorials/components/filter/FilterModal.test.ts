import { FilterModal } from "./FilterModal";
import { mocked } from "jest-mock";
import { render } from "@testing-library/react";
import { Languages, Topic, Tags } from "../../types";
import useDeviceDetect from "../../../../utils/useDeviceDetect";

jest.mock("../../../../utils/useDeviceDetect");

describe("FilterModal", () => {
  const topicFilter = Topic.Programming;
  const languagesFilter = [Languages.Typescript];
  const tagsFilter = [Tags.CodeBlock];

  const setTopicFilter = jest.fn();
  const setFilteredLanguages = jest.fn();
  const setTagsFilter = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Renders the filter dialog window with pre-filled values", () => {
    mocked(useDeviceDetect).mockReturnValue({ isMobile: false });

    const { getByText, getAllByText } = render(
      FilterModal(
        topicFilter,
        setTopicFilter,
        languagesFilter,
        setFilteredLanguages,
        tagsFilter,
        setTagsFilter
      )
    );

    expect(getByText("Filter")).toBeDefined();

    expect(getAllByText("Topic")).toBeDefined();
    expect(getByText("Programming")).toBeDefined();

    expect(getAllByText("Languages")).toBeDefined();
    expect(getByText("Typescript")).toBeDefined();

    expect(getAllByText("Tags")).toBeDefined();
    expect(getByText("Snippet")).toBeDefined();
  });
});
