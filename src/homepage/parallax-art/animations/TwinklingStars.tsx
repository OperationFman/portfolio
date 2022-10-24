import Image from "next/future/image";
import { AnimationProps } from "../types";

export const TwinklingStars = (props: AnimationProps) => {
	const { selectedTheme, styleOverrides, offSetY } = props;

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
					...styleOverrides,
					zIndex: -7,
					transform: `translateY(${offSetY * 0.8 - 50}px)`,
				}}
			/>
			<Image
				src={"/homepage/parallax/desktop/dark/TwinklingStars2.svg"}
				alt='Twinkling Stars 1'
				width='0'
				height='0'
				style={{
					...styleOverrides,
					zIndex: -7,
					transform: `translateY(${offSetY * 0.84 - 50}px)`,
				}}
			/>
			<Image
				src={"/homepage/parallax/desktop/dark/StaticStars.svg"}
				alt='Stars'
				width='0'
				height='0'
				style={{
					...styleOverrides,
					zIndex: -7,
					transform: `translateY(${offSetY * 0.88 - 20}px)`,
				}}
			/>
		</>
	);
};
