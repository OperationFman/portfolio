import React from "react";
import { render } from "@testing-library/react";
import { PageContainer } from "./PageContainer";

describe("PageContainer", () => {
	it("renders children components", () => {
		const { getByText } = render(
			<PageContainer>
				<div>Child content</div>
			</PageContainer>,
		);
		expect(getByText("Child content")).toBeDefined();
	});
});
