import Image from "next/future/image";

export const ShootingStar = ({
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
		<Image
			src={"/homepage/parallax/desktop/dark/ShootingStar.svg"}
			alt='Shooting Star'
			width='0'
			height='0'
			style={{
				...styleOverrides,
				zIndex: -7,
				transform: `translateY(${offSetY * 0.55}px)`,
			}}
		/>
	);
};
