import { render } from "@testing-library/react";
import { SkillsColumn } from "./SkillsColumn";
import { Proficiency } from "./types";

describe("SkillsColumn component", () => {
	const title = "Skills Column Title";
	const metaData = [
		{
			title: "Group 1",
			data: [
				{
					title: "title",
					knowledge: "knowledge",
					proficiency: Proficiency.Capable,
					description: "description",
				},
				{
					title: "title2",
					knowledge: "knowledge 2",
					proficiency: Proficiency.Proficient,
					description: "description 2",
				},
			],
		},
		{
			title: "Group 2",
			data: [
				{
					title: "title 3",
					knowledge: "knowledge 3",
					proficiency: Proficiency.Capable,
					description: "description 3",
				},
				{
					title: "title 4",
					knowledge: "knowledge 4",
					proficiency: Proficiency.Proficient,
					description: "description 4",
				},
			],
		},
	];
	const handleOpenModal = jest.fn();

	it("should render the component correctly", () => {
		const { getByText } = render(
			<SkillsColumn
				title={title}
				metaData={metaData}
				handleOpenModal={handleOpenModal}
			/>,
		);

		expect(getByText(title)).toBeDefined();
		expect(getByText(metaData[0].title)).toBeDefined();
		expect(getByText(metaData[0].data[0].title)).toBeDefined();
		expect(getByText(metaData[1].title)).toBeDefined();
		expect(getByText(metaData[1].data[1].title)).toBeDefined();
		expect(handleOpenModal).toHaveBeenCalledTimes(0);
	});

	it("should call the handleOpenModal function when SkillsGrouping component is clicked", () => {
		const { getByText } = render(
			<SkillsColumn
				title={title}
				metaData={metaData}
				handleOpenModal={handleOpenModal}
			/>,
		);

		const skill = getByText(metaData[0].data[0].title);
		skill.click();

		expect(handleOpenModal).toHaveBeenCalledWith(metaData[0].data[0]);
		expect(handleOpenModal).toHaveBeenCalledTimes(1);
	});
});
