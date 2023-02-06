import { render } from "@testing-library/react";
import { Topic } from "../../types";
import { TutorialCard } from "./TutorialCard";

describe("renders component information", () => {
	const mockCardData = {
		title: "Title",
		link: "link",
		notionPage: "notionPage",
		created: 123,
		thumbnail: "thumbnail.jpg",
		subTitle: "Subtitle",
		topic: Topic.Programming,
	};

	it("renders card data correctly", () => {
		const { getByText } = render(<TutorialCard cardData={mockCardData} />);
		expect(getByText(mockCardData.topic)).toBeDefined();
		expect(getByText(mockCardData.title)).toBeDefined();
		expect(getByText(mockCardData.subTitle)).toBeDefined();
	});
});
