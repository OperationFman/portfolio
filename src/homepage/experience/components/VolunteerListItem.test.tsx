import { render } from "@testing-library/react";
import { VolunteerListItem } from "./VolunteerListItem";

describe("VolunteerListItem", () => {
	it("renders all parsed values", () => {
		const companyLogo = "company-logo";
		const title = "Teacher";
		const volunteerLocation = "New York, NY";
		const periodVolunteering = "January 2020 - Present";

		const { getByText } = render(
			<VolunteerListItem
				logo={companyLogo}
				title={title}
				location={volunteerLocation}
				year={periodVolunteering}
			/>,
		);

		expect(getByText(title)).toBeDefined();
		expect(getByText(volunteerLocation)).toBeDefined();
		expect(getByText(periodVolunteering)).toBeDefined();
	});
});
