import { render } from "@testing-library/react";
import { WorkExpListItem } from "./WorkExpListItem";

describe("WorkExpListItem", () => {
	it("renders all parsed values", () => {
		const companyLogo = "company-logo";
		const employerName = "Employer Name";
		const periodWithEmployer = "January 2020 - Present";
		const employerLocation = "New York, NY";
		const employerExperiences = [
			{
				title: "Developer",
				period: "January 2020 - Present",
			},
		];

		const { getByText, getAllByText } = render(
			<WorkExpListItem
				companyLogo={companyLogo}
				employerName={employerName}
				periodWithEmployer={periodWithEmployer}
				employerLocation={employerLocation}
				employerExperiences={employerExperiences}
			/>,
		);

		expect(getByText(employerName)).toBeDefined();
		expect(getAllByText(periodWithEmployer)).toBeDefined();
		expect(getByText(employerLocation)).toBeDefined();
		expect(getByText(employerName)).toBeDefined();
	});
});
