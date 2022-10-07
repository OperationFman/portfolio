import Image from "next/future/image";
import { AnimationProps } from "../types";

export const ShootingStar = (props: AnimationProps) => {
	const { selectedTheme } = props;

	if (selectedTheme === "light") {
		return <></>;
	}

	//Rework animation from scratch, ideally without animate spring
	return (
		<Image
			src={"/homepage/parallax/desktop/dark/ShootingStar.svg"}
			alt='Shooting Star'
			width='0'
			height='0'
			style={{
				position: "absolute",
				width: "auto",
				height: `100vh`,
				zIndex: -7,
			}}
		/>
	);
};
