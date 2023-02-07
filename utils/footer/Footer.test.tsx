import { Footer } from "./Footer";
import React from "react";
import { render, fireEvent } from "@testing-library/react";

describe("Footer", () => {
	it("Footer component renders and functions correctly", () => {
		const text = "Back To Top";

		const spy = jest.spyOn(window, "scrollTo");

		const { getByText } = render(<Footer />);

		expect(getByText(text)).toBeDefined();
		fireEvent.click(getByText(text));

		expect(spy).toHaveBeenCalledWith({ top: 0, behavior: "smooth" });
	});
});
