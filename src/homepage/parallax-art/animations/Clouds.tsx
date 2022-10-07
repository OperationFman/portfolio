import Image from "next/future/image";
import { AnimationProps } from "../types";

export const Clouds = (props: AnimationProps) => {
	const { selectedTheme, styles, offSetY } = props;

	return (
		<Image
			src={`/homepage/parallax/desktop/${selectedTheme}/2.svg`}
			alt='Clouds'
			width='0'
			height='0'
			style={{
				...styles,
				zIndex: -7,
				transform: `translateY(${offSetY * -0.2}px)`,
			}}
		/>
	);
};
