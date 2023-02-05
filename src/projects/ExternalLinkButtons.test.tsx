import { cleanup, render } from "@testing-library/react";
import { ExternalLinkButtons } from "./ExternalLinkButtons";
import { ProjectMetaData } from "./types";

describe("ExternalLinkButtons component", () => {
	it("renders component", () => {
		const metaData: ProjectMetaData = {
			title: "Test Project",
			subTitle: "Test Subtitle",
			images: ["image1.jpg", "image2.jpg"],
			created: 1234,
			deployedURL: "https://example.com",
			repoURL: "https://github.com/example",
			uxURL: "https://uxdesign.com/example",
		};

		const { getByText } = render(<ExternalLinkButtons metaData={metaData} />);

		expect(getByText("SITE")).toBeDefined();
		expect(getByText("REPO")).toBeDefined();
		expect(getByText("UX")).toBeDefined();
	});
});
