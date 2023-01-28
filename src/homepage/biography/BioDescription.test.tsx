import { render } from "@testing-library/react";
import { BioDescription } from "./BioDescription";

jest.mock("react-typing-effect", () => {
	return jest.fn(() => (
		<div data-testid='typing-effect'>React Typing Effect Mock</div>
	));
});

describe("BioDescription", () => {
	it("renders the correct text and elements", () => {
		const { getByText } = render(<BioDescription />);

		expect(getByText("Franklin")).toBeDefined();
		expect(getByText("V")).toBeDefined();
		expect(getByText("Moon")).toBeDefined();
		expect(getByText("React Typing Effect Mock")).toBeDefined();
	});
});
