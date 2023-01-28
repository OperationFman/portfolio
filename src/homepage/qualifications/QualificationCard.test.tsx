import { render } from "@testing-library/react";
import { QualificationCard } from "./QualificationCard";

describe("QualificationCard", () => {
	it("renders all elements correctly", () => {
		const logo = "example-logo";
		const title = "Example Title";
		const location = "Example Location";

		const { getByText } = render(
			<QualificationCard logo={logo} title={title} location={location} />,
		);

		expect(getByText(title)).toBeDefined();
		expect(getByText(location)).toBeDefined();
	});
});
