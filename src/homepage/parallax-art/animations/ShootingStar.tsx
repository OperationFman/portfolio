import Image from "next/future/image";
import { AnimationProps } from "../types";

export const ShootingStar = (props: AnimationProps) => {
	const { selectedTheme, offSetY, styleOverrides } = props;

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
