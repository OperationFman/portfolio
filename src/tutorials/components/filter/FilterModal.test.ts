import { render } from "@testing-library/react";
import { Languages, Tags, Topic } from "../../types";
import { FilterModal } from "./FilterModal";

describe("FilterModal", () => {
	const topicFilter = Topic.Programming;
	const languagesFilter = [Languages.Typescript];
	const tagsFilter = [Tags.CodeBlock];

	const setTopicFilter = jest.fn();
	const setFilteredLanguages = jest.fn();
	const setTagsFilter = jest.fn();
	const setShowFilterMenu = jest.fn();

	beforeEach(() => {
		jest.clearAllMocks();
	});

	it("Renders the filter dialog window with pre-filled values", () => {
		const { getByText, getAllByText } = render(
			FilterModal(
				topicFilter,
				setTopicFilter,
				languagesFilter,
				setFilteredLanguages,
				tagsFilter,
				setTagsFilter,
				setShowFilterMenu,
			),
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
