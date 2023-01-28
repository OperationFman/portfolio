import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { ContactCard } from "./ContactCard";

describe("ContactCard", () => {
	it("renders the contact method and value", () => {
		const { getByText } = render(
			<ContactCard contactMethod='Email' value='example@example.com'>
				<></>
			</ContactCard>,
		);
		expect(getByText("Email")).toBeDefined();
		expect(getByText("example@example.com")).toBeDefined();
	});

	it("opens link in new tab when clicked", () => {
		window.open = jest.fn();
		const { getByText } = render(
			<ContactCard
				contactMethod='Email'
				value='example@example.com'
				link='https://example.com'>
				<></>
			</ContactCard>,
		);
		fireEvent.click(getByText("Email"));
		expect(window.open).toHaveBeenCalledWith("https://example.com", "_blank");
	});

	it("does not open link when clicked and no link prop is provided", () => {
		window.open = jest.fn();
		const { getByText } = render(
			<ContactCard contactMethod='Email' value='example@example.com'>
				<></>
			</ContactCard>,
		);
		fireEvent.click(getByText("Email"));
		expect(window.open).not.toHaveBeenCalled();
	});
});
