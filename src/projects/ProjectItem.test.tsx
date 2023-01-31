import { render } from "@testing-library/react";
import { ProjectItem } from "./ProjectItem";

jest.mock("next/image", () => ({
	__esModule: true,
	default: jest.fn(() => <div data-testid='mocked-next-image' />),
}));

const metaData = {
	title: "Test Project",
	subTitle: "Test Subtitle",
	images: ["image1.jpg", "image2.jpg"],
	created: 1234,
};

describe("ProjectItem", () => {
	it("renders the correct title and sub title", () => {
		const { getByText } = render(<ProjectItem metaData={metaData} />);

		expect(getByText(metaData.title)).toBeDefined();
		expect(getByText(metaData.subTitle)).toBeDefined();
	});
});
