import Image from "next/future/image";
import { AnimationProps } from "../types";

export const TwinklingStars = (props: AnimationProps) => {
	const { selectedTheme, styles, offSetY } = props;

	if (selectedTheme === "light") {
		return <></>;
	}

	return (
		<>
			<Image
				src={"/homepage/parallax/desktop/dark/TwinklingStars1.svg"}
				alt='Twinkling Stars 2'
				width='0'
				height='0'
				style={{
					...styles,
					zIndex: -7,
					transform: `translateY(${offSetY * 0.6 - 50}px)`,
				}}
			/>
			<Image
				src={"/homepage/parallax/desktop/dark/TwinklingStars2.svg"}
				alt='Twinkling Stars 1'
				width='0'
				height='0'
				style={{
					...styles,
					zIndex: -7,
					transform: `translateY(${offSetY * 0.64 - 50}px)`,
				}}
			/>
			<Image
				src={"/homepage/parallax/desktop/dark/StaticStars.svg"}
				alt='Stars'
				width='0'
				height='0'
				style={{
					...styles,
					zIndex: -7,
					transform: `translateY(${offSetY * 0.68 - 20}px)`,
				}}
			/>
		</>
	);
};
