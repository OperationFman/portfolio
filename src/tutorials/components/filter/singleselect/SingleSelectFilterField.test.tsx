import { render } from "@testing-library/react";
import { Topic } from "../../../types";
import { SingleSelectFilterField } from "./SingleSelectFilterField";

describe("SingleSelectFilterField", () => {
	const dropDownData = [Topic.Agile, Topic.Infrastructure, Topic.Programming];
	const filter = Topic.Agile;
	const setFilter = jest.fn();

	it("renders label correctly", () => {
		const { getAllByText } = render(
			<SingleSelectFilterField
				label='Topic'
				defaultValue='Select a topic'
				filter={filter}
				setFilter={setFilter}
				dropDownData={dropDownData}
				highlightColor='red'
			/>,
		);
		expect(getAllByText("Topic")).toBeDefined();
	});

	it("renders default value correctly", () => {
		const { getByText } = render(
			<SingleSelectFilterField
				label='Topic'
				defaultValue='Select a topic'
				filter={undefined}
				setFilter={setFilter}
				dropDownData={dropDownData}
				highlightColor='red'
			/>,
		);
		expect(getByText("Select a topic")).toBeDefined();
	});
});
