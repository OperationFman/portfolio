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
		expect(getByText("GUIDES")).toBeDefined();
		expect(getByText("PROJECTS")).toBeDefined();
	});

	it("toggles dark mode when the dark mode button is pressed", () => {
		const setDarkMode = jest.fn();
		const { getByLabelText } = render(<Navbar setDarkMode={setDarkMode} />);
		fireEvent.click(getByLabelText("Dark Mode"));
		expect(setDarkMode).toHaveBeenCalled();
	});
});
