import { render } from "@testing-library/react";
import { Languages } from "../../../types";
import { MultiSelectFilterField } from "./MultiSelectFilterField";

describe("MultiSelectFilter", () => {
	const dropDownData = [
		Languages.Javascript,
		Languages.Typescript,
		Languages.Java,
	];
	const filter = [Languages.Typescript];
	const setFilter = jest.fn();
	const label = "Filter";
	const highlightColor = "blue";

	it("renders filter field", () => {
		const { getAllByText } = render(
			<MultiSelectFilterField
				label={label}
				filter={filter}
				setFilter={setFilter}
				dropDownData={dropDownData}
				highlightColor={highlightColor}
			/>,
		);
		expect(getAllByText(label)).toBeDefined();
	});

	it("renders the selected options as chips", () => {
		const { getByText } = render(
			<MultiSelectFilterField
				label={label}
				filter={filter}
				setFilter={setFilter}
				dropDownData={dropDownData}
				highlightColor={highlightColor}
			/>,
		);
		filter.forEach((item) => {
			expect(getByText(item)).toBeDefined();
		});
	});
});
