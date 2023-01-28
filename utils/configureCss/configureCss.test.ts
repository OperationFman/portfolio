import { setDark } from "./configureCss";
import { useContext } from "react";

jest.mock("react", () => {
	const actualReact = jest.requireActual("react");
	return {
		...actualReact,
		useContext: jest.fn(),
	};
});

describe("setDark", () => {
	it("returns styles with dark class when in dark mode", () => {
		const styles = {
			button: "button-class",
			buttonDark: "button-dark-class",
		};
		const selector = "button";
		(useContext as jest.Mock).mockReturnValue(true);

		const result = setDark(styles, selector);

		expect(result).toBe("button-class button-dark-class");
	});

	it("returns styles without dark class when not in dark mode", () => {
		const styles = {
			button: "button-class",
			buttonDark: "button-dark-class",
		};
		const selector = "button";
		(useContext as jest.Mock).mockReturnValue(false);

		const result = setDark(styles, selector);

		expect(result).toBe("button-class ");
	});
});
