import Image from "next/future/image";

export const Stars = ({
	selectedTheme,
	offSetY,
	styleOverrides,
}: {
	selectedTheme: string;
	styleOverrides: any;
	offSetY: number;
}) => {
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
				src={"/homepage/parallax/desktop/dark/TwinklingStars3.svg"}
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