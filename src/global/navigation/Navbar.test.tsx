import { render, fireEvent } from "@testing-library/react";
import { Navbar } from "./Navbar";

jest.mock("next/router", () => {
	return {
		useRouter: jest.fn().mockImplementation(() => {
			return {
				pathname: "/",
				replace: jest.fn(),
			};
		}),
	};
});

describe("Navbar component", () => {
	it("renders the navbar correctly", () => {
		const { getByText } = render(<Navbar setDarkMode={() => {}} />);
		expect(getByText("SKILLS")).toBeDefined();
		expect(getByText("TUTORIALS")).toBeDefined();
		expect(getByText("PROJECTS")).toBeDefined();
	});

	it("changes the tab when a tab is pressed", () => {
		const { getByText } = render(<Navbar setDarkMode={() => {}} />);
		fireEvent.click(getByText("SKILLS"));
		expect(getByText("SKILLS").getAttribute("class")).toContain("Mui-selected");
		fireEvent.click(getByText("TUTORIALS"));
		expect(getByText("TUTORIALS").getAttribute("class")).toContain(
			"Mui-selected",
		);
	});

	it("toggles dark mode when the dark mode button is pressed", () => {
		const setDarkMode = jest.fn();
		const { getByLabelText } = render(<Navbar setDarkMode={setDarkMode} />);
		fireEvent.click(getByLabelText("Dark Mode"));
		expect(setDarkMode).toHaveBeenCalled();
	});
});
